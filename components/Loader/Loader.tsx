import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import classes from "./Loader.module.scss";
import logo from "../../public/images/fake_logo.png";

function Loader() {
  const { activeLanguage } = useLanguage();

  const translations: TranslationsType = {
    text1: {
      EN: "Welcome to",
      FR: "Bienvenue sur",
    },
    text2: {
      EN: "The Wise Duck Dev",
      FR: "The Wise Duck Dev",
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
      />
      <h1 className={classes.text1}>{translations.text1[activeLanguage]}</h1>
      <h2 className={classes.text2}>{translations.text2[activeLanguage]}</h2>
      <div className={classes.loaderCircle}></div>
    </div>
  );
}

export default Loader;
