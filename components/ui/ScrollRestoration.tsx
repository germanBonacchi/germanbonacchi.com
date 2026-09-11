"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { stripLocalePrefix } from "@/lib/paths";

/** Matches Header.module.css drawer transform transition. */
const DRAWER_CLOSE_MS = 220;

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function navOffsetPx(): number {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--nav-height")
    .trim();
  const parsed = Number.parseFloat(raw);
  return Number.isFinite(parsed) ? parsed : 80;
}

function targetTop(id: string): number | null {
  const el = document.getElementById(id);
  if (!el) return null;
  return Math.max(
    0,
    el.getBoundingClientRect().top + window.scrollY - navOffsetPx(),
  );
}

function snapToId(id: string): boolean {
  const top = targetTop(id);
  if (top == null) return false;
  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo(0, top);
  html.style.scrollBehavior = previous;
  return true;
}

/**
 * Smooth scroll that re-reads the target each frame so layout shifts
 * (images, iOS chrome) don't leave a final hard snap.
 */
function smoothToId(id: string, durationMs = 650): boolean {
  if (!document.getElementById(id)) return false;
  if (prefersReducedMotion()) return snapToId(id);

  const startY = window.scrollY;
  const startTop = targetTop(id);
  if (startTop == null) return false;
  if (Math.abs(startTop - startY) < 2) return true;

  const startTime = performance.now();
  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";

  const step = (now: number) => {
    const top = targetTop(id);
    if (top == null) {
      html.style.scrollBehavior = previous;
      return;
    }
    const t = Math.min(1, (now - startTime) / durationMs);
    const eased = 1 - (1 - t) ** 3;
    window.scrollTo(0, startY + (top - startY) * eased);
    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      window.scrollTo(0, top);
      html.style.scrollBehavior = previous;
    }
  };

  requestAnimationFrame(step);
  return true;
}

/**
 * Same-page hash links are handled in *capture* phase so Next.js Link never
 * starts its own navigation. Mobile drawer waits for close + blurs focus
 * (iOS focus-scroll bug), then smooth-scrolls.
 */
export function ScrollRestoration() {
  const pathname = usePathname();
  const normalizedPath = stripLocalePrefix(pathname);
  const previousPath = useRef(normalizedPath);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = e.target;
      if (!(target instanceof Element)) return;
      const a = target.closest("a");
      if (!(a instanceof HTMLAnchorElement)) return;
      if (a.target && a.target !== "_self") return;

      let url: URL;
      try {
        url = new URL(a.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (!url.hash || url.hash === "#") return;
      if (url.pathname !== window.location.pathname) return;

      const id = decodeURIComponent(url.hash.slice(1));
      if (!document.getElementById(id)) return;

      e.preventDefault();

      const next = `${url.pathname}${url.search}${url.hash}`;
      if (
        `${window.location.pathname}${window.location.search}${window.location.hash}` !==
        next
      ) {
        history.pushState(null, "", next);
      }

      const fromDrawer = Boolean(a.closest("#mobile-nav"));

      if (fromDrawer) {
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
        a.blur();
        window.setTimeout(() => {
          smoothToId(id);
        }, DRAWER_CLOSE_MS + 40);
        return;
      }

      smoothToId(id);
    };

    const onHashChange = () => {
      const id = window.location.hash.replace(/^#/, "");
      if (!id) return;
      smoothToId(id);
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("hashchange", onHashChange);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  useEffect(() => {
    const samePage = previousPath.current === normalizedPath;
    previousPath.current = normalizedPath;
    if (samePage) return;

    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) {
      const html = document.documentElement;
      const previous = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      html.style.scrollBehavior = previous;
      return;
    }

    // Cross-route: land instantly once the page is mounted.
    snapToId(hash);
    const timers = [50, 150, 400].map((ms) =>
      window.setTimeout(() => snapToId(hash), ms),
    );
    return () => timers.forEach(clearTimeout);
  }, [normalizedPath]);

  return null;
}
