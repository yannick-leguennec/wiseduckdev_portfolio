/**
 * WrappedWiseDuckDevGPTs.tsx
 *
 * Displays the "Wise Duck Dev GPTs" project page.
 *
 * Features:
 * - Dynamically loads a responsive background image based on screen orientation.
 * - Supports both English and French text via LanguageContext.
 * - Describes the project overview, role, technologies, and provides navigation buttons.
 * - Tracks button clicks using Google Analytics (if available).
 *
 * Structure identical to WrappedFamilyFlow for visual and code consistency.
 */

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../../Header/Header";
import { useLanguage } from "../../../../context/LanguageContext";
import classes from "./WrappedWiseDuckDevGPTs.module.scss"; // Same styles reused

// ===============================
// IMPORT IMAGES
// ===============================
import background_image_landscape from "../../../../public/images/projectsPictures/project_background_pictures/wise_duck_dev_background_project_image_landscape.webp";
import background_image_portrait from "../../../../public/images/projectsPictures/project_background_pictures/wise_duck_dev_background_project_image_portrait.webp";

// ===============================
// TRANSLATIONS
// ===============================
const translations = {
  altPicture: {
    EN: "golden background image",
    FR: "image de fond dorée",
  },
  pageTitle: {
    EN: "Wise Duck Dev GPTs",
    FR: "Wise Duck Dev GPTs",
  },
  pageIntroductionSentence: {
    EN: "Discover Wise Duck Dev GPTs — a platform hosting over 800 AI-powered custom GPTs built for developers across web, mobile, AI, blockchain, and gaming. A project born from curiosity, crafted for innovation.",
    FR: "Découvrez Wise Duck Dev GPTs — une plateforme rassemblant plus de 800 GPTs personnalisés alimentés par l’IA et conçus pour les développeurs web, mobile, IA, blockchain et du jeu vidéo. Un projet né de la curiosité et développé avec passion.",
  },
  pageRoleTitle: {
    EN: "ROLE",
    FR: "RÔLE",
  },
  pageRoles: {
    EN: [
      "Product Manager",
      "Full-Stack Developer",
      "AI Engineer",
      "Automation Engineer",
      "DevOps & SEO Specialist",
    ],
    FR: [
      "Chef de Produit",
      "Développeur Full-Stack",
      "Ingénieur IA",
      "Ingénieur en Automatisation",
      "Spécialiste DevOps & SEO",
    ],
  },
  pageTechnologies: {
    EN: [
      "React",
      "Next.js",
      "TypeScript",
      "CSS",
      "Sass",
      "Prisma",
      "PostgreSQL",
      "Meilisearch",
      "OpenAI API",
      "ChatGPT",
      "Midjourney",
      "Make.com",
      "PWA",
      "Vercel",
      "Git",
      "GitHub",
      "Figma",
      "Google Analytics",
      "SEO",
    ],
    FR: [
      "React",
      "Next.js",
      "TypeScript",
      "CSS",
      "Sass",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Meilisearch",
      "OpenAI API",
      "ChatGPT",
      "Midjourney",
      "Make.com",
      "PWA",
      "Vercel",
      "Git",
      "GitHub",
      "Figma",
      "Google Analytics",
      "SEO",
    ],
  },
  button1: {
    EN: "View Live",
    FR: "Voir en direct",
  },
  button2: {
    EN: "GitHub",
    FR: "GitHub",
  },
};

// ===============================
// RESPONSIVE IMAGE COMPONENT
// ===============================
const ResponsiveImage = ({ alt }: { alt: string }) => {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
    };

    handleOrientationChange();
    window.addEventListener("orientationchange", handleOrientationChange);
    window.addEventListener("resize", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);

  const src = isPortrait
    ? background_image_portrait
    : background_image_landscape;

  return (
    <Image
      src={src}
      alt={alt}
      className={classes.image}
      priority
      placeholder="blur"
    />
  );
};

// ===============================
// MAIN WRAPPER COMPONENT
// ===============================
function WrappedWiseDuckDevGPTs() {
  const { activeLanguage } = useLanguage();
  const lang = activeLanguage;

  return (
    <section className={classes.wrappedMain}>
      {/* === Background Image === */}
      <ResponsiveImage alt={translations.altPicture[lang]} />

      {/* === Fixed Header === */}
      <Header />

      {/* === Main Content === */}
      <div className={classes.contentContainer}>
        {/* === Title & Introduction === */}
        <header className={classes.titleContainer}>
          <h1 className={classes.title}>{translations.pageTitle[lang]}</h1>
          <p className={classes.introductionSentence}>
            {translations.pageIntroductionSentence[lang]}
          </p>
        </header>

        {/* === Roles === */}
        <section className={classes.roleContainer}>
          <h2 className={classes.roleTitle}>
            {translations.pageRoleTitle[lang]}
          </h2>
          <ul className={classes.roleList}>
            {translations.pageRoles[lang].map((role, index) => (
              <li key={index} className={classes.roleItem}>
                {role}
              </li>
            ))}
          </ul>
        </section>

        {/* === Technologies === */}
        <section className={classes.technologyContainer}>
          {translations.pageTechnologies[lang].map((tech, index) => (
            <span key={index} className={classes.technologyItem}>
              {tech}
            </span>
          ))}
        </section>

        {/* === Buttons === */}
        <div className={classes.buttonsContainer}>
          {/* Live Project */}
          <a
            href="https://wiseduckdevgpts.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              window.gtag?.("event", "navigation_click", {
                event_category: "Navigation",
                event_navigation:
                  "Clicked on View Live Wise Duck Dev GPTs Button",
              });
            }}
            className={classes.button}
            aria-label={
              activeLanguage === "FR"
                ? "Voir le projet en direct Wise Duck Dev GPTs"
                : "View Live Wise Duck Dev GPTs Project"
            }
          >
            {translations.button1[lang]}
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yannick-leguennec/wiseduckdevgpts"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              window.gtag?.("event", "navigation_click", {
                event_category: "Navigation",
                event_navigation: "Clicked on GitHub Wise Duck Dev GPTs Button",
              });
            }}
            className={classes.button}
            aria-label={
              activeLanguage === "FR"
                ? "Voir le dépôt GitHub de Wise Duck Dev GPTs"
                : "View Wise Duck Dev GPTs GitHub repository"
            }
          >
            {translations.button2[lang]}
          </a>
        </div>
      </div>
    </section>
  );
}

export default WrappedWiseDuckDevGPTs;
