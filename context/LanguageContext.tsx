"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { useRouter } from "next/router";

// Language Types
type Language = "EN" | "FR";

// Language Context Type
type LanguageContextType = {
  activeLanguage: Language;
  toggleLanguage: (lang: Language) => void;
};

// Language Context Default Value
const defaultValue: LanguageContextType = {
  activeLanguage: "EN", // Cette valeur sera ajustée dynamiquement
  toggleLanguage: () => {},
};

// Language Context
export const LanguageContext = createContext<LanguageContextType>(defaultValue);

// useLanguage Hook
export const useLanguage = () => useContext(LanguageContext);

// Language Provider Props
interface LanguageProviderProps {
  children: ReactNode;
}

// Language Provider Component
export function LanguageProvider({ children }: LanguageProviderProps) {
  const router = useRouter();
  const { locale, defaultLocale } = router;

  // Determine the active language based on the current locale
  const activeLanguage: Language = locale === "fr" ? "FR" : "EN";

  // Modify the active language and update the URL
  const toggleLanguage = useCallback(
    (lang: Language) => {
      const newLocale = lang.toLowerCase(); // 'en' or 'fr'
      const path = `${router.pathname}${window.location.hash}`;
      router.push(path, path, { locale: newLocale });
      localStorage.setItem("appLanguage", newLocale.toUpperCase());
    },
    [router]
  );

  useEffect(() => {
    // Set the lang attribute on the html element to match the current locale
    document.documentElement.setAttribute(
      "lang",
      locale || defaultLocale || ""
    );
  }, [locale, defaultLocale]);

  // useMemo to memoize context value
  const value = useMemo(
    () => ({
      activeLanguage,
      toggleLanguage,
    }),
    [activeLanguage, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
