"use client";

import { useEffect, useRef } from "react";
import styles from "./ParticlesBackground.module.css";

interface Node {
  x: number;
  y: number;
  kind: "joint" | "hub" | "mark";
}

interface Seg {
  a: number;
  b: number;
  drawn: number;
  fade: number;
  speed: number;
  delay: number;
  hold: number;
  phase: "in" | "hold" | "out";
}

interface Callout {
  node: number;
  life: number;
  t: number;
}

interface FlowBox {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  drawn: number;
  write: number;
  fade: number;
  delay: number;
  hold: number;
  speed: number;
  writeSpeed: number;
  wobble: number;
  phase: "in" | "hold" | "out";
}

interface PencilNote {
  text: string;
  x: number;
  y: number;
  size: number;
  angle: number;
  drawn: number;
  write: number;
  fade: number;
  delay: number;
  hold: number;
  speed: number;
  underline: boolean;
  wobble: number;
  phase: "in" | "hold" | "out";
}

type GlyphKind =
  | "db"
  | "layers"
  | "cloud"
  | "hex"
  | "dim"
  | "bubble"
  | "elev"
  | "section"
  | "bracket";

interface Glyph {
  kind: GlyphKind;
  x: number;
  y: number;
  s: number;
  label: string;
  drawn: number;
  fade: number;
  delay: number;
  hold: number;
  speed: number;
  seed: number;
  phase: "in" | "hold" | "out";
}

interface Place {
  x: number;
  y: number;
  r: number;
}

const NOTES = [
  "VTEX",
  "ARQ",
  "SISTEMA",
  "IO",
  "FastStore",
  "Checkout",
  "TL",
  "Commerce",
  "API",
  "Integración",
  "BFF",
  "CDN",
  "SSR",
  "Edge",
  "SLA",
  "JWT",
];

const FLOW_TITLES = [
  "Storefront",
  "BFF",
  "Checkout",
  "OMS",
  "Search",
  "Payments",
  "Catalog",
  "Middleware",
  "Inventory",
  "Pricing",
  "Auth",
  "Events",
];

const GLYPH_LABELS: Record<GlyphKind, string[]> = {
  db: ["Master Data", "Orders DB", "Catalog DB", "Redis"],
  layers: ["L1 CDN", "L2 App", "L3 Data", "Edge"],
  cloud: ["API Gateway", "IO Apps", "Webhooks", "Workers"],
  hex: ["Service", "Module", "Block", "App"],
  dim: ["120ms", "p95", "RPS", "3 zones"],
  bubble: ["A", "B", "C", "1", "2", "3"],
  elev: ["+0.00", "+1.0", "v2", "rev"],
  section: ["A-A", "B-B", "CUT"],
  bracket: ["scope", "bound", "limit"],
};

type ChainStep =
  | { type: "flow"; title: string }
  | { type: "glyph"; kind: GlyphKind; label: string };

/** Front → middle → back recipes (only some spawn as full chains). */
const ARCH_CHAINS: Array<{ steps: ChainStep[]; satellites: string[] }> = [
  {
    steps: [
      { type: "flow", title: "Storefront" },
      { type: "flow", title: "BFF" },
      { type: "glyph", kind: "cloud", label: "API Gateway" },
      { type: "glyph", kind: "db", label: "Orders DB" },
    ],
    satellites: ["SSR", "CDN", "JWT"],
  },
  {
    steps: [
      { type: "flow", title: "FastStore" },
      { type: "glyph", kind: "layers", label: "Edge" },
      { type: "flow", title: "Checkout" },
      { type: "glyph", kind: "db", label: "Master Data" },
    ],
    satellites: ["IO", "SLA", "API"],
  },
  {
    steps: [
      { type: "flow", title: "Search" },
      { type: "flow", title: "Catalog" },
      { type: "glyph", kind: "hex", label: "Service" },
      { type: "glyph", kind: "db", label: "Catalog DB" },
    ],
    satellites: ["RPS", "CDN", "ARQ"],
  },
  {
    steps: [
      { type: "flow", title: "Auth" },
      { type: "glyph", kind: "cloud", label: "Workers" },
      { type: "flow", title: "Middleware" },
      { type: "glyph", kind: "db", label: "Redis" },
    ],
    satellites: ["JWT", "Edge", "TL"],
  },
  {
    steps: [
      { type: "flow", title: "Payments" },
      { type: "flow", title: "OMS" },
      { type: "glyph", kind: "layers", label: "L3 Data" },
      { type: "glyph", kind: "db", label: "Orders DB" },
    ],
    satellites: ["p95", "API", "SISTEMA"],
  },
];

/**
 * Architecture blueprint that densifies and evolves over long periods
 * instead of short blink loops.
 */
