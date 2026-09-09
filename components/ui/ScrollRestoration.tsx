"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { stripLocalePrefix } from "@/lib/paths";

/**
 * `html { scroll-behavior: smooth }` (globals.css) is what makes anchor nav
 * feel nice, but it also hijacks Next.js's own scroll-to-top call on page
 * navigation — the browser animates it instead of jumping instantly, and if
 * that animation gets interrupted by the new page's content mounting, the
 * scroll position is left wherever the interrupted animation stopped. This
 * forces an instant jump to top on every real route change (hash-only
 * anchor nav on the same page doesn't touch `pathname`, so it still scrolls
 * smoothly) and restores smooth scrolling right after.
 *
 * Switching language changes the URL (locale prefix) without changing the
 * actual page, so it must NOT reset scroll — only a change to the
 * locale-stripped path counts as "a different page".
 */
export function ScrollRestoration() {
  const pathname = usePathname();
  const normalizedPath = stripLocalePrefix(pathname);
  const previousPath = useRef(normalizedPath);

  useEffect(() => {
    // The browser's own history-based scroll restoration competes with the
    // instant jump below; disable it once and manage scroll ourselves.
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const samePage = previousPath.current === normalizedPath;
    previousPath.current = normalizedPath;
    if (samePage) return;

    const html = document.documentElement;
    const jumpToTop = () => {
      const previous = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      html.style.scrollBehavior = previous;
    };
    jumpToTop();
    // Next's own router scroll handling can run a tick after this effect;
    // re-assert the jump once more after that settles.
    const raf = requestAnimationFrame(jumpToTop);
    return () => cancelAnimationFrame(raf);
  }, [normalizedPath]);

  return null;
}
