import React, { useEffect } from "react";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Tips from "../../components/Tips/Tips";
import { useLoader } from "../../context/LoaderContext";

const PromptingTips = () => {
  const { setLoading } = useLoader();

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <>
      <Head>
        <title>Prompting Tips</title>
        <meta
          name="description"
          content="Learn how to create effective prompts"
        />
      </Head>
      <Header />
      <main>
        <Tips />
      </main>
      <Footer />
      <SpeedInsights />
    </>
  );
};

export default PromptingTips;
