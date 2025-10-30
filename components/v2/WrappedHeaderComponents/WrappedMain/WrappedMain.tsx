import { useState, useEffect } from "react";
import { useLanguage } from "../../../../context/LanguageContext";
import Header from "../../Header/Header";
import Main from "../../Main/Main";
import classes from "./WrappedMain.module.scss";
import Image from "next/image";
import picture_background_main_horizontal from "../../../../public/images/index/v2/images_index_page/wise_duck_dev_profile_picture_portfolio_website_version_2_main_picture_horizontal.webp";
import picture_background_main_vertical from "../../../../public/images/index/v2/images_index_page/wise_duck_dev_profile_picture_portfolio_website_version_2_main_picture_vertical.webp";
import { TranslationsType } from "../../../../types/TranslationsType";

// 🔸 Translations
const translation: TranslationsType = {
  altPicture: {
    EN: "AI generated image of the Wise Duck Dev wearing a golden color shirt and golden sun glasses, on a golden background",
    FR: "Image générée par IA du Wise Duck Dev portant un shirt de couleur or et des lunettes de soleil de couleur or, sur un fond d'or",
  },
};

// 🔸 Responsive image based on orientation
const ResponsiveImage = ({ alt }: { alt: string }) => {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const handleOrientationChange = () => {
      const matchPortrait = window.matchMedia(
        "(orientation: portrait)"
      ).matches;
      setIsPortrait(matchPortrait);
    };

    // Initial check + listeners
    handleOrientationChange();
    window.addEventListener("orientationchange", handleOrientationChange);
    window.addEventListener("resize", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);

  // Select image based on orientation
  const src = isPortrait
    ? picture_background_main_vertical
    : picture_background_main_horizontal;

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

function WrappedMain() {
  const { activeLanguage } = useLanguage();

  return (
    <section className={classes.wrappedMain}>
      <ResponsiveImage alt={translation.altPicture[activeLanguage]} />

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
