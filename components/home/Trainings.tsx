"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { trainings } from "@/content/trainings";
import { useLocale } from "@/lib/locale";
import { useSectionView } from "@/lib/useSectionView";
import styles from "./Trainings.module.css";

export function Trainings() {
  const { t, l } = useLocale();
  const sectionRef = useSectionView("trainings");

  return (
    <section
      id="trainings"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="trainings-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.top}>{t.trainings.topLine}</p>
          <h2 id="trainings-heading" className={styles.heading}>
            {t.trainings.heading}
          </h2>
          <p className={styles.intro}>{t.trainings.intro}</p>
        </header>

        <ul className={styles.list}>
          {trainings.map((training) => (
            <li key={training.id} className={styles.item}>
              <a
                href={`https://www.youtube.com/watch?v=${training.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
                aria-label={`${l(training.title)}. ${t.trainings.watchOnYoutube}`}
              >
                <div className={styles.thumbWrap}>
                  <Image
                    src={training.thumbnail}
                    alt=""
                    width={320}
                    height={180}
                    className={styles.thumb}
                  />
                  <span className={styles.play} aria-hidden="true">
                    <FaPlay />
                  </span>
                </div>
                <div className={styles.copy}>
                  <h3>{l(training.title)}</h3>
                  <p>{l(training.subtitle)}</p>
                  <span className={styles.watch}>
                    {t.trainings.watchOnYoutube} →
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
