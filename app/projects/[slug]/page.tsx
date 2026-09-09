import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/projects/ProjectDetail";
import { JsonLd } from "@/components/seo/JsonLd";
import { getProjectBySlug, projects } from "@/content/projects";
import { siteConfig } from "@/content/site";
import {
  projectJsonLd,
  personJsonLd,
  breadcrumbJsonLd,
} from "@/lib/schema";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const title = `${project.client} | ${project.role.en}`;
  const description = project.summary.en;

  return {
    title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.client} | Germán Bonacchi`,
      description,
      url: `${siteConfig.url}/projects/${project.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.client} | Germán Bonacchi`,
      description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            personJsonLd("en"),
            projectJsonLd(project, "en"),
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Projects", path: "/projects" },
              {
                name: project.client,
                path: `/projects/${project.slug}`,
              },
            ]),
          ],
        }}
      />
      <ProjectDetail project={project} />
    </>
  );
}
