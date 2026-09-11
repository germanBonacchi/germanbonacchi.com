"use client";

import { testimonials, testimonialsIntro } from "@/content/testimonials";
import { LandingBack } from "@/components/landings/LandingBack";
import { useLocale } from "@/lib/locale";
import { useSectionView } from "@/lib/useSectionView";
import styles from "./Testimonials.module.css";

export function Testimonials({ isPage = false }: { isPage?: boolean }) {
  const { l } = useLocale();
  const sectionRef = useSectionView("testimonials");
  const Heading = isPage ? "h1" : "h2";

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="testimonials-heading"
    >
      <div className={styles.inner}>
        {isPage ? <LandingBack /> : null}
        <header className={styles.header}>
          <p className={styles.top}>{l(testimonialsIntro.topLine)}</p>
          <Heading id="testimonials-heading" className={styles.heading}>
            {l(testimonialsIntro.heading)}
          </Heading>
        </header>

        <ul className={styles.list}>
          {testimonials.map((item) => (
            <li key={item.id} className={styles.item}>
              <figure className={styles.card}>
                <span className={styles.mark} aria-hidden="true">
                  “
                </span>
                <blockquote className={styles.quote}>
                  <p>{l(item.quote)}</p>
                </blockquote>
                <figcaption className={styles.meta}>
                  <p className={styles.name}>
                    {item.authorHref ? (
                      <a
                        href={item.authorHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    ) : (
                      item.name
                    )}
                  </p>
                  <p className={styles.role}>{l(item.role)}</p>
                  <p className={styles.relationship}>{l(item.relationship)}</p>
                  {item.sourceHref ? (
                    <a
                      href={item.sourceHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.source}
                    >
                      {l(item.sourceLabel)}
                    </a>
                  ) : null}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
