"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { LANGUAGES } from "@/content/languages";
import type { Locale } from "@/content/types";
import { useLocale } from "@/lib/locale";
import styles from "./LanguageSwitcher.module.css";

const MENU_ESTIMATE_HEIGHT = 220;

type PlacementMode = "auto" | "inline";

export function LanguageSwitcher({
  mode = "auto",
}: {
  mode?: PlacementMode;
}) {
  const { locale, setLocale, t } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [menuPos, setMenuPos] = useState({
    top: 0,
    left: 0,
    width: 176,
    placement: "bottom" as "top" | "bottom",
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const current = LANGUAGES.find((lang) => lang.code === locale) ?? LANGUAGES[0];
  const inline = mode === "inline";

  const updateMenuPosition = () => {
    if (inline) return;
    const trigger = triggerRef.current;
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();
    const width = Math.max(rect.width, 176);
    const spaceBelow = window.innerHeight - rect.bottom;
    const placement =
      spaceBelow < MENU_ESTIMATE_HEIGHT + 12 ? "top" : "bottom";

    let left = rect.right - width;
    left = Math.max(8, Math.min(left, window.innerWidth - width - 8));

    setMenuPos({
      top: placement === "top" ? rect.top - 6 : rect.bottom + 6,
      left,
      width,
      placement,
    });
  };

  const closeDropdown = () => {
    setIsOpen(false);
    setIsAnimated(false);
  };

  const toggleDropdown = () => {
    if (isOpen) closeDropdown();
    else {
      setIsAnimated(false);
      setIsOpen(true);
    }
  };

  useLayoutEffect(() => {
    if (!isOpen) return;
    updateMenuPosition();
    const frame = requestAnimationFrame(() => setIsAnimated(true));
    if (!inline) {
      window.addEventListener("resize", updateMenuPosition);
      window.addEventListener("scroll", updateMenuPosition, true);
    }
    return () => {
      cancelAnimationFrame(frame);
      if (!inline) {
        window.removeEventListener("resize", updateMenuPosition);
        window.removeEventListener("scroll", updateMenuPosition, true);
      }
    };
  }, [isOpen, inline]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        containerRef.current?.contains(target) ||
        document.getElementById("language-selector-menu")?.contains(target)
      ) {
        return;
      }
      closeDropdown();
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDropdown();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleSelect = (code: Locale) => {
    setLocale(code);
    closeDropdown();
  };

  const menu = isOpen ? (
    <div
      id={inline ? undefined : "language-selector-menu"}
      className={inline ? styles.menuInline : styles.menu}
      style={
        inline
          ? undefined
          : {
              top: menuPos.top,
              left: menuPos.left,
              width: menuPos.width,
            }
      }
      data-open={isAnimated ? "true" : "false"}
      data-placement={inline ? "top" : menuPos.placement}
    >
      <ul role="listbox" aria-label={t.language.label} className={styles.list}>
        {LANGUAGES.map(({ code, label, name }, index) => {
          const isActive = code === locale;
          return (
            <li
              key={code}
              role="option"
              aria-selected={isActive}
              className={styles.item}
              data-open={isAnimated ? "true" : "false"}
              style={{
                transitionDelay: isAnimated ? `${80 + index * 45}ms` : "0ms",
              }}
            >
              <button
                type="button"
                className={`${styles.option} ${isActive ? styles.optionActive : ""}`}
                onClick={() => handleSelect(code)}
              >
                <span
                  className={`${styles.pill} ${isActive ? styles.pillActive : ""}`}
                >
                  {label}
                </span>
                <span className={styles.name}>{name}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  ) : null;

  const dropdown =
    !inline && menu && typeof document !== "undefined"
      ? createPortal(menu, document.body)
      : null;

  return (
    <div
      ref={containerRef}
      className={`${styles.wrap} ${inline ? styles.wrapInline : ""}`}
    >
      <button
        ref={triggerRef}
        type="button"
        className={`${styles.trigger} ${isOpen ? styles.triggerOpen : ""}`}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`${t.language.selectLabel} (${current.label})`}
      >
        <GlobeIcon />
        <span>{current.label}</span>
        <ChevronIcon open={isOpen} />
      </button>
      {inline ? menu : dropdown}
    </div>
  );
}

function GlobeIcon() {
  return (
    <svg
      className={styles.icon}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 21a9 9 0 100-18 9 9 0 000 18z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.6 9h16.8M3.6 15h16.8"
      />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}
