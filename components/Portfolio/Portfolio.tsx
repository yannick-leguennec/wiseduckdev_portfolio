import Image from "next/image";
import picture from "@/public/images/projectsPictures/familyflow_square.png";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationsType } from "@/types/TranslationsType";
import classes from "./Portfolio.module.scss";

function Portfolio() {
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();

  // Object to store the translations
  const translations: TranslationsType = {
    subtitle: {
      EN: "My latest project",
      FR: "Mon dernier projet",
    },
    role: {
      EN: "Role: ",
      FR: "Rôle: ",
    },
    roles: {
      EN: "Product Manager, Scrum Master, Git Master and Lead Front-end developer",
      FR: "Product Manager, Scrum Master, Git Master et Lead Front-end développeur",
    },
    tech: {
      EN: "Technologies used: ",
      FR: "Technologies utilisées: ",
    },
    presentation: {
      EN: "Family Flow is an innovative web application designed to simplify family activities coordination and communication, allowing each member to actively participate in family life, regardless of their location.",
      FR: "Family Flow est une application web innovante destinée à simplifier la coordination et la communication des activités familiales, en permettant à chaque membre de participer activement à la vie de famille, quelle que soit leur localisation.",
    },
    alt: {
      EN: "Interface of Family Flow, my latest family coordination project, developed with React, TypeScript, and Mantine UI, illustrating my role as Product Manager and Lead Front-end Developer.",
      FR: "Interface de Family Flow, mon dernier projet de coordination familiale, développé avec React, TypeScript, et Mantine UI, illustrant mon rôle de Product Manager et Lead Front-end Developer.",
    },
    github: {
      EN: "Github link: ",
      FR: "Lien Github: ",
    },
    button: {
      EN: "See project",
      FR: "Voir le projet",
    },
  };

  return (
    <section id="portfolio" className={classes.portfolioSection}>
      <h1 className={classes.title}>Portfolio</h1>

      {/* <div className={classes.articlesContainer}> */}
      {/* TODO: TRANSFORMING EACH PROJECT INTOP A COMPONENT AND REARRANGE THE ARCHITECTURE FOR BETTER INTEGRATION */}
      <article className={classes.article}>
        <div className={classes.globalContainer}>
          <div className={classes.imageContainer}>
            <a
              href="https://familyflow.up.railway.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={picture}
                alt={translations.alt[activeLanguage]}
                className={classes.image}
                tabIndex={0}
                role="img"
              />
            </a>
          </div>
          <div className={classes.contentContainer}>
            <p>
              <span className={classes.description}>Description: </span>
              {translations.presentation[activeLanguage]}
            </p>
            <p>
              <span className={classes.description}>
                {translations.role[activeLanguage]}
              </span>
              {translations.roles[activeLanguage]}
            </p>
            <div>
              <span className={classes.description}>
                {translations.github[activeLanguage]}
              </span>
              <a
                href="https://github.com/family-flow-app/FamilyFlow-FrontEnd"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://github.com/family-flow-app/FamilyFlow-FrontEnd
              </a>
            </div>

            <span className={classes.description}>
              {translations.tech[activeLanguage]}
            </span>
            <div className={classes.itemsContainer}>
              <div className={classes.list}>React</div>
              <div className={classes.list}>React-router-dom</div>
              <div className={classes.list}>TypeScript</div>
              <div className={classes.list}>Mantine UI</div>
              <div className={classes.list}>CSS/SASS</div>
              <div className={classes.list}>Axios</div>
              <div className={classes.list}>Day.js</div>
              <div className={classes.list}>Vitest</div>
            </div>
            <div className={classes.buttonContainer}>
              <a
                href="https://familyflow.up.railway.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className={classes.button} role="button" tabIndex={0}>
                  {translations.button[activeLanguage]}
                </button>
              </a>
            </div>
          </div>
        </div>
      </article>
      {/* TEST FOR A SECOND PROJECT */}
      {/* <article className={classes.article}>
          <div className={classes.globalContainer}>
            <div className={classes.imageContainer}>
              <a href="https://familyflow.up.railway.app/" target="_blank">
                <Image
                  src={picture}
                  alt="Family desktop"
                  className={classes.image}
                  tabIndex={0}
                  role="img"
                />
              </a>
            </div>
            <div className={classes.contentContainer}>
              <p>
                <span className={classes.description}>Description: </span>
                {translations.presentation[activeLanguage]}
              </p>
              <span className={classes.description}>
                {translations.tech[activeLanguage]}
              </span>
              <div className={classes.itemsContainer}>
                <div className={classes.list}>React</div>
                <div className={classes.list}>React-router-dom</div>
                <div className={classes.list}>TypeScript</div>
                <div className={classes.list}>Mantine UI</div>
                <div className={classes.list}>CSS/SASS</div>
                <div className={classes.list}>Axios</div>
                <div className={classes.list}>Day.js</div>
                <div className={classes.list}>Vitest</div>
              </div>
              <div className={classes.buttonContainer}>
                <button className={classes.button}>
                  {translations.button[activeLanguage]}
                </button>
              </div>
            </div>
          </div>
        </article> */}
      {/* </div> */}
    </section>
  );
}

export default Portfolio;
