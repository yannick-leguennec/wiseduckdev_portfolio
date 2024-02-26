"use client";

import { useState, useEffect } from "react";
import React, { Suspense } from "react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { TranslationsType } from "./types/TranslationsType";
import Image, { StaticImageData } from "next/image";
import duckCoachDesktop from "@/app/public/images/duck-coach-desktop.png";
import duckCoachMobile from "@/app/public/images/duck-coach-mobile.png";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Profil from "./components/Profil/Profil";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

export default function Home() {
  const { activeLanguage } = useLanguage();

  const translation: TranslationsType = {
    altPicture: {
      EN: "AI and Photoshop-crafted image of The Wise Duck Dev in a white suit, embracing innovation and style, seated in a modern couch amidst tropical plants, bridging the Skills and Experience sections with a blend of professionalism and creativity.",
      FR: "Image du Wise Duck Dev en costume blanc, créée par IA et optimisée avec Photoshop, évoquant l'innovation avec style, assis dans un canapé moderne entouré de plantes tropicales, faisant le lien entre les sections 'Compétences' et 'Expérience' avec un mélange de professionnalisme et de créativité.",
    },
  };

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

    useEffect(() => {
      // Update the window width state when the window is resized
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
    <LanguageProvider>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <main>
        <Header />
        <Main />
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
      </main>
    </LanguageProvider>
  );
}
