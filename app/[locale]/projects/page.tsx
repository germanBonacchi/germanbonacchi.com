import type { Metadata } from "next";
import { ProjectsIndex } from "@/components/projects/ProjectsIndex";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/content/site";
import { getFeaturedProjects } from "@/content/projects";
import { projectJsonLd, personJsonLd, breadcrumbJsonLd } from "@/lib/schema";
import { localize } from "@/lib/localize";
import {
  hreflangAlternates,
  localeFromRouteSegment,
  localizedHref,
} from "@/lib/paths";
import { OG_LOCALE } from "@/content/languages";
import { projectsPageSeo } from "@/content/seo";

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  const { locale: segment } = await params;
  const locale = localeFromRouteSegment(segment) ?? "es";
  const { title, description } = localize(projectsPageSeo, locale);
  const canonical = localizedHref(locale, "/projects");

  return {
    title,
    description,
    alternates: { canonical, languages: hreflangAlternates("/projects") },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${canonical}`,
      locale: OG_LOCALE[locale],
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale: segment } = await params;
  const locale = localeFromRouteSegment(segment) ?? "es";
  const projects = getFeaturedProjects();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            personJsonLd(locale),
            breadcrumbJsonLd([
              { name: "Home", path: localizedHref(locale, "/") },
              { name: "Projects", path: localizedHref(locale, "/projects") },
            ]),
            ...projects.map((project) => projectJsonLd(project, locale)),
          ],
        }}
      />
      <ProjectsIndex />
    </>
  );
}
