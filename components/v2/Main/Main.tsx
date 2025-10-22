import { useLanguage } from "../../../context/LanguageContext";
import classes from "./Main.module.scss";
import { TranslationsType } from "../../../types/TranslationsType";

function Main() {
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();

  // Handle navigation click for analytics
  function handleNavigationClick(label: string) {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "navigation_click", {
        event_category: "Navigation",
        event_label: label,
      });
    }
  }

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
      FR: "Portfolio",
    },
  };

  return (
    <section
      id="main"
      className={classes.mainSection}
      role="region"
      aria-labelledby="main-heading"
    >
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
          <h1 className={classes.title} id="main-heading">
            THE WISE DUCK DEV
          </h1>
          <div className={classes.buttonsContainer}>
            <a
              href="#contact"
              className={classes.mainButton}
              onClick={() =>
                handleNavigationClick("Click on Say Hello from Main")
              }
              aria-label={
                activeLanguage === "EN" ? "Say Hello" : "Dites Bonjour"
              }
              title={
                activeLanguage === "EN"
                  ? "Contact The Wise Duck Dev"
                  : "Contacter The Wise Duck Dev"
              }
            >
              {translations.button1[activeLanguage]}
            </a>
            <a
              href="#portfolio"
              className={classes.mainButton}
              onClick={() =>
                handleNavigationClick("Click on See My Work from Main")
              }
              aria-label={
                activeLanguage === "EN" ? "See My Work" : "Voir Mon Travail"
              }
              title={
                activeLanguage === "EN"
                  ? "See The Wise Duck Dev's Work"
                  : "Voir le Travail de The Wise Duck Dev"
              }
            >
              {translations.button2[activeLanguage]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
