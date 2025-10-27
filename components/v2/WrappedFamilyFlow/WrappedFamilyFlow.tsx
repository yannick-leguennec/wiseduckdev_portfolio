/**
 * WrappedFamilyFlow.tsx
 *
 * Displays the "Family Flow" project page.
 *
 * Features:
 * - Dynamically loads a responsive background image based on screen orientation.
 * - Supports both English and French text via LanguageContext.
 * - Describes the project, roles, technologies, and provides navigation buttons.
 * - Tracks button clicks using Google Analytics (if available).
 *
 * This component is fully client-rendered (uses React hooks).
 */

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../Header/Header";
import { useLanguage } from "../../../context/LanguageContext";
import { TranslationsType } from "../../../types/TranslationsType";
import classes from "./WrappedFamilyFlow.module.scss";

// ===============================
// IMPORT IMAGES
// ===============================
// These are static background images for landscape and portrait orientations.
import background_image_landscape from "../../../public/images/projectsPictures/project_background_pictures/wise_duck_dev_background_project_image_landscape.webp";
import background_image_portrait from "../../../public/images/projectsPictures/project_background_pictures/wise_duck_dev_background_project_image_portrait.webp";

// ===============================
// TRANSLATIONS
// ===============================
// All text displayed on this page is stored here.
// Each key includes English (EN) and French (FR) versions.
const translations: TranslationsType = {
  altPicture: {
    EN: "golden background image",
    FR: "image de fond dorée",
  },
  pageTitle: {
    EN: "Family Flow",
    FR: "Family Flow",
  },
  pageIntroductionSentence: {
    EN: "Discover Family Flow, a React-based web app designed to simplify task sharing and planning in households. Co-developed as part of an intensive Web & Mobile Development program.",
    FR: "Découvrez Family Flow, une application web conçue avec React pour simplifier le partage des tâches et la planification au sein des foyers. Co-développée dans le cadre d'un programme intensif de développement Web & Mobile.",
  },
  pageRoleTitle: {
    EN: "ROLE",
    FR: "RÔLE",
  },
  pageRoles: {
    EN: ["Product Manager", "Scrum Master", "Front-End Lead Developer"],
    FR: ["Chef de produit", "Scrum Master", "Développeur principal Front-End"],
  },
  pageTechnologies: {
    EN: [
      "React",
      "TypeScript",
      "Mantine UI",
      "Axios",
      "CSS / Sass",
      "Dotenv",
      "Vitest",
      "Git",
      "GitHub",
      "Railway",
    ],
    FR: [
      "React",
      "TypeScript",
      "Mantine UI",
      "Axios",
      "CSS / Sass",
      "Dotenv",
      "Vitest",
      "Git",
      "GitHub",
      "Railway",
    ],
  },
  button1: {
    EN: "View live",
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
// This subcomponent handles selecting the appropriate background image
// based on the user's screen orientation (portrait or landscape).
const ResponsiveImage = ({ alt }: { alt: string }) => {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    // Detect whether the screen is in portrait mode
    const handleOrientationChange = () => {
      setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
    };

    // Run once on mount and set up listeners for orientation and resize
    handleOrientationChange();
    window.addEventListener("orientationchange", handleOrientationChange);
    window.addEventListener("resize", handleOrientationChange);

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);

  // Select the correct image based on orientation
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
// This is the main component rendered on the Family Flow project page.
function WrappedFamilyFlow() {
  const { activeLanguage } = useLanguage();
  const lang = activeLanguage; // Short alias for cleaner references

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
          <h2 className={classes.title}>{translations.pageTitle[lang]}</h2>
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

        {/* === Action Buttons (Links) === */}
        <div className={classes.buttonsContainer}>
          {/* Live App Button */}
          <a
            href="https://familyflow.up.railway.app/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              // Track the click in Google Analytics, if gtag is available
              window.gtag?.("event", "navigation_click", {
                event_category: "Navigation",
                event_navigation: "Clicked on View live Family Flow Button",
              });
            }}
          >
            <button className={classes.button}>
              {translations.button1[lang]}
            </button>
          </a>

          {/* GitHub Repository Button */}
          <a
            href="https://github.com/family-flow-app/FamilyFlow-FrontEnd"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              window.gtag?.("event", "navigation_click", {
                event_category: "Navigation",
                event_navigation: "Clicked on GitHub Family Flow Button",
              });
            }}
          >
            <button className={classes.button}>
              {translations.button2[lang]}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default WrappedFamilyFlow;
