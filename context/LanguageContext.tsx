"use client";

import { createContext, useContext, ReactNode, useEffect } from "react";
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
  const toggleLanguage = (lang: Language) => {
    const newLocale = lang.toLowerCase(); // 'en' or 'fr'
    // Build the new URL
    const path = `${router.pathname}${window.location.hash}`;
    // Update the URL and the locale
    router.push(path, path, { locale: newLocale });
    // Save the new language in localStorage
    localStorage.setItem("appLanguage", newLocale.toUpperCase());
  };

  useEffect(() => {
    // Set the lang attribute on the html element to match the current locale
    document.documentElement.setAttribute(
      "lang",
      locale || defaultLocale || ""
    );
  }, [locale, defaultLocale]);

  return (
    <LanguageContext.Provider value={{ activeLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
