import { GetStaticProps } from "next";
import indexSchemaEN from "../public/schemas/index_schema_en_v2.json";
import indexSchemaFR from "../public/schemas/index_schema_fr_v2.json";
import React, { useState, useEffect, Suspense } from "react";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useLoader } from "../context/LoaderContext";
import { useLanguage } from "../context/LanguageContext";
import { TranslationsType } from "../types/TranslationsType";
import Image, { StaticImageData } from "next/image";
import picture_yannick_horizontal from "../public/images/index/v2/images_index_page/yannick_leguennec_ai_integration_automation_specialist_horizontal.webp";
import picture_yannick_vertical from "../public/images/index/v2/images_index_page/yannick_leguennec_ai_integration_automation_specialist_mobile.webp";
import WrappedMain from "../components/v2/WrappedHeaderComponents/WrappedMain/WrappedMain";
import Profil from "../components/v2/Profil/Profil";
import Skills from "../components/v2/Skills/Skills";
import Experience from "../components/v2/Experience/Experience";
import Portfolio from "../components/v2/Portfolio/Portfolio";
import Contact from "../components/v2/Contact/Contact";
import Footer from "../components/v2/Footer/Footer";

export default function Home() {
  // Custom hook to manage the loading state
  const { loading, setLoading } = useLoader();
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();
  // State to know when the contact form is loaded
  const [contactLoaded, setContactLoaded] = useState(false);
  // Site URL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // Effect to manage the loading state and turn it off when the content is loaded
  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  // Object to store the translations
  const translation: TranslationsType = {
    altPicture: {
      EN: "Professional picture of Yannick Le Guennec aka The Wise Duck Dev, AI Integration & Automation Specialist and Full-Stack JavaScript developer, in a tropical plant background",
      FR: "Image professionnelle de Yannick Le Guennec aka The Wise Duck Dev, Spécialiste Intégration d'IA & Automatisation et Développeur Full-Stack JavaScript, dans un fond de plantes tropicales",
    },
    altTwitterPicture: {
      EN: "Professional AI generated picture of The Wise Duck Dev persona, an anthropomorphic white duck wearing a golden shirt with golden glasses on a golden background",
      FR: "Image professionnelle générée par IA de The Wise Duck Dev, un canard blanc anthropomorphe portant une chemise dorée et des lunettes dorées sur un fond doré",
    },
    logText: {
      EN: "Hey there, fellow dev! I'm The Wise Duck Dev — an AI Integration & Automation Specialist and Full-Stack JavaScript developer. Most teams know they need AI but not where to start; I find where it creates real value, then build it end-to-end. I work primarily in Python and TypeScript against the OpenAI, Anthropic, xAI, and Perplexity APIs. From an autonomous AI-powered media pipeline (X & Substack) to ArchMapper (a reverse-engineering pipeline tested on 10,000+ file codebases) and a platform of 800+ custom GPTs — I think in systems and look for where AI delivers real value. If you're a recruiter, founder, or tech leader looking for impact, let's connect. 🚀🌐",
      FR: "Salut à toi, cher dev curieux ! Je suis The Wise Duck Dev — Spécialiste Intégration d'IA & Automatisation et développeur Full-Stack JavaScript. La plupart des équipes savent qu'elles ont besoin d'IA, mais pas par où commencer ; je trouve où elle crée de la valeur réelle, puis je la construis de bout en bout. Je travaille principalement en Python et TypeScript avec les APIs d'OpenAI, Anthropic, xAI et Perplexity. D'un pipeline média autonome propulsé par l'IA (X & Substack) à ArchMapper (un pipeline de rétro-ingénierie testé sur des bases de plus de 10 000 fichiers) et une plateforme de 800+ GPTs personnalisés — je pense en systèmes et je cherche là où l'IA apporte une véritable valeur. Recruteur, entrepreneur ou décideur tech ? Contactez-moi. 🚀🌐",
    },
    pageTitle: {
      EN: "The Wise Duck Dev — AI Integration & Automation Specialist | Full-Stack JS Developer",
      FR: "The Wise Duck Dev — Spécialiste Intégration d'IA & Automatisation | Développeur Full-Stack JS",
    },
    pageDescription: {
      EN: "Full-Stack JavaScript developer specialized in AI integration and automation. I find where AI creates real value, then build it end-to-end — React, Next.js, Node.js, Python.",
      FR: "Développeur Full-Stack JavaScript spécialisé en intégration d'IA et automatisation. Je trouve où l'IA crée de la valeur, puis je la construis de bout en bout — React, Next.js, Node.js, Python.",
    },
    loadingContent: {
      EN: "Loading more content...",
      FR: "Chargement du contenu en cours...",
    },
    og_title: {
      EN: "The Wise Duck Dev — AI Integration & Automation Specialist | Full-Stack JS Developer",
      FR: "The Wise Duck Dev — Spécialiste Intégration d'IA & Automatisation | Développeur Full-Stack JS",
    },
    og_description: {
      EN: "AI integration & automation, built end-to-end. I help teams who know they need AI but not where to start — I find where it creates value, then build it. Full-Stack JS: React, Next.js, Node.js, Python.",
      FR: "Intégration d'IA & automatisation, de bout en bout. J'aide les équipes qui savent qu'elles ont besoin d'IA, mais pas par où commencer — je trouve où elle crée de la valeur, puis je la construis. Full-Stack JS : React, Next.js, Node.js, Python.",
    },
    og_locale: {
      EN: "en_US",
      FR: "fr_FR",
    },
  };

  // Custom console message for companies and recruiters
  console.log(
    `%c ${translation.logText[activeLanguage]}`,
    "background: #000000; color: #fafafa; font-size: 14px; padding: 10px; border-radius: 5px; font-weight: bold;"
  );

  // Props for the ResponsiveImage component
  interface ResponsiveImageProps {
    srcDesktop: StaticImageData;
    srcMobile: StaticImageData;
    alt: string;
  }

  // Component aiming to display a different image based on the screen size
  const ResponsiveImage = ({
    srcDesktop,
    srcMobile,
    alt,
  }: ResponsiveImageProps) => {
    const [windowWidth, setWindowWidth] = useState<number | null>(null);

    // Update the window width state when the window is resized
    useEffect(() => {
      const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", updateWindowWidth);
      updateWindowWidth(); // Initialisation

      return () => window.removeEventListener("resize", updateWindowWidth);
    }, []);

    // Choose the image source based on the window width
    const src = windowWidth && windowWidth >= 768 ? srcDesktop : srcMobile;

    return <Image src={src} alt={alt} />;
  };

  return (
    <>
      <Head>
        <title>{translation.pageTitle[activeLanguage]}</title>
        <meta
          name="description"
          content={translation.pageDescription[activeLanguage]}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`https://${siteUrl}`}
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Wise Duck Dev" />
        <meta
          property="og:title"
          content={translation.og_title[activeLanguage]}
        />
        <meta
          property="og:description"
          content={translation.og_description[activeLanguage]}
        />
        <meta
          property="og:image"
          content={
            activeLanguage === "FR"
              ? `https://${siteUrl}/images/index/v2/images_index_page/wise_duck_dev_portfolio_version_3_main_picture_Facebook_FR.webp`
              : `https://${siteUrl}/images/index/v2/images_index_page/wise_duck_dev_portfolio_version_3_main_picture_Facebook_EN.webp`
          }
        />
        <meta
          property="og:url"
          content={
            activeLanguage === "FR"
              ? `https://${siteUrl}/fr`
              : `https://${siteUrl}`
          }
        />
        <meta
          property="og:locale"
          content={translation.og_locale[activeLanguage]}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@wiseduckdev" />
        <meta name="twitter:creator" content="@wiseduckdev" />
        <meta
          name="twitter:title"
          content={translation.og_title[activeLanguage]}
        />
        <meta
          name="twitter:description"
          content={translation.og_description[activeLanguage]}
        />
        <meta
          name="twitter:image"
          content={
            activeLanguage === "FR"
              ? `https://${siteUrl}/images/index/v2/images_index_page/wise_duck_dev_portfolio_version_3_main_picture_Twitter_FR.webp`
              : `https://${siteUrl}/images/index/v2/images_index_page/wise_duck_dev_portfolio_version_3_main_picture_Twitter_EN.webp`
          }
        />
        <meta
          name="twitter:image:alt"
          content={translation.altTwitterPicture[activeLanguage]}
        />

        {siteUrl && (
          <>
            <link rel="alternate" hrefLang="en" href={`https://${siteUrl}`} />
            <link
              rel="alternate"
              hrefLang="fr"
              href={`https://${siteUrl}/fr`}
            />
          </>
        )}
        <link
          rel="canonical"
          href={
            activeLanguage === "EN"
              ? `https://${siteUrl}`
              : `https://${siteUrl}/fr`
          }
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              activeLanguage === "FR" ? indexSchemaFR : indexSchemaEN
            ),
          }}
        />
      </Head>
      <WrappedMain />
      <main>
        <Profil />
        <Experience />
        <Portfolio />
        <Skills />
        <Contact id="contact" onLoaded={setContactLoaded} />
        <ResponsiveImage
          srcDesktop={picture_yannick_horizontal}
          srcMobile={picture_yannick_vertical}
          alt={translation.altPicture[activeLanguage]}
        />
        <Footer />
      </main>

      <SpeedInsights />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
