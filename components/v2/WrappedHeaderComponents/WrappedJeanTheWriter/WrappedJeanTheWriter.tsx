/**
 * WrappedJeanTheWriter.tsx
 *
 * Displays the "Jean the Writer" project page.
 *
 * Features:
 * - Dynamically loads a responsive background image based on screen orientation.
 * - Supports both English and French text via LanguageContext.
 * - Describes the project, roles, technologies, and provides navigation buttons.
 * - Tracks button clicks using Google Analytics (if available).
 *
 * This component is fully client-rendered (uses React hooks).
 */

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../../Header/Header";
import { useLanguage } from "../../../../context/LanguageContext";
import classes from "./WrappedJeanTheWriter.module.scss";
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
    EN: "Jean the Writer",
    FR: "Jean l'Écrivain",
  },
  pageIntroductionSentence: {
    EN: "AI-powered manuscript correction & editorial review tool designed to help writers prepare polished, publication-ready texts.",
    FR: "Outil de correction de manuscrit et de révision éditoriale alimenté par IA, conçu pour aider les écrivains à produire des textes prêts à l'édition.",
  },
  pageRoleTitle: {
    EN: "ROLE",
    FR: "RÔLE",
  },
  pageRoles: {
    EN: ["Product Manager", "Automation Engineer", "Full-Stack Developer"],
    FR: [
      "Chef de produit",
      "Ingénieur en automatisation",
      "Développeur Full-Stack",
    ],
  },
  pageTechnologies: {
    EN: [
      "Node.js",
      "TypeScript",
      "OpenAI API",
      "Google Drive API",
      "Google Docs API",
      "diff-match-patch",
      "p-limit",
      "Git",
      "GitHub",
      "ts-node",
      "ESLint",
    ],
    FR: [
      "Node.js",
      "TypeScript",
      "OpenAI API",
      "Google Drive API",
      "Google Docs API",
      "diff-match-patch",
      "p-limit",
      "Git",
      "GitHub",
      "ts-node",
      "ESLint",
    ],
  },
  button: {
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
function WrappedJeanTheWriter() {
  const { activeLanguage } = useLanguage();
  const lang = activeLanguage;

  return (
    <section className={classes.wrappedMain}>
      {/* === Background Image === */}
      <ResponsiveImage alt={translations.altPicture[lang]} />

      {/* === Fixed Header === */}
      <Header />

      {/* === Main Content Section === */}
      <div className={classes.contentContainer}>
        {/* === Title & Introduction === */}
        <header className={classes.titleContainer}>
          <h1 className={classes.title}>{translations.pageTitle[lang]}</h1>
          <p className={classes.introductionSentence}>
            {translations.pageIntroductionSentence[lang]}
          </p>
        </header>

        {/* === Roles Section === */}
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

        {/* === Technologies Section === */}
        <section className={classes.technologyContainer}>
          {translations.pageTechnologies[lang].map((tech, index) => (
            <span key={index} className={classes.technologyItem}>
              {tech}
            </span>
          ))}
        </section>

        {/* === Action Buttons === */}
        <div className={classes.buttonsContainer}>
          <a
            href="https://github.com/yannick-leguennec/manuscrits_corrector"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              window.gtag?.("event", "navigation_click", {
                event_category: "Navigation",
                event_navigation: "Clicked on GitHub Jean The Writer Button",
              });
            }}
            className={classes.button}
            aria-label={
              activeLanguage === "FR"
                ? "Voir le dépôt GitHub de Jean l'Écrivain"
                : "View Jean the Writer GitHub repository"
            }
          >
            {translations.button[lang]}
          </a>
        </div>
      </div>
    </section>
  );
}

export default WrappedJeanTheWriter;
