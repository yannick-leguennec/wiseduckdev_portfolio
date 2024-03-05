"use client";

import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LanguageProvider } from "@/context/LanguageContext";
import Loader from "@/components/Loader/Loader";
import Footer from "@/components/Footer/Footer";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => setIsLoading(true);
    const handleComplete = (url: string) => setIsLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
  return (
    <LanguageProvider>
      {isLoading && <Loader />}
      <Component {...pageProps} />
      <Footer />
    </LanguageProvider>
  );
}

export default MyApp;
