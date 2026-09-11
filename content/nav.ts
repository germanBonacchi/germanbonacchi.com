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
  "services",
  "faq",
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

export function navHref(
  locale: Locale,
  id: NavSectionId | FooterSectionId,
): string {
  return localizedHref(locale, `/#${id}`);
}
