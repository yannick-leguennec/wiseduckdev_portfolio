"use client";

import classes from "./404.module.scss";
import Image from "next/image";
import photo from "../../public/images/duck_drink.webp";
import { TranslationsType } from "../../types/TranslationsType";

function NotFound() {
  // Get the active language from local storage or set it to EN
  const activeLanguage = (localStorage.getItem("appLanguage") ||
    "EN") as keyof TranslationsType["title"];

  // Object with translations
  const translations: TranslationsType = {
    text1: {
      EN: "Ooops, I think you lost yourself.",
      FR: "Oups, je crois que vous vous êtes perdu.",
    },
    text2: {
      EN: "Let me show you the way out.",
      FR: "Laissez-moi vous montrer la sortie.",
    },

    button: {
      EN: "Go back",
      FR: "Retourner",
    },
    alt: {
      EN: "Certified Full Stack JavaScript Web and Web Mobile Developer specialized in React Wise Duck Dev relaxing with a drink after a productive day",
      FR: "Développeur certifié web et web mobile Full Stack JavaScript spécialisé en React Wise Duck Dev se relaxant avec une boisson après une journée très productive",
    },
  };

  // Function to go back to the previous page
  const handleBackClick = () => {
    window.history.back();
  };
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>404</h1>
        <h2 className={classes.text1}>{translations.text1[activeLanguage]}</h2>
        <p className={classes.text2}>{translations.text2[activeLanguage]}</p>
        <button onClick={handleBackClick} className={classes.button}>
          {translations.button[activeLanguage]}
        </button>
      </div>
      <div className={classes.imageContainer}>
        <Image
          src={photo}
          alt="duck with wine"
          className={classes.image}
          priority
        />
      </div>
    </div>
  );
}

export default NotFound;
