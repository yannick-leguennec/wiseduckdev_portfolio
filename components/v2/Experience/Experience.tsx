// =============================================
// Experience.tsx
// =============================================
// This component displays the "Experience" section of the portfolio.
// It describes the developer’s technical background, specialization,
// and philosophy through four themed articles.
// It supports bilingual display (EN / FR) using the LanguageContext.
//

import { useLanguage } from "../../../context/LanguageContext";
import { TranslationsType } from "../../../types/TranslationsType";
import classes from "./Experience.module.scss";

// Import local images (icons) for each experience item
import icon_ai from "../../../public/images/index/v2/icons/icon_artificial_intelligence.webp";
import icon_automation from "../../../public/images/index/v2/icons/icon_automation.webp";
import icon_learning from "../../../public/images/index/v2/icons/icon_continuous_learning.webp";
import icon_remote from "../../../public/images/index/v2/icons/icon_remote_work.webp";

function Experience() {
  // Get the active language from the global context (either "EN" or "FR")
  const { activeLanguage } = useLanguage();

  // =============================================
  // Translations object for both English and French
  // =============================================
  const translations: TranslationsType = {
    title: {
      EN: "Experience",
      FR: "Expérience",
    },
    subtitle1: {
      EN: "Full Stack Developer & Builder of AI-Driven Platforms",
      FR: "Développeur Full Stack et Créateur de Plateformes Propulsées par l'IA",
    },
    point1: {
      EN: "With 2+ years of experience in full stack JavaScript development, I've built and deployed AI-powered ecosystems such as Wise Duck Dev GPTs (800+ GPTs), Evidence Media, and Jean the Writer. I combine deep technical skills with product vision to design tools that are fast, scalable, and genuinely useful.",
      FR: "Fort de plus de deux ans d'expérience en développement full stack JavaScript, j'ai conçu et déployé des écosystèmes propulsés par l’IA tels que Wise Duck Dev GPTs (800+ GPTs), Evidence Media et Jean the Writer. Je combine compétences techniques avancées et vision produit pour créer des outils rapides, scalables et réellement utiles.",
    },
    subtitle2: {
      EN: "Systems Thinking, Automation & Product Consistency",
      FR: "Vision Systémique, Automatisation et Cohérence Produit",
    },
    point2: {
      EN: "I specialize in building systems that scale: automation pipelines, standardized frameworks, resilient AI workflows, and advanced Chain of Thought architectures that guide complex reasoning across AI-powered automations.",
      FR: "Je me spécialise dans la création de systèmes scalables : pipelines d'automatisation, structures normalisées, workflows IA résilients, ainsi qu’une maîtrise poussée des architectures Chain of Thought, qui orchestrent des raisonnements complexes dans mes automatisations propulsées par l’IA.",
    },
    subtitle3: {
      EN: "Strategic Training, Remote Collaboration & Versatility",
      FR: "Formation Stratégique, Collaboration à Distance et Polyvalence",
    },
    point3: {
      EN: "Graduated from O'clock (Full Stack JS) and HEC Montréal (Entrepreneurship), I bring a dual technical and strategic mindset. My background in management and remote-first training made me autonomous, adaptable, and fully operational in distributed teams and async environments.",
      FR: "Diplômé de l'école O'clock (Full Stack JS) et de HEC Montréal (Entrepreneuriat), je combine esprit technique et vision stratégique. Mon parcours en gestion et en formation à distance m’a rendu autonome, adaptable et parfaitement à l’aise dans des équipes distribuées et des environnements asynchrones.",
    },
    subtitle4: {
      EN: "Obsessed With Learning, Experimentation and AI Innovation",
      FR: "Passionné d’Apprentissage, d’Expérimentation et d’Innovation IA",
    },
    point4: {
      EN: "From prompt engineering to API orchestration, I constantly refine my skills across React, Next.js, Python, LLMs, and AI automation. I actively monitor tech trends, test new tools, and turn experiments into production-ready workflows. My curiosity fuels everything I build.",
      FR: "Du prompt engineering à l’orchestration d’API, je perfectionne constamment mes compétences en React, Next.js, Python, LLMs et automatisation employant l'IA. Je surveille activement les tendances, teste de nouveaux outils et transforme mes expérimentations en workflows prêts pour la production. Ma curiosité est le moteur de tout ce que je construis.",
    },
  };

  // =============================================
  // Data array for each article (cleaner and scalable)
  // =============================================
  const experienceArticles = [
    {
      icon: icon_ai,
      alt: {
        EN: "Icon representing artificial intelligence",
        FR: "Icône représentant l'intelligence artificielle",
      },
      subtitle: translations.subtitle1[activeLanguage],
      point: translations.point1[activeLanguage],
    },
    {
      icon: icon_automation,
      alt: {
        EN: "Icon representing automation",
        FR: "Icône représentant l'automatisation",
      },
      subtitle: translations.subtitle2[activeLanguage],
      point: translations.point2[activeLanguage],
    },
    {
      icon: icon_learning,
      alt: {
        EN: "Icon representing continuous learning",
        FR: "Icône représentant l'apprentissage continu",
      },
      subtitle: translations.subtitle3[activeLanguage],
      point: translations.point3[activeLanguage],
    },
    {
      icon: icon_remote,
      alt: {
        EN: "Icon representing remote collaboration",
        FR: "Icône représentant la collaboration à distance",
      },
      subtitle: translations.subtitle4[activeLanguage],
      point: translations.point4[activeLanguage],
    },
  ];

  // =============================================
  // Render JSX
  // =============================================
  return (
    // Use <section> for semantic grouping
    <section
      id="experience"
      className={classes.experienceSection}
      role="region"
      aria-labelledby="experience-heading"
    >
      <div className={classes.contentContainer}>
        {/* Main heading for SEO and accessibility */}
        <h2 id="experience-heading" className={classes.title}>
          {translations.title[activeLanguage]}
        </h2>

        {/* Container for all the experience blocks */}
        <div className={classes.articlesContainer}>
          {/* Map dynamically through experience items */}
          {experienceArticles.map((item, index) => (
            <article key={index} className={classes.article}>
              {/* Accessible and lightweight <img> (instead of <Image/>) */}
              <img
                src={item.icon.src}
                alt={item.alt[activeLanguage]}
                className={classes.icon}
                loading="lazy"
              />

              {/* Subheading and description */}
              <h3 className={classes.subtitle}>{item.subtitle}</h3>
              <p className={classes.point}>{item.point}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
