"use client";

import Link from "next/link";
import { getFeaturedProjects } from "@/content/projects";
import { technologyById } from "@/content/technologies";
import type { Locale, Project } from "@/content/types";
import { useLocale } from "@/lib/locale";
import { localizedHref } from "@/lib/paths";
import { track } from "@/lib/analytics";
import { useSectionView } from "@/lib/useSectionView";
import styles from "./Projects.module.css";

export function Projects() {
  const { t, l, locale } = useLocale();
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
              locale={locale}
              role={l(project.role)}
              summary={l(project.summary)}
              labels={{
                role: t.projects.roleLabel,
                viewCase: t.projects.viewCase,
                viewProject: t.projects.viewProject,
                visitStore: t.projects.visitStore,
              }}
            />
          ))}
        </div>

        <p className={styles.all}>
          <Link href={localizedHref(locale, "/projects")}>
            {t.projects.allProjects}
          </Link>
        </p>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  locale,
  role,
  summary,
  labels,
}: {
  project: Project;
  locale: Locale;
  role: string;
  summary: string;
  labels: {
    role: string;
    viewCase: string;
    viewProject: string;
    visitStore: string;
  };
}) {
  const isBrandHero =
    project.slug === "carrefour" ||
    project.slug === "cetrogar" ||
    project.slug === "medis" ||
    project.slug === "rouge";
  const brandClass =
    project.slug === "carrefour"
      ? styles.brandCarrefour
      : project.slug === "cetrogar"
        ? styles.brandCetrogar
        : project.slug === "medis"
          ? styles.brandMedis
          : project.slug === "rouge"
            ? styles.brandRouge
            : "";
  const caseHref = localizedHref(
    locale,
    `/projects/${project.slug}?from=home`,
  );
  const caseLabel = project.caseStudy ? labels.viewCase : labels.viewProject;

  return (
    <article className={`${styles.card} ${brandClass}`.trim()}>
      {isBrandHero && (project.logoMark || project.logo) ? (
        <div className={styles.brandMark} aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.logoMark ?? project.logo} alt="" />
        </div>
      ) : null}
      <div className={styles.cardTop}>
        <div className={styles.brandRow}>
          {!isBrandHero && project.logo ? (
            <span className={styles.brandLogo}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.logo} alt="" />
            </span>
          ) : null}
          <p className={styles.client}>{project.client}</p>
        </div>
        <h3 className={styles.title}>
          <Link
            href={caseHref}
            className={styles.titleLink}
            onClick={() =>
              track("project_click", { slug: project.slug, source: "home" })
            }
          >
            {project.product}
          </Link>
        </h3>
        <p className={styles.role}>
          <span className={styles.roleLabel}>{labels.role}:</span> {role}
        </p>
      </div>
      <p className={styles.summary}>{summary}</p>
      {project.sites && project.sites.length > 0 ? (
        <ul className={styles.sites}>
          {project.sites.map((site) => (
            <li key={site.url}>
              {site.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={site.logo} alt="" className={styles.siteLogo} />
              ) : null}
              {site.name}
            </li>
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
          href={caseHref}
          className={styles.primary}
          onClick={() =>
            track("project_click", { slug: project.slug, source: "home" })
          }
        >
          {caseLabel}
        </Link>
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
          {labels.visitStore}
        </a>
      </div>
    </article>
  );
}
