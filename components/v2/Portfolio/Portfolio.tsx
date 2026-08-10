"use client";

import Link from "next/link";
import { useLanguage } from "../../../context/LanguageContext";
import classes from "./Portfolio.module.scss";
import { TranslationsType } from "../../../types/TranslationsType";

// Import images
import family_flow_profile from "../../../public/images/projectsPictures/family_flow/family_flow_project_profile_picture.webp";
import family_flow_main from "../../../public/images/projectsPictures/family_flow/family_flow_project_main_picture.webp";
import wise_duck_profile from "../../../public/images/projectsPictures/wise_duck_dev_gpts/wise_duck_dev_gpts_project_profile_picture.webp";
import wise_duck_main from "../../../public/images/projectsPictures/wise_duck_dev_gpts/wise_duck_dev_gpts_project_main_picture.webp";
import jean_profile from "../../../public/images/projectsPictures/jean_the_writer/jean_the_writer_project_profile_picture.webp";
import jean_main from "../../../public/images/projectsPictures/jean_the_writer/jean_the_writer_project_main_picture.webp";
import evidence_profile from "../../../public/images/projectsPictures/evidence_media/evidence_media_project_profile_picture.webp";
import evidence_main from "../../../public/images/projectsPictures/evidence_media/evidence_media_project_main_picture.webp";
import archmapper_profile from "../../../public/images/projectsPictures/archmapper/archmapper_project_profile_picture.webp";
import archmapper_main from "../../../public/images/projectsPictures/archmapper/archmapper_project_ai_automation_main_page_image.webp";

