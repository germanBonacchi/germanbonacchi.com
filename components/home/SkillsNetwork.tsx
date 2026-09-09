"use client";

import { useEffect, useRef, useState } from "react";
import {
  skillEdges,
  skillNodes,
  type SkillNode,
} from "@/content/skillsGraph";
import { useLocale } from "@/lib/locale";
import styles from "./SkillsNetwork.module.css";

interface Point {
  x: number;
  y: number;
}

interface SimNode extends SkillNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  r: number;
}

interface Pulse {
  edgeIndex: number;
  t: number;
  speed: number;
}

const COLORS = {
  line: "rgba(163, 46, 255, 0.28)",
  lineHot: "rgba(0, 200, 255, 0.55)",
  node: "#1e1e1e",
  nodeHot: "#2a1038",
  text: "#f7f8fa",
  accent: "#a32eff",
  cyan: "#00c8ff",
};

function layoutNodes(width: number, height: number): SimNode[] {
  const cx = width * 0.5;
  const cy = height * 0.5;
  const minDim = Math.min(width, height);
  const pad = Math.max(36, minDim * 0.08);

  const byEra: Record<number, SkillNode[]> = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
  };
  for (const n of skillNodes) byEra[n.era]?.push(n);

  // Bloom outward: early skills near center-mid, commerce then AI on outer rings
  const radii = [
    minDim * 0.14,
    minDim * 0.26,
    minDim * 0.36,
    minDim * 0.2,
    minDim * 0.44,
    minDim * 0.54,
  ];

  const out: SimNode[] = [];
  for (let era = 0; era <= 5; era += 1) {
    const group = byEra[era] ?? [];
    const count = Math.max(group.length, 1);
    // Extra ring scale when a ring is crowded
    const crowd = 1 + Math.max(0, count - 4) * 0.06;
    const radius = (radii[era] ?? 40) * crowd;

    group.forEach((node, i) => {
      const slice = (Math.PI * 2) / count;
      const angle =
        -Math.PI / 2 +
        i * slice +
        era * 0.18 +
        (i % 2 === 0 ? -0.08 : 0.08);
      const wobble = ((i % 3) - 1) * radius * 0.05;
      const x = cx + Math.cos(angle) * (radius + wobble);
      const y = cy + Math.sin(angle) * (radius + wobble) * 0.88;
      out.push({
        ...node,
        x,
        y,
        baseX: x,
        baseY: y,
        vx: 0,
        vy: 0,
        r: 7 + node.weight * 3.2,
      });
    });
  }

  // Soft collision so labels/nodes don't stack
  const iterations = 64;
  for (let iter = 0; iter < iterations; iter += 1) {
    for (let i = 0; i < out.length; i += 1) {
      const a = out[i];
      if (!a) continue;
      for (let j = i + 1; j < out.length; j += 1) {
        const b = out[j];
        if (!b) continue;
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.hypot(dx, dy) || 0.01;
        // Extra gap for label room under nodes
        const minDist = a.r + b.r + 28;
        if (dist >= minDist) continue;
        const push = ((minDist - dist) / dist) * 0.5;
        const ox = dx * push * 0.5;
        const oy = dy * push * 0.5;
        a.x -= ox;
        a.y -= oy;
        b.x += ox;
        b.y += oy;
      }
    }

    for (const n of out) {
      n.x = Math.min(width - pad, Math.max(pad, n.x));
      n.y = Math.min(height - pad - 18, Math.max(pad, n.y));
    }
  }

  for (const n of out) {
    n.baseX = n.x;
    n.baseY = n.y;
  }

  return out;
}

function clampNode(n: SimNode, width: number, height: number) {
  const padX = n.r + 8;
  const padY = n.r + 22; // room for label under the node
  n.x = Math.min(width - padX, Math.max(padX, n.x));
  n.y = Math.min(height - padY, Math.max(padX, n.y));
}

function hitTest(nodes: SimNode[], p: Point): SimNode | null {
  for (let i = nodes.length - 1; i >= 0; i -= 1) {
    const n = nodes[i];
    if (!n) continue;
    const dx = p.x - n.x;
    const dy = p.y - n.y;
    if (dx * dx + dy * dy <= (n.r + 10) ** 2) return n;
  }
  return null;
}

