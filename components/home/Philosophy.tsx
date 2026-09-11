"use client";

import { philosophyIntro, philosophyItems } from "@/content/philosophy";
import { LandingBack } from "@/components/landings/LandingBack";
import { useLocale } from "@/lib/locale";
import { useSectionView } from "@/lib/useSectionView";
import styles from "./Philosophy.module.css";

export function Philosophy({ isPage = false }: { isPage?: boolean }) {
  const { l } = useLocale();
  const sectionRef = useSectionView("philosophy");
  const Heading = isPage ? "h1" : "h2";
  const ItemHeading = isPage ? "h2" : "h3";

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="philosophy-heading"
    >
      <div className={styles.inner}>
        {isPage ? <LandingBack /> : null}
        <header className={styles.header}>
          <p className={styles.top}>{l(philosophyIntro.topLine)}</p>
          <Heading id="philosophy-heading" className={styles.heading}>
            {l(philosophyIntro.heading)}
          </Heading>
        </header>

        <ol className={styles.list}>
          {philosophyItems.map((item, index) => (
            <li key={item.id} id={item.id} className={styles.item}>
              <span className={styles.num} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <ItemHeading className={styles.title}>
                  {l(item.title)}
                </ItemHeading>
                <p className={styles.body}>{l(item.body)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
