"use client";

import { useLocale } from "@/lib/locale";
import styles from "./AuthorityBar.module.css";

export function AuthorityBar() {
  const { t } = useLocale();

  return (
    <aside className={styles.bar} aria-label={t.hero.authorityLabel}>
      <div className={styles.inner}>
        <p className={styles.stats}>{t.hero.trustLine}</p>
        <p className={styles.years}>{t.hero.companies}</p>
      </div>
    </aside>
  );
}