export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pencilFamily =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--font-pencil")
        .trim() || '"Architects Daughter", cursive';
    const pencilFont = (size: number) => `${size}px ${pencilFamily}`;

    let frame = 0;
    let running = true;
    let nodes: Node[] = [];
    let segs: Seg[] = [];
    let callouts: Callout[] = [];
    let flows: FlowBox[] = [];
    let notes: PencilNote[] = [];
    let glyphs: Glyph[] = [];
    let placed: Place[] = [];
    let calloutCooldown = 50;
    let spawnCooldown = 50;
    let chainCooldown = 200;
    let grid = 28;
    let tick = 0;
    let canvasW = 1;
    let canvasH = 1;
    let pad = 40;

    const measure = () => {
      const parent =
        canvas.parentElement ?? canvas.closest("section") ?? document.body;
      const rect = parent.getBoundingClientRect();
      return {
        width: Math.max(1, Math.floor(rect.width)),
        height: Math.max(1, Math.floor(rect.height)),
      };
    };

    const snap = (v: number) => Math.round(v / grid) * grid;

    const inSafeCenter = (x: number, y: number) => {
      const cx = canvasW * 0.5;
      const cy = canvasH * 0.42;
      return Math.hypot(x - cx, y - cy) < Math.min(canvasW, canvasH) * 0.26;
    };

    const overlaps = (x: number, y: number, r: number) =>
      placed.some((p) => Math.hypot(p.x - x, p.y - y) < p.r + r);

    const claim = (x: number, y: number, r: number) => {
      placed.push({ x, y, r });
    };

    const releaseNear = (x: number, y: number, r: number) => {
      placed = placed.filter((p) => Math.hypot(p.x - x, p.y - y) > r * 0.55);
    };

    const findSpot = (r: number, maxTries = 40) => {
      for (let i = 0; i < maxTries; i += 1) {
        const x = snap(
          pad + Math.random() * Math.max(1, canvasW - pad * 2),
        );
        const y = snap(
          pad + Math.random() * Math.max(1, canvasH - pad * 2),
        );
        if (inSafeCenter(x, y)) continue;
        if (overlaps(x, y, r)) continue;
        return { x, y };
      }
      return null;
    };

    /** Holds long enough to read, short enough to feel the plan evolve. */
    const longHold = () => 280 + Math.floor(Math.random() * 420);
    const mediumHold = () => 160 + Math.floor(Math.random() * 280);

    const sketchLine = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      seed: number,
      alpha: number,
      width = 1.15,
    ) => {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const len = Math.hypot(dx, dy) || 1;
      const steps = Math.max(3, Math.floor(len / 8));
      const nx = -dy / len;
      const ny = dx / len;

      ctx.beginPath();
      ctx.strokeStyle = `rgba(210, 235, 250, ${alpha})`;
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.moveTo(x1, y1);
      for (let i = 1; i <= steps; i += 1) {
        const t = i / steps;
        const wob =
          Math.sin(seed * 12.7 + i * 1.9 + tick * 0.004) * 0.45 +
          Math.sin(seed * 3.1 + i * 4.2) * 0.28;
        ctx.lineTo(x1 + dx * t + nx * wob, y1 + dy * t + ny * wob);
      }
      ctx.stroke();
    };

    const pencilText = (
      text: string,
      x: number,
      y: number,
      size: number,
      alpha: number,
      seed: number,
    ) => {
      ctx.font = pencilFont(size);
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      const jx = Math.sin(seed * 4 + tick * 0.008) * 0.3;
      const jy = Math.cos(seed * 2.5 + tick * 0.006) * 0.2;
      ctx.fillStyle = `rgba(186, 230, 253, ${alpha * 0.45})`;
      ctx.fillText(text, x + jx, y + jy);
      ctx.strokeStyle = `rgba(224, 242, 254, ${alpha * 0.72})`;
      ctx.lineWidth = Math.max(0.55, size * 0.04);
      ctx.lineJoin = "round";
      ctx.strokeText(text, x + jx * 0.5, y + jy * 0.5);
    };

    const pickLabel = (kind: GlyphKind) => {
      const list = GLYPH_LABELS[kind];
      return list[Math.floor(Math.random() * list.length)] ?? kind;
    };

    const era = () => {
      // densifies over ~2–3 minutes total (eras ~25s)
      const seconds = tick / 60;
      return Math.min(5, Math.floor(seconds / 25));
    };

    const caps = () => {
      const e = era();
      return {
        flows: reduceMotion ? 4 : 7 + e * 2,
        notes: reduceMotion ? 5 : 10 + e * 3,
        glyphs: reduceMotion ? 4 : 8 + e * 3,
        segsExtra: e,
      };
    };

    const addFlow = (
      delay = 0,
      forced?: { x: number; y: number; title: string; hold?: number },
    ) => {
      const title =
        forced?.title ??
        FLOW_TITLES[Math.floor(Math.random() * FLOW_TITLES.length)] ??
        "Module";
      const w = grid * (2.4 + Math.floor(Math.random() * 2.2));
      const h = grid * (1.35 + Math.random() * 0.5);
      let cx = forced?.x;
      let cy = forced?.y;
      if (cx == null || cy == null) {
        const spot = findSpot(Math.max(w, h) * 0.48);
        if (!spot) return null;
        cx = spot.x;
        cy = spot.y;
      } else if (overlaps(cx, cy, Math.max(w, h) * 0.42)) {
        return null;
      }
      claim(cx, cy, Math.max(w, h) * 0.48);
      const box: FlowBox = {
        x: cx - w / 2,
        y: cy - h / 2,
        w,
        h,
        title,
        drawn: reduceMotion ? 1 : 0,
        write: reduceMotion ? 1 : 0,
        fade: 1,
        delay,
        hold: forced?.hold ?? longHold(),
        speed: 0.014 + Math.random() * 0.012,
        writeSpeed: 0.02 + Math.random() * 0.014,
        wobble: Math.random() * 100,
        phase: "in",
      };
      flows.push(box);
      return box;
    };

    const addNote = (
      delay = 0,
      forced?: { x: number; y: number; text: string; hold?: number },
    ) => {
      const text =
        forced?.text ??
        NOTES[Math.floor(Math.random() * NOTES.length)] ??
        "ARQ";
      const size = 11 + Math.floor(Math.random() * 6);
      let x = forced?.x;
      let y = forced?.y;
      if (x == null || y == null) {
        const spot = findSpot(size * 1.7);
        if (!spot) return false;
        x = spot.x;
        y = spot.y;
      } else if (overlaps(x, y, size * 1.4)) {
        return false;
      }
      claim(x, y, size * 1.7);
      notes.push({
        text,
        x,
        y,
        size,
        angle: ((Math.random() - 0.5) * Math.PI) / 9,
        drawn: reduceMotion ? 1 : 0,
        write: reduceMotion ? 1 : 0,
        fade: 1,
        delay,
        hold: forced?.hold ?? longHold(),
        speed: 0.016 + Math.random() * 0.014,
        underline:
          text === "VTEX" || text === "ARQ" || text === "SISTEMA",
        wobble: Math.random() * 100,
        phase: "in",
      });
      return true;
    };

    const addGlyph = (
      delay = 0,
      forced?: {
        x: number;
        y: number;
        kind: GlyphKind;
        label: string;
        hold?: number;
      },
    ) => {
      const kinds: GlyphKind[] = [
        "db",
        "layers",
        "cloud",
        "hex",
        "dim",
        "bubble",
        "elev",
        "section",
        "bracket",
      ];
      const kind =
        forced?.kind ??
        kinds[Math.floor(Math.random() * kinds.length)] ??
        "hex";
      const s = grid * (0.9 + Math.random() * 1.15);
      let x = forced?.x;
      let y = forced?.y;
      if (x == null || y == null) {
        const spot = findSpot(s * 0.7);
        if (!spot) return null;
        x = spot.x;
        y = spot.y;
      } else if (overlaps(x, y, s * 0.6)) {
        return null;
      }
      claim(x, y, s * 0.7);
      const g: Glyph = {
        kind,
        x,
        y,
        s,
        label: forced?.label ?? pickLabel(kind),
        drawn: reduceMotion ? 1 : 0,
        fade: 1,
        delay,
        hold: forced?.hold ?? mediumHold() + Math.floor(Math.random() * 200),
        speed: 0.012 + Math.random() * 0.012,
        seed: Math.random() * 100,
        phase: "in",
      };
      glyphs.push(g);
      return g;
    };

    const linkElbow = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      delay: number,
      hold: number,
    ) => {
      const mid: Node = { x: snap((x1 + x2) / 2), y: snap(y1), kind: "mark" };
      const mid2: Node = { x: mid.x, y: snap(y2), kind: "mark" };
      const i0 = nodes.length;
      nodes.push(mid, mid2);
      const from: Node = { x: x1, y: y1, kind: "joint" };
      const to: Node = { x: x2, y: y2, kind: "hub" };
      const iFrom = nodes.length;
      nodes.push(from, to);
      segs.push(
        {
          a: iFrom,
          b: i0,
          drawn: 0,
          fade: 1,
          speed: 0.012,
          delay,
          hold,
          phase: "in",
        },
        {
          a: i0,
          b: i0 + 1,
          drawn: 0,
          fade: 1,
          speed: 0.012,
          delay: delay + 18,
          hold,
          phase: "in",
        },
        {
          a: i0 + 1,
          b: iFrom + 1,
          drawn: 0,
          fade: 1,
          speed: 0.012,
          delay: delay + 36,
          hold,
          phase: "in",
        },
      );
    };

    const connectFlows = () => {
      if (flows.length < 2) return;
      const a = flows[flows.length - 2];
      const b = flows[flows.length - 1];
      if (!a || !b) return;
      const ax = a.x + a.w;
      const ay = a.y + a.h / 2;
      const bx = b.x;
      const by = b.y + b.h / 2;
      if (Math.hypot(ax - bx, ay - by) > grid * 10) return;
      linkElbow(ax, ay, bx, by, 40, mediumHold());
    };

    /** Places a front → mid → back chain; satellites orbit the middle. */
    const addArchChain = (baseDelay = 0) => {
      if (reduceMotion) return false;
      const recipe =
        ARCH_CHAINS[Math.floor(Math.random() * ARCH_CHAINS.length)];
      if (!recipe) return false;

      const stepGap = grid * (3.6 + Math.random() * 1.2);
      const chainW = stepGap * (recipe.steps.length - 1);
      const startX = snap(
        pad + grid * 2 + Math.random() * Math.max(grid, canvasW - pad * 2 - chainW - grid * 4),
      );
      let startY = snap(
        pad + grid * 2 + Math.random() * Math.max(grid, canvasH - pad * 4),
      );
      if (inSafeCenter(startX + chainW / 2, startY)) {
        startY = snap(startY < canvasH * 0.5 ? canvasH * 0.72 : canvasH * 0.22);
      }

      const hold = longHold() + 180;
      const centers: Array<{ x: number; y: number }> = [];

      for (let i = 0; i < recipe.steps.length; i += 1) {
        const step = recipe.steps[i];
        if (!step) continue;
        const x = snap(startX + i * stepGap);
        const y = snap(startY + ((i % 2) * 2 - 1) * grid * (0.35 + Math.random() * 0.5));
        const delay = baseDelay + i * 35;

        if (step.type === "flow") {
          const box = addFlow(delay, { x, y, title: step.title, hold });
          if (!box) continue;
          centers.push({ x: box.x + box.w / 2, y: box.y + box.h / 2 });
        } else {
          const g = addGlyph(delay, {
            x,
            y,
            kind: step.kind,
            label: step.label,
            hold,
          });
          if (!g) continue;
          centers.push({ x: g.x, y: g.y });
        }
      }

      if (centers.length < 2) return false;

      for (let i = 0; i < centers.length - 1; i += 1) {
        const a = centers[i];
        const b = centers[i + 1];
        if (!a || !b) continue;
        linkElbow(
          a.x,
          a.y,
          b.x,
          b.y,
          baseDelay + 50 + i * 40,
          hold,
        );
      }

      // Blueprint “halo” around the middle hop(s)
      const mid = centers[Math.floor(centers.length / 2)];
      if (mid) {
        const ring = [
          { dx: -grid * 1.6, dy: -grid * 1.4 },
          { dx: grid * 1.7, dy: -grid * 1.2 },
          { dx: -grid * 1.8, dy: grid * 1.3 },
          { dx: grid * 1.5, dy: grid * 1.5 },
        ];
        for (let i = 0; i < recipe.satellites.length; i += 1) {
          const off = ring[i % ring.length];
          if (!off) continue;
          addNote(baseDelay + 90 + i * 28, {
            x: snap(mid.x + off.dx),
            y: snap(mid.y + off.dy),
            text: recipe.satellites[i] ?? "ARQ",
            hold,
          });
        }
        // small bracket / dim around the mid tier
        addGlyph(baseDelay + 110, {
          x: snap(mid.x),
          y: snap(mid.y - grid * 2.2),
          kind: Math.random() > 0.5 ? "bracket" : "dim",
          label: Math.random() > 0.5 ? "scope" : "p95",
          hold,
        });
      }

      return true;
    };

    const seed = (width: number, height: number) => {
      canvasW = width;
      canvasH = height;
      grid = Math.max(24, Math.min(34, Math.floor(Math.min(width, height) / 24)));
      pad = grid * 1.35;
      nodes = [];
      segs = [];
      callouts = [];
      flows = [];
      notes = [];
      glyphs = [];
      placed = [];
      tick = 0;
      spawnCooldown = 20;
      chainCooldown = 160;

      const cols = Math.floor((width - pad * 2) / grid);
      const rows = Math.floor((height - pad * 2) / grid);
      const count = reduceMotion
        ? 18
        : Math.min(52, Math.max(28, Math.floor((cols * rows) / 22)));

      const used = new Set<string>();
      let guard = 0;
      while (nodes.length < count && guard < count * 12) {
        guard += 1;
        const c = 1 + Math.floor(Math.random() * Math.max(1, cols - 1));
        const r = 1 + Math.floor(Math.random() * Math.max(1, rows - 1));
        const key = `${c},${r}`;
        if (used.has(key)) continue;
        used.add(key);
        const x = pad + c * grid;
        const y = pad + r * grid;
        if (inSafeCenter(x, y) && Math.random() > 0.25) continue;
        const roll = Math.random();
        nodes.push({
          x,
          y,
          kind: roll > 0.86 ? "hub" : roll > 0.6 ? "mark" : "joint",
        });
      }

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        if (!a) continue;
        const near: Array<{ j: number; d: number }> = [];
        for (let j = 0; j < nodes.length; j += 1) {
          if (i === j) continue;
          const b = nodes[j];
          if (!b) continue;
          const dx = Math.abs(a.x - b.x);
          const dy = Math.abs(a.y - b.y);
          const aligned =
            dx < grid * 0.25 ||
            dy < grid * 0.25 ||
            Math.abs(dx - dy) < grid * 0.4;
          if (!aligned) continue;
          const d = Math.hypot(dx, dy);
          if (d > grid * 6.5 || d < grid * 0.75) continue;
          near.push({ j, d });
        }
        near.sort((u, v) => u.d - v.d);
        const links = a.kind === "hub" ? 3 : 2;
        for (const n of near.slice(0, links)) {
          const exists = segs.some(
            (s) =>
              (s.a === i && s.b === n.j) || (s.a === n.j && s.b === i),
          );
          if (exists) continue;
          segs.push({
            a: i,
            b: n.j,
            drawn: reduceMotion ? 1 : 0,
            fade: 1,
            speed: 0.01 + Math.random() * 0.012,
            delay: Math.floor(Math.random() * 80),
            hold: mediumHold(),
            phase: "in",
          });
        }
      }

      // Architecture chains first (front → mid → back), then loose pieces
      addArchChain(20);
      if (!reduceMotion && Math.random() > 0.35) addArchChain(140);

      const startFlows = reduceMotion ? 3 : 4;
      const startNotes = reduceMotion ? 4 : 5;
      const startGlyphs = reduceMotion ? 3 : 4;
      for (let i = 0; i < startFlows; i += 1) {
        if (addFlow(80 + i * 30)) connectFlows();
      }
      for (let i = 0; i < startNotes; i += 1) addNote(100 + i * 28);
      for (let i = 0; i < startGlyphs; i += 1) addGlyph(110 + i * 32);
    };

    const advanceLife = (item: {
      delay: number;
      drawn: number;
      fade: number;
      hold: number;
      speed: number;
      phase: "in" | "hold" | "out";
    }) => {
      if (reduceMotion) {
        item.drawn = 1;
        item.fade = 1;
        item.phase = "hold";
        return "hold" as const;
      }
      if (item.delay > 0) {
        item.delay -= 1;
        return "wait" as const;
      }
      if (item.phase === "in") {
        item.drawn = Math.min(1, item.drawn + item.speed);
        item.fade = 1;
        if (item.drawn >= 1) item.phase = "hold";
        return "in" as const;
      }
      if (item.phase === "hold") {
        item.hold -= 1;
        if (item.hold <= 0) item.phase = "out";
        return "hold" as const;
      }
      item.fade = Math.max(0, item.fade - item.speed * 0.85);
      if (item.fade <= 0) return "done" as const;
      return "out" as const;
    };

    const maybeSpawn = () => {
      if (reduceMotion) return;
      spawnCooldown -= 1;
      chainCooldown -= 1;

      if (chainCooldown <= 0) {
        chainCooldown = 220 + Math.floor(Math.random() * 180);
        if (Math.random() < 0.55) addArchChain(0);
      }

      if (spawnCooldown > 0) return;
      spawnCooldown = 28 + Math.floor(Math.random() * 40);
      const c = caps();
      const bursts = Math.random() < 0.55 ? 3 : 2;
      for (let b = 0; b < bursts; b += 1) {
        const roll = Math.random();
        if (roll < 0.34 && flows.length < c.flows) {
          if (addFlow(0)) connectFlows();
        } else if (roll < 0.62 && notes.length < c.notes) {
          addNote(0);
        } else if (glyphs.length < c.glyphs) {
          addGlyph(0);
        } else if (notes.length < c.notes) {
          addNote(0);
        } else if (flows.length < c.flows) {
          if (addFlow(0)) connectFlows();
        }
      }
    };

    const drawGrid = (width: number, height: number) => {
      for (let x = 0; x <= width; x += grid) {
        const major = Math.round(x / grid) % 5 === 0;
        ctx.beginPath();
        ctx.strokeStyle = major
          ? "rgba(125, 211, 252, 0.13)"
          : "rgba(125, 211, 252, 0.05)";
        ctx.lineWidth = major ? 1 : 0.5;
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y += grid) {
        const major = Math.round(y / grid) % 5 === 0;
        ctx.beginPath();
        ctx.strokeStyle = major
          ? "rgba(125, 211, 252, 0.13)"
          : "rgba(125, 211, 252, 0.05)";
        ctx.lineWidth = major ? 1 : 0.5;
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(width, y + 0.5);
        ctx.stroke();
      }

      // Sheet frame + corner marks
      const m = grid * 0.7;
      ctx.strokeStyle = "rgba(186, 230, 253, 0.18)";
      ctx.lineWidth = 1;
      ctx.strokeRect(m, m, width - m * 2, height - m * 2);
      const corners = [
        [m, m],
        [width - m, m],
        [m, height - m],
        [width - m, height - m],
      ] as const;
      for (const [cx, cy] of corners) {
        sketchLine(cx - 8, cy, cx + 8, cy, cx * 0.01, 0.28, 1);
        sketchLine(cx, cy - 8, cx, cy + 8, cy * 0.01, 0.28, 1);
      }
    };

    const drawCross = (x: number, y: number, size: number, alpha: number) => {
      sketchLine(x - size, y, x + size, y, x * 0.01 + y, alpha, 0.85);
      sketchLine(x, y - size, x, y + size, x * 0.02 + y, alpha, 0.85);
    };

    const drawGlyph = (g: Glyph) => {
      const a = (g.drawn < 1 ? 0.7 : 0.4) * g.fade;
      if (a <= 0.02) return;
      const { x, y, s, seed, kind, label } = g;
      const u = g.drawn;

      if (kind === "db") {
        const w = s * 0.9;
        const h = s * 0.55;
        sketchLine(x - w / 2, y - h / 2, x + w / 2, y - h / 2, seed, a * u);
        sketchLine(x - w / 2, y + h / 2, x + w / 2, y + h / 2, seed + 1, a * u);
        sketchLine(x - w / 2, y - h / 2, x - w / 2, y + h / 2, seed + 2, a * u);
        sketchLine(x + w / 2, y - h / 2, x + w / 2, y + h / 2, seed + 3, a * u);
        // ellipse lids
        ctx.beginPath();
        ctx.strokeStyle = `rgba(186, 230, 253, ${a * u})`;
        ctx.lineWidth = 1;
        ctx.ellipse(x, y - h / 2, w / 2, h * 0.18, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.ellipse(x, y + h / 2, w / 2, h * 0.18, 0, 0, Math.PI);
        ctx.stroke();
      } else if (kind === "layers") {
        for (let i = 0; i < 3; i += 1) {
          const yy = y - s * 0.35 + i * s * 0.28;
          const ww = s * (0.9 - i * 0.08);
          if (u < i / 3) break;
          sketchLine(x - ww / 2, yy, x + ww / 2, yy, seed + i, a, 1.1);
          sketchLine(
            x - ww / 2,
            yy,
            x - ww / 2,
            yy + s * 0.16,
            seed + i + 4,
            a * 0.8,
          );
          sketchLine(
            x + ww / 2,
            yy,
            x + ww / 2,
            yy + s * 0.16,
            seed + i + 5,
            a * 0.8,
          );
        }
      } else if (kind === "cloud") {
        const r = s * 0.28;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(186, 230, 253, ${a * u})`;
        ctx.lineWidth = 1.1;
        ctx.arc(x - r * 0.7, y, r * 0.7, 0, Math.PI * 2);
        ctx.arc(x + r * 0.5, y - r * 0.15, r * 0.85, 0, Math.PI * 2);
        ctx.arc(x - r * 0.1, y + r * 0.2, r * 0.65, 0, Math.PI * 2);
        ctx.stroke();
      } else if (kind === "hex") {
        const r = s * 0.42 * u;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(186, 230, 253, ${a})`;
        ctx.lineWidth = 1.1;
        for (let i = 0; i <= 6; i += 1) {
          const ang = (Math.PI / 3) * i - Math.PI / 6;
          const px = x + Math.cos(ang) * r;
          const py = y + Math.sin(ang) * r;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      } else if (kind === "dim") {
        const len = s * 1.2 * u;
        sketchLine(x - len / 2, y, x + len / 2, y, seed, a, 0.95);
        sketchLine(
          x - len / 2,
          y - 5,
          x - len / 2,
          y + 5,
          seed + 1,
          a,
          0.9,
        );
        sketchLine(
          x + len / 2,
          y - 5,
          x + len / 2,
          y + 5,
          seed + 2,
          a,
          0.9,
        );
      } else if (kind === "bubble") {
        const r = s * 0.28 * u;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(186, 230, 253, ${a})`;
        ctx.lineWidth = 1.15;
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.stroke();
      } else if (kind === "elev") {
        sketchLine(x, y - s * 0.4 * u, x, y + s * 0.4 * u, seed, a);
        sketchLine(
          x - s * 0.2,
          y - s * 0.4 * u,
          x + s * 0.2,
          y - s * 0.4 * u,
          seed + 1,
          a,
        );
      } else if (kind === "section") {
        sketchLine(
          x - s * 0.5 * u,
          y,
          x + s * 0.5 * u,
          y,
          seed,
          a,
          1.2,
        );
        ctx.beginPath();
        ctx.fillStyle = `rgba(186, 230, 253, ${a * 0.7})`;
        ctx.moveTo(x - s * 0.5 * u, y);
        ctx.lineTo(x - s * 0.35 * u, y - 5);
        ctx.lineTo(x - s * 0.35 * u, y + 5);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(x + s * 0.5 * u, y);
        ctx.lineTo(x + s * 0.35 * u, y - 5);
        ctx.lineTo(x + s * 0.35 * u, y + 5);
        ctx.fill();
      } else if (kind === "bracket") {
        const w = s * 0.7 * u;
        const h = s * 0.55;
        sketchLine(x - w / 2, y - h / 2, x - w / 2 + 8, y - h / 2, seed, a);
        sketchLine(x - w / 2, y - h / 2, x - w / 2, y + h / 2, seed + 1, a);
        sketchLine(x - w / 2, y + h / 2, x - w / 2 + 8, y + h / 2, seed + 2, a);
        sketchLine(x + w / 2, y - h / 2, x + w / 2 - 8, y - h / 2, seed + 3, a);
        sketchLine(x + w / 2, y - h / 2, x + w / 2, y + h / 2, seed + 4, a);
        sketchLine(x + w / 2, y + h / 2, x + w / 2 - 8, y + h / 2, seed + 5, a);
      }

      if (g.drawn > 0.55 && kind !== "bubble") {
        const size = Math.max(9, Math.min(12, s * 0.22));
        ctx.font = pencilFont(size);
        const tw = ctx.measureText(label).width;
        pencilText(
          label,
          x - tw / 2,
          y + s * 0.55,
          size,
          0.35 + g.drawn * 0.4 * g.fade,
          seed,
        );
      } else if (kind === "bubble" && g.drawn > 0.5) {
        const size = Math.max(10, s * 0.28);
        ctx.font = pencilFont(size);
        const tw = ctx.measureText(label).width;
        pencilText(label, x - tw / 2, y, size, 0.55 * g.fade, seed);
      }
    };

    const maybeCallout = () => {
      if (reduceMotion || nodes.length === 0) return;
      calloutCooldown -= 1;
      if (calloutCooldown > 0) return;
      calloutCooldown = 40 + Math.floor(Math.random() * 70);
      const candidates = nodes
        .map((n, i) => ({ n, i }))
        .filter((x) => x.n.kind === "hub" || x.n.kind === "joint");
      const pick = candidates[Math.floor(Math.random() * candidates.length)];
      if (!pick) return;
      callouts.push({ node: pick.i, t: 0, life: 1.2 + Math.random() * 0.8 });
      if (callouts.length > 4) callouts.shift();
    };

    const resize = () => {
      const { width, height } = measure();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed(width, height);
    };

    const draw = () => {
      if (!running) return;
      const width = canvas.clientWidth || 1;
      const height = canvas.clientHeight || 1;
      tick += 1;

      ctx.fillStyle = "#0b3d5c";
      ctx.fillRect(0, 0, width, height);
      const wash = ctx.createRadialGradient(
        width * 0.5,
        height * 0.4,
        40,
        width * 0.5,
        height * 0.45,
        Math.max(width, height) * 0.72,
      );
      wash.addColorStop(0, "rgba(14, 74, 110, 0.5)");
      wash.addColorStop(1, "rgba(7, 38, 58, 0.92)");
      ctx.fillStyle = wash;
      ctx.fillRect(0, 0, width, height);

      drawGrid(width, height);
      maybeSpawn();

      for (const s of segs) {
        const st = advanceLife(s);
        if (st === "done") {
          s.drawn = 0;
          s.fade = 1;
          s.phase = "in";
          s.delay = 20 + Math.floor(Math.random() * 90);
          s.hold = mediumHold();
        }
      }

      for (let i = flows.length - 1; i >= 0; i -= 1) {
        const box = flows[i];
        if (!box) continue;
        if (
          (box.phase === "in" || box.phase === "hold") &&
          box.drawn >= 1 &&
          box.write < 1
        ) {
          if (!reduceMotion) {
            box.write = Math.min(1, box.write + box.writeSpeed);
          } else {
            box.write = 1;
          }
        }
        const st = advanceLife(box);
        if (st === "done") {
          releaseNear(box.x + box.w / 2, box.y + box.h / 2, Math.max(box.w, box.h) * 0.48);
          flows.splice(i, 1);
          continue;
        }
        if (box.drawn <= 0 && box.phase === "in" && box.delay > 0) continue;
        if (box.fade <= 0) continue;

        const alpha = (box.drawn < 1 ? 0.72 : 0.4) * box.fade;
        const edges = [
          [box.x, box.y, box.x + box.w, box.y],
          [box.x + box.w, box.y, box.x + box.w, box.y + box.h],
          [box.x + box.w, box.y + box.h, box.x, box.y + box.h],
          [box.x, box.y + box.h, box.x, box.y],
        ] as const;
        const perim = (box.w + box.h) * 2;
        let remaining = perim * box.drawn;
        for (let ei = 0; ei < edges.length; ei += 1) {
          const e = edges[ei];
          if (!e || remaining <= 0) break;
          const el = ei % 2 === 0 ? box.w : box.h;
          const t = Math.min(1, remaining / el);
          sketchLine(
            e[0],
            e[1],
            e[0] + (e[2] - e[0]) * t,
            e[1] + (e[3] - e[1]) * t,
            box.wobble + ei,
            alpha,
            box.drawn < 1 ? 1.3 : 1,
          );
          remaining -= el;
        }
        if (box.write > 0) {
          const chars = Math.max(1, Math.ceil(box.title.length * box.write));
          const label = box.title.slice(0, chars);
          const size = Math.max(11, Math.min(15, box.h * 0.4));
          ctx.save();
          ctx.translate(box.x + box.w / 2, box.y + box.h / 2);
          ctx.rotate(((box.wobble % 7) - 3.5) * 0.006);
          ctx.font = pencilFont(size);
          const tw = ctx.measureText(label).width;
          pencilText(
            label,
            -tw / 2,
            0,
            size,
            (0.45 + box.write * 0.4) * box.fade,
            box.wobble,
          );
          ctx.restore();
        }
      }

      for (const s of segs) {
        const a = nodes[s.a];
        const b = nodes[s.b];
        if (!a || !b || s.drawn <= 0 || s.fade <= 0) continue;
        const x = a.x + (b.x - a.x) * s.drawn;
        const y = a.y + (b.y - a.y) * s.drawn;
        sketchLine(
          a.x,
          a.y,
          x,
          y,
          a.x * 0.01 + b.y * 0.02,
          (s.drawn < 1 ? 0.6 : 0.2) * s.fade,
          s.drawn < 1 ? 1.25 : 0.9,
        );
        if (s.drawn < 1) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(224, 242, 254, ${0.85 * s.fade})`;
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      for (let i = glyphs.length - 1; i >= 0; i -= 1) {
        const g = glyphs[i];
        if (!g) continue;
        const st = advanceLife(g);
        if (st === "done") {
          releaseNear(g.x, g.y, g.s * 0.7);
          glyphs.splice(i, 1);
          continue;
        }
        if (g.delay > 0 && g.drawn <= 0) continue;
        drawGlyph(g);
      }

      for (let i = notes.length - 1; i >= 0; i -= 1) {
        const note = notes[i];
        if (!note) continue;
        const st = advanceLife(note);
        if (note.phase === "in" || note.phase === "hold") {
          if (note.delay <= 0 && note.write < note.drawn) {
            note.write = Math.min(note.drawn, note.write + note.speed * 1.2);
          }
        }
        if (st === "done") {
          releaseNear(note.x, note.y, note.size * 1.7);
          notes.splice(i, 1);
          continue;
        }
        if (note.write <= 0 && note.phase === "in") continue;
        const chars = Math.max(1, Math.ceil(note.text.length * Math.max(note.write, 0.05)));
        const label = note.text.slice(0, chars);
        ctx.save();
        ctx.translate(note.x, note.y);
        ctx.rotate(note.angle);
        pencilText(
          label,
          0,
          0,
          note.size,
          (0.35 + note.write * 0.5) * note.fade,
          note.wobble,
        );
        if (note.underline && note.write > 0.85) {
          ctx.font = pencilFont(note.size);
          const tw = ctx.measureText(note.text).width;
          const u = Math.min(1, (note.write - 0.85) / 0.15);
          sketchLine(
            0,
            note.size * 0.55,
            tw * u,
            note.size * 0.58,
            note.wobble + 3,
            (0.3 + u * 0.35) * note.fade,
            1,
          );
        }
        ctx.restore();
      }

      if (!reduceMotion) maybeCallout();

      for (let i = callouts.length - 1; i >= 0; i -= 1) {
        const c = callouts[i];
        if (!c) continue;
        c.t += 0.016;
        const u = c.t / c.life;
        if (u >= 1) {
          callouts.splice(i, 1);
          continue;
        }
        const n = nodes[c.node];
        if (!n) continue;
        const fade = u < 0.15 ? u / 0.15 : 1 - (u - 0.15) / 0.85;
        const r = 8 + u * 22;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 200, 255, ${0.1 + fade * 0.4})`;
        ctx.lineWidth = 1.1;
        for (let s = 0; s <= 18; s += 1) {
          const ang = (s / 18) * Math.PI * 2;
          const wob = Math.sin(ang * 3 + tick * 0.03 + c.node) * 0.7;
          const px = n.x + Math.cos(ang) * (r + wob);
          const py = n.y + Math.sin(ang) * (r + wob);
          if (s === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
      }

      for (const n of nodes) {
        if (n.kind === "mark") {
          drawCross(n.x, n.y, 3, 0.24);
          continue;
        }
        if (n.kind === "hub") {
          ctx.beginPath();
          ctx.strokeStyle = "rgba(125, 211, 252, 0.4)";
          ctx.lineWidth = 1;
          ctx.arc(n.x, n.y, 4.5, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.fillStyle = "rgba(186, 230, 253, 0.75)";
          ctx.arc(n.x, n.y, 1.7, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.fillStyle = "rgba(186, 230, 253, 0.55)";
          ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      frame = window.requestAnimationFrame(draw);
    };

    const start = async () => {
      try {
        await document.fonts.load(`16px ${pencilFamily}`);
        await document.fonts.ready;
      } catch {
        // ignore
      }
      resize();
      draw();
    };

    void start();

    const ro = new ResizeObserver(() => resize());
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    window.addEventListener("resize", resize);

    return () => {
      running = false;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
  );
}
