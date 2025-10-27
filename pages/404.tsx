import { SpeedInsights } from "@vercel/speed-insights/next";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useLoader } from "../context/LoaderContext";

const NotFoundWithNoSSR = dynamic(() => import("../components/v2/404/404"), {
  ssr: false,
});

export default function Custom404() {
  const { setLoading } = useLoader();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

      {mounted && <NotFoundWithNoSSR />}
      <SpeedInsights />
    </>
  );
}
