import type { UiCopy } from "@/content/ui";

/** Home sections exposed in header + footer (page order). */
export const NAV_SECTIONS = [
  "about",
  "expertise",
  "experience",
  "projects",
  "skills",
  "trainings",
  "faq",
  "contact",
] as const;

export type NavSectionId = (typeof NAV_SECTIONS)[number];

export function navLabel(t: UiCopy, id: NavSectionId): string {
  return t.nav[id];
}

export function navHref(id: NavSectionId): string {
  return `/#${id}`;
}
