import classes from "./Main_GPTs.module.scss";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import main_picture from "../../public/images/index_gpts/the-wise-duck-dev-gpt-expert-men-in-black-style.webp";

function Main_GPTs() {
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();

  // Object to store the translations for the alt attribute of the main picture
  const translation: TranslationsType = {
    subtitle: {
      EN: "Empower your Dev skills with custom GPTs for web, mobile, AI, and blockchain",
      FR: "Renforcez vos compétences de développeur avec des GPTs personnalisés pour le web, le mobile, l'IA et la blockchain.",
    },
    description: {
      EN: "Embark on the development future with The Wise Duck Dev GPTs, your portal to breaking traditional development boundaries. Boasting over 200 custom GPTs across 12 categories, from frontend refinement to backend intricacies, and leading-edge blockchain and AI innovations, we're set on not just meeting but redefining developer needs. Our platform, designed to spark creativity, streamline workflows, and amplify productivity, caters to web, mobile, AI, and blockchain developers. Whether it's mastering database management, seeking design perfection, or implementing advanced cybersecurity features, The Wise Duck Dev GPTs is your ally in expanding what's possible in development. Engage with our comprehensive suite of AI tools and join a community poised to revolutionize development practices. Together, let's craft the technology future, integrating innovation to inspire and exceed beyond today's standards. Join this transformative journey with The Wise Duck Dev GPTs, where we're not just following technology trends; we're creating them. Discover how we're setting new benchmarks for digital excellence.",
      FR: "Plongez dans le futur du développement avec The Wise Duck Dev GPTs, votre portail ultime pour transcender les barrières traditionnelles du développement. Avec notre collection incomparable de plus de 200 GPTs personnalisés, couvrant 12 catégories cruciales allant de l'amélioration du frontend, aux complexités du backend, jusqu'aux innovations de pointe en blockchain et IA, nous ne nous contentons pas de répondre aux besoins divers des développeurs ; nous visons à les redéfinir. Notre plateforme est méticuleusement conçue pour encourager la créativité, rationaliser les flux de travail et augmenter la productivité des développeurs et programmeurs dans les domaines du web, mobile, IA et blockchain. Que vous naviguiez à travers les subtilités de la gestion de bases de données, recherchiez la perfection dans le design, ou souhaitiez intégrer des mesures de cybersécurité à la pointe, The Wise Duck Dev GPTs est votre partenaire pour repousser les limites du possible en développement. Immergez-vous dans notre vaste suite d'outils alimentés par l'IA et rejoignez une communauté engagée à révolutionner les pratiques de développement. Ensemble, façonnons l'avenir de la technologie.",
    },
    alt: {
      EN: "The Wise Duck Dev emanates a suave and professional demeanor, dressed in a Men In Black style suit, symbolizing a sleek approach to GPT development and expertise.",
      FR: "Le Wise Duck Dev dégage une allure élégante et professionnelle, vêtu d'un costume de style Men In Black, symbolisant une approche élégante du développement et de l'expertise en GPT.",
    },
    button: {
      EN: "Discover the GPTs",
      FR: "Découvrez les GPTs",
    },
  };

  // Function to scroll to the GPTs section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - window.innerHeight * (6 / 100);

      requestAnimationFrame(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      });
    }
  };

  return (
    <section id="main_gpts" className={classes.main}>
      <div className={classes.textContainer}>
        <h1 className={classes.title}>
          The Wise Duck Dev <span className={classes.span}>GPTs</span>
        </h1>
        <h2 className={classes.subtitle}>
          {translation.subtitle[activeLanguage]}
        </h2>

        <p className={classes.description}>
          {translation.description[activeLanguage]}
        </p>
        <div className={classes.buttonContainer}>
          <button
            onClick={() => scrollToSection("search")}
            className={classes.button}
          >
            {translation.button[activeLanguage]}
          </button>
        </div>
      </div>
      <div className={classes.imageContainer}>
        <Image
          src={main_picture}
          alt={translation.alt[activeLanguage]}
          className={classes.image}
          priority
        />
      </div>
    </section>
  );
}

export default Main_GPTs;