export function SkillsNetwork() {
  const { t } = useLocale();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [activeLabel, setActiveLabel] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let nodes = layoutNodes(wrap.clientWidth, wrap.clientHeight);
    let frame = 0;
    let running = true;
    let hoverId: string | null = null;
    let dragId: string | null = null;
    const pulses: Pulse[] = [];
    let pulseTimer = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, wrap.clientWidth);
      const height = Math.max(1, wrap.clientHeight);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const prev = new Map(nodes.map((n) => [n.id, n]));
      nodes = layoutNodes(width, height).map((n) => {
        // Keep drag position if that node is being dragged; otherwise reflow
        if (dragId && dragId === n.id) {
          const old = prev.get(n.id);
          if (!old) return n;
          const kept = {
            ...n,
            x: old.x,
            y: old.y,
            baseX: old.baseX,
            baseY: old.baseY,
          };
          clampNode(kept, width, height);
          kept.baseX = kept.x;
          kept.baseY = kept.y;
          return kept;
        }
        return n;
      });
    };

    const spawnPulse = () => {
      if (skillEdges.length === 0) return;
      pulses.push({
        edgeIndex: Math.floor(Math.random() * skillEdges.length),
        t: 0,
        speed: 0.004 + Math.random() * 0.006,
      });
      if (pulses.length > 18) pulses.shift();
    };

    const neighbors = (id: string) => {
      const set = new Set<string>();
      for (const e of skillEdges) {
        if (e.from === id) set.add(e.to);
        if (e.to === id) set.add(e.from);
      }
      return set;
    };

    const draw = (now: number) => {
      if (!running) return;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.clearRect(0, 0, width, height);

      if (!reduceMotion) {
        const tick = now * 0.001;
        for (const n of nodes) {
          if (dragId === n.id) continue;
          n.x +=
            (n.baseX +
              Math.sin(tick * 0.7 + n.era + n.x * 0.01) * 3 -
              n.x) *
            0.04;
          n.y +=
            (n.baseY +
              Math.cos(tick * 0.6 + n.era + n.y * 0.01) * 3 -
              n.y) *
            0.04;
          clampNode(n, width, height);
        }
      }

      const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
      const hot = hoverId ? neighbors(hoverId) : null;
      if (hoverId) hot?.add(hoverId);

      for (const edge of skillEdges) {
        const a = byId[edge.from];
        const b = byId[edge.to];
        if (!a || !b) continue;
        const isHot =
          Boolean(hot) && hot!.has(edge.from) && hot!.has(edge.to);
        ctx.beginPath();
        ctx.strokeStyle = isHot ? COLORS.lineHot : COLORS.line;
        ctx.lineWidth = isHot ? 1.6 : 1;
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      if (!reduceMotion) {
        pulseTimer += 1;
        if (pulseTimer % 28 === 0) spawnPulse();
        for (let i = pulses.length - 1; i >= 0; i -= 1) {
          const p = pulses[i];
          if (!p) continue;
          p.t += p.speed;
          if (p.t >= 1) {
            pulses.splice(i, 1);
            continue;
          }
          const edge = skillEdges[p.edgeIndex];
          if (!edge) continue;
          const a = byId[edge.from];
          const b = byId[edge.to];
          if (!a || !b) continue;
          const x = a.x + (b.x - a.x) * p.t;
          const y = a.y + (b.y - a.y) * p.t;
          const grad = ctx.createRadialGradient(x, y, 0, x, y, 8);
          grad.addColorStop(0, "rgba(0, 200, 255, 0.95)");
          grad.addColorStop(1, "rgba(0, 200, 255, 0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(x, y, 8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      for (const n of nodes) {
        const isHot = hoverId === n.id || Boolean(hot?.has(n.id));
        ctx.beginPath();
        ctx.fillStyle = isHot ? COLORS.nodeHot : COLORS.node;
        ctx.strokeStyle = isHot ? COLORS.cyan : COLORS.accent;
        ctx.lineWidth = isHot ? 2 : 1.2;
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        if (isHot || n.weight >= 2) {
          ctx.fillStyle = COLORS.text;
          ctx.font = `${isHot ? 700 : 600} ${Math.max(10, Math.min(12, n.r * 0.85))}px "Encode Sans Expanded", system-ui, sans-serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(n.label, n.x, n.y + n.r + 11);
        }
      }

      frame = window.requestAnimationFrame(draw);
    };

    const toLocal = (e: PointerEvent): Point => {
      const rect = canvas.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onPointerMove = (e: PointerEvent) => {
      const p = toLocal(e);
      if (dragId) {
        const n = nodes.find((node) => node.id === dragId);
        if (n) {
          n.x = p.x;
          n.y = p.y;
          clampNode(n, canvas.clientWidth, canvas.clientHeight);
          n.baseX = n.x;
          n.baseY = n.y;
        }
        return;
      }
      const hit = hitTest(nodes, p);
      hoverId = hit?.id ?? null;
      setActiveLabel(hit?.label ?? null);
      canvas.style.cursor = hit ? "grab" : "default";
    };

    const onPointerDown = (e: PointerEvent) => {
      const p = toLocal(e);
      const hit = hitTest(nodes, p);
      if (!hit) return;
      dragId = hit.id;
      hoverId = hit.id;
      setActiveLabel(hit.label);
      canvas.setPointerCapture(e.pointerId);
      canvas.style.cursor = "grabbing";
    };

    const onPointerUp = (e: PointerEvent) => {
      if (dragId) {
        const n = nodes.find((node) => node.id === dragId);
        if (n) {
          clampNode(n, canvas.clientWidth, canvas.clientHeight);
          n.baseX = n.x;
          n.baseY = n.y;
        }
      }
      dragId = null;
      canvas.style.cursor = hoverId ? "grab" : "default";
      try {
        canvas.releasePointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
    };

    const onLeave = () => {
      if (!dragId) {
        hoverId = null;
        setActiveLabel(null);
        canvas.style.cursor = "default";
      }
    };

    resize();
    for (let i = 0; i < 6; i += 1) spawnPulse();
    frame = window.requestAnimationFrame(draw);

    const ro = new ResizeObserver(() => resize());
    ro.observe(wrap);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      running = false;
      window.cancelAnimationFrame(frame);
      ro.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={wrapRef} className={styles.wrap}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        role="img"
        aria-label={t.skills.networkNote}
      />
      {activeLabel ? (
        <p className={styles.caption} aria-live="polite">
          {activeLabel}
        </p>
      ) : (
        <p className={styles.hint}>{t.skills.dragHint}</p>
      )}
    </div>
  );
}
