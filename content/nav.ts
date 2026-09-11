import type { UiCopy } from "@/content/ui";
import type { Locale } from "@/content/types";
import { localizedHref } from "@/lib/paths";

/** Compact header nav (page order of primary sections). */
export const NAV_SECTIONS = [
  "about",
  "expertise",
  "experience",
  "projects",
  "skills",
  "trainings",
  "contact",
] as const;

/** Full footer nav: primary sections + supporting ones. */
export const FOOTER_SECTIONS = [
  "about",
  "expertise",
  "experience",
  "projects",
  "decisions",
  "philosophy",
  "skills",
  "trainings",
  "services",
  "testimonials",
  "faq",
  "contact",
] as const;

export type NavSectionId = (typeof NAV_SECTIONS)[number];
export type FooterSectionId = (typeof FOOTER_SECTIONS)[number];

export function navLabel(
  t: UiCopy,
  id: NavSectionId | FooterSectionId,
): string {
  return t.nav[id];
}

/** Footer/drawer entries that are real pages, not home hash anchors. */
const PAGE_HREFS: Partial<Record<FooterSectionId, string>> = {
  decisions: "/decisions",
  philosophy: "/philosophy",
  services: "/services",
  testimonials: "/testimonials",
  faq: "/faq",
};

export function navHref(
  locale: Locale,
  id: NavSectionId | FooterSectionId,
): string {
  const pagePath = PAGE_HREFS[id as FooterSectionId];
  if (pagePath) return localizedHref(locale, pagePath);
  return localizedHref(locale, `/#${id}`);
}
