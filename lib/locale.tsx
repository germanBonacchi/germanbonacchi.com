"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { DEFAULT_LOCALE } from "@/content/languages";
import { ui, type UiCopy } from "@/content/ui";
import type { Locale, Localized } from "@/content/types";
import { track } from "@/lib/analytics";
import { localize } from "@/lib/localize";
import { localizedHref, stripLocalePrefix } from "@/lib/paths";

interface LocaleContextValue {
  locale: Locale;
  /** Navigates to the same page under `locale`'s URL (real navigation, not just a state flip). */
  setLocale: (locale: Locale) => void;
  t: UiCopy;
  /** Resolve localized content with fallbacks */
  l: <T>(value: Localized<T>) => T;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "gb-locale";

export function LocaleProvider({
  children,
  initialLocale = DEFAULT_LOCALE,
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const router = useRouter();
  const locale = initialLocale;

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = useCallback(
    (next: Locale) => {
      track("language_switch", { locale: next });
      const currentPath =
        stripLocalePrefix(window.location.pathname) +
        window.location.search +
        window.location.hash;
      router.push(localizedHref(next, currentPath));
    },
    [router],
  );

  const l = useCallback(
    <T,>(value: Localized<T>) => localize(value, locale),
    [locale],
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: ui[locale],
      l,
    }),
    [locale, setLocale, l],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
