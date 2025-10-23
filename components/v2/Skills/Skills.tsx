// =============================================
// Skills.tsx
// =============================================
// Displays the "My Toolbox" section with a vertical category menu
// and a detailed grid of technologies grouped by sub-sections.
// Supports bilingual content (EN / FR) using the LanguageContext.
//

import { useState } from "react";
import classes from "./Skills.module.scss";
import { useLanguage } from "../../../context/LanguageContext";
import { TranslationsType } from "../../../types/TranslationsType";

const Skills = () => {
  // State: which category is currently selected
  const [activeCategory, setActiveCategory] = useState("programmingLanguages");

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
    designTools: { EN: "Design Tools", FR: "Outils de design" },
    communication: { EN: "Communication", FR: "Communication" },
    aiAutomation: { EN: "AI & Automation", FR: "IA & Automatisation" },
    // Subtitles
    API: { EN: "REST API", FR: "API REST" },
    database: { EN: "Database", FR: "Base de données" },
    otherSkills: { EN: "Other", FR: "Autres" },
    more: { EN: "And more...", FR: "Et bien plus..." },
  };

  // =============================================
  // TECHNOLOGY DATA
  // =============================================
  const skillsContent: Record<string, any> = {
    programmingLanguages: {
      intro:
        activeLanguage === "EN"
          ? "As a full-stack developer, I use multiple languages to build modern and responsive web applications."
          : "En tant que développeur full-stack, j'utilise plusieurs langages pour créer des applications web modernes et réactives.",
      groups: [
        {
          title: "",
          items: [
            "HTML5",
            "CSS3/SASS",
            "JavaScript",
            "TypeScript",
            "Python",
            "SQL",
            "YAML",
            "Shell Scripting",
            "Markdown",
          ],
        },
      ],
    },

    toolsFrameworks: {
      intro:
        activeLanguage === "EN"
          ? "I leverage powerful frameworks and tools to create scalable, efficient, and maintainable applications."
          : "J'utilise des frameworks et outils puissants pour créer des applications évolutives, efficaces et maintenables.",
      groups: [
        {
          title: "Frontend",
          items: [
            "React",
            "Redux",
            "Next.js",
            "Mantine UI",
            "Tailwind",
            "Bootstrap",
            "Vitest",
          ],
        },
        {
          title: "Backend",
          items: [
            "Node.js",
            "Express",
            translations.API[activeLanguage],
            "Sequelize",
            "Prisma",
            "Swagger",
            "Postman",
            "HTTP Tests",
            "Nodemailer",
          ],
        },
        {
          title: translations.database[activeLanguage],
          items: ["PostgreSQL", "pgAdmin", "Sqitch", "Looping", "Facker"],
        },
        {
          title: translations.otherSkills[activeLanguage],
          items: [
            "Git",
            "GitHub",
            "Vercel",
            "Railway",
            "Docker",
            "WordPress",
            "Linux",
            "HashiCorp Vault",
            "Google Cloud Platform",
            "Google Analytics",
          ],
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

    communication: {
      intro:
        activeLanguage === "EN"
          ? "Collaboration is key — I rely on communication tools that keep teams synchronized and productive."
          : "La collaboration est essentielle — j'utilise des outils de communication qui gardent les équipes synchronisées et productives.",
      groups: [
        {
          title: "",
          items: [
            "Slack",
            "Microsoft Teams",
            "Zoom",
            "Google Meet",
            "Discord",
            "Trello",
            "Miro",
            "GitHub Project",
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
          title: "",
          items: [
            "OpenAI API",
            "ChatGPT",
            "Grok",
            "Xai API",
            "Perplexity",
            "Perplexity API",
            "Midjourney",
            "Google API",
            "X API",
            "LinkedIn API",
            "Make",
            "Git Actions",
            "Selenium",
            "Copilot",
            "Codex",
            "Cursor",
            translations.more[activeLanguage],
          ],
        },
      ],
    },
  };

  // =============================================
  // RENDER
  // =============================================
  return (
    <section id="skills" className={classes.skillsSection}>
      {/* Section Title */}
      <h2 className={classes.title}>{translations.title[activeLanguage]}</h2>

      <div className={classes.skillsLayout}>
        {/* LEFT COLUMN: Category Navigation */}
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

        {/* RIGHT COLUMN: Skills Content */}
        <div className={classes.skillsContent}>
          {/* Intro text */}
          <p className={classes.intro}>{skillsContent[activeCategory].intro}</p>

          {/* Render grouped sections */}
          {skillsContent[activeCategory].groups.map(
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
