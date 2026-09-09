"use client";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { contactInfo, socialLinks } from "@/content/site";
import { useLocale } from "@/lib/locale";
import { track } from "@/lib/analytics";
import { useSectionView } from "@/lib/useSectionView";
import { CvDownload } from "@/components/ui/CvDownload";
import styles from "./Contact.module.css";

type ContactChannel = "whatsapp" | "linkedin" | "email" | "github";

export function Contact() {
  const { t, l } = useLocale();
  const sectionRef = useSectionView("contact");

  const linkedin = socialLinks.find((l) => l.id === "linkedin");
  const github = socialLinks.find((l) => l.id === "github");

  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(
    t.contact.whatsappMessage,
  )}`;
  const emailUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    t.contact.emailSubject,
  )}&body=${encodeURIComponent(t.contact.emailBody)}`;

  const onChannel = (channel: ContactChannel) => {
    track("contact_click", { channel });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="contact-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.top}>{t.contact.topLine}</p>
          <h2 id="contact-heading" className={styles.heading}>
            {t.contact.heading}
          </h2>
          <p className={styles.intro}>{t.contact.intro}</p>
        </header>

        <div className={styles.actions} role="list">
          <a
            role="listitem"
            className={`${styles.card} ${styles.primary}`}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onChannel("whatsapp")}
          >
            <FaWhatsapp aria-hidden="true" focusable="false" />
            <span className={styles.cardLabel}>{t.contact.whatsapp}</span>
            <span className={styles.cardHint}>{t.contact.whatsappHint}</span>
          </a>

          {linkedin ? (
            <a
              role="listitem"
              className={styles.card}
              href={linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onChannel("linkedin")}
            >
              <FaLinkedin aria-hidden="true" focusable="false" />
              <span className={styles.cardLabel}>{t.contact.linkedin}</span>
              <span className={styles.cardHint}>{t.contact.linkedinHint}</span>
            </a>
          ) : null}

          <a
            role="listitem"
            className={styles.card}
            href={emailUrl}
            onClick={() => onChannel("email")}
          >
            <FaEnvelope aria-hidden="true" focusable="false" />
            <span className={styles.cardLabel}>{t.contact.email}</span>
            <span className={styles.cardHint}>{contactInfo.email}</span>
          </a>

          {github ? (
            <a
              role="listitem"
              className={styles.card}
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onChannel("github")}
            >
              <FaGithub aria-hidden="true" focusable="false" />
              <span className={styles.cardLabel}>{t.contact.github}</span>
              <span className={styles.cardHint}>{t.contact.githubHint}</span>
            </a>
          ) : null}
        </div>

        <div className={styles.meta}>
          <p className={styles.location}>
            <MdLocationOn aria-hidden="true" />
            <span>{l(contactInfo.location)}</span>
          </p>
          <CvDownload source="contact" />
        </div>
      </div>
    </section>
  );
}
