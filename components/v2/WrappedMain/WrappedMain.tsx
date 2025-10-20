import Header from "../Header/Header";
import Main from "../Main/Main";
import classes from "./WrappedMain.module.scss";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import picture_background_main_horizontal from "../../../public/images/index/v2/images_index_page/wise_duck_dev_profile_picture_portfolio_website_version_2_main_picture_horizontal.webp";
import picture_background_main_vertical from "../../../public/images/index/v2/images_index_page/wise_duck_dev_profile_picture_portfolio_website_version_2_main_picture_vertical.webp";
import { TranslationsType } from "../../../types/TranslationsType";
import { useLanguage } from "../../../context/LanguageContext";

// Object to store the translations
const translation: TranslationsType = {
  altPicture: {
    EN: "AI generated image of the Wise Duck Dev wearing a golden color shirt and golden sun glasses, on a golden background",
    FR: "Image générée par IA du Wise Duck Dev portant un shirt de couleur or et des lunettes de soleil de couleur or, sur un fond d'or",
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

  // Update the window width state when the window is resized
  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowWidth);
    updateWindowWidth(); // Initialisation

    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  // Choose the image source based on the window width
  const src = windowWidth && windowWidth >= 768 ? srcDesktop : srcMobile;

  return <Image src={src} alt={alt} className={classes.image} />;
};

function WrappedMain() {
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();
  const [isPortrait, setIsPortrait] = useState(false);

  return (
    // WrappedMain.tsx
    <section className={classes.wrappedMain}>
      <ResponsiveImage
        srcDesktop={picture_background_main_horizontal}
        srcMobile={picture_background_main_vertical}
        alt={translation.altPicture[activeLanguage]}
      />

      <div className={classes.headerLayer}>
        <Header />
      </div>

      <main className={classes.mainLayer}>
        <Main />
      </main>
    </section>
  );
}

export default WrappedMain;
