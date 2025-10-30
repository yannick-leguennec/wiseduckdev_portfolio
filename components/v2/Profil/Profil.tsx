import Link from "next/link";
import { useLanguage } from "../../../context/LanguageContext";
import { TranslationsType } from "../../../types/TranslationsType";
import classes from "./Profil.module.scss";

function Profil() {
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();
  // Site URL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  // Determine the GPTs link based on the active language
  const gptsLink = activeLanguage === "FR" ? `/fr/gpts` : `/gpts`;
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
    title: {
      EN: "Welcome",
      FR: "Bienvenu-es",
    },
    subtitle: {
      EN: "I am a Full-Stack Developer passionate about Automation and AI",
      FR: "Je suis un développpeur Full-Stack passionné par l'automatisation et l'IA",
    },
    description1: {
      EN: "Full-Stack JavaScript Developer with 2 years of hands-on experience building web and AI-powered systems using React, Next.js, Node.js, and automation tools. After 17 years managing restaurant operations, I transitioned into tech with a focus on creativity, innovation, agile teamwork, problemsolving, and business development.",
      FR: "Développeur Full-Stack JavaScript avec 2 ans d’expérience concrète dans la création de systèmes web et d’applications alimentées par l’IA, en utilisant React, Next.js, Node.js et divers outils d’automatisation. Après 17 ans de gestion opérationnelle dans la restauration, j’ai opéré une transition vers le secteur technologique, en mettant à profit ma créativité, mon esprit d’innovation, ma rigueur, mes compétences en résolution de problèmes et en développement d’affaires.",
    },
    description2: {
      EN: "Since March 2024, I’ve delivered multiple freelance projects and led bold personal initiatives, from an autonomous AI-powered media pipeline (X & Substack) to a platform hosting 800+ custom GPTs for web, mobile, AI, blockchain, and game developers. I also apply my background in business strategy, acquired at HEC Montreal, to support startups with business models, marketing, and growth strategies.",
      FR: "Depuis mars 2024, j’ai mené à bien plusieurs mandats en freelance et piloté des projets personnels audacieux, notamment un pipeline médiatique entièrement autonome utilisant l’intelligence artificielle (X & Substack), ainsi qu’une plateforme regroupant plus de 800 GPTs personnalisés destinés aux développeurs web, mobile, IA, blockchain et jeux vidéo. J’appuie également des startups grâce à mon expertise en stratégie d’affaires, acquise à HEC Montréal, en contribuant à l’élaboration de modèles d’affaires, de plans marketing et de stratégies de croissance.",
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
      EN: "Over 10 years of experience in management",
      FR: "Plus de 10 ans d'expérience en gestion",
    },
    point5: {
      EN: "Scientific background",
      FR: "Formation scientifique",
    },
    point6: {
      EN: "Top graduate from HEC Montréal in Entrepreneurship and Business Creation",
      FR: "Diplômé de HEC Montréal en Entrepreneuriat et Création d'Entreprise",
    },
    point7: {
      EN: "Continuous learning",
      FR: "Apprentissage continu",
    },
    point8: {
      EN: "AI Enthusiast (Discover my GPTs specialized in web, mobile, AI and blockchain developement ",
      FR: "Passionné d'IA (Découvrez mes GPTs spécialisés en développement web, mobile, IA et blockchain ",
    },
    point9: {
      EN: "Expert in automation, AI workflows, and prompt engineering",
      FR: "Expert en automatisation, intégration d'IA et prompt engineering",
    },
    button: {
      EN: "Check out my resume",
      FR: "Consultez mon CV",
    },
    cv: {
      EN: "docs/yannick_legunnec_full_stack_dev_resume_2025.pdf",
      FR: "docs/yannick_legunnec_full_stack_dev_resume_2025_fr.pdf",
    },
    aria1: {
      EN: "Discover my GPTs specialized in web, mobile, AI and blockchain developement here",
      FR: "Découvrez mes GPTs spécialisés en développement web, mobile, IA et blockchain ici",
    },
    aria2: {
      EN: "Download my CV in English here",
      FR: "Télécharger mon CV en Français ici",
    },
  };

  return (
    <section id="profil" className={`${classes.profileSection}`}>
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
          {translations.description1[activeLanguage]}
        </p>
        <p className={`${classes.description}`}>
          {translations.description2[activeLanguage]}
        </p>
        <div className={`${classes.listContainer}`}>
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
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  handleNavigationClick("Click on WDD GPTs link from Profil")
                }
                aria-label={translations.aria1[activeLanguage]}
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
        </div>
        <div className={`${classes.buttonContainer}`}>
          <a
            id="downloadResumeButton"
            title={
              activeLanguage === "EN"
                ? "Open resume in a new tab"
                : "Ouvrir le CV dans un nouvel onglet"
            }
            href={translations.cv[activeLanguage]}
            target="_blank"
            rel="noopener noreferrer"
            className={`${classes.button}`}
            aria-label={translations.aria2[activeLanguage]}
            onClick={() =>
              handleNavigationClick("Click on Download Resume from Profil")
            }
          >
            {translations.button[activeLanguage]}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profil;
