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

  // Déterminer la langue active basée sur la locale actuelle de Next.js
  const activeLanguage: Language = locale === "fr" ? "FR" : "EN";

  // Modifier l'URL pour changer la langue
  const toggleLanguage = (lang: Language) => {
    const newLocale = lang.toLowerCase(); // 'en' ou 'fr'
    // Construire le chemin vers lequel naviguer
    const path = `${router.pathname}${window.location.hash}`;
    // Mettre à jour l'URL avec la nouvelle locale sans recharger la page
    router.push(path, path, { locale: newLocale });
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
