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
import picture_yannick_horizontal from "../public/images/index/v2/images_index_page/yannick_leguennec_full_stack_javascript_developer_specialized_in_react_horizontal.webp";
import picture_yannick_vertical from "../public/images/index/v2/images_index_page/yannick_leguennec_full_stack_javascript_developer_specialized_in_react_mobile.webp";
import WrappedMain from "../components/v2/WrappedMain/WrappedMain";
import Profil from "../components/v2/Profil/Profil";
import Skills from "../components/v1/Skills/Skills";
import Experience from "../components/v1/Experience/Experience";
import Portfolio from "../components/v1/Portfolio/Portfolio";
import Contact from "../components/v1/Contact/Contact";
import Footer from "../components/v1/Footer/Footer";

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
      EN: "Professional picture of the full stack javascript developer specialized in react Yannick Le Guennec aka The Wise Duck Dev in a tropical plant background",
      FR: "Image professionnelle du développeur full stack javascript spécialisé en react Yannick Le Guennec aka The Wise Duck Dev dans un fond de plantes tropicales",
    },
    logText: {
      EN: "🚀 Driven by a passion for web and mobile development with a specialization in React, I turn creative ideas into captivating digital realities. If you're seeking to bring your projects to life with a dedicated and innovative developer, feel free to reach out to explore fruitful collaborations together. Let's take a step towards the future of technology together! 🌐✨",
      FR: "🚀 Passionné par le développement web et mobile avec une expertise en React, je transforme les idées en réalités numériques captivantes. Si vous cherchez à donner vie à vos projets avec un développeur dédié et innovant, n'hésitez pas à me contacter pour explorer ensemble des collaborations fructueuses. Faisons ensemble un pas vers l'avenir de la technologie ! 🌐✨",
    },
    pageDescription: {
      EN: "Meet The Wise Duck Dev : A creative & innovative Full Stack JS Developer specializing in React. Dive into a world of cutting-edge web & mobile solutions!",
      FR: "Rencontrez The Wise Duck Dev : un développeur Full Stack JS créatif et innovant spécialisé en React. Plongez dans un monde de solutions web et mobile de pointe!",
    },
    loadingContent: {
      EN: "Loading more content...",
      FR: "Chargement du contenu en cours...",
    },
    og_title: {
      EN: "The Wise Duck Dev - Full Stack JS Developer specialized in React",
      FR: "The Wise Duck Dev - Développeur Full Stack JS spécialisé en React",
    },
    og_description: {
      EN: "The Wise Duck Dev is your go-to destination for innovative full stack JS web and mobile development solutions, specializing in React.",
      FR: "The Wise Duck Dev est votre destination de prédilection pour des solutions innovantes de développement web et mobile Full Stack JS, spécialisé en React.",
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
        <title>The Wise Duck Dev | Portfolio</title>
        <meta
          name="description"
          content={translation.pageDescription[activeLanguage]}
        />
        <meta
          name="keywords"
          content="The Wise Duck Dev, Full Stack JS Developer, JavaScript, React Developer, Web Mobile Developer, Next.js, TypeScript, Web Development Canada, Web Development USA, React Development, Full Stack JS Solutions, Innovative Web Solutions"
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
              ? `https://${siteUrl}/images/index/professional-wise-duck-developer-coding-laptop-office-Facebook-FR.webp`
              : `https://${siteUrl}/images/index/professional-wise-duck-developer-coding-laptop-office-Facebook-EN.webp`
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
              ? `https://${siteUrl}/images/index/professional-wise-duck-developer-coding-laptop-office-Twitter-FR.webp`
              : `https://${siteUrl}/images/index/professional-wise-duck-developer-coding-laptop-office-Twitter-EN.webp`
          }
        />
        <meta
          name="twitter:image:alt"
          content={translation.altPicture[activeLanguage]}
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
