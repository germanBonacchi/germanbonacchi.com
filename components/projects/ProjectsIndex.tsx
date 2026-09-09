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
          {projects.map((project) => {
            const caseHref = `/projects/${project.slug}?from=projects`;
            return (
              <li key={project.slug} className={styles.item}>
                <article className={styles.card}>
                  <div className={styles.brandRow}>
                    {project.logo ? (
                      <span className={styles.brandLogo}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={project.logo} alt="" />
                      </span>
                    ) : null}
                    <p className={styles.client}>{project.client}</p>
                  </div>
                  <h2>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.titleLink}
                      onClick={() =>
                        track("project_external", {
                          slug: project.slug,
                          href: project.url,
                        })
                      }
                    >
                      {project.product}
                    </a>
                  </h2>
                  <p className={styles.role}>{l(project.role)}</p>
                  <p className={styles.summary}>{l(project.summary)}</p>
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
                            {site.logo ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={site.logo}
                                alt=""
                                className={styles.siteLogo}
                              />
                            ) : null}
                            {site.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <div className={styles.actions}>
                    <Link
                      href={caseHref}
                      className={styles.primary}
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
                      {t.projects.visitStore}
                    </a>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
