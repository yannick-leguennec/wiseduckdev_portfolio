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
      EN: "I am a Full-Stack Developer specialized in AI Integration & Automation",
      FR: "Développeur Full-Stack spécialisé en Intégration d'IA & Automatisation",
    },
    description1: {
      EN: "Full-Stack JavaScript developer with over 2 years of hands-on experience integrating AI into real production systems and building automation that runs itself, using React, Next.js, Node.js, and Python. Most teams know they need AI but not where to start — I find where it creates real value, then build it end-to-end.",
      FR: "Développeur Full-Stack JavaScript avec plus de 2 ans d'expérience pratique à intégrer l'IA dans des systèmes réels en production et à créer des automatisations autonomes, avec React, Next.js, Node.js et Python. La plupart des équipes savent qu'elles ont besoin d'IA, mais pas par où commencer — je trouve où elle crée de la valeur, puis je la construis de bout en bout.",
    },
    description2: {
      EN: "Since March 2024, under my Wise Duck Dev brand, I've shipped projects from an autonomous AI-powered media pipeline (X & Substack) to ArchMapper, a reverse-engineering pipeline tested on 10,000+ file codebases, and a platform of 800+ custom GPTs. My earlier 17 years leading operations and a first-in-class Entrepreneurship certificate from HEC Montréal shape how I build: I think in systems and look for leverage.",
      FR: "Depuis mars 2024, sous ma marque Wise Duck Dev, j'ai livré des projets allant d'un pipeline média autonome propulsé par l'IA (X & Substack) à ArchMapper, un pipeline de rétro-ingénierie testé sur des bases de code de plus de 10 000 fichiers, et une plateforme de 800+ GPTs personnalisés. Mes 17 années à diriger des opérations et un certificat en Entrepreneuriat de HEC Montréal (major de promotion) façonnent ma manière de construire : je pense en systèmes et je cherche le levier.",
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
      EN: "Expert in AI integration, automation, AI workflows, and prompt engineering",
      FR: "Expert en intégration d'IA, automatisation, workflows IA et prompt engineering",
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
