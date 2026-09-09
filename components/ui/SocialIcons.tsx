"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { socialLinks } from "@/content/site";
import { useLocale } from "@/lib/locale";
import { track } from "@/lib/analytics";
import styles from "./SocialIcons.module.css";

const ICONS = {
  linkedin: FaLinkedin,
  github: FaGithub,
  email: FaEnvelope,
} as const;

export function SocialIcons({ compact = false }: { compact?: boolean }) {
  const { l } = useLocale();
  const links = compact
    ? socialLinks.filter((link) => link.id !== "email")
    : socialLinks;

  return (
    <ul className={`${styles.list} ${compact ? styles.compact : ""}`}>
      {links.map((link) => {
        const Icon = ICONS[link.id];
        const external = link.id !== "email";
        return (
          <li key={link.id}>
            <a
              href={link.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={l(link.ariaLabel)}
              className={styles.link}
              onClick={() => track("social_click", { network: link.id })}
            >
              <Icon aria-hidden="true" focusable="false" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
