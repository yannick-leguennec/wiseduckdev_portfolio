"use client";

import Head from "next/head";
import NotFound from "@/components/404/404";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found - The Wise Duck Dev</title>
        <meta
          name="description"
          content="Oops! The page you're looking for can't be found. Explore The Wise Duck Dev for innovative full stack JS web and mobile development solutions."
        />
      </Head>

      <NotFound />
    </>
  );
}
