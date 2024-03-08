"use client";
import dynamic from "next/dynamic";

const NotFoundWithNoSSR = dynamic(() => import("../components/404/404"), {
  ssr: false,
});

export default function Custom404() {
  return (
    <>
      <NotFoundWithNoSSR />
    </>
  );
}
