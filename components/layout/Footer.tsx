"use client";

import Link from "next/link";
import { NAV_SECTIONS, navHref, navLabel } from "@/content/nav";
import { siteConfig } from "@/content/site";
import { useLocale } from "@/lib/locale";
import { SocialIcons } from "@/components/ui/SocialIcons";
import styles from "./Footer.module.css";

export function Footer() {
  const { t, l } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <p className={styles.name}>{siteConfig.name}</p>
          <p className={styles.role}>{l(siteConfig.jobTitle)}</p>
        </div>
        <nav className={styles.nav} aria-label="Footer">
          {NAV_SECTIONS.map((id) => (
            <Link key={id} href={navHref(id)}>
              {navLabel(t, id)}
            </Link>
          ))}
        </nav>
        <SocialIcons />
      </div>
      <p className={styles.copy}>
        © {year} {siteConfig.name}. {t.footer.rights}
      </p>
    </footer>
  );
}
