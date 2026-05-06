/**
 * WrappedArchMapper.tsx
 *
 * Displays the "ArchMapper" project page header.
 *
 * Features:
 * - Responsive background image that adjusts by orientation.
 * - English/French language support via LanguageContext.
 * - Overview, role, and technologies presentation with clear structure.
 * - CTA button linking to the GitHub repository.
 * - Google Analytics tracking for button clicks (if gtag is available).
 *
 * This component matches the layout and logic of WrappedEvidenceMedia for consistency.
 */

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../../Header/Header";
import { useLanguage } from "../../../../context/LanguageContext";
import classes from "./WrappedArchMapper.module.scss";

// ===============================
// IMPORT BACKGROUND IMAGES
// (reused from the shared project background pictures, same pattern as
//  WrappedEvidenceMedia which also reuses these assets)
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
    EN: "ArchMapper",
    FR: "ArchMapper",
  },
  pageIntroduction1: {
    EN: "ArchMapper is a fully automated, resumable, bottom-up reverse-engineering pipeline that turns any codebase into a structured architectural document, ready for human or LLM analysis.",
    FR: "ArchMapper est un pipeline de rétro-ingénierie ascendant entièrement automatisé et reprenable, qui transforme n'importe quel codebase en un document architectural structuré, prêt pour une analyse humaine ou par LLM.",
  },
  pageRoleTitle: {
    EN: "ROLE",
    FR: "RÔLE",
  },
  pageRoles: {
    EN: [
      "Product Architect",
      "Full-Stack TypeScript Developer",
      "AI Integration Engineer",
      "Methodology Designer",
    ],
    FR: [
      "Architecte Produit",
      "Développeur Full-Stack TypeScript",
      "Ingénieur en Intégration IA",
      "Concepteur de Méthodologie",
    ],
  },
  pageTechnologies: {
    EN: [
      "TypeScript",
      "Node.js",
      "Anthropic API",
      "Claude Sonnet",
      "Claude Opus",
      "Zod",
      "dree",
      "dependency-cruiser",
      "Vitest",
      "tsx",
      "Message Batches API",
      "Prompt Caching",
      "JSON Schema",
      "Markdown",
      "Git",
      "GitHub",
    ],
    FR: [
      "TypeScript",
      "Node.js",
      "Anthropic API",
      "Claude Sonnet",
      "Claude Opus",
      "Zod",
      "dree",
      "dependency-cruiser",
      "Vitest",
      "tsx",
      "Message Batches API",
      "Prompt Caching",
      "JSON Schema",
      "Markdown",
      "Git",
      "GitHub",
    ],
  },

  button1: {
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
function WrappedArchMapper() {
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
          {/* GitHub Repo */}
          <a
            href="https://github.com/yannick-leguennec/archmapper"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              window.gtag?.("event", "navigation_click", {
                event_category: "Navigation",
                event_navigation:
                  "Clicked on View ArchMapper GitHub Repo Button",
              });
            }}
            className={classes.button}
            aria-label={
              activeLanguage === "EN"
                ? "View ArchMapper GitHub repository"
                : "Voir le dépôt GitHub d'ArchMapper"
            }
          >
            {translations.button1[lang]}
          </a>
        </div>
      </div>
    </section>
  );
}

export default WrappedArchMapper;
