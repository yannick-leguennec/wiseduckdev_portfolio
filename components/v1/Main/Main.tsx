import { useState, useEffect } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import classes from "./Main.module.scss";
import Image from "next/image";
import mainPictureFR from "../../../public/images/index/professional-wise-duck-developer-coding-laptop-office-FR.webp";
import mainPictureEN from "../../../public/images/index/professional-wise-duck-developer-coding-laptop-office-EN.webp";
import mainMobilePictureFR from "../../../public/images/index/professional-wise-duck-developer-mobile-coding-office-FR.webp";
import mainMobilePictureEN from "../../../public/images/index/professional-wise-duck-developer-mobile-coding-office-EN.webp";

import { TranslationsType } from "../../../types/TranslationsType";

function Main() {
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();

  // Object to store the translations
  const translations: TranslationsType = {
    subtitle: {
      EN: "Full-Stack JS Developer",
      FR: "Développeur Full-Stack JS",
    },
    description: {
      EN: "Specialized in React",
      FR: "Spécialisé en React",
    },
    altPicture: {
      EN: "Certified Full Stack JavaScript Web and Web Mobile Developer Wise Duck Dev, specialized in React, coding on laptop in modern office setup with green plants",
      FR: "Développeur Web et Web Mobile Full Stack JavaScript certifié Wise Duck Dev, spécialisé en React, codant sur un ordinateur portable dans un bureau moderne avec des plantes vertes",
    },
    altMobilePicture: {
      EN: "Mobile view Certified Full Stack JavaScript Web and Web Mobile Developer Wise Duck Dev, specialized in React, coding on mobile device in modern office setup with green plants",
      FR: "Vue mobile Développeur Web et Web Mobile Full Stack JavaScript certifié Wise Duck Dev, spécialisé en React, codant sur un appareil mobile dans un bureau moderne avec des plantes vertes",
    },
  };

  // Component to display the image based on the screen orientation
  function ResponsiveImageComponent() {
    const [isPortrait, setIsPortrait] = useState(false);

    useEffect(() => {
      const handleOrientationChange = () => {
        // Check if the screen is in portrait orientation
        const matchPortrait = window.matchMedia(
          "(orientation: portrait)"
        ).matches;
        setIsPortrait(matchPortrait);
      };

      // Add event listener for orientation changes
      window.addEventListener("orientationchange", handleOrientationChange);
      // Also check on resize in case of devices that do not support orientationchange
      window.addEventListener("resize", handleOrientationChange);

      // Initial check
      handleOrientationChange();

      // Remove event listener on cleanup
      return () => {
        window.removeEventListener(
          "orientationchange",
          handleOrientationChange
        );
        window.removeEventListener("resize", handleOrientationChange);
      };
    }, []);

    // Determine the correct image path based on screen orientation and active language
    const getImagePath = (): string => {
      if (isPortrait) {
        return activeLanguage === "FR"
          ? mainMobilePictureFR.src
          : mainMobilePictureEN.src;
      } else {
        return activeLanguage === "FR" ? mainPictureFR.src : mainPictureEN.src;
      }
    };

    return (
      <img
        src={getImagePath()}
        alt={
          isPortrait
            ? translations.altMobilePicture[activeLanguage]
            : translations.altPicture[activeLanguage]
        }
        className={`${classes.image}`}
      />
    );
  }

  return (
    <section id="main" className={`${classes.mainSection}`}>
      <ResponsiveImageComponent />
      <div className={`${classes.textContainer}`}>
        <h1 className={`${classes.title}`}>The Wise Duck Dev</h1>
        <div className={`${classes.subtitleContainer}`}>
          <h2 className={`${classes.subtitle}`}>
            {translations.subtitle[activeLanguage]}
          </h2>
          <p className={`${classes.description}`}>
            {translations.description[activeLanguage]}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Main;
