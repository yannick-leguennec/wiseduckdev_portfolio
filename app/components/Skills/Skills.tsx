import { useState } from "react";
import classes from "./Skills.module.scss";
import { useLanguage } from "@/app/context/LanguageContext";
import { TranslationsType } from "@/app/types/TranslationsType";
import { log } from "console";

const Skills = () => {
  //State variable to store the active category
  const [activeCategory, setActiveCategory] = useState("programmingLanguages");
  // Custom hook to manage the language changes
  const { activeLanguage, toggleLanguage } = useLanguage();

  const translations: TranslationsType = {
    title: {
      EN: "Skills",
      FR: "Expertise",
    },
    programmingLanguages: {
      EN: "Programming Languages for Web and Mobile Development",
      FR: "Langages de Programmation pour le Développement Web et Mobile",
    },
    toolsFrameworks: {
      EN: "Tools and Frameworks for Web and Mobile Developers",
      FR: "Outils et Frameworks pour Développeurs Web et Mobile",
    },
    designTools: {
      EN: "Design Tools for Web and Mobile UI/UX",
      FR: "Outils de Design pour l'UI/UX Web et Mobile",
    },
    communication: {
      EN: "Communication Tools for Web and Mobile Development Teams",
      FR: "Outils de Communication pour Équipes de Développement Web et Mobile",
    },
    aiAutomation: {
      EN: "AI and Automation Tools for Innovation in Web and Mobile Development",
      FR: "Outils d'IA et d'Automatisation pour l'Innovation en Développement Web et Mobile",
    },
    programmingLanguageIntro: {
      EN: "As a full stack web developer, I specialize in harnessing a diverse array of programming languages to create responsive and dynamic web and mobile applications that meet modern digital needs.",
      FR: "En tant que développeur web full stack, je me spécialise dans l'utilisation d'un large éventail de langages de programmation pour créer des applications web et mobiles réactives et dynamiques répondant aux besoins numériques modernes.",
    },
    toolsFrameworksIntro: {
      EN: "Leveraging the latest tools and frameworks, I build scalable and efficient web and mobile solutions that streamline development processes and enhance user experiences.",
      FR: "En exploitant les derniers outils et frameworks, je construis des solutions web et mobiles évolutives et efficaces qui rationalisent les processus de développement et améliorent l'expérience utilisateur.",
    },
    designToolsIntro: {
      EN: "My proficiency in top design tools enables me to craft aesthetically pleasing and user-friendly interfaces for web and mobile applications, ensuring a seamless user experience.",
      FR: "Ma maîtrise des meilleurs outils de design me permet de créer des interfaces esthétiquement agréables et faciles à utiliser pour les applications web et mobiles, garantissant une expérience utilisateur sans faille.",
    },
    communicationIntro: {
      EN: "I utilize advanced communication tools to facilitate effective collaboration within web and mobile development teams, ensuring projects are completed efficiently and to the highest standards.",
      FR: "J'utilise des outils de communication avancés pour faciliter une collaboration efficace au sein des équipes de développement web et mobile, assurant que les projets soient menés à bien efficacement et selon les plus hauts standards.",
    },
    aiAutomationIntro: {
      EN: "By incorporating AI and automation tools into my toolkit, I significantly boost my productivity and stay current with the latest technological advancements, allowing me to optimize development processes and focus on delivering cutting-edge web and mobile solutions.",
      FR: "En incorporant des outils d'IA et d'automatisation dans ma boîte à outils, j'augmente significativement ma productivité et reste à jour avec les dernières avancées technologiques, ce qui me permet d'optimiser les processus de développement et de me concentrer sur la livraison de solutions web et mobiles à la pointe de la technologie.",
    },
    otherSkills: {
      EN: "Other",
      FR: "Autres",
    },
    API: {
      EN: "REST API",
      FR: "API REST",
    },
    database: {
      EN: "Database",
      FR: "Base de Données",
    },
    more: {
      EN: "And more ...",
      FR: "Et bien plus...",
    },
  };

  // Object to store the translations
  const categories: TranslationsType = {
    programmingLanguages: {
      EN: "Programming Languages",
      FR: "Langages de Programmation",
    },
    toolsFrameworks: { EN: "Tools & Frameworks", FR: "Outils & Framework" },
    designTools: { EN: "Design Tools", FR: "Outils de Design" },
    communication: { EN: "Communication", FR: "Communication" },
    aiAutomation: { EN: "AI & Automation", FR: "IA & Automatisation" },
  };

  // Fonction pour changer la catégorie active
  const changeActiveCategory = (category: string) =>
    setActiveCategory(category);

  // Fonction pour déterminer si une catégorie est active
  const isActive = (category: string) =>
    activeCategory === category ? classes.activeLink : "";

  return (
    <section id="skills" className={classes.skillsSection}>
      <div className={classes.mainContainer}>
        <div className={classes.leftContainer}>
          <h1 className={classes.title}>
            {translations.title[activeLanguage]}
          </h1>
          <div className={classes.navContainer}>
            <nav className={classes.skillsNav}>
              <ul className={classes.navList}>
                {Object.keys(categories).map((key) => (
                  <li key={key} className={classes.navItem}>
                    <button
                      className={`${classes.navLink} ${isActive(key)}`}
                      onClick={() => changeActiveCategory(key)}
                      tabIndex={0}
                      role="button"
                    >
                      {categories[key][activeLanguage]}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className={classes.skillsContainer}>
          <article
            className={`${
              activeCategory === "programmingLanguages"
                ? classes.active
                : classes.hidden
            }`}
          >
            <h2 className={classes.subtitle1}>
              {translations.programmingLanguages[activeLanguage]}
            </h2>
            <p className={classes.para1}>
              {translations.programmingLanguageIntro[activeLanguage]}
            </p>
            <div className={classes.itemsContainer}>
              <div className={classes.list}>HTML5</div>
              <div className={classes.list}>CSS3/SASS</div>
              <div className={classes.list}>JavaScript</div>
              <div className={classes.list}>TypeScript</div>
              <div className={classes.list}>SQL</div>
              <div className={classes.list}>Markdown</div>
            </div>
          </article>
          <article
            className={`${
              activeCategory === "toolsFrameworks"
                ? classes.active
                : classes.hidden
            }`}
          >
            <h2 className={classes.subtitle}>
              {translations.toolsFrameworks[activeLanguage]}
            </h2>
            <p className={classes.para1}>
              {translations.toolsFrameworksIntro[activeLanguage]}
            </p>

            <p className={classes.para}>FrontEnd</p>
            <div className={classes.itemsContainer}>
              <div className={classes.list}>React</div>
              <div className={classes.list}>Redux</div>
              <div className={classes.list}>Next.js</div>
              <div className={classes.list}>Mantine UI</div>
              <div className={classes.list}>Tailwind</div>
              <div className={classes.list}>Bootstrap</div>
              <div className={classes.list}>Vitest</div>
            </div>
            <p className={classes.para}>Backend</p>
            <div className={classes.itemsContainer}>
              <div className={classes.list}>Node.js</div>
              <div className={classes.list}>Express</div>
              <div className={classes.list}>
                {translations.API[activeLanguage]}
              </div>
              <div className={classes.list}>Sequelize</div>
              <div className={classes.list}>Swagger</div>
              <div className={classes.list}>Postman</div>
              <div className={classes.list}>Tests HTTP</div>
            </div>
            <p className={classes.para}>
              {translations.database[activeLanguage]}
            </p>
            <div className={classes.itemsContainer}>
              <div className={classes.list}>PostgreSQL</div>
              <div className={classes.list}>pgAdmin</div>
              <div className={classes.list}>Sqitch</div>
              <div className={classes.list}>Looping</div>
              <div className={classes.list}>Facker</div>
            </div>
            <p className={classes.para}>
              {translations.otherSkills[activeLanguage]}
            </p>
            <div className={classes.itemsContainer}>
              <div className={classes.list}>Git</div>
              <div className={classes.list}>GitHub</div>
              <div className={classes.list}>Docker</div>
            </div>
          </article>
          <article
            className={`${
              activeCategory === "designTools" ? classes.active : classes.hidden
            }`}
          >
            <h2 className={classes.subtitle}>
              {translations.designTools[activeLanguage]}
            </h2>
            <p className={classes.para1}>
              {translations.designToolsIntro[activeLanguage]}
            </p>
            <div className={classes.itemsContainer}>
              <div className={classes.list}>Figma</div>
              <div className={classes.list}>Canva</div>
              <div className={classes.list}>Adobe Photoshop</div>
              <div className={classes.list}>Adobe Express</div>
              <div className={classes.list}>Tldraw</div>
              <div className={classes.list}>Excalidraw</div>
            </div>
          </article>
          <article
            className={`${
              activeCategory === "communication"
                ? classes.active
                : classes.hidden
            }`}
          >
            <h2 className={classes.subtitle}>
              {translations.communication[activeLanguage]}
            </h2>
            <p className={classes.para1}>
              {translations.communicationIntro[activeLanguage]}
            </p>
            <div className={classes.itemsContainer}>
              <div className={classes.list}>Slack</div>
              <div className={classes.list}>Microsoft Teams</div>
              <div className={classes.list}>Zoom</div>
              <div className={classes.list}>Google Meet</div>
              <div className={classes.list}>Discord</div>
              <div className={classes.list}>Trello</div>
              <div className={classes.list}>Miro</div>
              <div className={classes.list}>GitHub Project</div>
            </div>
          </article>
          <article
            className={`${
              activeCategory === "aiAutomation"
                ? classes.active
                : classes.hidden
            }`}
          >
            <h2 className={classes.subtitle}>
              {translations.aiAutomation[activeLanguage]}
            </h2>
            <p className={classes.para1}>
              {translations.aiAutomationIntro[activeLanguage]}
            </p>
            <div className={classes.itemsContainer}>
              <div className={classes.list}>GPT4</div>
              <div className={classes.list}>Claude</div>
              <div className={classes.list}>Gemini</div>
              <div className={classes.list}>DALL E 3</div>
              <div className={classes.list}>Midjourney</div>
              <div className={classes.list}>Notion</div>
              <div className={classes.list}>Make</div>
              <div className={classes.list}>Zapier</div>
              <div className={classes.list}>Google Console</div>
              <div className={classes.list}>
                {translations.more[activeLanguage]}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Skills;
