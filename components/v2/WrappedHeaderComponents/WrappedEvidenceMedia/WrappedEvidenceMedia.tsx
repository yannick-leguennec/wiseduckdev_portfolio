/**
 * WrappedEvidenceMedia.tsx
 *
 * Displays the "Evidence Media" project page.
 *
 * Features:
 * - Responsive background image that adjusts by orientation.
 * - English/French language support via LanguageContext.
 * - Overview, role, and technologies presentation with clear structure.
 * - CTA buttons linking to live project and GitHub repository.
 * - Google Analytics tracking for button clicks (if gtag is available).
 *
 * This component matches the layout and logic of WrappedFamilyFlow for consistency.
 */

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../../Header/Header";
import { useLanguage } from "../../../../context/LanguageContext";
import classes from "./WrappedEvidenceMedia.module.scss";

// ===============================
// IMPORT BACKGROUND IMAGES
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
    EN: "Evidence Media",
    FR: "Evidence Media",
  },
  pageIntroduction1: {
    EN: "Evidence Media is an AI-powered platform that automates the curation and publication of sourced independent news across X and Substack, serving audiences throughout North America.",
    FR: "Evidence Media est une plateforme propulsée par l’IA qui automatise la curation et la publication d’actualités indépendantes sourcées sur X et Substack, à destination du public nord-américain.",
  },
  pageRoleTitle: {
    EN: "ROLE",
    FR: "RÔLE",
  },
  pageRoles: {
    EN: [
      "Product Manager",
      "Full-Stack Developer",
      "Automation Engineer",
      "AI Systems Orchestrator",
    ],
    FR: [
      "Chef de Produit",
      "Développeur Full-Stack",
      "Ingénieur en Automatisation",
      "Orchestrateur de Systèmes IA",
    ],
  },
  pageTechnologies: {
    EN: [
      "Python",
      "Flask",
      "OpenAI API",
      "Perplexity API",
      "xAI API",
      "X API",
      "GitHub Actions",
      "HashiCorp Vault",
      "BeautifulSoup",
      "Selenium",
      "Tweepy",
      "YAML",
      "Shell Scripting",
    ],
    FR: [
      "Python",
      "Flask",
      "OpenAI API",
      "Perplexity API",
      "xAI API",
      "X API",
      "GitHub Actions",
      "HashiCorp Vault",
      "BeautifulSoup",
      "Selenium",
      "Tweepy",
      "YAML",
      "Shell Scripting",
    ],
  },
  button1: {
    EN: "X account",
    FR: "Compte X",
  },
  button2: {
    EN: "Substack",
    FR: "Substack",
  },
  button3: {
    EN: "GitHub Repo",
    FR: "Dépôt GitHub",
  },
};

// ===============================
// RESPONSIVE BACKGROUND COMPONENT
// ===============================
const ResponsiveImage = ({ alt }: { alt: string }) => {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    // Detect orientation dynamically
    const handleOrientationChange = () => {
      setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
    };

    handleOrientationChange(); // Initial run
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
function WrappedEvidenceMedia() {
  const { activeLanguage } = useLanguage();
  const lang = activeLanguage;

  return (
    <section className={classes.wrappedMain}>
      {/* === Background === */}
      <ResponsiveImage alt={translations.altPicture[lang]} />

      {/* === Fixed Header === */}
      <Header />

      {/* === Main Page Content === */}
      <div className={classes.contentContainer}>
        {/* --- Title Section --- */}
        <header className={classes.titleContainer}>
          <h1 className={classes.title}>{translations.pageTitle[lang]}</h1>
          <p className={classes.introductionSentence}>
            {translations.pageIntroduction1[lang]}
          </p>
        </header>

        {/* --- Role Section --- */}
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

        {/* --- Technologies Section --- */}
        <section className={classes.technologyContainer}>
          {translations.pageTechnologies[lang].map((tech, index) => (
            <span key={index} className={classes.technologyItem}>
              {tech}
            </span>
          ))}
        </section>

        {/* --- Buttons --- */}
        <div className={classes.buttonsContainer}>
          {/* Live Project */}
          <a
            href="https://x.com/Evidence_X_News"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              window.gtag?.("event", "navigation_click", {
                event_category: "Navigation",
                event_navigation:
                  "Clicked on View Live Evidence Media X account Button",
              });
            }}
          >
            <button
              className={classes.button}
              aria-label={
                activeLanguage === "EN"
                  ? "View Live Evidence Media X account"
                  : "Voir le compte X d'Evidence Media"
              }
            >
              {translations.button1[lang]}
            </button>
          </a>

          <a
            href="https://evidencemedianewsletter.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              window.gtag?.("event", "navigation_click", {
                event_category: "Navigation",
                event_navigation:
                  "Clicked on View Live Evidence Media Substack account Button",
              });
            }}
          >
            <button
              className={classes.button}
              aria-label={
                activeLanguage === "EN"
                  ? "View Live Evidence Media Substack account"
                  : "Voir le compte Substack d'Evidence Media"
              }
            >
              {translations.button2[lang]}
            </button>
          </a>

          {/* GitHub Repo */}
          <a
            href="https://github.com/yannick-leguennec/evidence_media_news"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              window.gtag?.("event", "navigation_click", {
                event_category: "Navigation",
                event_navigation:
                  "Clicked on View GitHub Evidence Media Repo Button",
              });
            }}
          >
            <button
              className={classes.button}
              aria-label={
                activeLanguage === "EN"
                  ? "View Evidence Media GitHub repository"
                  : "Voir le dépôt GitHub d'Evidence Media"
              }
            >
              {translations.button3[lang]}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default WrappedEvidenceMedia;
