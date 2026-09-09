"use client";

import Link from "next/link";
import { entitySeoBlocks } from "@/content/seo";
import type { Localized } from "@/content/types";
import { useLocale } from "@/lib/locale";
import styles from "./EntitySeoContent.module.css";

/**
 * Expertise / trajectory narrative. Follows the active locale.
 * (one language at a time). Structured data for crawlers lives in JSON-LD.
 */
export function EntitySeoContent() {
  const { t, l } = useLocale();

  return (
    <section
      id="expertise"
      className={styles.section}
      aria-labelledby="expertise-heading"
    >
      <div className={styles.inner}>
        <p className={styles.top}>{t.nav.expertise}</p>
        <h2 id="expertise-heading" className={styles.heading}>
          {l(expertiseIntro.heading)}
        </h2>
        <p className={styles.lead}>{l(expertiseIntro.lead)}</p>

        {entitySeoBlocks.map((block) => (
          <article key={block.id} className={styles.block}>
            <h3 className={styles.subheading}>{l(block.heading)}</h3>
            {l(block.paragraphs).map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </article>
        ))}

        <p className={styles.footerNote}>
          {l(expertiseIntro.relatedLabel)}{" "}
          <Link href="/projects/carrefour?from=home">Carrefour Argentina</Link>,{" "}
          <Link href="/projects/cetrogar?from=home">Cetrogar</Link>,{" "}
          <Link href="/projects/medis?from=home">Médis Marketplace</Link>,{" "}
          <Link href="/projects/rouge?from=home">
            {l(expertiseIntro.rougeLabel)}
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

const expertiseIntro = {
  heading: {
    es: "Liderazgo técnico en VTEX y arquitectura ecommerce",
    en: "Technical leadership in VTEX and ecommerce architecture",
    "pt-BR": "Liderança técnica em VTEX e arquitetura ecommerce",
    it: "Leadership tecnica in VTEX e architettura ecommerce",
  },
  lead: {
    es: "Soy Technical Lead en Valtech. Trabajo sobre VTEX, VTEX IO, FastStore y arquitectura ecommerce, liderando y metiendo mano en el código cuando hace falta.",
    en: "I'm a Technical Lead at Valtech. I work on VTEX, VTEX IO, FastStore and ecommerce architecture, leading and jumping into the code when needed.",
    "pt-BR":
      "Sou Technical Lead na Valtech. Trabalho com VTEX, VTEX IO, FastStore e arquitetura ecommerce, liderando e entrando no código quando precisa.",
    it: "Sono Technical Lead in Valtech. Lavoro su VTEX, VTEX IO, FastStore e architettura ecommerce, guidando e entrando nel codice quando serve.",
  },
  relatedLabel: {
    es: "Proyectos relacionados:",
    en: "Related projects:",
    "pt-BR": "Projetos relacionados:",
    it: "Progetti correlati:",
  },
  rougeLabel: {
    es: "Ecosistema Rouge",
    en: "Rouge ecosystem",
    "pt-BR": "Ecossistema Rouge",
    it: "Ecosistema Rouge",
  },
} satisfies {
  heading: Localized;
  lead: Localized;
  relatedLabel: Localized;
  rougeLabel: Localized;
};
