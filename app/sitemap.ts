import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projects.map((project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: project.slug === "cetrogar" || project.slug === "carrefour" || project.slug === "medis" ? 0.85 : 0.7,
    })),
  ];
}
