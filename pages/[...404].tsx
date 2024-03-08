"use client";
import dynamic from "next/dynamic";
import Head from "next/head";

const NotFoundWithNoSSR = dynamic(() => import("../components/404/404"), {
  ssr: false,
});

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - The Wise Duck Dev</title>
      </Head>
      <NotFoundWithNoSSR />
    </>
  );
}
