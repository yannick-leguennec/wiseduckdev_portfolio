import { createContext, useContext, useState, useEffect, useMemo } from "react";

type ConsentContextType = {
  consent: boolean | null;
  updateConsent: (consent: boolean) => void;
};

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export const ConsentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem("consent");
    if (storedConsent === null) {
      localStorage.setItem("consent", "null");
      setConsent(null);
    } else {
      const isConsentTrue = storedConsent === "true";
      setConsent(isConsentTrue ? true : false);
      // If consent value is found in local storage, update GA settings
      if (isConsentTrue) {
        updateGAConsent(true);
      }
    }
  }, []);

  const updateConsent = (newConsent: boolean) => {
    setConsent(newConsent);
    localStorage.setItem("consent", newConsent.toString());
    // Update GA settings anytime the consent changes
    updateGAConsent(newConsent);
  };

  // Function to update Google Analytics consent configuration
  const updateGAConsent = (consent: boolean) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: consent ? "granted" : "denied",
        analytics_storage: consent ? "granted" : "denied",
      });
    }
  };

  const contextValue = useMemo(
    () => ({
      consent,
      updateConsent,
    }),
    [consent]
  );

  return (
    <ConsentContext.Provider value={contextValue}>
      {children}
    </ConsentContext.Provider>
  );
};

export const useConsent = () => {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error("useConsent must be used within a ConsentProvider");
  }
  return context;
};
