import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { projects } from "@/content/projects";
import { problemSlugs } from "@/content/problemPages";
import { LOCALE_CODES } from "@/content/languages";
import { hreflangAlternates, localizedHref } from "@/lib/paths";

const lastModified = new Date();

/** Absolute hreflang map — same keys as page metadata (`es-AR`, `x-default`, …). */
function absoluteHreflang(path: string): Record<string, string> {
  return Object.fromEntries(
    Object.entries(hreflangAlternates(path)).map(([lang, href]) => [
      lang,
      `${siteConfig.url}${href}`,
    ]),
  );
}

/** One sitemap entry per locale for `path`, each advertising the others via hreflang alternates. */
function localizedEntries(
  path: string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number,
): MetadataRoute.Sitemap {
  const languages = absoluteHreflang(path);

  return LOCALE_CODES.map((locale) => ({
    url: `${siteConfig.url}${localizedHref(locale, path)}`,
    lastModified,
    changeFrequency,
    priority,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...localizedEntries("/", "monthly", 1),
    ...localizedEntries("/projects", "monthly", 0.9),
    ...localizedEntries("/decisions", "monthly", 0.75),
    ...localizedEntries("/philosophy", "monthly", 0.6),
    ...localizedEntries("/services", "monthly", 0.8),
    ...localizedEntries("/testimonials", "monthly", 0.65),
    ...localizedEntries("/faq", "monthly", 0.7),
    ...problemSlugs.flatMap((slug) =>
      localizedEntries(`/problems/${slug}`, "monthly", 0.7),
    ),
    ...projects.flatMap((project) =>
      localizedEntries(
        `/projects/${project.slug}`,
        "monthly",
        project.slug === "cetrogar" ||
          project.slug === "carrefour" ||
          project.slug === "medis"
          ? 0.85
          : 0.7,
      ),
    ),
  ];
}
