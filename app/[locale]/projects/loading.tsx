import styles from "./loading.module.css";

export default function ProjectsIndexLoading() {
  return (
    <div className={styles.page} aria-hidden="true">
      <div className={styles.inner}>
        <div className={`${styles.bar} ${styles.top}`} />
        <div className={`${styles.bar} ${styles.heading}`} />
        <div className={`${styles.bar} ${styles.intro}`} />
        <div className={styles.grid}>
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className={styles.card}>
              <div className={`${styles.bar} ${styles.client}`} />
              <div className={`${styles.bar} ${styles.cardTitle}`} />
              <div className={`${styles.bar} ${styles.cardLine}`} />
              <div className={`${styles.bar} ${styles.cardLine} ${styles.short}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
