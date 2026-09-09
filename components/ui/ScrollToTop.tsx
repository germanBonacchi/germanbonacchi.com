"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/lib/locale";
import { track } from "@/lib/analytics";
import styles from "./ScrollToTop.module.css";

export function ScrollToTop() {
  const { t } = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      className={styles.button}
      aria-label={t.scrollToTop}
      onClick={() => {
        track("scroll_to_top", {});
        const reduce = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      }}
    >
      ↑
    </button>
  );
}
