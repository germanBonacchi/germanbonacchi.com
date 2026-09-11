"use client";

import {
  coreExpertiseGroups,
  coreExpertiseIntro,
} from "@/content/coreExpertise";
import { useLocale } from "@/lib/locale";
import { useSectionView } from "@/lib/useSectionView";
import { SkillsNetwork } from "./SkillsNetwork";
import styles from "./Skills.module.css";

export function Skills() {
  const { t, l } = useLocale();
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
          <p className={styles.top}>{l(coreExpertiseIntro.topLine)}</p>
          <h2 id="skills-heading" className={styles.heading}>
            {t.skills.heading}
          </h2>
          <p className={styles.intro}>{t.skills.intro}</p>

          <ul className={styles.core}>
            {coreExpertiseGroups.map((group) => (
              <li key={group.id} className={styles.coreGroup}>
                <h3 className={styles.coreTitle}>{l(group.title)}</h3>
                <p className={styles.coreItems}>{group.items.join(" · ")}</p>
              </li>
            ))}
          </ul>

          <p className={styles.explore}>{l(coreExpertiseIntro.exploreLabel)}</p>
          <p className={styles.networkNote}>{t.skills.networkNote}</p>
        </div>
        <div className={styles.visual}>
          <SkillsNetwork />
        </div>
      </div>
    </section>
  );
}
