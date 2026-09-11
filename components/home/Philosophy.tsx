"use client";

import { philosophyIntro, philosophyItems } from "@/content/philosophy";
import { useLocale } from "@/lib/locale";
import { useSectionView } from "@/lib/useSectionView";
import styles from "./Philosophy.module.css";

export function Philosophy() {
  const { l } = useLocale();
  const sectionRef = useSectionView("philosophy");

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="philosophy-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.top}>{l(philosophyIntro.topLine)}</p>
          <h2 id="philosophy-heading" className={styles.heading}>
            {l(philosophyIntro.heading)}
          </h2>
        </header>

        <ol className={styles.list}>
          {philosophyItems.map((item, index) => (
            <li key={item.id} className={styles.item}>
              <span className={styles.num} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className={styles.title}>{l(item.title)}</h3>
                <p className={styles.body}>{l(item.body)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
