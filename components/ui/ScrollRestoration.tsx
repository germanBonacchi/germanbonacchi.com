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

/**
 * Explicit top scroll — more reliable than scrollIntoView on iOS after the
 * mobile drawer closes (first smooth scroll often undershoots).
 */
function scrollToHash(behavior: ScrollBehavior = "smooth"): boolean {
  const id = window.location.hash.replace(/^#/, "");
  if (!id) return false;
  const el = document.getElementById(id);
  if (!el) return false;
  const top = Math.max(
    0,
    el.getBoundingClientRect().top + window.scrollY - navOffsetPx(),
  );
  const resolved = prefersReducedMotion() ? "auto" : behavior;
  if (resolved === "auto") {
    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo({ top, behavior: "auto" });
    html.style.scrollBehavior = previous;
  } else {
    window.scrollTo({ top, behavior: resolved });
  }
  return true;
}

function scheduleHashScroll(fromDrawer: boolean) {
  const start = () => {
    // After the drawer, land instantly — smooth scroll from the top of the
    // page is what undershoots on the first iOS attempt.
    scrollToHash(fromDrawer ? "auto" : "smooth");
    if (!fromDrawer) return;
    // One layout settle pass (safe-area / chrome / sticky header).
    window.setTimeout(() => scrollToHash("auto"), 50);
  };

  if (!fromDrawer) {
    start();
    return;
  }

  window.setTimeout(start, DRAWER_CLOSE_MS + 30);
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
 * document click listener: Next.js Link often updates the URL without scrolling.
 * Clicks from the mobile drawer wait for the close animation before scrolling.
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
      if (
        `${window.location.pathname}${window.location.search}${window.location.hash}` !==
        next
      ) {
        history.pushState(null, "", next);
      }

      const fromDrawer = Boolean(a.closest("#mobile-nav"));
      scheduleHashScroll(fromDrawer);
    };

    const onHashChange = () => {
      scheduleHashScroll(false);
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
        scrollToHash("auto");
      } else {
        window.scrollTo(0, 0);
      }
      html.style.scrollBehavior = previous;
      return !hash || Boolean(document.getElementById(hash));
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
