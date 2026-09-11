"use client";

import { problems, problemsIntro } from "@/content/problems";
import { useLocale } from "@/lib/locale";
import { useSectionView } from "@/lib/useSectionView";
import styles from "./Problems.module.css";

export function Problems() {
  const { l } = useLocale();
  const sectionRef = useSectionView("expertise", "problems");

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="problems-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.top}>{l(problemsIntro.topLine)}</p>
          <h2 id="problems-heading" className={styles.heading}>
            {l(problemsIntro.heading)}
          </h2>
          <p className={styles.lead}>{l(problemsIntro.lead)}</p>
        </header>

        <ul className={styles.grid}>
          {problems.map((item) => (
            <li key={item.id} className={styles.item}>
              <h3 className={styles.title}>{l(item.title)}</h3>
              <p className={styles.body}>{l(item.body)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
