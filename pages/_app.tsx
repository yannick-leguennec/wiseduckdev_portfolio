"use client";

import { AppProps } from "next/app";
import { LanguageProvider } from "../context/LanguageContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
