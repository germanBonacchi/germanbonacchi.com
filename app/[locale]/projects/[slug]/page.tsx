import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/projects/ProjectDetail";
import { JsonLd } from "@/components/seo/JsonLd";
import { getProjectBySlug, projects } from "@/content/projects";
import { siteConfig } from "@/content/site";
import { localize } from "@/lib/localize";
import {
  hreflangAlternates,
  localeFromRouteSegment,
  localizedHref,
} from "@/lib/paths";
import {
  projectJsonLd,
  personJsonLd,
  breadcrumbJsonLd,
} from "@/lib/schema";

interface ProjectPageProps {
  params: Promise<{ locale: string; slug: string }>;
  searchParams: Promise<{ from?: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { locale: segment, slug } = await params;
  const locale = localeFromRouteSegment(segment) ?? "es";
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const title = `${project.client} | ${localize(project.role, locale)}`;
  const description = localize(project.summary, locale);
  const canonical = localizedHref(locale, `/projects/${project.slug}`);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: hreflangAlternates(`/projects/${project.slug}`),
    },
    openGraph: {
      title: `${project.client} | Germán Bonacchi`,
      description,
      url: `${siteConfig.url}${canonical}`,
      type: "article",
      images: [project.ogImage ?? "/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.client} | Germán Bonacchi`,
      description,
      images: [project.ogImage ?? "/opengraph-image"],
    },
  };
}

export default async function ProjectPage({
  params,
  searchParams,
}: ProjectPageProps) {
  const { locale: segment, slug } = await params;
  const locale = localeFromRouteSegment(segment) ?? "es";
  const { from } = await searchParams;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            personJsonLd(locale),
            projectJsonLd(project, locale),
            breadcrumbJsonLd([
              { name: "Home", path: localizedHref(locale, "/") },
              { name: "Projects", path: localizedHref(locale, "/projects") },
              {
                name: project.client,
                path: localizedHref(locale, `/projects/${project.slug}`),
              },
            ]),
          ],
        }}
      />
      <ProjectDetail project={project} from={from} />
    </>
  );
}
