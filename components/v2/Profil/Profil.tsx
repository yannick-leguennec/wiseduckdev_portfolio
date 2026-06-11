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
      EN: "Full-Stack JavaScript developer with over 2 years of hands-on experience integrating AI into real production systems and building automation that runs itself. I work primarily in Python and TypeScript against the OpenAI, Anthropic, xAI, and Perplexity APIs, and I ship the result end-to-end. Most teams today know they need to integrate AI to stay competitive — they just don't know where to start. I help them find where AI can genuinely create value inside their business, develop and implement the chosen solution all the way to production, and support its maintenance after launch.",
      FR: "Développeur Full-Stack JavaScript avec plus de 2 ans d'expérience pratique à intégrer l'IA dans des systèmes réels en production et à créer des automatisations autonomes. Je travaille principalement en Python et TypeScript avec les APIs d'OpenAI, Anthropic, xAI et Perplexity, et je livre les solutions de bout en bout. La plupart des équipes savent qu'il est important aujourd'hui d'intégrer l'IA dans leur structure pour rester compétitives, mais ne savent pas par où commencer. Je les aide à trouver où l'IA peut réellement créer de la valeur dans leur entreprise, puis je développe et implémente la ou les solutions retenues jusqu'à la mise en production, et je les accompagne dans la maintenance.",
    },
    description2: {
      EN: "Since March 2024, under my Wise Duck Dev brand, I've shipped projects ranging from creating an independent, fully automated AI-powered media outlet (X & Substack) to ArchMapper, a reverse-engineering pipeline tested on 10,000+ file codebases, and a platform of 800+ specialized GPTs for developers. My 17 years leading operations across industry and the restaurant sector, and a first-in-class Entrepreneurship certificate (with distinction) from HEC Montréal, mean I don't just integrate AI — I know where to integrate it. I think in systems and look for where AI delivers real value.",
      FR: "Depuis mars 2024, sous ma marque Wise Duck Dev, j'ai livré des projets allant de la création d'un média indépendant entièrement automatisé utilisant l'IA (X & Substack) à ArchMapper, un pipeline de rétro-ingénierie testé sur des bases de code de plus de 10 000 fichiers, jusqu'au développement d'une plateforme de 800+ GPTs spécialisés pour les développeurs. Mes 17 années d'expérience à diriger les opérations au sein de l'industrie et de la restauration et un certificat en Entrepreneuriat de HEC Montréal (obtenu avec distinction, premier de ma promotion) signifient que je n'intègre pas seulement l'IA — je sais où l'intégrer. Je pense en systèmes et je cherche là où l'IA apporte une véritable valeur.",
    },
    point1: {
      EN: "Certified Full-Stack JS Web & Web Mobile Developer",
      FR: "Développeur web et web mobile certifié Full-Stack JS",
    },
    point2: {
      EN: "Model-agnostic across LLMs: OpenAI, Anthropic (Claude), xAI, Perplexity, and Google APIs in production",
      FR: "Polyvalent à travers les LLMs : APIs OpenAI, Anthropic (Claude), xAI, Perplexity et Google en production",
    },
    point3: {
      EN: "Python, TypeScript, Node.js, REST APIs, and modern AI SDKs for end-to-end product delivery",
      FR: "Python, TypeScript, Node.js, APIs REST et SDKs IA modernes pour livrer des produits de bout en bout",
    },
    point4: {
      EN: "Expert in AI integration, automation, AI workflows, agentic systems, and prompt engineering",
      FR: "Expert en intégration d'IA, automatisation, workflows IA, systèmes agentiques et prompt engineering",
    },
    point5: {
      EN: "Creator of an 800+ custom GPTs platform for web, mobile, AI, and blockchain developers (explore ",
      FR: "Créateur d'une plateforme de 800+ GPTs personnalisés pour les développeurs web, mobile, IA et blockchain (à découvrir ",
    },
    point6: {
      EN: "Disciplined engineering methodologies — TDD, SOLID, DRY, KISS, YAGNI — for tested, maintainable code that ships",
      FR: "Méthodologies d'ingénierie rigoureuses — TDD, SOLID, DRY, KISS, YAGNI — pour du code testé et maintenable, livré",
    },
    point7: {
      EN: "Design and implementation of AI development standards — AGENTS.md, CLAUDE.md, and project conventions",
      FR: "Conception et mise en place de standards de développement IA — AGENTS.md, CLAUDE.md et conventions de projet",
    },
    point8: {
      EN: "17+ years of operational leadership and management experience",
      FR: "17+ années de leadership opérationnel et de gestion",
    },
    point9: {
      EN: "Scientific and analytical background with a systems-thinking approach",
      FR: "Formation scientifique et analytique avec une approche systémique",
    },
    point10: {
      EN: "Top graduate from HEC Montréal in Entrepreneurship and Business Creation",
      FR: "Diplômé major de promotion de HEC Montréal en Entrepreneuriat et Création d'Entreprise",
    },
    button: {
      EN: "Check out my resume",
      FR: "Consultez mon CV",
    },
    cv: {
      EN: "docs/yannick_leguennec_full_stack_dev_resume_2025.pdf",
      FR: "docs/yannick_leguennec_full_stack_dev_resume_2025_fr.pdf",
    },
    aria1: {
      EN: "Explore my 800+ custom GPTs platform for web, mobile, AI, and blockchain developers",
      FR: "Découvrir ma plateforme de 800+ GPTs personnalisés pour les développeurs web, mobile, IA et blockchain",
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
                {translations.point5[activeLanguage]}
                <span className={`${classes.gptsLinkOrange}`}>
                  {activeLanguage === "FR" ? "ici" : "here"}
                </span>
              </Link>
              {")"}
            </li>
            <li>{translations.point6[activeLanguage]}</li>
            <li>{translations.point7[activeLanguage]}</li>
            <li>{translations.point8[activeLanguage]}</li>
            <li>{translations.point9[activeLanguage]}</li>
            <li>{translations.point10[activeLanguage]}</li>
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
