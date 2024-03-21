import React, { useState, useEffect, Suspense } from "react";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import Header from "../../components/Header/Header";
import Main_GPTs from "../../components/Main_GPTs/Main_GPTs";
import GPTs from "../../components/GPTs/GPTs";
import Footer from "../../components/Footer/Footer";
import indexSchemaGPTs from "../../public/schemas/indexSchemaGPTs";

export default function GPTS() {
  // Custom hook to manage the language state
  const { activeLanguage } = useLanguage();
  // Site URL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const translation: TranslationsType = {
    pageDescription: {
      EN: "The Wise Duck Dev - GPTs",
      FR: "The Wise Duck Dev - GPTs",
    },
  };
  return (
    <>
      <Head>
        <title>
          The Wise Duck Dev GPTs | Explore Leading GPT Categories for Web and
          Mobile Development
        </title>
        <meta
          name="description"
          content="Discover The Wise Duck Dev's curated GPTs, specializing in frontend, backend, database, design, framework, productivity, blockchain, cybersecurity, CMS, and automation. Elevate your web development with our tailored GPT expertise."
        />
        <meta
          name="keywords"
          content="GPT, The Wise Duck Dev, Frontend Development, Backend Solutions, Database Management, Design Integration, Development Frameworks, Productivity Enhancement, Blockchain Innovation, Cybersecurity, Content Management Systems, Automation, Web Development, AI Integration, Technology Solutions"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="The Wise Duck Dev GPTs | Gateway to Specialized GPT Development"
        />
        <meta
          property="og:description"
          content="Step into the world of specialized GPT development with The Wise Duck Dev. Explore categories from frontend to blockchain and automation. Tailored AI solutions for robust web development."
        />
        <meta property="og:url" content={`https://${siteUrl}/gpts`} />
        <meta
          property="og:image"
          content={`https://${siteUrl}/images/index_gpts/the-wise-duck-dev-gpt-expert-men-in-black-style-profile.webp`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@wiseduckdev" />
        <meta
          name="twitter:title"
          content="The Wise Duck Dev GPTs | Specialized GPT Development"
        />
        <meta
          name="twitter:description"
          content="Join The Wise Duck Dev in exploring specialized GPTs for every development need, from frontend to CMS and beyond. Dive into a world where AI meets innovation in web development."
        />
        <meta
          name="twitter:image"
          content={`https://${siteUrl}/images/index_gpts/the-wise-duck-dev-gpt-expert-men-in-black-style-profile.webp`}
        />
        {siteUrl && (
          <>
            <link
              rel="alternate"
              hrefLang="en"
              href={`https://${siteUrl}/gpts`}
            />
            <link
              rel="alternate"
              hrefLang="fr"
              href={`https://${siteUrl}/fr/gpts`}
            />
          </>
        )}
        <link rel="canonical" href={`https://${siteUrl}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(indexSchemaGPTs) }}
        />
      </Head>

      <Header />
      <Main_GPTs />
      <GPTs />
      <Footer />
      <SpeedInsights />
    </>
  );
}
