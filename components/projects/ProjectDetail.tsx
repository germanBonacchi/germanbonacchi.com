"use client";

import Link from "next/link";
import { technologyById } from "@/content/technologies";
import type { Localized, Project } from "@/content/types";
import { useLocale } from "@/lib/locale";
import { track } from "@/lib/analytics";
import styles from "./ProjectDetail.module.css";

const AREA_LABELS: Record<Project["areas"][number], Localized> = {
  architecture: {
    en: "Architecture",
    es: "Arquitectura",
    "pt-BR": "Arquitetura",
    it: "Architettura",
  },
  "vtex-io": { en: "VTEX IO", es: "VTEX IO" },
  faststore: { en: "VTEX FastStore", es: "VTEX FastStore" },
  checkout: { en: "Checkout", es: "Checkout" },
  integrations: {
    en: "Integrations",
    es: "Integraciones",
    "pt-BR": "Integrações",
    it: "Integrazioni",
  },
  payments: {
    en: "Payments",
    es: "Pagos",
    "pt-BR": "Pagamentos",
    it: "Pagamenti",
  },
  logistics: {
    en: "Logistics",
    es: "Logística",
    "pt-BR": "Logística",
    it: "Logistica",
  },
  search: {
    en: "Search",
    es: "Búsqueda",
    "pt-BR": "Busca",
    it: "Search",
  },
  middleware: {
    en: "APIs & Middleware",
    es: "APIs y Middleware",
    "pt-BR": "APIs e Middleware",
    it: "API e Middleware",
  },
  performance: { en: "Performance", es: "Performance" },
  "solution-design": {
    en: "Solution design",
    es: "Diseño de soluciones",
    "pt-BR": "Desenho de soluções",
    it: "Solution design",
  },
  "technical-leadership": {
    en: "Technical leadership",
    es: "Liderazgo técnico",
    "pt-BR": "Liderança técnica",
    it: "Leadership tecnica",
  },
};

export function ProjectDetail({ project }: { project: Project }) {
  const { t, l } = useLocale();
  const isCetrogar = project.slug === "cetrogar";
  const isCarrefour = project.slug === "carrefour";
  const highlightFacts = isCarrefour
    ? t.projects.carrefourFacts
    : isCetrogar
      ? t.projects.cetrogarFacts
      : null;

  return (
    <article className={styles.article}>
      <div className={styles.inner}>
        <p className={styles.back}>
          <Link href="/projects">{t.projects.backToProjects}</Link>
        </p>

        <header className={styles.header}>
          <p className={styles.client}>{project.client}</p>
          <h1 className={styles.title}>{project.product}</h1>
          <p className={styles.role}>
            <span>{t.projects.roleLabel}:</span> {l(project.role)}
          </p>
          <p className={styles.summary}>{l(project.summary)}</p>
          {project.sites && project.sites.length > 0 ? (
            <ul className={styles.sites} aria-label={t.projects.sitesLabel}>
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
            {!project.sites?.length ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primary}
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
            {project.externalRefs?.map((ref) => (
              <a
                key={ref.href}
                href={ref.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondary}
                onClick={() => {
                  track("project_external", {
                    slug: project.slug,
                    href: ref.href,
                  });
                  if (ref.kind === "linkedin" && isCetrogar) {
                    track("vtex_reference_click", { slug: project.slug });
                  }
                }}
              >
                {l(ref.label)}
              </a>
            ))}
          </div>
        </header>

        {highlightFacts ? (
          <aside className={styles.callout} aria-label="Project highlights">
            {isCetrogar ? <p>{t.projects.externalRefNote}</p> : null}
            <ul>
              {highlightFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </aside>
        ) : null}

        <section className={styles.block} aria-labelledby="context-heading">
          <h2 id="context-heading">{t.projects.contextLabel}</h2>
          <p>{l(project.context)}</p>
        </section>

        <section className={styles.block} aria-labelledby="challenges-heading">
          <h2 id="challenges-heading">{t.projects.challengesLabel}</h2>
          <ul>
            {l(project.challenges).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section
          className={styles.block}
          aria-labelledby="contributions-heading"
        >
          <h2 id="contributions-heading">{t.projects.contributionsLabel}</h2>
          <ul>
            {l(project.contributions).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.block} aria-labelledby="tech-heading">
          <h2 id="tech-heading">{t.projects.techLabel}</h2>
          <ul className={styles.tags}>
            {project.technologies.map((id) => (
              <li key={id}>{technologyById[id]?.name ?? id}</li>
            ))}
          </ul>
        </section>

        <section className={styles.block} aria-labelledby="areas-heading">
          <h2 id="areas-heading">{t.projects.areasLabel}</h2>
          <ul className={styles.tags}>
            {project.areas.map((area) => (
              <li key={area}>{l(AREA_LABELS[area])}</li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
