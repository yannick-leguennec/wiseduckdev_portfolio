import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import Image from "next/image";
import plantPicture from "../../public/images/index/tropical-plants-assortment-growth-innovation.webp";
import classes from "./Experience.module.scss";

function Experience() {
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();

  // Object containing the translations for the Experience component
  const translation: TranslationsType = {
    altPicture: {
      EN: "AI-generated vibrant assortment of tropical plants symbolizing growth and innovation, echoing the dynamic evolution in web and mobile development.",
      FR: "Assortiment de plantes tropicales vibrant généré par IA symbolisant la croissance et l'innovation, faisant écho à l'évolution dynamique dans le développement web et mobile.",
    },
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

  return (
    <section id="experience" className={classes.experienceSection}>
      <div className={classes.contentContainer}>
        <h2 className={classes.title}>{translation.title[activeLanguage]}</h2>
        <article className={classes.article}>
          <h3 className={classes.subtitle}>
            {translation.subtitle1[activeLanguage]}
          </h3>
          <p>{translation.point1[activeLanguage]}</p>
        </article>
        <article className={classes.article}>
          <h3 className={classes.subtitle}>
            {translation.subtitle2[activeLanguage]}
          </h3>
          <p>{translation.point2[activeLanguage]}</p>
        </article>
        <article className={classes.article}>
          <h3 className={classes.subtitle}>
            {translation.subtitle3[activeLanguage]}
          </h3>
          <p>{translation.point3[activeLanguage]}</p>
        </article>
        <article className={classes.article}>
          <h3 className={classes.subtitle}>
            {translation.subtitle4[activeLanguage]}
          </h3>
          <p>{translation.point4[activeLanguage]}</p>
        </article>
      </div>
      <div className={classes.imageContainer}>
        <Image
          src={plantPicture}
          alt={translation.altPicture[activeLanguage]}
          className={classes.image}
        />
      </div>
    </section>
  );
}

export default Experience;
