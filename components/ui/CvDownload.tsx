"use client";

import { useLocale } from "@/lib/locale";
import { track } from "@/lib/analytics";
import styles from "./CvDownload.module.css";

export function CvDownload({ source }: { source: string }) {
  const { locale, t } = useLocale();
  const href = locale === "es" ? "/cv-es.pdf" : "/cv-en.pdf"; // ES CV; EN for EN/BR/PT/IT

  return (
    <a
      href={href}
      download
      className={styles.link}
      onClick={() => track("cv_click", { source, locale })}
    >
      {t.cv.download}
    </a>
  );
}
