import { useLanguage } from "../../../context/LanguageContext";
import classes from "./Main.module.scss";
import { TranslationsType } from "../../../types/TranslationsType";

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
  };

  return (
    <section id="main" className={classes.mainSection}>
      <div className={classes.textContainer}>
        <h1 className={classes.title}>The Wise Duck Dev</h1>
        <div className={classes.subtitleContainer}>
          <h2 className={classes.subtitle}>
            {translations.subtitle[activeLanguage]}
          </h2>
          <p className={classes.description}>
            {translations.description[activeLanguage]}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Main;
