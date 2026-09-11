"use client";

import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { carrefourCase } from "@/content/carrefourCase";
import { technologyById } from "@/content/technologies";
import type { Locale, Localized, Project } from "@/content/types";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";
import { useLocale } from "@/lib/locale";
import { localizedHref } from "@/lib/paths";
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

function backHrefFrom(locale: Locale, from?: string): string {
  if (from === "home") return localizedHref(locale, "/#projects");
  return localizedHref(locale, "/projects");
}

export function ProjectDetail({
  project,
  from,
}: {
  project: Project;
  from?: string;
}) {
  const { t, l, locale } = useLocale();
  const backHref = backHrefFrom(locale, from);
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
          <Link href={backHref}>
            <HiArrowLeft aria-hidden="true" />
            {t.projects.backToProjects}
          </Link>
        </p>

        <header className={styles.header}>
          <div className={styles.brandRow}>
            {project.logo ? (
              <span className={styles.brandLogo}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.logo} alt="" />
              </span>
            ) : null}
            <p className={styles.client}>{project.client}</p>
          </div>
          {isCarrefour ? (
            <p className={styles.eyebrow}>{l(carrefourCase.eyebrow)}</p>
          ) : null}
          <h1 className={styles.title}>
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
          </h1>
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
                    {site.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={site.logo} alt="" className={styles.siteLogo} />
                    ) : null}
                    {site.name}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
          <div className={styles.actions}>
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
              {t.projects.visitStore}
            </a>
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

        {isCarrefour ? (
          <>
            <section
              className={styles.block}
              aria-labelledby="responsibility-heading"
            >
              <h2 id="responsibility-heading">
                {l(carrefourCase.responsibilitiesTitle)}
              </h2>
              <ul className={styles.tags}>
                {l(carrefourCase.responsibilities).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section
              className={styles.block}
              aria-labelledby="architecture-heading"
            >
              <h2 id="architecture-heading">
                {l(carrefourCase.architectureTitle)}
              </h2>
              <p>{l(carrefourCase.architectureNote)}</p>
              <div className={styles.diagram}>
                <ArchitectureDiagram
                  caption={l(carrefourCase.confidentiality)}
                />
              </div>
            </section>

            <section
              className={styles.block}
              aria-labelledby="decisions-heading"
            >
              <h2 id="decisions-heading">{l(carrefourCase.decisionsTitle)}</h2>
              <ul>
                {l(carrefourCase.decisions).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section
              className={styles.block}
              aria-labelledby="complexity-heading"
            >
              <h2 id="complexity-heading">
                {l(carrefourCase.complexityTitle)}
              </h2>
              <ul>
                {l(carrefourCase.complexity).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section
              className={styles.block}
              aria-labelledby="tradeoffs-heading"
            >
              <h2 id="tradeoffs-heading">{l(carrefourCase.tradeoffsTitle)}</h2>
              <ul>
                {l(carrefourCase.tradeoffs).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className={styles.block} aria-labelledby="results-heading">
              <h2 id="results-heading">{l(carrefourCase.resultsTitle)}</h2>
              <ul>
                {l(carrefourCase.results).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={styles.note}>{l(carrefourCase.confidentiality)}</p>
            </section>
          </>
        ) : null}

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
