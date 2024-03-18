import { GetStaticProps } from "next";
import indexSchema from "../public/schemas/indexSchema";
import React, { useState, useEffect, Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useLanguage } from "../context/LanguageContext";
import { TranslationsType } from "../types/TranslationsType";
import Image, { StaticImageData } from "next/image";
import duckCoachDesktop from "../public/images/duck-coach-desktop.webp";
import duckCoachMobile from "../public/images/duck-coach-mobile.webp";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
const Profil = dynamic(() => import("../components/Profil/Profil"));
const Skills = dynamic(() => import("../components/Skills/Skills"));
const Experience = dynamic(() => import("../components/Experience/Experience"));
const Portfolio = dynamic(() => import("../components/Portfolio/Portfolio"));
const Contact = dynamic(() => import("../components/Contact/Contact"));
const Footer = dynamic(() => import("../components/Footer/Footer"));

export default function Home() {
  // State to manage the loading of the app
  const [isLoading, setIsLoading] = useState(true);
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();
  // State to manage the initial content loading
  const [initialContentLoaded, setInitialContentLoaded] = useState(false);
  // Site URL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  // Loading the page for 2 seconds at the beginning
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  // Effect to manage the initial content loading
  useEffect(() => {
    setInitialContentLoaded(true);
  }, []);

  // Object to store the translations
  const translation: TranslationsType = {
    altPicture: {
      EN: "AI and Photoshop-crafted image of The Wise Duck Dev in a white suit, embracing innovation and style, seated in a modern couch amidst tropical plants, bridging the Skills and Experience sections with a blend of professionalism and creativity.",
      FR: "Image du Wise Duck Dev en costume blanc, créée par IA et optimisée avec Photoshop, évoquant l'innovation avec style, assis dans un canapé moderne entouré de plantes tropicales, faisant le lien entre les sections 'Compétences' et 'Expérience' avec un mélange de professionnalisme et de créativité.",
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
  };

  // Custom console message for companies and recruiters
  console.log(
    `%c ${translation.logText[activeLanguage]}`,
    "background: #ff7300; color: #fafafa; font-size: 14px; padding: 10px; border-radius: 5px; font-weight: bold;"
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
        <title>The Wise Duck Dev</title>
        <meta
          name="description"
          content={translation.pageDescription[activeLanguage]}
        />
        <meta
          name="keywords"
          content="The Wise Duck Dev, Full Stack JS Developer, JavaScript, React Developer, Web Mobile Developer, Next.js, TypeScript, Web Development Canada, Web Development USA, React Development, Full Stack JS Solutions, Innovative Web Solutions"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="The Wise Duck Dev - Full Stack JS Developer specialized in React"
        />
        <meta
          property="og:description"
          content="The Wise Duck Dev is your go-to destination for innovative full stack JS web and mobile development solutions, specializing in React."
        />
        <meta property="og:url" content={`https://${siteUrl}`} />
        <meta
          property="og:image"
          content={`https://${siteUrl}/images/metadata_profil_picture.webp`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@wiseduckedv" />
        <meta
          name="twitter:title"
          content="The Wise Duck Dev - Full Stack JS Developer specialized in React"
        />
        <meta
          name="twitter:description"
          content="The Wise Duck Dev is your go-to destination for innovative full stack JS web and mobile development solutions, specializing in React."
        />
        <meta
          name="twitter:image"
          content={`https://${siteUrl}/images/metadata_profil_picture.webp`}
        />
        {siteUrl && (
          <>
            <link
              rel="alternate"
              hrefLang="en"
              href={`https://${siteUrl}${this.props.__NEXT_DATA__.page}`}
            />
            <link
              rel="alternate"
              hrefLang="fr"
              href={`https://${siteUrl}/fr${this.props.__NEXT_DATA__.page}`}
            />
          </>
        )}
        <link
          rel="canonical"
          href={`https://${siteUrl}${this.props.__NEXT_DATA__.page}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(indexSchema) }}
        />
      </Head>
      {!isLoading ? (
        <>
          <Header />
          <main>
            <Main />
            <Suspense
              fallback={<div>{translation.loadingContent[activeLanguage]}</div>}
            >
              {initialContentLoaded && (
                <>
                  <Profil />
                  <Skills />
                  <ResponsiveImage
                    srcDesktop={duckCoachDesktop}
                    srcMobile={duckCoachMobile}
                    alt={translation.altPicture[activeLanguage]}
                  />
                  <Experience />
                  <Portfolio />
                  <Contact />
                  <Footer />
                </>
              )}
            </Suspense>
          </main>
        </>
      ) : (
        <Loader />
      )}
      <SpeedInsights />
    </>
  );
}

export const getStaGetStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
