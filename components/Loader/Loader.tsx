import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import classes from "./Loader.module.scss";
import logo from "../../public/images/logos/simple_logo.png";

function Loader() {
  // Get the active language from the context
  const { activeLanguage } = useLanguage();
  // Object containing translations
  const translations: TranslationsType = {
    text1: {
      EN: "Welcome to",
      FR: "Bienvenue sur",
    },
    altLogo: {
      EN: "Certified Full Stack JavaScript Web and Web Mobile Developer specialized in React Wise Duck Dev Logo",
      FR: "Logo du développeur certifié web et web mobile Full Stack JavaScript spécialisé en React Wise Duck Dev",
    },
  };
  return (
    <div className={classes.loaderOverlay}>
      <Image
        src={logo}
        alt={translations.altLogo[activeLanguage]}
        className={classes.image}
        priority
      />
      <h1 className={classes.text1}>{translations.text1[activeLanguage]}</h1>
      <h2 className={classes.text2}>
        the <strong>wise</strong>duck<strong>dev</strong>
      </h2>
      <div className={classes.loaderCircle}></div>
    </div>
  );
}

export default Loader;
