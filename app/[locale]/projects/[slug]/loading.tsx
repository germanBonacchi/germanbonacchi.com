import styles from "./loading.module.css";

export default function ProjectDetailLoading() {
  return (
    <div className={styles.article} aria-hidden="true">
      <div className={styles.inner}>
        <div className={`${styles.bar} ${styles.back}`} />
        <div className={styles.brandRow}>
          <div className={styles.logo} />
          <div className={`${styles.bar} ${styles.client}`} />
        </div>
        <div className={`${styles.bar} ${styles.title}`} />
        <div className={`${styles.bar} ${styles.role}`} />
        <div className={`${styles.bar} ${styles.line}`} />
        <div className={`${styles.bar} ${styles.line} ${styles.short}`} />
        <div className={`${styles.bar} ${styles.button}`} />
      </div>
    </div>
  );
}
