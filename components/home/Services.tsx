"use client";

import { services, servicesIntro } from "@/content/services";
import { LandingBack } from "@/components/landings/LandingBack";
import { useLocale } from "@/lib/locale";
import { useSectionView } from "@/lib/useSectionView";
import styles from "./Services.module.css";

export function Services({ isPage = false }: { isPage?: boolean }) {
  const { l } = useLocale();
  const sectionRef = useSectionView("services");
  const Heading = isPage ? "h1" : "h2";
  const ItemHeading = isPage ? "h2" : "h3";

  return (
    <section
      id="services"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="services-heading"
    >
      <div className={styles.inner}>
        {isPage ? <LandingBack /> : null}
        <header className={styles.header}>
          <p className={styles.top}>{l(servicesIntro.topLine)}</p>
          <Heading id="services-heading" className={styles.heading}>
            {l(servicesIntro.heading)}
          </Heading>
          <p className={styles.lead}>{l(servicesIntro.lead)}</p>
        </header>

        <ul className={styles.list}>
          {services.map((item) => (
            <li key={item.id} className={styles.item}>
              <ItemHeading className={styles.title}>{l(item.title)}</ItemHeading>
              <p className={styles.body}>{l(item.body)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
