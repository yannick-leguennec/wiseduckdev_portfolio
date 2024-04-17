"use client";

import Script from "next/script";
import { useEffect } from "react";
import { AppProps } from "next/app";
import { LanguageProvider } from "../context/LanguageContext";
import { LoaderProvider, useLoader } from "../context/LoaderContext";
import Loader from "../components/Loader/Loader";
import Router from "next/router";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    // This check ensures TypeScript knows `FB` could be undefined initially
    if (typeof FB !== "undefined") {
      FB.init({
        appId: process.env.FACEBOOK_APP_ID || "",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v14.0",
      });
    }
  }, []);

  return (
    <>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof FB !== "undefined") {
            FB.init({
              appId: process.env.FACEBOOK_APP_ID || "",
              autoLogAppEvents: true,
              xfbml: true,
              version: "v14.0",
            });
          }
        }}
      />
      <LanguageProvider>
        <LoaderProvider>
          <ComponentWithLoader
            Component={Component}
            pageProps={pageProps}
            router={router}
          />
        </LoaderProvider>
      </LanguageProvider>
    </>
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
