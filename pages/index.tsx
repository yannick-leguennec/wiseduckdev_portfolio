"use client";

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
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
const Profil = dynamic(() => import("../components/Profil/Profil"));
const Skills = dynamic(() => import("../components/Skills/Skills"));
const Experience = dynamic(() => import("../components/Experience/Experience"));
const Portfolio = dynamic(() => import("../components/Portfolio/Portfolio"));
const Contact = dynamic(() => import("../components/Contact/Contact"));
const Footer = dynamic(() => import("../components/Footer/Footer"));

export default function Home() {
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();
  // State to manage the initial content loading
  const [initialContentLoaded, setInitialContentLoaded] = useState(false);
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
      EN: "Meet The Wise Duck Dev : A creative & innovative Full Stack JS Developer specializing in React. Dive into a world of cutting-edge web & mobile solutions. Let's craft the future of tech together!",
      FR: "Rencontrez The Wise Duck Dev : un développeur Full Stack JS créatif et innovant spécialisé en React. Plongez dans un monde de solutions web et mobile de pointe. Créons ensemble l'avenir de la technologie !",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(indexSchema) }}
        />
      </Head>
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
      <SpeedInsights />
    </>
  );
}
