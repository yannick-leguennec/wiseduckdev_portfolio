// contexts/LoaderContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// LoadeerContextType
type LoaderContextType = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

// LoaderContext
export const LoaderContext = createContext<LoaderContextType | undefined>(
  undefined
);

// LoaderProvider
export const LoaderProvider = ({ children }: { children: ReactNode }) => {
  // state variables managing the loading state
  const [loading, setLoading] = useState(true);

  //   value object
  const value = { loading, setLoading };

  //   return LoaderContext.Provider
  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
};

// useLoader
export const useLoader = (): LoaderContextType => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }
  return context;
};
