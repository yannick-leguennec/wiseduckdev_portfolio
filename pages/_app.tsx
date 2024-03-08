"use client";

import { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { LanguageProvider } from "../context/LanguageContext";
import Loader from "../components/Loader/Loader";
import Footer from "../components/Footer/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  // State to manage the loading of the app
  const [isLoading, setIsLoading] = useState(true);

  // Loading the app for 2 seconds at the beginning
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
