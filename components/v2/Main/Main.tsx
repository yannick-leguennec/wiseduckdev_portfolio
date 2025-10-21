import { useLanguage } from "../../../context/LanguageContext";
import classes from "./Main.module.scss";
import { TranslationsType } from "../../../types/TranslationsType";

function Main() {
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();

  // Object to store the translations
  const translations: TranslationsType = {
    subtitle1: {
      EN: "FULL-STACK",
      FR: "FULL-STACK",
    },
    subtitle2: {
      EN: "JavaScript Developer",
      FR: "Développeur JavaScript",
    },
    button1: {
      EN: "Say Hello",
      FR: "Dites Bonjour",
    },
    button2: {
      EN: "See My Work",
      FR: "Voir Mon Travail",
    },
  };

  return (
    <section id="main" className={classes.mainSection}>
      <div className={classes.mainContainer}>
        <div className={classes.topContainer}>
          <h2 className={classes.subtitle1}>
            {translations.subtitle1[activeLanguage]}
          </h2>
          <h2 className={classes.subtitle2}>
            {translations.subtitle2[activeLanguage]}
          </h2>
        </div>
        <div className={classes.subContainer}>
          <h1 className={classes.title}>THE WISE DUCK DEV</h1>
          <div className={classes.buttonsContainer}>
            <a href="#contact" className={classes.mainButton}>
              {translations.button1[activeLanguage]}
            </a>
            <a href="#portfolio" className={classes.mainButton}>
              {translations.button2[activeLanguage]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
