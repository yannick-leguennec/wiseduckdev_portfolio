import { SpeedInsights } from "@vercel/speed-insights/next";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useLoader } from "../context/LoaderContext";

const NotFoundWithNoSSR = dynamic(() => import("../components/v1/404/404"), {
  ssr: false,
});

export default function Custom404() {
  const { setLoading } = useLoader();

  // Turn off the loading animation when the 404 page loads
  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <>
      <Head>
        <title>404 - The Wise Duck Dev</title>
        <meta
          name="description"
          content="The Wise Duck Dev - 404 Page Not Found"
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <NotFoundWithNoSSR />
      <SpeedInsights />
    </>
  );
}
