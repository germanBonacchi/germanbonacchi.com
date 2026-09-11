"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FOOTER_SECTIONS, NAV_SECTIONS, navHref, navLabel } from "@/content/nav";
import { useLocale } from "@/lib/locale";
import { localizedHref } from "@/lib/paths";
import { track } from "@/lib/analytics";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { LogoD20 } from "@/components/ui/LogoD20";
import { SocialIcons } from "@/components/ui/SocialIcons";
import styles from "./Header.module.css";

export function Header() {
  const { t, locale } = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const allowScroll = (target: EventTarget | null) => {
      const el = target as HTMLElement | null;
      return Boolean(el?.closest(`.${styles.drawerNav}`));
    };

    const onTouchMove = (e: TouchEvent) => {
      if (allowScroll(e.target)) return;
      e.preventDefault();
    };

    const onWheel = (e: WheelEvent) => {
      if (allowScroll(e.target)) return;
      e.preventDefault();
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("touchmove", onTouchMove, { passive: false });
    document.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("wheel", onWheel);
    };
  }, [open]);

  const handleNav = (section: string) => {
    track("nav_section", { section });
    setOpen(false);
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          <Link
            href={localizedHref(locale, "/#home")}
            className={styles.logo}
            aria-label={t.nav.home}
            onClick={() => handleNav("home")}
          >
            <LogoD20 className={styles.logoSvg} />
          </Link>

          <div className={styles.right}>
            <nav className={styles.nav} aria-label="Primary">
              {NAV_SECTIONS.map((id) => (
                <Link
                  key={id}
                  href={navHref(locale, id)}
                  className={styles.navLink}
                  onClick={() => handleNav(id)}
                >
                  {navLabel(t, id)}
                </Link>
              ))}
            </nav>

            <div className={styles.actions}>
              <SocialIcons compact />
              <div className={styles.headerLang}>
                <LanguageSwitcher />
              </div>
              <button
                type="button"
                className={styles.menuBtn}
                aria-expanded={open}
                aria-controls="mobile-nav"
                aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
                onClick={() => setOpen((v) => !v)}
              >
                <FaBars aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}
        hidden={!open}
      >
        <nav className={styles.drawerNav} aria-label="Mobile">
          {FOOTER_SECTIONS.map((id) => (
            <Link
              key={id}
              href={navHref(locale, id)}
              className={styles.drawerLink}
              onClick={() => handleNav(id)}
            >
              {navLabel(t, id)}
            </Link>
          ))}
        </nav>
        <div className={styles.drawerFooter}>
          <SocialIcons />
          <LanguageSwitcher mode="inline" />
        </div>
      </div>
      {open ? (
        <button
          type="button"
          className={styles.backdrop}
          aria-label={t.nav.closeMenu}
          onClick={() => setOpen(false)}
        />
      ) : null}
    </>
  );
}
