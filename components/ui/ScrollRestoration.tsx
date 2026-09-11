"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { stripLocalePrefix } from "@/lib/paths";

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function scrollToHash(behavior: ScrollBehavior = "smooth"): boolean {
  const id = window.location.hash.replace(/^#/, "");
  if (!id) return false;
  const el = document.getElementById(id);
  if (!el) return false;
  const resolved = prefersReducedMotion() ? "auto" : behavior;
  el.scrollIntoView({ behavior: resolved, block: "start" });
  return true;
}

/**
 * `html { scroll-behavior: smooth }` (globals.css) is what makes anchor nav
 * feel nice, but it also hijacks Next.js's own scroll-to-top call on page
 * navigation — the browser animates it instead of jumping instantly, and if
 * that animation gets interrupted by the new page's content mounting, the
 * scroll position is left wherever the interrupted animation stopped. This
 * forces an instant jump on every real route change and restores smooth
 * scrolling right after.
 *
 * When the new URL has a hash (e.g. /services → /#contact), jump to that
 * element instead of the top — after the destination page has mounted.
 *
 * Same-page hash links (`/#contact` while already on `/`) are handled via a
 * document click capture: Next.js Link often updates the URL without scrolling.
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
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
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
      // Cross-route hash (e.g. /services → /#contact): let Next navigate;
      // the pathname effect below scrolls after mount.
      if (url.pathname !== window.location.pathname) return;

      const id = decodeURIComponent(url.hash.slice(1));
      if (!document.getElementById(id)) return;

      e.preventDefault();
      const next = `${url.pathname}${url.search}${url.hash}`;
      if (`${window.location.pathname}${window.location.search}${window.location.hash}` !== next) {
        history.pushState(null, "", next);
      }
      scrollToHash("smooth");
    };

    const onHashChange = () => {
      scrollToHash("smooth");
    };

    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", onHashChange);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", onHashChange);
    };
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
