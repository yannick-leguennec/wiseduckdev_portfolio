import { useLanguage } from "@/app/context/LanguageContext";
import { TranslationsType } from "@/app/types/TranslationsType";
import classes from "./Profil.module.scss";
import Image from "next/image";
import profilePicture from "../../public/images/profil_picture.png";

function Profil() {
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();

  // Object to store the translations
  const translations: TranslationsType = {
    title: {
      EN: "WHY",
      FR: "POURQUOI",
    },
    subtitle: {
      EN: "The Wise Duck ?",
      FR: "Le Wise Duck ?",
    },
    description: {
      EN: "Hi there! More than a developer, I am the force that will propel your web projects to the next level. Resourceful, creative, and passionate, I am the Wise Duck Dev, and it is with a lot of enthusiasm that I bring to you my set of skills built from 20 years of experience in very diverse fields:",
      FR: "Salut! Plus qu'un développeur, je suis la force qui propulsera vos projets web vers de nouveaux sommets. Débrouillard, créatif et passionné, je suis le Wise Duck Dev, et c'est avec beaucoup d'enthousiasme que je vous apporte mes compétences acquises au fil de plus de 20 ans d'expérience dans des domaines très diversifiés :",
    },
    point1: {
      EN: "Certified Full Stack JS Web and Web Mobile Developer",
      FR: "Développeur web et web mobile certifié Full-Stack JS",
    },
    point2: {
      EN: "Specialized in React and interconnected technologies",
      FR: "Spécialisé en React et ses technologies interconnectées",
    },
    point3: {
      EN: "Over 10 years experience in Management",
      FR: "Plus de 10 ans d'expérience en gestion",
    },
    point4: {
      EN: "Scientific background",
      FR: "Formation scientifique",
    },
    point5: {
      EN: "Diplomed in Entrepreurship And Business Creation from HEC Montreal",
      FR: "Diplômé en Entrepreneuriat et Création d'Entreprise - HEC Montréal",
    },
    description2: {
      EN: "Looking for a cutting edge web and web developer? Let's connect and chart the course to success in the vast digital landscape.",
      FR: "À la recherche d'un développeur web à la pointe de la technologie ? Faisons connaissance et traçons ensemble la voie du succès dans l'immensité du paysage numérique.",
    },
    altPicture: {
      EN: "Certified Full Stack JavaScript Web and Web Mobile Developer specialized in React Wise Duck Dev Logo",
      FR: "Logo du développeur certifié web et web mobile Full Stack JavaScript spécialisé en React Wise Duck Dev",
    },
  };

  return (
    <section id="profil" className={`${classes.profileSection}`}>
      <div className={`${classes.imageContainer}`}>
        <Image
          src={profilePicture}
          alt={translations.altPicture[activeLanguage]}
          className={`${classes.image}`}
        />
      </div>
      <div className={`${classes.contentContainer}`}>
        <div>
          <h1 className={`${classes.title}`}>
            {translations.title[activeLanguage]}
          </h1>
          <h2 className={`${classes.subtitle}`}>
            {translations.subtitle[activeLanguage]}
          </h2>
        </div>
        <p className={`${classes.description}`}>
          {translations.description[activeLanguage]}
        </p>

        <ul className={`${classes.list}`}>
          <li>{translations.point1[activeLanguage]}</li>
          <li>{translations.point2[activeLanguage]}</li>
          <li>{translations.point3[activeLanguage]}</li>
          <li>{translations.point4[activeLanguage]}</li>
          <li>{translations.point5[activeLanguage]}</li>
        </ul>
        <p>{translations.description2[activeLanguage]}</p>
      </div>
    </section>
  );
}

export default Profil;
