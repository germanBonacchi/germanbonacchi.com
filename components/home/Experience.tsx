"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { education, experiences } from "@/content/experience";
import { technologyById } from "@/content/technologies";
import type { Locale } from "@/content/types";
import { useLocale } from "@/lib/locale";
import { useSectionView } from "@/lib/useSectionView";
import styles from "./Experience.module.css";

const DATE_LOCALE: Record<Locale, string> = {
  es: "es-AR",
  en: "en-US",
  "pt-BR": "pt-BR",
  it: "it-IT",
};

/** Formats YYYY or YYYY-MM for the active locale (e.g. "sept. 2022"). */
function formatMonthYear(value: string, locale: Locale) {
  const match = /^(\d{4})(?:-(\d{2}))?$/.exec(value);
  if (!match) return value;
  const year = Number(match[1]);
  const month = match[2] ? Number(match[2]) : null;
  if (!month) return String(year);
  const formatted = new Intl.DateTimeFormat(DATE_LOCALE[locale], {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, 1)));
  return formatted
    .replace(/\./g, "")
    .replace(/\s+de\s+/i, " ")
    .replace(/^./, (c) => c.toUpperCase());
}

function formatDateRange(
  startDate: string,
  endDate: string,
  presentLabel: string,
  locale: Locale,
) {
  const start = startDate ? formatMonthYear(startDate, locale) : "";
  const end =
    endDate === "present"
      ? presentLabel
      : endDate
        ? formatMonthYear(endDate, locale)
        : "";
  if (start && end) return `${start} — ${end}`;
  return start || end;
}

/** Viewport Y used as the “read head” that drives fill (below sticky nav). */
function readingLineY() {
  const nav = Number.parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--nav-height"),
  );
  const navPx = Number.isFinite(nav) && nav > 0 ? nav : 72;
  return Math.min(window.innerHeight * 0.32, navPx + window.innerHeight * 0.18);
}

export function Experience() {
  const { t, l, locale } = useLocale();
  const sectionRef = useSectionView("experience");
  const itemRefs = useRef<Map<string, HTMLElement>>(new Map());
  /** Continuous progress along the rail: 0 = first dot, n-1 = last dot */
  const [progress, setProgress] = useState(0);

  const lastIndex = Math.max(0, experiences.length - 1);
  const activeIndex = Math.min(lastIndex, Math.max(0, Math.round(progress)));

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const nodes = experiences
        .map((item) => itemRefs.current.get(item.id))
        .filter((node): node is HTMLElement => Boolean(node));
      if (nodes.length < 1) return;

      const readY = readingLineY();
      const centers = nodes.map((node) => {
        const dot = node.querySelector<HTMLElement>(`.${styles.itemDot}`);
        const rect = (dot ?? node).getBoundingClientRect();
        return rect.top + rect.height / 2;
      });

      const first = centers[0];
      const last = centers[centers.length - 1];

      if (readY <= first) {
        setProgress(0);
        return;
      }
      if (readY >= last) {
        setProgress(lastIndex);
        return;
      }

      let index = 0;
      for (let i = 0; i < centers.length - 1; i++) {
        if (readY >= centers[i] && readY <= centers[i + 1]) {
          index = i;
          break;
        }
        if (readY > centers[i + 1]) index = i + 1;
      }

      if (index >= lastIndex) {
        setProgress(lastIndex);
        return;
      }

      const a = centers[index];
      const b = centers[index + 1];
      const span = Math.max(1, b - a);
      const local = (readY - a) / span;
      setProgress(index + Math.min(1, Math.max(0, local)));
    };

    const onScrollOrResize = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [lastIndex]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="experience-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.top}>{t.experience.topLine}</p>
          <h2 id="experience-heading" className={styles.heading}>
            {t.experience.heading}
          </h2>
        </header>

        <ol className={styles.timeline}>
          {experiences.map((item, index) => {
            const isPast = progress > index + 0.02;
            const isActive = index === activeIndex;
            const lineFill = Math.min(1, Math.max(0, progress - index));
            const yearRange = formatDateRange(
              item.startDate,
              item.endDate,
              t.experience.present,
              locale,
            );

            return (
              <li
                key={item.id}
                data-experience-id={item.id}
                ref={(node) => {
                  if (node) itemRefs.current.set(item.id, node);
                  else itemRefs.current.delete(item.id);
                }}
                className={[
                  styles.item,
                  isActive ? styles.itemActive : "",
                  isPast ? styles.itemPast : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className={styles.itemRail} aria-hidden="true">
                  <span className={styles.itemDot} />
                  {index < experiences.length - 1 ? (
                    <span className={styles.itemLine}>
                      <span
                        className={styles.itemLineFill}
                        style={{ transform: `scaleY(${lineFill})` }}
                      />
                    </span>
                  ) : null}
                </div>

                <div className={styles.content}>
                  <div className={styles.meta}>
                    {yearRange ? (
                      <p className={styles.dates}>{yearRange}</p>
                    ) : null}
                    <h3 className={styles.role}>{l(item.role)}</h3>
                    <p className={styles.company}>
                      {item.companyUrl ? (
                        <a
                          href={item.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.company}
                        </a>
                      ) : (
                        item.company
                      )}
                    </p>
                  </div>
                  <div className={styles.body}>
                    <p>{l(item.summary)}</p>
                    <ul>
                      {l(item.highlights).map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    <ul className={styles.tech} aria-label="Technologies">
                      {item.technologies.map((id) => (
                        <li key={id}>{technologyById[id]?.name ?? id}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        <aside
          className={styles.education}
          aria-label={t.experience.educationLabel}
        >
          <h3>{t.experience.educationLabel}</h3>
          <div className={styles.educationBody}>
            <a
              href={education.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.educationLogo}
            >
              <Image
                src={education.logo}
                alt={education.institution}
                width={240}
                height={295}
                sizes="(max-width: 599px) 77px, 97px"
              />
            </a>
            <div className={styles.educationCopy}>
              <p>
                <a
                  href={education.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {education.institution}
                </a>
              </p>
              <p className={styles.educationProgram}>{l(education.program)}</p>
              <p>{l(education.note)}</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
