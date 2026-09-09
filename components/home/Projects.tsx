"use client";

import Link from "next/link";
import { getFeaturedProjects } from "@/content/projects";
import { technologyById } from "@/content/technologies";
import type { Project } from "@/content/types";
import { useLocale } from "@/lib/locale";
import { track } from "@/lib/analytics";
import { useSectionView } from "@/lib/useSectionView";
import styles from "./Projects.module.css";

export function Projects() {
  const { t, l } = useLocale();
  const projects = getFeaturedProjects();
  const sectionRef = useSectionView("projects");

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="projects-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.top}>{t.projects.topLine}</p>
          <h2 id="projects-heading" className={styles.heading}>
            {t.projects.heading}
          </h2>
          <p className={styles.intro}>{t.projects.intro}</p>
        </header>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              role={l(project.role)}
              summary={l(project.summary)}
              labels={{
                role: t.projects.roleLabel,
                viewCase: t.projects.viewCase,
                viewProject: t.projects.viewProject,
                visitSite: t.projects.visitSite,
              }}
            />
          ))}
        </div>

        <p className={styles.all}>
          <Link href="/projects">{t.projects.allProjects}</Link>
        </p>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  role,
  summary,
  labels,
}: {
  project: Project;
  role: string;
  summary: string;
  labels: {
    role: string;
    viewCase: string;
    viewProject: string;
    visitSite: string;
  };
}) {
  const isFeaturedCase = project.slug === "cetrogar";

  return (
    <article
      className={`${styles.card} ${isFeaturedCase ? styles.featured : ""}`}
    >
      <div className={styles.cardTop}>
        <p className={styles.client}>{project.client}</p>
        <h3 className={styles.title}>{project.product}</h3>
        <p className={styles.role}>
          <span className={styles.roleLabel}>{labels.role}:</span> {role}
        </p>
      </div>
      <p className={styles.summary}>{summary}</p>
      {project.sites && project.sites.length > 0 ? (
        <ul className={styles.sites}>
          {project.sites.map((site) => (
            <li key={site.url}>{site.name}</li>
          ))}
        </ul>
      ) : null}
      <ul className={styles.tech}>
        {project.technologies.slice(0, 6).map((id) => (
          <li key={id}>{technologyById[id]?.name ?? id}</li>
        ))}
      </ul>
      <div className={styles.actions}>
        <Link
          href={`/projects/${project.slug}`}
          className={styles.primary}
          onClick={() =>
            track("project_click", { slug: project.slug, source: "home" })
          }
        >
          {project.caseStudy ? labels.viewCase : labels.viewProject}
        </Link>
        {!project.sites?.length ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
            onClick={() =>
              track("project_external", {
                slug: project.slug,
                href: project.url,
              })
            }
          >
            {labels.visitSite}
          </a>
        ) : null}
      </div>
    </article>
  );
}
