"use client";

import Link from "next/link";
import { problems, problemsIntro } from "@/content/problems";
import type { ProblemPage } from "@/content/problemPages";
import { LandingBack } from "@/components/landings/LandingBack";
import { useLocale } from "@/lib/locale";
import { localizedHref } from "@/lib/paths";
import styles from "./ProblemLanding.module.css";

export function ProblemLanding({ page }: { page: ProblemPage }) {
  const { t, l, locale } = useLocale();
  const teaser = problems.find((p) => p.id === page.slug);
  const title = teaser?.title ?? { es: page.slug, en: page.slug };

  return (
    <article className={styles.page}>
      <div className={styles.inner}>
        <LandingBack href="/#expertise" />

        <header className={styles.header}>
          <p className={styles.top}>{l(problemsIntro.topLine)}</p>
          <h1 className={styles.heading}>{l(title)}</h1>
          <p className={styles.lead}>{l(page.lead)}</p>
        </header>

        <ul className={styles.points}>
          {l(page.points).map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        {page.related && page.related.length > 0 ? (
          <nav className={styles.related} aria-label={t.landings.relatedLabel}>
            <p className={styles.relatedLabel}>{t.landings.relatedLabel}</p>
            <ul>
              {page.related.map((link) => (
                <li key={link.href}>
                  <Link href={localizedHref(locale, link.href)}>
                    {l(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </article>
  );
}
