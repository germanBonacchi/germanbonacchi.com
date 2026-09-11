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
 * forces an instant jump on every real route change (hash-only anchor nav
 * on the same page doesn't touch `pathname`, so it still scrolls smoothly)
 * and restores smooth scrolling right after.
 *
 * When the new URL has a hash (e.g. /services → /#contact), jump to that
 * element instead of the top — after the destination page has mounted.
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
    const hash = window.location.hash.replace(/^#/, "");

    const jump = () => {
      const previous = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      if (hash) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView();
          html.style.scrollBehavior = previous;
          return true;
        }
      } else {
        window.scrollTo(0, 0);
      }
      html.style.scrollBehavior = previous;
      return !hash;
    };

    jump();
    // Next's router scroll + page content can settle a tick later.
    const raf = requestAnimationFrame(jump);
    const timers = hash
      ? [50, 150, 400].map((ms) => window.setTimeout(jump, ms))
      : [];

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
    };
  }, [normalizedPath]);

  return null;
}
