"use client";

import { useEffect, useRef, type RefObject } from "react";
import { track } from "@/lib/analytics";

/**
 * Fires a one-shot `section_view` when the section enters the viewport
 * (pattern ported from improtango-francesco).
 */
export function useSectionView(
  sectionId: string,
  sectionName?: string,
): RefObject<HTMLElement | null> {
  const ref = useRef<HTMLElement | null>(null);
  const sent = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || sent.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || sent.current) return;
        sent.current = true;
        track("section_view", {
          section_id: sectionId,
          section_name: sectionName ?? sectionId,
        });
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [sectionId, sectionName]);

  return ref;
}
