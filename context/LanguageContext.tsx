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

  const toggleLanguage = useCallback(
    (lang: Language) => {
      localStorage.setItem("scrollPosition", window.scrollY.toString());

      // Determine the new locale and construct the newPath conditionally
      const newLocale = lang.toLowerCase(); // 'en' or 'fr'
      const isFrench = newLocale === "fr";

      // If the current language is French and switching to English,
      // or if it's English and switching to French, update the path accordingly.
      let newPath = router.asPath;
      if (isFrench) {
        // When switching to French, ensure "/fr" is prepended
        if (!newPath.startsWith("/fr")) {
          newPath = `/fr${newPath}`;
        }
      } else {
        // When switching to English, remove the "/fr" prefix if present
        newPath = newPath.replace(/^\/fr/, "");
      }

      router
        .push(router.pathname, newPath, { locale: newLocale, shallow: true })
        .then(() => {
          const savedPosition = localStorage.getItem("scrollPosition");
          if (savedPosition) {
            window.scrollTo(0, parseInt(savedPosition, 10));
            localStorage.removeItem("scrollPosition");
          }
        });

      localStorage.setItem("appLanguage", lang);
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
