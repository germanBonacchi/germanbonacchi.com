"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LOCALE,
  getLanguageMeta,
  isLocale,
} from "@/content/languages";
import { ui, type UiCopy } from "@/content/ui";
import type { Locale, Localized } from "@/content/types";
import { track } from "@/lib/analytics";
import { localize } from "@/lib/localize";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: UiCopy;
  /** Resolve localized content with fallbacks */
  l: <T>(value: Localized<T>) => T;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "gb-locale";

function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (!stored) return null;
  // Legacy Portugal code → Brazilian Portuguese
  if (stored === "pt") return "pt-BR";
  return isLocale(stored) ? stored : null;
}

export function LocaleProvider({
  children,
  initialLocale = DEFAULT_LOCALE,
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    const stored = readStoredLocale();
    if (stored && stored !== locale) {
      setLocaleState(stored);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- hydrate once from storage
  }, []);

  useEffect(() => {
    document.documentElement.lang = getLanguageMeta(locale).htmlLang;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    track("language_switch", { locale: next });
  }, []);

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
