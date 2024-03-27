import React, { useEffect } from "react";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Tips from "../../components/Tips/Tips";
import { useLoader } from "../../context/LoaderContext";
import classes from "../../styles/prompting-tips.module.scss"

const PromptingTips = () => {
  // Custom hook to manage the loading state
  const { setLoading } = useLoader();
  // Custom hook to manage the language state
  const { activeLanguage } = useLanguage();
  // Site URL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // Set the loading state to false after the component mounts
  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  const translation: TranslationsType = {
    alt: {
      EN: "The Wise Duck Dev dresses as a teacher, offering educational tips for using custom GPTs in web, mobile and blockchain develpopment",
      FR: "",
    },
    title: {
      EN: "Mastering Wise Duck Dev GPTs: Expert Prompting Tips for Devs in Web, Mobile & Blokchain",
      FR: "",
    },
    description: {
      EN: "Unlock the full potential of over 100 specialized GPTs for web, mobile and blockchain development with the Wise Duck Dev's expert prompting tips. Dive into our comprehensive guide to enhance your development workflow and command GPTs with precision for groundbreaking innovation and efficiency. Start crafting effective prompts today!",
      FR: "",
    },
    og_title: {
      EN: "Unleash Dev Genius with GPT: Exclusive Prompting Tips | The Wise Duck Dev",
      FR: "",
    },
    og_description: {
      EN: "Step into the realm of The Wise Duck Dev and master over 100 custom GPTs. Elevate your web, mobile and blockchain projetcs witu our insider prompting techniques and revolutionize your development process.",
      FR: "",
    },
    twitter_title: {
      EN: "MasterThe Wise Duck Dev GPTs: Exclusive Prompting Tips for optimal results",
      FR: "",
    },
    twitter_description: {
      EN: "Dive into specialized GPTs for devs! Get exclusive prompting techniques for web, mobile, and blockchain development from The Wise Duck Dev. #wiseduckdevgpts #customGPTs #GPT #DevTools #BlockchainDev",
      FR: "",
    },
  };

  return (
    <>
      <Head>
        <title>{translation.title[activeLanguage]}</title>
        <meta
          name="description"
          content={translation.description[activeLanguage]}
        />
        <meta
          name="keywords"
          content="GPT for developers, Prompting guide for GPT, Blockchain development AI, Mobile development AI tools, Web development GPT prompts, Custom GPT usage, AI programming tips, Developer AI integration, The Wise Duck Dev, Efficient GPT prompts, AI development techniques, GPT prompt optimization, Advanced GPT tips, GPT for web innovation, GPT in software development"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={translation.og_title[activeLanguage]}
        />
        <meta
          property="og:description"
          content={translation.og_description[activeLanguage]}
        />
        <meta
          property="og:url"
          content={`https://${siteUrl}/gpts/prompting-tips`}
        />
        <meta
          property="og:image"
          content={`https://${siteUrl}/images/index_gpts/the-wise-duck-dev-educational-tips-for-gpt-web-mobile-blockchain-development.webp`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@wiseduckdev" />
        <meta
          name="twitter:title"
          content={translation.twitter_title[activeLanguage]}
        />
        <meta
          name="twitter:description"
          content={translation.twitter_description[activeLanguage]}
        />
        <meta
          name="twitter:image"
          content={`https://${siteUrl}/images/index_gpts/the-wise-duck-dev-educational-tips-for-gpt-web-mobile-blockchain-development.webp`}
        />
        <meta
          name="twitter:image:alt"
          content={translation.alt[activeLanguage]}
        />
        {siteUrl && (
          <>
            <link
              rel="alternate"
              hrefLang="en"
              href={`https://${siteUrl}/gpts/prompting-tips`}
            />
            <link
              rel="alternate"
              hrefLang="fr"
              href={`https://${siteUrl}/fr/gpts/prompting-tips`}
            />
          </>
        )}
        <link rel="canonical" href={`https://${siteUrl}`} />
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(indexSchemaGPTs) }}
        /> */}
      </Head>
      <Header />
      <main className={classes.mainContainer}>
        <Tips />
      </main>
      <Footer />
      <SpeedInsights />
    </>
  );
};

export default PromptingTips;
