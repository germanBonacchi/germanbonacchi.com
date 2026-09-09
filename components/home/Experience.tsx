"use client";

import { education, experiences } from "@/content/experience";
import { technologyById } from "@/content/technologies";
import { useLocale } from "@/lib/locale";
import { useSectionView } from "@/lib/useSectionView";
import styles from "./Experience.module.css";

export function Experience() {
  const { t, l } = useLocale();
  const sectionRef = useSectionView("experience");

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="experience-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.top}>{t.experience.topLine}</p>
          <h2 id="experience-heading" className={styles.heading}>
            {t.experience.heading}
          </h2>
        </header>

        <ol className={styles.timeline}>
          {experiences.map((item) => (
            <li
              key={item.id}
              className={`${styles.item} ${item.current ? styles.current : ""}`}
            >
              <div className={styles.meta}>
                <p className={styles.dates}>
                  {item.current
                    ? t.experience.present
                    : item.endDate === "present"
                      ? t.experience.present
                      : t.experience.previous}
                </p>
                <h3 className={styles.role}>{l(item.role)}</h3>
                <p className={styles.company}>
                  {item.companyUrl ? (
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.company}
                    </a>
                  ) : (
                    item.company
                  )}
                </p>
              </div>
              <div className={styles.body}>
                <p>{l(item.summary)}</p>
                <ul>
                  {l(item.highlights).map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <ul className={styles.tech} aria-label="Technologies">
                  {item.technologies.map((id) => (
                    <li key={id}>{technologyById[id]?.name ?? id}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <aside className={styles.education} aria-label={t.experience.educationLabel}>
          <h3>{t.experience.educationLabel}</h3>
          <p>
            <strong>{education.institution}</strong>, {l(education.program)}
          </p>
          <p>{l(education.note)}</p>
        </aside>
      </div>
    </section>
  );
}
