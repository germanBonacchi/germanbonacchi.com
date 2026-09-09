"use client";

import { useLocale } from "@/lib/locale";
import { useSectionView } from "@/lib/useSectionView";
import { SkillsNetwork } from "./SkillsNetwork";
import styles from "./Skills.module.css";

export function Skills() {
  const { t } = useLocale();
  const sectionRef = useSectionView("skills");

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="skills-heading"
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.top}>{t.skills.topLine}</p>
          <h2 id="skills-heading" className={styles.heading}>
            {t.skills.heading}
          </h2>
          <p className={styles.intro}>{t.skills.intro}</p>
          <p className={styles.networkNote}>{t.skills.networkNote}</p>
        </div>
        <div className={styles.visual}>
          <SkillsNetwork />
        </div>
      </div>
    </section>
  );
}
