"use client";

import Script from "next/script";
import { useEffect } from "react";
import { AppProps } from "next/app";
import { LanguageProvider } from "../context/LanguageContext";
import { LoaderProvider, useLoader } from "../context/LoaderContext";
import { ConsentProvider } from "../context/ConsentContext";
import ConsentModal from "../components/Modals/consentModal/consentModal";
import Loader from "../components/Loader/Loader";
import Router from "next/router";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <LanguageProvider>
      <LoaderProvider>
        <ConsentProvider>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
            strategy="afterInteractive"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Configure GA to wait for consent to collect data
            gtag('consent', 'default', {
                ad_storage: 'denied',
                analytics_storage: 'denied'
            });

            gtag('js', new Date());

            // Update this configuration upon receiving consent
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
                cookie_domain: 'auto',
                cookie_flags: 'SameSite=None; Secure',
                anonymize_ip: true
            });
        `,
            }}
          />
          <ComponentWithLoader
            Component={Component}
            pageProps={pageProps}
            router={router}
          />
          <ConsentModal />
        </ConsentProvider>
      </LoaderProvider>
    </LanguageProvider>
  );
}

// ComponentWithLoader component to wrap the app component with the Loader component
const ComponentWithLoader: React.FC<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  // Custom hook to manage the loading state
  const { loading, setLoading } = useLoader();

  useEffect(() => {
    // Function to handle the route change start
    const handleRouteChangeStart = () => setLoading(true);
    // Function to handle the route change complete
    const handleRouteChangeComplete = () => setLoading(false);

    // Event listeners for route changes
    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);
    Router.events.on("routeChangeError", handleRouteChangeComplete);

    // Cleanup function
    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
      Router.events.off("routeChangeError", handleRouteChangeComplete);
    };
  }, [setLoading]);

  // Return the component with the Loader component
  return (
    <>
      {/* The loader appears only if the laoding variable is true */}
      {loading && <Loader />}
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
