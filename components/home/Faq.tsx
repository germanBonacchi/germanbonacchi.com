"use client";

import Link from "next/link";
import { faqs } from "@/content/faq";
import { LandingBack } from "@/components/landings/LandingBack";
import { useLocale } from "@/lib/locale";
import { localizedHref } from "@/lib/paths";
import { useSectionView } from "@/lib/useSectionView";
import styles from "./Faq.module.css";

const FAQ_DEEP_LINKS: Record<string, string> = {
  "faststore-when": "/decisions#io-vs-faststore",
};

export function Faq({ isPage = false }: { isPage?: boolean }) {
  const { t, l, locale } = useLocale();
  const sectionRef = useSectionView("faq");
  const Heading = isPage ? "h1" : "h2";

  return (
    <section
      id="faq"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="faq-heading"
    >
      <div className={styles.inner}>
        {isPage ? <LandingBack /> : null}
        <header className={styles.header}>
          <p className={styles.top}>{t.faq.topLine}</p>
          <Heading id="faq-heading" className={styles.heading}>
            {t.faq.heading}
          </Heading>
          <p className={styles.intro}>{t.faq.intro}</p>
        </header>
        <div className={styles.list}>
          {faqs.map((item) => {
            const deepLink = FAQ_DEEP_LINKS[item.id];
            return (
              <details key={item.id} className={styles.item}>
                <summary>{l(item.question)}</summary>
                <p>{l(item.answer)}</p>
                {deepLink ? (
                  <p className={styles.more}>
                    <Link href={localizedHref(locale, deepLink)}>
                      {t.landings.fromFaq}
                    </Link>
                  </p>
                ) : null}
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
