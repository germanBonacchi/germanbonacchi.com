import type { Metadata } from "next";
import { ProjectsIndex } from "@/components/projects/ProjectsIndex";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/content/site";
import { getFeaturedProjects } from "@/content/projects";
import { projectJsonLd, personJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Proyectos VTEX & Ecommerce | Carrefour, Cetrogar, Médis, Rouge",
  description:
    "Proyectos seleccionados de Germán Bonacchi, líder técnico VTEX en Valtech: Carrefour Argentina, Cetrogar FastStore, Médis Marketplace y el ecosistema Rouge (Perfumerías Rouge, Beauty24, Rouge Maison).",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Proyectos VTEX | Germán Bonacchi",
    description:
      "Casos VTEX y arquitectura ecommerce: Carrefour, Cetrogar FastStore, Médis y ecosistema Rouge.",
    url: `${siteConfig.url}/projects`,
    locale: "es_AR",
  },
};

export default function ProjectsPage() {
  const projects = getFeaturedProjects();
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            personJsonLd("en"),
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Projects", path: "/projects" },
            ]),
            ...projects.map((project) => projectJsonLd(project, "en")),
          ],
        }}
      />
      <ProjectsIndex />
    </>
  );
}
