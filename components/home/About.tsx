"use client";

import Image from "next/image";
import { VALTECH_URL } from "@/content/site";
import { useLocale } from "@/lib/locale";
import { useSectionView } from "@/lib/useSectionView";
import styles from "./About.module.css";

export function About() {
  const { t } = useLocale();
  const sectionRef = useSectionView("about");

  return (
    <section
      id="about"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="about-heading"
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.top}>{t.about.topLine}</p>
          <h2 id="about-heading" className={styles.heading}>
            {t.about.heading}
          </h2>
          {t.about.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className={styles.body}>
              {paragraph.includes("Valtech") ? (
                <AboutParagraph
                  text={paragraph}
                  label={t.about.valtechLinkLabel}
                />
              ) : (
                paragraph
              )}
            </p>
          ))}
          <p className={styles.highlight}>
            <span className={styles.accent}>Technical Lead</span>
            {" · "}
            <span className={styles.cyan}>VTEX & Commerce Architecture</span>
            {" · "}
            <a
              href={VALTECH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.valtech}
            >
              {t.about.valtechLinkLabel}
            </a>
            <span className={styles.cursor} aria-hidden="true">
              |
            </span>
          </p>
        </div>
        <div className={styles.media}>
          <Image
            src="/images/about-vtex.jpg"
            alt={t.about.photoAlt}
            width={768}
            height={1024}
            sizes="(max-width: 899px) 100vw, 400px"
            className={styles.photo}
          />
        </div>
      </div>
    </section>
  );
}

function AboutParagraph({ text, label }: { text: string; label: string }) {
  if (!text.includes("Valtech")) return text;
  const [before, after] = text.split("Valtech");
  return (
    <>
      {before}
      <a href={VALTECH_URL} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
      {after}
    </>
  );
}
