"use client";

import { services, servicesIntro } from "@/content/services";
import { useLocale } from "@/lib/locale";
import { localizedHref } from "@/lib/paths";
import { track } from "@/lib/analytics";
import { useSectionView } from "@/lib/useSectionView";
import Link from "next/link";
import styles from "./Services.module.css";

export function Services() {
  const { l, locale, t } = useLocale();
  const sectionRef = useSectionView("services");

  return (
    <section
      id="services"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="services-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.top}>{l(servicesIntro.topLine)}</p>
          <h2 id="services-heading" className={styles.heading}>
            {l(servicesIntro.heading)}
          </h2>
          <p className={styles.lead}>{l(servicesIntro.lead)}</p>
        </header>

        <ul className={styles.list}>
          {services.map((item) => (
            <li key={item.id} className={styles.item}>
              <h3 className={styles.title}>{l(item.title)}</h3>
              <p className={styles.body}>{l(item.body)}</p>
            </li>
          ))}
        </ul>

        <p className={styles.cta}>
          <Link
            href={localizedHref(locale, "/#contact")}
            onClick={() => track("nav_section", { section: "contact" })}
          >
            {t.hero.ctaHire}
          </Link>
        </p>
      </div>
    </section>
  );
}
