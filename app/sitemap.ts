import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { projects } from "@/content/projects";
import { LOCALE_CODES } from "@/content/languages";
import { localizedHref } from "@/lib/paths";

const lastModified = new Date();

/** One sitemap entry per locale for `path`, each advertising the others via hreflang alternates. */
function localizedEntries(
  path: string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number,
): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    LOCALE_CODES.map((locale) => [
      locale,
      `${siteConfig.url}${localizedHref(locale, path)}`,
    ]),
  );

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
