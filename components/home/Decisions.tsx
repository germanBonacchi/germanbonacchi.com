"use client";

import { decisions, decisionsIntro } from "@/content/decisions";
import { useLocale } from "@/lib/locale";
import { useSectionView } from "@/lib/useSectionView";
import styles from "./Decisions.module.css";

export function Decisions() {
  const { l } = useLocale();
  const sectionRef = useSectionView("decisions");

  return (
    <section
      id="decisions"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="decisions-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.top}>{l(decisionsIntro.topLine)}</p>
          <h2 id="decisions-heading" className={styles.heading}>
            {l(decisionsIntro.heading)}
          </h2>
          <p className={styles.lead}>{l(decisionsIntro.lead)}</p>
        </header>

        <div className={styles.list}>
          {decisions.map((item) => (
            <article key={item.id} className={styles.item}>
              <h3 className={styles.question}>{l(item.question)}</h3>
              <p className={styles.answer}>{l(item.answer)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
