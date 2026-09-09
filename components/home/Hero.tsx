"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { useLocale } from "@/lib/locale";
import { localizedHref } from "@/lib/paths";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { useSectionView } from "@/lib/useSectionView";
import { track } from "@/lib/analytics";
import styles from "./Hero.module.css";

export function Hero() {
  const { t, l, locale } = useLocale();
  const sectionRef = useSectionView("home", "hero");

  return (
    <section
      id="home"
      ref={sectionRef}
      className={styles.hero}
      aria-labelledby="hero-name"
    >
      <div className={styles.bg} aria-hidden="true">
        <ParticlesBackground />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <p className={styles.greeting}>{t.hero.greeting}</p>
        <h1 id="hero-name" className={styles.name}>
          {siteConfig.name}
        </h1>
        <div className={styles.photoWrap}>
          <Image
            src="/images/profile.jpg"
            alt={t.hero.photoAlt}
            width={160}
            height={160}
            priority
            className={styles.photo}
          />
        </div>
        <p className={styles.role}>{l(siteConfig.jobTitle)}</p>
      </div>

      <Link
        href={localizedHref(locale, "/#about")}
        className={styles.scrollDown}
        aria-label={t.hero.scrollDown}
        onClick={() => track("nav_section", { section: "about" })}
      >
        <svg
          className={styles.scrollIcon}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Link>
    </section>
  );
}
