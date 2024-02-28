import { useState, useEffect } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import classes from "./Main.module.scss";
import Image, { StaticImageData } from "next/image";
import mainPictureDesktop from "../../public/images/duck-main.png";
import mainPictureMobile from "../../public/images/duck-main-mobile.png";
import { TranslationsType } from "@/app/types/TranslationsType";

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
      EN: "Certified Full Stack JavaScript Web and Web Mobile Developer specialized in React Wise Duck Dev Logo",
      FR: "Logo du développeur certifié web et web mobile Full Stack JavaScript spécialisé en React Wise Duck Dev",
    },
  };

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

    return (
      <Image
        src={src}
        alt={alt}
        className={`${classes.image}`}
        layout="fill"
        objectFit="cover"
      />
    );
  };

  return (
    <section id="main" className={`${classes.mainSection}`}>
      <ResponsiveImage
        srcDesktop={mainPictureDesktop}
        srcMobile={mainPictureMobile}
        alt={translations.altPicture[activeLanguage]}
      />
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
