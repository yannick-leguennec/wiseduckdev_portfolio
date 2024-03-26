import React, { useEffect } from "react";
import Head from "next/head";
import Tips from "../../components/Tips/Tips";
import { useLoader } from "../../context/LoaderContext";

const PromptingTips = () => {
  const { setLoading } = useLoader();

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <div>
      <Head>
        <title>Prompting Tips</title>
        <meta
          name="description"
          content="Learn how to create effective prompts"
        />
      </Head>
      <main>
        <Tips />
      </main>
    </div>
  );
};

export default PromptingTips;
