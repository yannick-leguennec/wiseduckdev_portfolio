import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import classes from "./Main.module.scss";
import Image from "next/image";
import desktopImage from "../../public/images/index/professional-wise-duck-developer-coding-laptop-office.webp";
import mobileImage from "../../public/images/index/professional-wise-duck-developer-mobile-coding-office.webp.webp";
import { TranslationsType } from "../../types/TranslationsType";

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

  // Component to display the image based on the window width (Deskop vs Mobile)
  function ResponsiveImageComponent() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Function to update the state based on window width
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1025);
      };

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call the function to set the initial state
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
      <Image
        src={isMobile ? mobileImage : desktopImage}
        alt={
          isMobile
            ? translations.altMobilePicture[activeLanguage]
            : translations.altPicture[activeLanguage]
        }
        className={`${classes.image}`}
        priority
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
