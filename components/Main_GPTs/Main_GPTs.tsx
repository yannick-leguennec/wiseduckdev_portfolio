import classes from "./Main_GPTs.module.scss";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import main_picture from "../../public/images/gpts/duck-mib-main.webp";

function Main_GPTs() {
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();

  // Object to store the translations for the alt attribute of the main picture
  const translation: TranslationsType = {
    subtitle: {
      EN: "Unlocking Web Development Potential: Specialized GPTs for Every Developer's Need",
      FR: "Relâchez votre potentiel de développeur: GPTs spécialisés en développement web et mobile",
    },
    subtitle2: {
      EN: "Specialized GPTs for Every Developer's Need",
      FR: "",
    },
    description: {
      EN: "Welcome to the future of web and web mobile development with The Wise Duck Dev GPTs. Whether you're enhancing your frontend skills, delving into backend complexities, or exploring new frameworks and blockchain technology, our specialized GPTs are designed to elevate your productivity and creativity. Dive into our comprehensive suite of AI-powered tools tailored for developers and programmers across various domains, including database management, design optimization, automation, and more. Join us in revolutionizing development workflows and pushing the boundaries of what's possible.",
      FR: "Bienvenue dans le futur du développement web et web mobile avec les GPTs de The Wise Duck Dev. Que vous amélioriez vos compétences en frontend, que vous vous plongiez dans les complexités du backend ou que vous exploriez de nouveaux frameworks et la technologie blockchain, nos GPTs spécialisés sont conçus pour élever votre productivité et votre créativité. Plongez dans notre suite complète d'outils alimentés par l'IA conçus pour les développeurs et les programmeurs dans divers domaines, y compris la gestion de bases de données, l'optimisation de la conception, l'automatisation, et plus encore. Rejoignez-nous pour révolutionner les flux de travail de développement et repousser les limites de ce qui est possible.",
    },
    alt: {
      EN: "Certified Full-Stack Developer Wise Duck Dev in Men in Black Attire, Expert in React and AI-Enhanced Web Technologies - Creator of GPTs specialized in coding for web and mobile development",
      FR: "Développeur Full-Stack certifié Wise Duck Dev habillé comme un Men in Black, expert en React et en technologies web améliorées par l'IA - Créateur de GPTs spécialisés pour le développement web et mobile",
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
            onClick={() => scrollToSection("gpts")}
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