function Portfolio() {
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();

  // Handle navigation click for analytics
  function handleNavigationClick(label: string) {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "navigation_click", {
        event_category: "Navigation",
        event_label: label,
      });
    }
  }

  // =============================================
  // TRANSLATIONS
  // =============================================
  const translations: TranslationsType = {
    page_title: { EN: "Projects", FR: "Projets" },
    button: { EN: "See details", FR: "Voir détails" },
  };

  // =============================================
  // PROJECTS DATA
  // =============================================
  const projects = [
    {
      id: "family_flow",
      year: 2023,
      title: "Family Flow",
      description: {
        EN: "Family Flow is an intuitive web app that simplifies family coordination and communication. It centralizes events, reminders, and shared tasks, enabling every member to stay connected and actively involved in daily life — wherever they are. Designed for modern families, it brings structure, harmony, and clarity to household organization.",
        FR: "Family Flow est une application web intuitive qui simplifie la coordination et la communication familiales. Elle centralise événements, rappels et tâches partagées, permettant à chaque membre de rester connecté et impliqué au quotidien, où qu’il soit. Conçue pour les familles modernes, elle apporte structure, harmonie et clarté à l’organisation du foyer.",
      },
      profile: family_flow_profile.src,
      main: family_flow_main.src,
      profileAlt: {
        EN: "Family Flow Project logo depicting a white house symbolizing the family",
        FR: "Logo du projet Family Flow représentant une maison blanche symbolisant la famille",
      },
      mainAlt: {
        EN: "Family Flow Project main screenshot showing the family calendar and task management interface",
        FR: "Capture d'écran principale du projet Family Flow montrant le calendrier familial et l'interface de gestion des tâches",
      },
      link: "/family-flow-project",
    },
    {
      id: "wise_duck_dev_gpts",
      year: 2024,
      title: "The Wise Duck Dev GPTs",
      description: {
        EN: "Discover The Wise Duck Dev GPTs — the ultimate library for web, mobile, AI, blockchain, and game developers. This innovative platform features over 800 custom GPTs across 14 categories, designed to enhance skills, streamline workflows, and inspire innovation. Created with a philanthropic vision, it empowers developers to build faster, smarter, and better.",
        FR: "Découvrez The Wise Duck Dev GPTs — la bibliothèque ultime pour les développeurs web, mobiles, IA, blockchain et jeux vidéo. Cette plateforme innovante regroupe plus de 800 GPTs répartis en 14 catégories, conçus pour améliorer les compétences, optimiser les processus et stimuler l’innovation. Pensée dans un esprit philanthropique, elle renforce chaque développeur.",
      },
      profile: wise_duck_profile.src,
      main: wise_duck_main.src,
      profileAlt: {
        EN: "The Wise Duck Dev GPTs Project logo depicting an audacious and bold rubber duck from profile with spiky hairs on the head",
        FR: "Logo du projet The Wise Duck Dev GPTs représentant un canard en caoutchouc audacieux et intrépide de profil avec des cheveux en piques sur la tête",
      },
      mainAlt: {
        EN: "The Wise Duck Dev GPTs Project main screenshot showing the opening page of the website",
        FR: "Capture d'écran principale du projet The Wise Duck Dev GPTs montrant la page d'accueil du site web",
      },
      link: "/wise-duck-dev-gpts-project",
    },
    {
      id: "jean_the_writer",
      year: 2025,
      title: "Jean The Writer",
      description: {
        EN: "Jean The Writer automates comprehensive grammar and syntax correction for manuscripts up to 600 pages, then delivers in‑depth editorial reviews and actionable recommendations for every chapter. By combining AI‑driven proofreading with targeted structural feedback, it transforms raw drafts into polished, publication‑ready manuscripts—giving your work the best possible chance of success.",
        FR: "Jean L'écrivain automatise la correction complète de la grammaire et de la syntaxe de manuscrits jusqu’à 600 pages, puis fournit des relectures éditoriales approfondies et des recommandations exploitables pour chaque chapitre. En combinant relecture pilotée par IA et retours structurels ciblés, il transforme les brouillons bruts en manuscrits peaufinés, prêts à être publiés – offrant à votre œuvre les meilleures chances de succès.",
      },
      profile: jean_profile.src,
      main: jean_main.src,
      profileAlt: {
        EN: "Jean The Writer Project profile picture showing an old man writing a novel on a wooden table.",
        FR: "Image de profil du projet Jean L'écrivain montrant un vieil homme écrivant un roman sur une table en bois.",
      },
      mainAlt: {
        EN: "Jean The Writer Project main screenshot showing a manuscript being corrected.",
        FR: "Capture d'écran principale du projet Jean L'écrivain montrant un manuscrit en cours de correction.",
      },
      link: "/jean-the-writer-project",
    },
    {
      id: "archmapper",
      year: 2026,
      title: "ArchMapper",
      description: {
        EN: "ArchMapper is a fully automated, resumable, bottom-up reverse-engineering pipeline that turns any codebase into a structured architectural document, ready for human or LLM analysis. Powered by Claude Sonnet and Claude Opus, it produces a canonical architecture.json plus Markdown spec cards, validated against repositories of more than 10,000 files, MIT-licensed.",
        FR: "ArchMapper est un pipeline de rétro-ingénierie ascendant entièrement automatisé et reprenable, qui transforme n'importe quelle base de code en un document architectural structuré, prêt pour une analyse humaine ou par LLM. Propulsé par Claude Sonnet et Claude Opus, il produit un architecture.json canonique accompagné de fiches spec Markdown, validé sur des dépôts de plus de 10 000 fichiers, sous licence MIT.",
      },
      profile: archmapper_profile.src,
      main: archmapper_main.src,
      profileAlt: {
        EN: "The ArchMapper Project profile picture depicting the AI-driven architectural mapping branding",
        FR: "Image de profil du projet ArchMapper représentant l'identité visuelle de la cartographie architecturale pilotée par IA",
      },
      mainAlt: {
        EN: "The ArchMapper Project main image showing the AI automation branding of the reverse-engineering pipeline",
        FR: "Image principale du projet ArchMapper montrant l'identité visuelle d'automatisation IA du pipeline de rétro-ingénierie",
      },
      link: "/archmapper-project",
    },
    {
      id: "evidence_media",
      year: 2026,
      title: "Evidence Media Project",
      description: {
        EN: "Evidence Media is a fully autonomous, AI-powered independent news media operating on X and Substack. It covers 8 news categories daily, publishing multiple content formats on X and deep-dive articles, a free Daily Brief, and Notes on Substack. The entire system is orchestrated by automated workflows with self-healing infrastructure.",
        FR: "Evidence Media est un média d'information indépendant entièrement autonome et propulsé par l'IA, opérant sur X et Substack. Il couvre 8 catégories d'actualités quotidiennement, publiant dans plusieurs formats sur X ainsi que des articles de fond, un Daily Brief gratuit et des Notes sur Substack. L'ensemble est orchestré par des workflows automatisés avec une infrastructure auto-réparatrice.",
      },
      profile: evidence_profile.src,
      main: evidence_main.src,
      profileAlt: {
        EN: "The Evidence Media Project logo depicting the name of the project in the middle of a blue and violet digital spiral",
        FR: "Logo du projet Evidence Media représentant le nom du projet au milieu d'une spirale numérique bleue et violette.",
      },
      mainAlt: {
        EN: "The Evidence Media Project main screenshot showing the Evidence Media Substack profile page",
        FR: "Capture d'écran principale du projet Evidence Media montrant la page de profil Substack d'Evidence Media",
      },
      link: "/evidence-media-project",
    },
  ];

  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);

  // =============================================
  // RENDER
  // =============================================
  return (
    <section id="portfolio" className={classes.portfolioSection}>
      <h2 className={classes.title}>
        {translations.page_title[activeLanguage]}
      </h2>

      <div className={classes.projectsContainer}>
        {sortedProjects.map((project) => (
          <article key={project.id} className={classes.projectCard}>
            {/* LEFT: Project Information */}
            <div className={classes.projectInfo}>
              <img
                src={project.profile}
                alt={project.profileAlt[activeLanguage]}
                className={classes.projectProfile}
              />
              <h3 className={classes.projectTitle}>{project.title}</h3>
              <p className={classes.projectDescription}>
                {project.description[activeLanguage]}
              </p>
              <div className={classes.buttonWrapper}>
                <Link
                  href={project.link}
                  className={classes.projectButton}
                  onClick={() =>
                    handleNavigationClick(
                      `Click on ${project.title} from Portfolio section`,
                    )
                  }
                  aria-label={
                    activeLanguage === "EN"
                      ? `See details about ${project.title} project`
                      : `Voir les détails du projet ${project.title}`
                  }
                >
                  {translations.button[activeLanguage]}
                </Link>
              </div>
            </div>

            {/* RIGHT: Main Image */}
            <div className={classes.projectPreview}>
              <img
                src={project.main}
                alt={project.mainAlt[activeLanguage]}
                className={classes.projectMainImage}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
