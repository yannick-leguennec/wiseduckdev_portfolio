"use client";

import { AppProps } from "next/app";
import React, { useEffect, useState } from "react";

import { LanguageProvider } from "../context/LanguageContext";
import Loader from "../components/Loader/Loader";
import Footer from "../components/Footer/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <LanguageProvider>
      {!isLoading ? (
        <>
          <Component {...pageProps} />
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </LanguageProvider>
  );
}

export default MyApp;
