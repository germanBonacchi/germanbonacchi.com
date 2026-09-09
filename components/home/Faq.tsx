"use client";

import { faqs } from "@/content/faq";
import { useLocale } from "@/lib/locale";
import { useSectionView } from "@/lib/useSectionView";
import styles from "./Faq.module.css";

export function Faq() {
  const { t, l } = useLocale();
  const sectionRef = useSectionView("faq");

  return (
    <section
      id="faq"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="faq-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.top}>{t.faq.topLine}</p>
          <h2 id="faq-heading" className={styles.heading}>
            {t.faq.heading}
          </h2>
          <p className={styles.intro}>{t.faq.intro}</p>
        </header>
        <div className={styles.list}>
          {faqs.map((item) => (
            <details key={item.id} className={styles.item}>
              <summary>{l(item.question)}</summary>
              <p>{l(item.answer)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
