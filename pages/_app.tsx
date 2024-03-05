"use client";

import { AppProps } from "next/app";
import { useEffect } from "react";
import { useLanguage, LanguageProvider } from "@/context/LanguageContext";
import Footer from "@/components/Footer/Footer";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
      <Footer />
    </LanguageProvider>
  );
}

export default MyApp;
