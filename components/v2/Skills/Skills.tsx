// =============================================
// Skills.tsx
// =============================================
// Responsive version — unified desktop/tablet sidebar navigation
// and mobile scroll-based layout under 540px.
// SEO-optimized: all skills remain in the DOM.
//
// =============================================

import { useState, useEffect } from "react";
import classes from "./Skills.module.scss";
import { useLanguage } from "../../../context/LanguageContext";
import { TranslationsType } from "../../../types/TranslationsType";

const Skills = () => {
  // State: active category for desktop
  const [activeCategory, setActiveCategory] = useState("toolsFrameworks");
  // State: check if user is on mobile
  const [isMobile, setIsMobile] = useState(false);

  // Hook: listen to window size for responsive layout
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 540);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Get current language from context
  const { activeLanguage } = useLanguage();

  // =============================================
  // TRANSLATIONS
  // =============================================
  const translations: TranslationsType = {
    title: { EN: "My Toolbox", FR: "Ma boîte à outils" },
    programmingLanguages: {
      EN: "Programming Languages",
      FR: "Langages de programmation",
    },
    toolsFrameworks: { EN: "Tools & Frameworks", FR: "Outils & Framework" },
    aiAutomation: { EN: "AI & Automation", FR: "IA & Automatisation" },
    devOpsDeployment: { EN: "DevOps & Deployment", FR: "DevOps & Déploiement" },
    cybersecurity: { EN: "Cybersecurity", FR: "Cybersécurité" },
    designTools: { EN: "Design Tools", FR: "Outils de design" },
    API: { EN: "REST API", FR: "API REST" },
    database: { EN: "Database", FR: "Base de données" },
    more: { EN: "And more...", FR: "Et bien plus..." },
  };

  // =============================================
  // TECHNOLOGY DATA
  // =============================================
  const skillsContent: Record<string, any> = {
    toolsFrameworks: {
      intro:
        activeLanguage === "EN"
          ? "I leverage powerful frameworks and tools to create scalable, efficient, and maintainable applications."
          : "J'utilise des frameworks et outils puissants pour créer des applications évolutives, efficaces et maintenables.",
      groups: [
        {
          title: "Frontend",
          items: [
            "HTML5",
            "CSS3/SASS",
            "Bootstrap",
            "Mantine UI",
            "React",
            "Redux",
            "Next.js",
            "WordPress",
            "Vitest",
            "Formik",
            "Yup",
          ],
        },
        {
          title: "Backend",
          items: [
            "Node.js",
            "Express",
            translations.API[activeLanguage],
            "Swagger",
            "Postman",
            "Dotenv",
            "Nodemailer",
          ],
        },
        {
          title: translations.database[activeLanguage],
          items: [
            "PostgreSQL",
            "pgAdmin",
            "Sqitch",
            "Looping",
            "Facker",
            "Sequelize",
            "Prisma",
          ],
        },
      ],
    },
    aiAutomation: {
      intro:
        activeLanguage === "EN"
          ? "By integrating AI and automation tools, I accelerate workflows and innovate with intelligent systems."
          : "En intégrant des outils d'IA et d'automatisation, j'accélère les workflows et innove avec des systèmes intelligents.",
      groups: [
        {
          title:
            activeLanguage === "EN" ? "AI LLMs Used" : "Modèles d'IA utilisés",
          items: ["ChatGPT", "Grok", "Perplexity", "Midjourney"],
        },
        {
          title: activeLanguage === "EN" ? "Known APIs" : "APIs Connues",
          items: [
            "OpenAI API",
            "Xai API",
            "Perplexity API",
            "Google API",
            "X API",
            "LinkedIn API",
          ],
        },
        {
          title: "Automation Platforms & Workflow Builders",
          items: [
            "Make",
            "Platform OpenAI",
            "Hugging Face",
            "Git Actions",
            "Copilot",
            "Codex",
            "Cursor",
          ],
        },
        {
          title: "Automation Libraries & Scripting Tools",
          items: ["Selenium", "BeautifulSoup4", "Requests"],
        },
      ],
    },
    programmingLanguages: {
      intro:
        activeLanguage === "EN"
          ? "As a full-stack developer, I use multiple languages to build modern and responsive web applications."
          : "En tant que développeur full-stack, j'utilise plusieurs langages pour créer des applications web modernes et réactives.",
      groups: [
        {
          title: "",
          items: [
            "JavaScript",
            "TypeScript",
            "Python",
            "SQL",
            "YAML",
            "Shell Scripting",
          ],
        },
      ],
    },
    devOpsDeployment: {
      intro:
        activeLanguage === "EN"
          ? "I implement DevOps practices to streamline development and operations, ensuring faster delivery and higher quality."
          : "J'implémente des pratiques DevOps pour rationaliser le développement et les opérations, garantissant une livraison plus rapide et une qualité supérieure.",
      groups: [
        {
          title: "DevOps & Version Control",
          items: ["Git", "GitHub", "GitHub Project", "GitHub Actions"],
        },
        {
          title: "Containerization & Infrastructure",
          items: ["Docker", "Linux Ubuntu"],
        },
        {
          title: "Cloud & Deployment",
          items: ["Vercel", "Railway", "AWS", "Google Cloud"],
        },
        { title: "Monitoring & Analytics", items: ["Google Analytics"] },
      ],
    },
    cybersecurity: {
      intro:
        activeLanguage === "EN"
          ? "I prioritize cybersecurity to protect applications and data from threats."
          : "Je donne la priorité à la cybersécurité pour protéger les applications et les données contre les menaces.",
      groups: [
        {
          title: "",
          items: ["OWASP", "Hashicorp Vault", "OAuth2", "Stem", "Node Vault"],
        },
      ],
    },
    designTools: {
      intro:
        activeLanguage === "EN"
          ? "I use design tools to craft aesthetic, intuitive, and functional user interfaces."
          : "J'utilise des outils de design pour créer des interfaces utilisateur esthétiques, intuitives et fonctionnelles.",
      groups: [
        {
          title: "",
          items: ["Figma", "Canva", "Adobe Photoshop", "Adobe Express"],
        },
      ],
    },
  };

  // =============================================
  // RENDER
  // =============================================
  return (
    <section id="skills" className={classes.skillsSection}>
      <h2 className={classes.title}>{translations.title[activeLanguage]}</h2>

      {/* === Desktop / Tablet View === */}
      {!isMobile && (
        <div className={classes.skillsLayout}>
          <nav className={classes.categoryNav} aria-label="Skills categories">
            <ul>
              {Object.keys(skillsContent).map((key) => (
                <li key={key}>
                  <button
                    className={`${classes.categoryButton} ${
                      activeCategory === key ? classes.activeCategory : ""
                    }`}
                    onClick={() => setActiveCategory(key)}
                    aria-pressed={activeCategory === key}
                  >
                    {translations[key][activeLanguage]}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className={classes.skillsContent}>
            {Object.keys(skillsContent).map((categoryKey) => (
              <div
                key={categoryKey}
                className={`${classes.categorySection} ${
                  activeCategory === categoryKey
                    ? classes.visibleCategory
                    : classes.hiddenCategory
                }`}
                aria-hidden={activeCategory !== categoryKey}
              >
                <p className={classes.intro}>
                  {skillsContent[categoryKey].intro}
                </p>
                {skillsContent[categoryKey].groups.map(
                  (
                    group: { title: string; items: string[] },
                    index: number
                  ) => (
                    <div key={index} className={classes.groupContainer}>
                      {group.title && (
                        <p className={classes.groupTitle}>{group.title}</p>
                      )}
                      <div className={classes.tagsContainer}>
                        {group.items.map((item, i) => (
                          <span key={i} className={classes.tag}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* === Mobile View === */}
      {isMobile && (
        <div className={classes.mobileSkills}>
          {Object.keys(skillsContent).map((categoryKey) => (
            <article key={categoryKey} className={classes.mobileCategory}>
              <h3 className={classes.mobileCategoryTitle}>
                {translations[categoryKey][activeLanguage]}
              </h3>
              <p className={classes.intro}>
                {skillsContent[categoryKey].intro}
              </p>

              {skillsContent[categoryKey].groups.map(
                (group: { title: string; items: string[] }, index: number) => (
                  <div key={index} className={classes.groupContainer}>
                    {group.title && (
                      <p className={classes.groupTitle}>{group.title}</p>
                    )}
                    <div className={classes.tagsContainer}>
                      {group.items.map((item, i) => (
                        <span key={i} className={classes.tag}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Skills;
