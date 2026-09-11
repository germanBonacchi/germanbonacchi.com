"use client";

import { decisions, decisionsIntro } from "@/content/decisions";
import { LandingBack } from "@/components/landings/LandingBack";
import { useLocale } from "@/lib/locale";
import { useSectionView } from "@/lib/useSectionView";
import styles from "./Decisions.module.css";

export function Decisions({ isPage = false }: { isPage?: boolean }) {
  const { l } = useLocale();
  const sectionRef = useSectionView("decisions");
  const Heading = isPage ? "h1" : "h2";
  const ItemHeading = isPage ? "h2" : "h3";

  return (
    <section
      id="decisions"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="decisions-heading"
    >
      <div className={styles.inner}>
        {isPage ? <LandingBack /> : null}
        <header className={styles.header}>
          <p className={styles.top}>{l(decisionsIntro.topLine)}</p>
          <Heading id="decisions-heading" className={styles.heading}>
            {l(decisionsIntro.heading)}
          </Heading>
          <p className={styles.lead}>{l(decisionsIntro.lead)}</p>
        </header>

        <div className={styles.list}>
          {decisions.map((item) => (
            <article key={item.id} id={item.id} className={styles.item}>
              <ItemHeading className={styles.question}>
                {l(item.question)}
              </ItemHeading>
              <p className={styles.answer}>{l(item.answer)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
