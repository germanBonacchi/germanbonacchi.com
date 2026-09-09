"use client";

import Link from "next/link";
import { getFeaturedProjects } from "@/content/projects";
import { useLocale } from "@/lib/locale";
import { track } from "@/lib/analytics";
import styles from "./ProjectsIndex.module.css";

export function ProjectsIndex() {
  const { t, l } = useLocale();
  const projects = getFeaturedProjects();

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.top}>{t.projects.topLine}</p>
          <h1 className={styles.heading}>{t.projects.heading}</h1>
          <p className={styles.intro}>{t.projects.intro}</p>
        </header>
        <ul className={styles.list}>
          {projects.map((project) => (
            <li key={project.slug}>
              <article className={styles.card}>
                <p className={styles.client}>{project.client}</p>
                <h2>{project.product}</h2>
                <p className={styles.role}>{l(project.role)}</p>
                <p>{l(project.summary)}</p>
                {project.sites && project.sites.length > 0 ? (
                  <ul className={styles.sites}>
                    {project.sites.map((site) => (
                      <li key={site.url}>
                        <a
                          href={site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() =>
                            track("project_external", {
                              slug: project.slug,
                              href: site.url,
                            })
                          }
                        >
                          {site.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className={styles.actions}>
                  <Link
                    href={`/projects/${project.slug}`}
                    onClick={() =>
                      track("project_click", {
                        slug: project.slug,
                        source: "projects",
                      })
                    }
                  >
                    {project.caseStudy
                      ? t.projects.viewCase
                      : t.projects.viewProject}
                  </Link>
                  {!project.sites?.length ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        track("project_external", {
                          slug: project.slug,
                          href: project.url,
                        })
                      }
                    >
                      {t.projects.visitSite}
                    </a>
                  ) : null}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
