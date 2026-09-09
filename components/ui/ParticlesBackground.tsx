"use client";

import { useEffect, useRef } from "react";
import styles from "./ParticlesBackground.module.css";

interface Particle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  color: string;
  opacity: number;
  phase: number;
  baseR: number;
}

/** Colors from the original tsparticles config */
const COLORS = ["#990033", "#5f021f", "#DA4167", "#ff9000"];

/**
 * Large translucent bubbles for the hero only (clipped by Hero overflow).
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

    let frame = 0;
    let running = true;
    const particles: Particle[] = [];

    const seedParticles = (width: number, height: number) => {
      const count = reduceMotion ? 12 : 30;
      particles.length = 0;
      for (let i = 0; i < count; i += 1) {
        const baseR = 300 + Math.random() * 100;
        const speed = reduceMotion ? 0.4 : 1.2 + Math.random() * 3.5;
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 0.9;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: baseR,
          baseR,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: COLORS[i % COLORS.length] ?? "#990033",
          opacity: 0.4 + Math.random() * 0.4,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const measure = () => {
      const parent =
        canvas.parentElement ?? canvas.closest("section") ?? document.body;
      const rect = parent.getBoundingClientRect();
      return {
        width: Math.max(1, Math.floor(rect.width)),
        height: Math.max(1, Math.floor(rect.height)),
      };
    };

    const resize = () => {
      const { width, height } = measure();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (particles.length === 0) {
        seedParticles(width, height);
      }
    };

    const draw = () => {
      if (!running) return;
      const width = canvas.clientWidth || 1;
      const height = canvas.clientHeight || 1;
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (!reduceMotion) {
          p.phase += 0.008;
          p.r = p.baseR + Math.sin(p.phase) * 40;
        }
        if (p.x < -p.r) p.x = width + p.r;
        if (p.x > width + p.r) p.x = -p.r;
        if (p.y < -p.r) p.y = height + p.r;
        if (p.y > height + p.r) p.y = -p.r;

        ctx.beginPath();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      frame = window.requestAnimationFrame(draw);
    };

    resize();
    const { width, height } = measure();
    seedParticles(width, height);
    draw();

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
