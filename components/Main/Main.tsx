import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import classes from "./Main.module.scss";
import Image from "next/image";
import desktopImage from "../../public/images/index/duck-main.webp";
import mobileImage from "../../public/images/index/duck-main-mobile.webp";
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
      EN: "Certified Full Stack JavaScript Web and Web Mobile Developer specialized in React Wise Duck Dev setting in a chair while coding a new project",
      FR: "Développeur certifié web et web mobile Full Stack JavaScript spécialisé en React Wise Duck Dev assis sur une chaise en train de coder un nouveau projet",
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
        alt={translations.altPicture[activeLanguage]}
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
