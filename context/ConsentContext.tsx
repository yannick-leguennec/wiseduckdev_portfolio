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
      setConsent(
        storedConsent === "true"
          ? true
          : storedConsent === "false"
          ? false
          : null
      );
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      consent,
      updateConsent: (newConsent: boolean) => {
        setConsent(newConsent);
        localStorage.setItem("consent", newConsent.toString());
      },
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
