"use client";

import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { useLocale } from "@/lib/locale";
import { localizedHref } from "@/lib/paths";
import styles from "./LandingBack.module.css";

/** Shared back link for content landings (same pattern as project detail). */
export function LandingBack({ href = "/" }: { href?: string }) {
  const { t, locale } = useLocale();

  return (
    <p className={styles.back}>
      <Link href={localizedHref(locale, href)}>
        <HiArrowLeft aria-hidden="true" />
        {t.landings.back}
      </Link>
    </p>
  );
}
