import { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import React from "react";
import Head from "next/head";
import Footer from "../../components/v2/Footer/Footer";
import Link from "next/link";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useLoader } from "../../context/LoaderContext";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import classes from "../../styles/projects_pages.module.scss";
import WrappedJeanTheWriter from "../../components/v2/WrappedHeaderComponents/WrappedJeanTheWriter/WrappedJeanTheWriter";
import mainPicture from "../../public/images/projectsPictures/jean_the_writer/jean_the_writer_project_main_picture.webp";
import manuscriptCorrectionScreenshot from "../../public/images/projectsPictures/jean_the_writer/jean_the_writer_example_of_ manuscript_correction.webp";

export default function JeanTheWriterProject() {
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();
  // Custom hook to manage the loading state
  const { loading, setLoading } = useLoader();
  // Site URL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // Effect to manage the loading state and turn it off when the content is loaded
  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  // Function to go back to the previous page
  const handleBackClick = () => {
    window.history.back();
  };

  const translations: TranslationsType = {
    pageTitle: {
      EN: "Jean the Writer",
      FR: "Jean l'Écrivain",
    },
    pageSubtitle: {
      EN: "AI-Powered Manuscript Correction & Editorial Review Tool",
      FR: "Outil de correction de manuscrit et de révision éditoriale alimenté par IA",
    },
    pageIntroduction1: {
      EN: "At the beginning of 2025, shortly after releasing Wise Duck Dev GPTs V2, I was approached by a writer with an unusual request: could I design an AI-powered system capable of correcting his entire manuscript (600 pages, in French, without a single punctuation mark), providing structured editorial feedback, and even suggesting publishers?",
      FR: "Début 2025, juste après avoir déployé la version 2 de Wise Duck Dev GPTs, j’ai été approché par un écrivain avec une demande aussi originale qu’ambitieuse : corriger un manuscrit de 600 pages, rédigé sans aucune ponctuation, suivi d’une relecture éditoriale approfondie de celui-ci, et suggérer des pistes d’amélioration concrètes.",
    },
    pageIntroduction2: {
      EN: "What started as a client-specific challenge evolved into Jean The Writer: a powerful backend tool that automates grammar and syntax correction, delivers chapter-by-chapter editorial reviews, and compiles polished, publication-ready manuscripts.",
      FR: "Ce qui ne devait être qu’une solution sur mesure pour un client s’est rapidement transformé en Jean l'Écrivain : un outil backend puissant qui automatise la correction grammaticale et syntaxique, génère des retours éditoriaux par chapitre, et compile des manuscrits propres, structurés et prêts à l’édition.",
    },
    projectOverviewTitle: {
      EN: "Project Overview",
      FR: "Aperçu du projet",
    },
    projectOverviewContent1: {
      EN: "Jean The Writer automates comprehensive grammar and syntax correction for manuscripts, then delivers structured editorial reviews and actionable recommendations for every chapter. By combining AI proofreading with targeted structural feedback, it transforms raw drafts into polished, publication-ready texts.",
      FR: "Jean l'Écrivain automatise la correction complète de manuscrit, puis fournit des relectures éditoriales structurées ainsi que des recommandations actionnables pour chaque chapitre. En combinant correction grammaticale et feedback ciblé, il transforme des brouillons bruts en textes fluides, cohérents et prêts à l’édition.",
    },
    projectOverviewContent2: {
      EN: "Unlike generic AI writing tools, Jean The Writer is built for long-form manuscripts. It splits texts into manageable blocks, ensures continuity, and produces clean Google Docs output with professional formatting. Writers receive not just corrections, but tailored insights that respect their style while improving clarity and flow.",
      FR: "Contrairement aux outils généralistes du marché, Jean l'Écrivain est pensé pour les manuscrits longs. Il segmente les textes en blocs, assure la continuité, et génère des Google Docs professionnels directement exploitables. Les auteurs reçoivent non seulement des corrections, mais aussi des analyses respectueuses de leur style, tout en améliorant la clarté et la fluidité.",
    },
    projectOverviewPoint1: {
      EN: "Problem solved: Saves authors weeks (or months) of manual correction and expensive editorial reviews.",
      FR: "Problème résolu : économise de semaines (voire de mois) de corrections manuelles et de coûteuses relectures éditoriales.",
    },
    projectOverviewPoint2: {
      EN: "Target users: Independent writers seeking affordable, reliable, and high-quality manuscript preparation.",
      FR: "Utilisateurs cibles : écrivains indépendants.",
    },
    projectOverviewPoint3: {
      EN: "Timeline: Developed in early 2025, first used on 8 manuscripts (French & Spanish).",
      FR: "Calendrier : développé début 2025, déjà utilisé sur 8 manuscrits (en français et en espagnol).",
    },
    projectOverviewPoint4: {
      EN: "Differentiator: Prompt engineering and workflow automation tailored to each manuscript’s context, offering more precise, style-aware results than general-purpose tools.",
      FR: "Différenciateur : un prompt engineering sur mesure et des workflows automatisés, adaptés au contexte de chaque manuscrit, pour des résultats plus précis et plus personnalisés que les solutions génériques.",
    },
    projectMyRoleTitle: {
      EN: "My Role",
      FR: "Mon rôle",
    },
    projectMyRoleContent1: {
      EN: "This was a solo project, and I owned every part of the build,  from idea to execution.",
      FR: "Projet réalisé en solo, j’en ai géré l’intégralité, de l’idée à la livraison.",
    },
    projectMyRoleContentPoint1: {
      EN: "Product Manager: Defined features directly from client needs (correction, review, suggestions, publisher search).",
      FR: "Chef de produit : définition des fonctionnalités en fonction des besoins du client (correction, relecture, suggestions, recherche d’éditeurs).",
    },
    projectMyRoleContentPoint2: {
      EN: "Architecture & Workflows: Designed modular AI workflows inspired by my experience with Wise Duck Dev GPTs, using Chain-of-Thought style processing.",
      FR: "Architecture & Workflows : conception de flux modulaires inspirés de mon expérience avec Wise Duck Dev GPTs, basés sur une logique de type Chain of Thought.",
    },
    projectMyRoleContentPoint3: {
      EN: "AI Engineering: Selected the best LLMs per task. After extensive testing, OpenAI’s GPT-4o mini proved optimal for correction, review, and suggestions, balancing cost and quality. Deep Search from OpenAI was used for publisher discovery.",
      FR: "Ingénierie IA : sélection du meilleur LLM pour chaque étape. Après tests, GPT-4o mini s’est révélé optimal pour la correction, la relecture et les recommandations. Pour la recherche d’éditeurs, j’ai utilisé Deep Search d’OpenAI.",
    },
    projectMyRoleContentPoint4: {
      EN: "Automation: Developed resume-capable logic for handling large manuscripts, ensuring the process could pick up where it left off after token/rate-limit errors.",
      FR: "Automatisation : mise en place de scripts permettant de traiter de très longs manuscrits, pouvant reprendre au bon endroit dans le cas d’une interruption.",
    },
    projectMyRoleContentPoint5: {
      EN: "Output UX: Choose clear Google Docs formatting (Times New Roman, 12pt, 1.5 spacing) with optional diff highlighting, chapter-level review scores, and consolidated editorial recommendations.",
      FR: "Expérience de sortie : formatage clair sous Google Docs (Times New Roman, 12 pt, interligne 1,5), avec mise en évidence optionnelle des corrections apportées par l’IA, accompagné de rapports éditoriaux consolidés.",
    },
    projectMyRoleContentPoint6: {
      EN: "Delivery: Ensured scalability so the workflow could easily be extended into a full public SaaS if needed.",
      FR: "Livraison : architecture conçue pour évoluer vers une plateforme publique si besoin.",
    },
    projectCreativityTitle: {
      EN: "Creativity & Inspiration",
      FR: "Créativité & inspiration",
    },
    projectCreativityContent1: {
      EN: "Unlike my other projects, Jean The Writer wasn’t born from personal observation but from a client’s unusual request. Yet it revealed an important gap: writers are underserved by AI when it comes to long-form, book-length correction and review.",
      FR: "À la différence de mes autres projets, Jean l'Écrivain n’est pas né d’une observation personnelle mais d’une demande client singulière. Pourtant, ce projet a mis en lumière un manque : les écrivains disposent de peu de solutions adaptées à la correction et à la relecture long format pour leurs manuscrits.",
    },
    projectCreativityContent2: {
      EN: "This project taught me that creativity often lies in adaptation, in recognizing that a highly specific need (a punctuation-free manuscript!) can spark the creation of a tool that serves many more. It was a reminder that innovation isn’t always about ideating from scratch, but about turning challenges into repeatable, scalable solutions.",
      FR: "Ce projet m’a rappelé que l’innovation vient souvent de l’adaptation : une demande atypique (un manuscrit sans ponctuation !) peut déclencher la création d’un outil réutilisable et scalable utile à la communauté.",
    },
    projectProcessTitle: {
      EN: "Process & Strategy",
      FR: "Processus & Stratégie",
    },
    projectProcessContent1: {
      EN: "I approached the project step by step, directly aligned with the client’s needs :",
      FR: "Le projet a suivi pas à pas les besoins exprimés par le client :",
    },
    projectProcessPoint1: {
      EN: "Correction : Split the manuscript into blocks, correct grammar/syntax with GPT-4o mini, output to Google Docs.",
      FR: "Correction : segmentation du manuscrit, correction grammaticale/syntaxique avec GPT-4o mini, export Google Docs.",
    },
    projectProcessPoint2: {
      EN: "Review : Generate per-chapter editorial reviews + suggestions with scoring.",
      FR: "Relecture : génération de retours éditoriaux par chapitre (avec notes et suggestions).",
    },
    projectProcessPoint3: {
      EN: "Recommendation : Aggregate suggestions into a final editorial review document.",
      FR: "Recommandations : compilation des suggestions en un rapport éditorial final.",
    },
    projectProcessPoint4: {
      EN: "Publisher Search : Use OpenAI Deep Search to identify relevant publishers.",
      FR: "Recherche d’éditeurs : exploitation de Deep Search pour identifier les maisons d’éditions pertinentes.",
    },
    projectProcessPoint5: {
      EN: "Methodology: Agile, with iterative testing. Each step was validated on subsets of the manuscript before scaling to the full 600 pages.",
      FR: "Méthodologie : Agile, avec tests itératifs sur des extraits avant passage à l’intégralité du manuscrit.",
    },
    projectProcessPoint6: {
      EN: "Testing & Feedback: The hardest part was tuning prompts to prevent AI from altering the author’s voice. Iteration was key, striking the balance between correction and stylistic respect.",
      FR: "Tests & feedback : le défi majeur fut d’empêcher l’IA de modifier le style de l’auteur. Le prompt engineering a permis d’atteindre le juste équilibre.",
    },
    projectProcessPoint7: {
      EN: "Scaling Logic: Resume scripts ensured the process could handle very large manuscripts without restarting from scratch.",
      FR: "Scalabilité : les scripts à reprise automatique garantissent la résilience du processus, même sur des textes massifs.",
    },
    projectStackTitle: {
      EN: "Stack and Tooling",
      FR: "Stack & outils",
    },
    projectStackPoint1: {
      EN: "Core: Node.js, TypeScript",
      FR: "Core : Node.js, TypeScript",
    },
    projectStackPoint2: {
      EN: "AI: OpenAI GPT-4o mini (correction, review, suggestions), OpenAI Deep Search (publisher matching)",
      FR: "IA : OpenAI GPT-4o mini (correction, relecture, suggestions), OpenAI Deep Search (éditeurs)",
    },
    projectStackPoint3: {
      EN: "APIs: OpenAI API, Google Docs & Google Drive API (for output & storage)",
      FR: "APIs : OpenAI API,  Google Docs & Drive API (production et stockage)",
    },
    projectStackPoint4: {
      EN: "Automation: Custom TypeScript workflows with checkpointing (resume logic)",
      FR: "Automatisation : workflows en TypeScript avec checkpointing",
    },
    projectStackPoint5: {
      EN: "Utilities: diff-match-patch (for highlighting changes), p-limit (for concurrency control)",
      FR: "Utilitaires : diff-match-patch (mise en évidence des différences), p-limit (contrôle de concurrence)",
    },
    projectStackPoint6: {
      EN: "Dev Tools: Git, GitHub, ts-node, ESLint",
      FR: "Outils dev : Git, GitHub, ts-node, ESLint",
    },
    projectStackContent1: {
      EN: "Why these choices?",
      FR: "Pourquoi ces choix ?",
    },
    projectStackContent2: {
      EN: "They were the technologies I knew best from previous projects, ensuring reliability. GPT-4o mini offered the best cost-to-quality ratio for manuscript correction at scale. Google Docs output was chosen for accessibility, since nearly every author is familiar with it.",
      FR: "J’ai privilégié des outils que je maîtrisais déjà, garantissant rapidité et fiabilité. GPT-4o mini offrait le meilleur compromis coût/qualité pour ce type de tâches lourdes. Google Docs a été retenu pour sa familiarité auprès des écrivains.",
    },
    projectDesignTitle: {
      EN: "Design and UX Highlights",
      FR: "UX et points clés de conception",
    },
    projectDesignContent1: {
      EN: "Though there was no frontend, the user experience of the output was a core design focus:",
      FR: "Même sans interface front-end, j’ai pensé l’expérience utilisateur à travers la sortie livrée :",
    },
    projectDesignPoint1: {
      EN: "Professional Formatting : All corrected manuscripts exported in Times New Roman, 12pt, 1.5 spacing.",
      FR: "Format professionnel : Times New Roman, 12 pt, interligne 1,5.",
    },
    projectDesignPoint2: {
      EN: "Diff Highlighting : Optional side-by-side or inline highlights to visualize AI changes.",
      FR: "Mise en évidence : surlignage optionnel des modifications.",
    },
    projectDesignPoint3: {
      EN: "Editorial Review : Chapter-by-chapter reviews with scores and actionable suggestions.",
      FR: "Relecture éditoriale : notes et suggestions par chapitre.",
    },
    projectDesignPoint4: {
      EN: "Final Deliverable : Consolidated “Editorial Review Report” Google Doc with prioritized recommendations and a concluding summary.",
      FR: "Rapport final : document éditorial consolidé avec recommandations prioritaires.",
    },
    projectDesignContent2: {
      EN: "These choices made the AI output directly usable by writers, without further formatting work.",
      FR: "Ces choix ont rendu la production de l’IA directement exploitable par les auteurs, sans nécessiter de travail de mise en forme supplémentaire.",
    },
    projectDeploymentTitle: {
      EN: "Deployment & Scalability",
      FR: "Déploiement & Scalabilité",
    },
    projectDeploymentContent1: {
      EN: "Jean The Writer remains a private tool, not deployed publicly. However, the backend is designed for scalability:",
      FR: "Le projet reste privé, mais son architecture est prête pour le public :",
    },
    projectDeploymentPoint1: {
      EN: "Could be extended into a SaaS with user accounts, manuscript uploads, and on-demand corrections.",
      FR: "Création possible d’une plateforme SaaS avec comptes utilisateurs et dépôts de manuscrits.",
    },
    projectDeploymentPoint2: {
      EN: "Modular architecture already supports additional languages or manuscript types.",
      FR: "Extensible à d’autres langues et formats.",
    },
    projectDeploymentPoint3: {
      EN: "Pricing potential: pay-per-manuscript correction/review.",
      FR: "Modèle économique envisageable : correction/relecture à la demande, facturée par manuscrit.",
    },
    projectDeploymentContent2: {
      EN: "For now, it’s client-driven: writers approach me, and I run their manuscripts through the system.",
      FR: "Pour l’instant, c’est une approche orientée client : les auteurs me contactent directement et je traite leurs manuscrits via le système.",
    },
    projectRoadmapTitle: {
      EN: "Roadmap & Vision",
      FR: "Feuille de route & Vision",
    },
    projectRoadmapContent1: {
      EN: "This project was designed to solve a concrete client problem, not to evolve into a commercial SaaS. However, its potential is clear: a scalable backend that could become a platform for writers seeking affordable, professional manuscript prep.",
      FR: "Jean l'Écrivain a été conçu pour répondre à un besoin ponctuel, pas pour devenir un produit grand public. Mais son potentiel est évident : offrir aux écrivains une alternative abordable et professionnelle pour préparer leurs manuscrits.",
    },
    projectRoadmapContent2: {
      EN: "For now, the roadmap is simple: continue refining prompts and workflows when new manuscripts arrive, adapting to each author’s style and needs.",
      FR: "La feuille de route reste simple : affiner les prompts et workflows selon les projets clients.",
    },
    projectResultsTitle: {
      EN: "Outcomes",
      FR: "Résultats",
    },
    projectResultsPoint1: {
      EN: "Manuscripts processed: 8 (French & Spanish).",
      FR: "Manuscrits traités : 8 (en français et en espagnol).",
    },
    projectResultsPoint2: {
      EN: "Unique challenge: First commission was a 600-page book written entirely without punctuation,  successfully corrected and reviewed.",
      FR: "Défi notable : premier manuscrit sans ponctuation (600 pages) : corrigé et relu avec succès.",
    },
    projectResultsPoint3: {
      EN: "Feedback:",
      FR: "Retours:",
    },
    projectResultsPoint4: {
      EN: "Corrections and publisher suggestions : highly appreciated.",
      FR: "Corrections et recherche d’éditeurs : très positifs.",
    },
    projectResultsPoint5: {
      EN: "Reviews and recommendations : mixed (some authors resist stylistic changes).",
      FR: "Recommandations : parfois mal reçues (résistance au changement stylistique).",
    },
    projectResultsContent1: {
      EN: "The value was clear: saving weeks of manual editing and giving independent writers a professional-level editorial process at a fraction of the cost.",
      FR: "Bilan : gain de temps énorme pour les auteurs et une approche éditoriale professionnelle, accessible et rapide.",
    },
    projectConclusionTitle: {
      EN: "What I Took Away",
      FR: "Ce que j'en ai retiré",
    },
    projectConclusionContent1: {
      EN: "This project reinforced and expanded my skills as both a developer and product builder.",
      FR: "Ce projet a renforcé et élargi mes compétences, autant en tant que développeur qu’en tant que chef de produit.",
    },
    projectConclusionPoint1: {
      EN: "I learned to design AI workflows for extreme edge cases (like punctuation-free manuscripts).",
      FR: "J’ai appris à concevoir des workflows IA capables de gérer des cas extrêmes, comme des manuscrits entièrement dépourvus de ponctuation.",
    },
    projectConclusionPoint2: {
      EN: "I strengthened my ability to engineer prompts at scale while respecting authorial voice.",
      FR: "J’ai perfectionné ma capacité à concevoir des prompts à grande échelle tout en respectant la voix et le style des auteurs.",
    },
    projectConclusionPoint3: {
      EN: "I deepened my OpenAI API and Google API integration skills (Docs & Drive).",
      FR: "J’ai approfondi mes compétences d’intégration avec les APIs de OpenAI et de Google (Docs & Drive).",
    },
    projectConclusionPoint4: {
      EN: "I advanced my experience in data handling and checkpointing, ensuring resilience for long-form AI processing.",
      FR: "J’ai consolidé mon expérience en gestion de données et en mise en place de systèmes de reprise, garantissant la robustesse du traitement IA sur des formats longs.",
    },
    projectConclusionPoint5: {
      EN: "I discovered the importance of managing user psychology: authors are protective of their style, so AI must support, not overwrite, their voice.",
      FR: "J’ai découvert l’importance de prendre en compte la psychologie utilisateur : dans le cas présent par exemple les auteurs sont attachés à leur style, et l’IA doit soutenir leur voix, pas la remplacer.",
    },
    projectConclusionContent2: {
      EN: "Above all, Jean The Writer showed me that AI isn’t about replacing creativity, but about empowering it. By automating the repetitive, it gives writers more time to focus on storytelling,  and that is where the real value lies.",
      FR: "Mais surtout, Jean l'Écrivain m’a rappelé que l’IA ne vise pas à remplacer la créativité, mais à l’amplifier. En automatisant les tâches répétitives, elle libère du temps pour ce qui compte vraiment : raconter de bonnes histoires.",
    },
    buttonNextProject: {
      EN: "Next Project",
      FR: "Projet Suivant",
    },
    buttonBack: {
      EN: "Go Back",
      FR: "Retour",
    },
    metaTitle: {
      EN: "Jean the Writer - AI-Powered Manuscript Correction & Editorial Review Tool",
      FR: "Jean l'Écrivain - Outil de correction de manuscrits et de révision éditoriale alimenté par l'IA",
    },
    metaDescription: {
      EN: "Discover Jean the Writer, an AI-powered tool designed to automate manuscript correction and provide in-depth editorial reviews. Co-developed as part of an intensive Web & Mobile Development program.",
      FR: "Découvrez Jean l'Écrivain, un outil alimenté par l'IA conçu pour automatiser la correction de manuscrits et fournir des révisions éditoriales approfondies. Co-développé dans le cadre d'un programme intensif de développement Web & Mobile.",
    },
    twitterImageAltDescription: {
      EN: "Jean the Writer - AI-Powered Manuscript Correction & Editorial Review Tool depicted by an AI generated image of an old man writing on a wooden desk",
      FR: "Jean l'Écrivain - Outil de correction de manuscrits et de révision éditoriale alimenté par l'IA, représenté par une image générée par IA d'un vieil homme écrivant sur un bureau en bois",
    },
    mainPictureAltDescription: {
      EN: "Jean The Writer Project main screenshot showing a manuscript being corrected.",
      FR: "Capture d'écran principale du projet Jean L'écrivain montrant un manuscrit en cours de correction.",
    },
    manuscriptCorrectionScreenshotAltDescription: {
      EN: "Jean The Writer Project screenshot showing an example of manuscript correction.",
      FR: "Capture d'écran du projet Jean L'écrivain montrant un exemple de correction de manuscrit.",
    },
    og_locale: {
      EN: "en_US",
      FR: "fr_FR",
    },
  };

  const primaryImage = `https://www.wiseduckdev.com/images/projectsPictures/jean_the_writer/jean_the_writer_automated_manuscripts_revision_and_correction_ai_project.webp`;
  const secondaryImage = `https://www.wiseduckdev.com/images/projectsPictures/jean_the_writer/jean_the_writer_automated_manuscripts_revision_and_correction_ai_project_Twitter.webp`;
  const orgUrl = `https://${siteUrl}`;

  const jeanTheWriterProjectUrl =
    activeLanguage === "EN"
      ? `https://${siteUrl}/jean-the-writer-project`
      : `https://${siteUrl}/fr/jean-the-writer-project`;

  const pageLanguage = activeLanguage === "EN" ? "en-US" : "fr-FR";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${orgUrl}#website`,
        url: orgUrl,
        name: "Wise Duck Dev",
      },
      {
        "@type": "Organization",
        "@id": `${orgUrl}#organization`,
        name: "Wise Duck Dev",
        url: orgUrl,
        logo: {
          "@type": "ImageObject",
          url: `${orgUrl}/images/favicons/android-chrome-512x512.png`,
        },
        sameAs: ["https://x.com/wiseduckdev"],
      },
      {
        "@type": "WebPage",
        "@id": `${jeanTheWriterProjectUrl}#webpage`,
        url: jeanTheWriterProjectUrl,
        name: translations.metaTitle[activeLanguage],
        description: translations.metaDescription[activeLanguage],
        isPartOf: { "@id": `${orgUrl}#website` },
        inLanguage: pageLanguage,
        primaryImageOfPage: { "@type": "ImageObject", url: primaryImage },
        image: [primaryImage, secondaryImage],
        breadcrumb: { "@id": `${jeanTheWriterProjectUrl}#breadcrumb` },
        about: [
          { "@id": `${jeanTheWriterProjectUrl}#software` },
          { "@id": `${jeanTheWriterProjectUrl}#service` },
        ],
        publisher: { "@id": `${orgUrl}#organization` },
        isAccessibleForFree: true,
        mainEntityOfPage: `${jeanTheWriterProjectUrl}#webpage`,
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${jeanTheWriterProjectUrl}#software`,
        name: "Jean the Writer",
        url: jeanTheWriterProjectUrl,
        applicationCategory: "ProductivityApplication",
        operatingSystem: "Any",
        availableLanguage: ["fr-FR", "es-ES", "en-US"],
        description:
          activeLanguage === "EN"
            ? "An AI-powered tool that automates manuscript correction and provides in-depth editorial reviews with scalable, resilient workflows."
            : "Un outil IA qui automatise la correction de manuscrits et fournit des révisions éditoriales approfondies avec des workflows scalables et résilients.",
        publisher: { "@id": `${orgUrl}#organization` },
        creator: { "@id": `${orgUrl}#organization` },
        image: primaryImage,
        thumbnailUrl: secondaryImage,
        softwareVersion: "1.0",
        audience: {
          "@type": "Audience",
          audienceType: [
            "Authors",
            "Writers",
            "Independent Authors",
            "Self-Publishing Authors",
            "Editors",
            "Publishing Professionals",
          ],
        },
        keywords: [
          "Manuscript correction",
          "Editorial review",
          "Node.js",
          "TypeScript",
          "OpenAI API",
          "GPT-4o mini",
          "Deep Search",
          "Google Docs API",
          "Google Drive API",
          "diff-match-patch",
          "AI proofreading",
          "Writing assistant",
          "Publishing tools",
        ],
      },
      {
        // The service you offer (you run the tool for clients)
        "@type": "Service",
        "@id": `${jeanTheWriterProjectUrl}#service`,
        name: "Manuscript Correction & Editorial Review",
        serviceType: "AI-powered manuscript correction and editorial review",
        provider: { "@id": `${orgUrl}#organization` },
        areaServed: "Worldwide",
        availableLanguage: ["English", "French", "Spanish"],
        isSimilarTo: { "@id": `${jeanTheWriterProjectUrl}#software` },
        description:
          activeLanguage === "EN"
            ? "Professional service using Jean the Writer Software to correct manuscripts and provide structured editorial feedback."
            : "Service professionnel utilisant l'application Jean l'Écrivain pour corriger des manuscrits et fournir des retours éditoriaux structurés.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${jeanTheWriterProjectUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: activeLanguage === "EN" ? "Home" : "Accueil",
            item: orgUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name:
              activeLanguage === "EN"
                ? "Jean the Writer Project"
                : "Projet Jean l'Écrivain",
            item: jeanTheWriterProjectUrl,
          },
        ],
      },
    ],
  } as const;

  return (
    <>
      <Head>
        <title>{translations.metaTitle[activeLanguage]}</title>
        <meta
          name="description"
          content={translations.metaDescription[activeLanguage]}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`https://${siteUrl}/jean-the-writer-project`}
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Wise Duck Dev" />
        <meta
          property="og:title"
          content={translations.metaTitle[activeLanguage]}
        />
        <meta
          property="og:description"
          content={translations.metaDescription[activeLanguage]}
        />
        <meta
          property="og:image"
          content={`https://www.wiseduckdev.com/images/projectsPictures/jean_the_writer/jean_the_writer_automated_manuscripts_revision_and_correction_ai_project_Facebook.webp`}
        />
        <meta
          property="og:url"
          content={
            activeLanguage === "FR"
              ? `https://${siteUrl}/fr/jean-the-writer-project`
              : `https://${siteUrl}/jean-the-writer-project`
          }
        />
        <meta
          property="og:locale"
          content={translations.og_locale[activeLanguage]}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@wiseduckdev" />
        <meta name="twitter:creator" content="@wiseduckdev" />
        <meta
          name="twitter:title"
          content={translations.metaTitle[activeLanguage]}
        />
        <meta
          name="twitter:description"
          content={translations.metaDescription[activeLanguage]}
        />
        <meta
          name="twitter:image"
          content={`https://www.wiseduckdev.com/images/projectsPictures/jean_the_writer/jean_the_writer_automated_manuscripts_revision_and_correction_ai_project_Twitter.webp`}
        />
        <meta
          name="twitter:image:alt"
          content={translations.twitterImageAltDescription[activeLanguage]}
        />

        {siteUrl && (
          <>
            <link
              rel="alternate"
              hrefLang="en"
              href={`https://${siteUrl}/jean-the-writer-project`}
            />
            <link
              rel="alternate"
              hrefLang="fr"
              href={`https://${siteUrl}/fr/jean-the-writer-project`}
            />
          </>
        )}
        <link
          rel="canonical"
          href={
            activeLanguage === "EN"
              ? `https://${siteUrl}/jean-the-writer-project`
              : `https://${siteUrl}/fr/jean-the-writer-project`
          }
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <div className={classes.mainContainer}>
        <WrappedJeanTheWriter />
        <div className={classes.contentContainer}>
          <div className={classes.imagesContainer}>
            <img
              src={mainPicture.src}
              alt={translations.mainPictureAltDescription[activeLanguage]}
              className={classes.images}
            />
          </div>
          {/* Introduction Section */}
          <h2 className={classes.subtitle}>
            {translations.pageSubtitle[activeLanguage]}
          </h2>
          <div className={classes.textContainer}>
            <p className={classes.textParagraph}>
              {translations.pageIntroduction1[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.pageIntroduction2[activeLanguage]}
            </p>
          </div>
          {/* Overview Section */}
          <h2 className={classes.subtitle}>
            {translations.projectOverviewTitle[activeLanguage]}
          </h2>
          <div className={classes.textContainer}>
            <p className={classes.textParagraph}>
              {translations.projectOverviewContent1[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectOverviewContent2[activeLanguage]}
            </p>
            <ul className={classes.textList}>
              <li className={classes.textListItem}>
                {translations.projectOverviewPoint1[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectOverviewPoint2[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectOverviewPoint3[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectOverviewPoint4[activeLanguage]}
              </li>
            </ul>
          </div>
          {/* My Role Section */}
          <h2 className={classes.subtitle}>
            {translations.projectMyRoleTitle[activeLanguage]}
          </h2>
          <div className={classes.textContainer}>
            <p className={classes.textParagraph}>
              {translations.projectMyRoleContent1[activeLanguage]}
            </p>
            <ul className={classes.textList}>
              <li className={classes.textListItem}>
                {translations.projectMyRoleContentPoint1[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectMyRoleContentPoint2[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectMyRoleContentPoint3[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectMyRoleContentPoint4[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectMyRoleContentPoint5[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectMyRoleContentPoint6[activeLanguage]}
              </li>
            </ul>
          </div>
          {/* Creativity Section */}
          <h2 className={classes.subtitle}>
            {translations.projectCreativityTitle[activeLanguage]}
          </h2>
          <div className={classes.textContainer}>
            <p className={classes.textParagraph}>
              {translations.projectCreativityContent1[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectCreativityContent2[activeLanguage]}
            </p>
          </div>
          <div className={classes.imagesContainer}>
            <img
              src={manuscriptCorrectionScreenshot.src}
              alt={
                translations.manuscriptCorrectionScreenshotAltDescription[
                  activeLanguage
                ]
              }
              className={classes.imagesBordered}
            />
          </div>
          {/* Process Section */}
          <h2 className={classes.subtitle}>
            {translations.projectProcessTitle[activeLanguage]}
          </h2>
          <div className={classes.textContainer}>
            <p className={classes.textParagraph}>
              {translations.projectProcessContent1[activeLanguage]}
            </p>
            <ol className={classes.textListNumbered}>
              <li className={classes.textListItem}>
                {translations.projectProcessPoint1[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectProcessPoint2[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectProcessPoint3[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectProcessPoint4[activeLanguage]}
              </li>
            </ol>
            <ul className={classes.textList}>
              <li className={classes.textListItem}>
                {translations.projectProcessPoint5[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectProcessPoint6[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectProcessPoint7[activeLanguage]}
              </li>
            </ul>
          </div>
          {/* Stack Section */}
          <h2 className={classes.subtitle}>
            {translations.projectStackTitle[activeLanguage]}
          </h2>
          <div className={classes.textContainer}>
            <ul className={classes.textList}>
              <li className={classes.textListItem}>
                {translations.projectStackPoint1[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectStackPoint2[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectStackPoint3[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectStackPoint4[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectStackPoint5[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectStackPoint6[activeLanguage]}
              </li>
            </ul>
            <p className={classes.textParagraph}>
              {translations.projectStackContent1[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectStackContent2[activeLanguage]}
            </p>
          </div>
          {/* Design Section */}
          <h2 className={classes.subtitle}>
            {translations.projectDesignTitle[activeLanguage]}
          </h2>
          <div className={classes.textContainer}>
            <p className={classes.textParagraph}>
              {translations.projectDesignContent1[activeLanguage]}
            </p>
            <ul className={classes.textList}>
              <li className={classes.textListItem}>
                {translations.projectDesignPoint1[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectDesignPoint2[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectDesignPoint3[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectDesignPoint4[activeLanguage]}
              </li>
            </ul>
            <p className={classes.textParagraph}>
              {translations.projectDesignContent2[activeLanguage]}
            </p>
          </div>
          {/* Deployment Section */}
          <h2 className={classes.subtitle}>
            {translations.projectDeploymentTitle[activeLanguage]}
          </h2>
          <div className={classes.textContainer}>
            <p className={classes.textParagraph}>
              {translations.projectDeploymentContent1[activeLanguage]}
            </p>
            <ul className={classes.textList}>
              <li className={classes.textListItem}>
                {translations.projectDeploymentPoint1[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectDeploymentPoint2[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectDeploymentPoint3[activeLanguage]}
              </li>
            </ul>
            <p className={classes.textParagraph}>
              {translations.projectDeploymentContent2[activeLanguage]}
            </p>
          </div>
          {/* Roadmap Section */}
          <h2 className={classes.subtitle}>
            {translations.projectRoadmapTitle[activeLanguage]}
          </h2>
          <div className={classes.textContainer}>
            <p className={classes.textParagraph}>
              {translations.projectRoadmapContent1[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectRoadmapContent2[activeLanguage]}
            </p>
          </div>
          {/* Results Section */}
          <h2 className={classes.subtitle}>
            {translations.projectResultsTitle[activeLanguage]}
          </h2>
          <div className={classes.textContainer}>
            <ul className={classes.textList}>
              <li className={classes.textListItem}>
                {translations.projectResultsPoint1[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectResultsPoint2[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectResultsPoint3[activeLanguage]}
              </li>
              <ul className={classes.textListCircle}>
                <li className={classes.textListItem}>
                  {translations.projectResultsPoint4[activeLanguage]}
                </li>
                <li className={classes.textListItem}>
                  {translations.projectResultsPoint5[activeLanguage]}
                </li>
              </ul>
            </ul>
            <p className={classes.textParagraph}>
              {translations.projectResultsContent1[activeLanguage]}
            </p>
          </div>
          {/* Conclusion Section */}
          <h2 className={classes.subtitle}>
            {translations.projectConclusionTitle[activeLanguage]}
          </h2>
          <div className={classes.textContainer}>
            <p className={classes.textParagraph}>
              {translations.projectConclusionContent1[activeLanguage]}
            </p>
            <ul className={classes.textList}>
              <li className={classes.textListItem}>
                {translations.projectConclusionPoint1[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectConclusionPoint2[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectConclusionPoint3[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectConclusionPoint4[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectConclusionPoint5[activeLanguage]}
              </li>
            </ul>
            <p className={classes.textParagraph}>
              {translations.projectConclusionContent2[activeLanguage]}
            </p>
          </div>
          <div className={classes.buttonsContainer}>
            <button
              onClick={handleBackClick}
              className={classes.buttonReverted}
            >
              {translations.buttonBack[activeLanguage]}
            </button>
            <Link href="/evidence-media-project" className={classes.button}>
              {translations.buttonNextProject[activeLanguage]}
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      <SpeedInsights />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
