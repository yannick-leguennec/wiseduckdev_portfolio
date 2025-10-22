"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { useRouter } from "next/router";

// 1. Define the two possible language values supported by the app
type Language = "EN" | "FR";

// 2. Define the shape of the context, specifying what data and functions it provides
type LanguageContextType = {
  activeLanguage: Language; // the currently active language ("EN" or "FR")
  toggleLanguage: (lang: Language) => void; // function to switch language
};

// 3. Define a default value for the context (this will be used before the provider mounts)
const defaultValue: LanguageContextType = {
  activeLanguage: "EN", // default language (used before the actual value is set)
  toggleLanguage: () => {}, // empty placeholder function
};

// 4. Create the context itself
const LanguageContext = createContext<LanguageContextType>(defaultValue);

// 5. Custom hook that allows other components to access this context easily
export const useLanguage = () => useContext(LanguageContext);

// 6. Define the provider component which wraps your app and provides the context value
interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const router = useRouter();
  const { locale } = router;

  /**
   * Determine the currently active language based on Next.js locale.
   * Next.js sets `locale` to either "en" or "fr" depending on the active route.
   * We map these values to our own uppercase internal language format ("EN" or "FR").
   */
  const activeLanguage: Language = locale === "fr" ? "FR" : "EN";

  /**
   * Function to toggle the language.
   * It updates the URL path, Next.js locale, and localStorage accordingly.
   */
  const toggleLanguage = useCallback(
    (lang: Language) => {
      if (typeof window === "undefined") return; // Prevent running during SSR (server-side rendering)

      // Save the user's current scroll position so it can be restored after language switch
      localStorage.setItem("scrollPosition", window.scrollY.toString());

      // Convert the target language (EN/FR) to lowercase because Next.js uses "en"/"fr"
      const newLocale = lang.toLowerCase();
      let newPath = router.asPath; // current URL path (e.g., "/", "/portfolio", etc.)

      // Adjust the URL structure based on the target language
      if (newLocale === "fr") {
        // If switching to French, add the "/fr" prefix if it's not already there
        if (!newPath.startsWith("/fr")) {
          newPath = `/fr${newPath}`;
        }
      } else {
        // If switching to English, remove the "/fr" prefix if present
        newPath = newPath.replace(/^\/fr/, "");
      }

      // Navigate to the new path with the correct locale
      router
        .push(newPath, newPath, { locale: newLocale, shallow: true })
        .then(() => {
          // Once the navigation is complete, restore the previous scroll position
          const savedPosition = localStorage.getItem("scrollPosition");
          if (savedPosition) {
            window.scrollTo(0, parseInt(savedPosition, 10));
            localStorage.removeItem("scrollPosition");
          }
        });

      // Store the newly selected language in localStorage
      localStorage.setItem("appLanguage", lang);
    },
    [router]
  );

  /**
   * This effect ensures that the <html> tag always has the correct "lang" attribute.
   * It runs whenever the Next.js locale changes.
   * Example: <html lang="en"> or <html lang="fr">
   */
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale || "en";
    }
  }, [locale]);

  /**
   * This effect checks localStorage for a previously saved language preference.
   * If a saved language exists and differs from the current locale, the context
   * automatically switches the language and updates the route.
   * This ensures that users who selected a language last time will see the same one
   * when they return to the website.
   */
  useEffect(() => {
    const savedLang = localStorage.getItem("appLanguage");
    // If a language preference was saved and it doesn't match the current locale, toggle it
    if (savedLang && savedLang.toLowerCase() !== locale) {
      toggleLanguage(savedLang as Language);
    }
    // We intentionally disable exhaustive-deps here to ensure this runs only once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Memoize the context value to prevent unnecessary re-renders.
   * This means the value only changes when activeLanguage or toggleLanguage changes.
   */
  const value = useMemo(
    () => ({
      activeLanguage,
      toggleLanguage,
    }),
    [activeLanguage, toggleLanguage]
  );

  /**
   * Return the context provider, wrapping the entire application tree.
   * Any component inside this provider can access activeLanguage and toggleLanguage
   * using the useLanguage() hook.
   */
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// 7. Export the context in case it's needed separately (e.g., for testing)
export { LanguageContext };
