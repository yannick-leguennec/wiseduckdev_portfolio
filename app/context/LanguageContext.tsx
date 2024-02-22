"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Language Types
type Language = "EN" | "FR";

// Language Context Type
type LanguageContextType = {
  activeLanguage: Language;
  toggleLanguage: (lang: "EN" | "FR") => void;
};

// Language Context Default Value
const defaultValue: LanguageContextType = {
  activeLanguage: "EN", // Initial value
  toggleLanguage: () => {},
};

// Language Context
const LanguageContext = createContext<LanguageContextType>(defaultValue);

// useLanguage Hook
export const useLanguage = () => useContext(LanguageContext);

// Language Provider Props
interface LanguageProviderProps {
  children: ReactNode;
}

// Language Provider Component
export function LanguageProvider({ children }: LanguageProviderProps) {
  const [activeLanguage, setActiveLanguage] = useState<Language>("EN");

  useEffect(() => {
    const lang = (localStorage.getItem("appLanguage") as Language) || "EN";
    setActiveLanguage(lang);
  }, []);

  const toggleLanguage = (lang: Language) => {
    setActiveLanguage(lang);
    localStorage.setItem("appLanguage", lang); // Save to localStorage
  };

  return (
    <LanguageContext.Provider value={{ activeLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
