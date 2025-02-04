import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import classes from "./Loader.module.scss";
import logo from "../../public/images/logos/wise-duck-dev-full-stack-js-logo.png";

function Loader() {
  // Get the active language from the context
  const { activeLanguage } = useLanguage();
  // Object containing translations
  const translations: TranslationsType = {
    text1: {
      EN: "Loading",
      FR: "Chargement de",
    },
    altLogo: {
      EN: "Logo of The Wise Duck Dev, certified Full Stack JavaScript and React Developer",
      FR: "Logo du développeur certifié Full Stack JavaScript et React The Wise Duck Dev",
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
      <h2 className={classes.text1}>{translations.text1[activeLanguage]}</h2>
      <h3 className={classes.text2}>
        the <strong>wise</strong>duck<strong>dev</strong>
      </h3>
      <div className={classes.loaderCircle}></div>
    </div>
  );
}

export default Loader;
