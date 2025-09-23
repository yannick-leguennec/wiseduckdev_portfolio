import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import classes from "./Profil.module.scss";
import Image from "next/image";
import profilePicture from "../../public/images/index/full-stack-react-wise-duck-developer-profile.webp";

function Profil() {
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();
  // Site URL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  // Determine the GPTs link based on the active language
  const gptsLink = activeLanguage === "FR" ? `/fr/gpts` : `/gpts`;

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
      EN: "Hi there! More than a developer, I’m a builder of scalable, AI-powered systems designed to drive real impact. As the Wise Duck Dev, I bring a rare blend of creativity, engineering precision, and strategic thinking, forged through 20+ years of diverse experience across tech, business, and creativity. Every project I take on is an opportunity to deliver smart, elegant, and future-ready solutions.",
      FR: "Salut! Je ne suis pas qu’un développeur — je conçois des systèmes puissants et scalables, propulsés par l’IA, pensés pour générer un impact concret. En tant que Wise Duck Dev, je combine créativité, rigueur d’ingénierie et vision stratégique, fruits de plus de 20 ans d’expérience riche mêlant tech, entrepreneuriat et créativité. Chaque projet est pour moi une occasion de livrer des solutions intelligentes, élégantes et tournées vers l’avenir.",
    },

    point1: {
      EN: "Certified Full Stack JS Web and Web Mobile Developer",
      FR: "Développeur web et web mobile certifié Full-Stack JS",
    },
    point2: {
      EN: "Specialized in React, Next.js and interconnected technologies",
      FR: "Spécialisé en React et ses technologies interconnectées",
    },
    point3: {
      EN: "Skilled in Python, Node.js, REST APIs, and various backend technologies",
      FR: "Compétent en Python, Node.js, REST APIs et diverses technologies backend",
    },
    point4: {
      EN: "Over 10 years experience in Management",
      FR: "Plus de 10 ans d'expérience en gestion",
    },
    point5: {
      EN: "Scientific background",
      FR: "Formation scientifique",
    },
    point6: {
      EN: "Top graduate from HEC Montréal in Entrepreneurship and Business Creation",
      FR: "Diplômé de HEC Montréal en Entrepreunariat et Création d'Entreprise",
    },
    point7: {
      EN: "Continuous learning",
      FR: "Apprentissage continue",
    },
    point8: {
      EN: "AI Enthusiast (Discover my GPTs specialized in web, mobile, AI and blockchain developement ",
      FR: "Passionné d'IA (Découvrez mes GPTs spécialisés en développement web, mobile, IA et blockchain ",
    },
    point9: {
      EN: "Expert in automation, AI workflows, and prompt engineering",
      FR: "Expert en automatisation, intégration d'IA et prompt engineering",
    },
    description2: {
      EN: "Looking for a cutting edge web and web developer? Let's connect and chart the course to success in the vast digital landscape.",
      FR: "À la recherche d'un développeur web à la pointe de la technologie ? Faisons connaissance et traçons ensemble la voie du succès dans l'immensité du paysage numérique.",
    },
    altPicture: {
      EN: "Profile picture of the Full Stack JavaScript Developer Wise Duck Dev, specialized in React, dressed in a professional white suit",
      FR: "Photo de profil du Développeur Full Stack JavaScript Wise Duck Dev, spécialisé en React, habillé d'un costume blanc professionnel",
    },
    button: {
      EN: "Check Out My Resume",
      FR: "Consultez Mon CV",
    },
    cv: {
      EN: "docs/yannick_legunnec_full_stack_dev_resume_2025.pdf",
      FR: "docs/yannick_legunnec_full_stack_dev_resume_2025_fr.pdf",
    },
    aria: {
      EN: "Download my CV in English",
      FR: "Télécharger mon CV en Français",
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
          <h2 className={`${classes.title}`}>
            {translations.title[activeLanguage]}
          </h2>
          <h3 className={`${classes.subtitle}`}>
            {translations.subtitle[activeLanguage]}
          </h3>
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
          <li>{translations.point6[activeLanguage]}</li>
          <li>
            <Link
              href={gptsLink}
              onClick={() => {
                if (window.gtag)
                  window.gtag("event", "navigation_click", {
                    event_category: "Navigation",
                    event_navigation: "Portfolio to GPTs from Profil",
                  });
              }}
            >
              {translations.point8[activeLanguage]}
              <span className={`${classes.gptsLinkOrange}`}>
                {activeLanguage === "FR" ? "ici" : "here"}
              </span>
            </Link>
            {")"}
          </li>
          <li>{translations.point9[activeLanguage]}</li>
        </ul>
        <p>{translations.description2[activeLanguage]}</p>
        <div className={`${classes.buttonContainer}`}>
          <a
            id="downloadResumeButton"
            href={translations.cv[activeLanguage]}
            target="_blank"
            rel="noopener noreferrer"
            className={`${classes.button}`}
            aria-label={translations.aria[activeLanguage]}
            onClick={() => {
              if (window.gtag)
                window.gtag("event", "navigation_click", {
                  event_category: "Navigation",
                  event_navigation: `See the resume in ${activeLanguage} from Profil`,
                });
            }}
          >
            {translations.button[activeLanguage]}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profil;
