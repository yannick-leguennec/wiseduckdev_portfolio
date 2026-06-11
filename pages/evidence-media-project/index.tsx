import { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import React from "react";
import Link from "next/link";
import Head from "next/head";
import Footer from "../../components/v2/Footer/Footer";
import WrappedEvidenceMedia from "../../components/v2/WrappedHeaderComponents/WrappedEvidenceMedia/WrappedEvidenceMedia";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useLoader } from "../../context/LoaderContext";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import classes from "../../styles/projects_pages.module.scss";
import mainPicture from "../../public/images/projectsPictures/evidence_media/evidence_media_project_main_picture.webp";
import { date } from "yup";

export default function EvidenceMediaProject() {
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

  const translations: TranslationsType = {
    pageTitle: {
      EN: "Evidence Media",
      FR: "Evidence Media",
    },
    pageSubtitle: {
      EN: "Automated Content Generation & Publication System",
      FR: "Système automatisé de génération et de publication de contenu",
    },
    pageIntroduction1: {
      EN: "In spring 2025, I launched Evidence Media, an independent news platform that automates the curation and publication of sourced news across X and Substack. What started as a personal project to counter mainstream media bias has evolved through five major versions into a fully autonomous media outlet covering 8 categories daily across multiple publication formats and platforms.",
      FR: "Au printemps 2025, j'ai lance Evidence Media, une plateforme mediatique independante qui automatise la curation et la publication d'actualites sourcees sur X et Substack. Ce qui a debute comme un projet personnel pour contrer les biais mediatiques a evolue a travers cinq versions majeures en un media entierement autonome couvrant 8 categories quotidiennement sur plusieurs formats et plateformes.",
    },
    projectOverviewTitle: {
      EN: "Project Overview",
      FR: "Aperçu du projet",
    },
    projectOverviewContent1: {
      EN: "Evidence Media is a fully autonomous, AI-powered news pipeline designed to curate, analyze, and distribute independent news for North American audiences. It publishes daily across X (news briefs, threads, ultra-shorts, quote-tweets) and Substack (deep-dive articles by category, a free Daily Brief newsletter, and Notes throughout the day).",
      FR: "Evidence Media est un pipeline d'information entierement autonome et propulse par l'IA, concu pour selectionner, analyser et diffuser des actualites independantes pour le public nord-americain. Il publie quotidiennement sur X (breves, threads, ultra-courts, citations) et Substack (articles de fond par categorie, un Daily Brief gratuit et des Notes tout au long de la journee).",
    },
    projectOverviewContent2: {
      EN: "Since the COVID-19 pandemic, public trust in mainstream media has been severely undermined due to widespread collusion between institutions, governments, and news organizations. This convergence gave rise to a homogenized narrative, accompanied by systemic censorship—now widely referred to as the censorship industrial complex. In response, a growing number of citizens have turned to independent sources of information: freelance journalists, niche newsletters, alternative podcasts, and social platforms like X.",
      FR: "Depuis la pandémie de COVID-19, la confiance envers les médias traditionnels a été profondément ébranlée, en raison de la collusion manifeste entre institutions, gouvernements et organes de presse. Cette convergence a donné naissance à un discours uniformisé, associé à une censure systémique orchestrée par ce qu’on appelle aujourd’hui le censorship industrial complex. Face à cette réalité, un nombre croissant de citoyens ont choisi de se tourner vers des sources d’information indépendantes : journalistes autonomes, newsletters spécialisées, podcasts alternatifs et réseaux sociaux comme X.",
    },
    projectOverviewContent3: {
      EN: "But in this decentralized landscape, staying genuinely informed has become increasingly time-consuming. Cross-referencing, verifying, and filtering a rising flood of scattered information is a task few people have time for.",
      FR: "Mais dans ce paysage décentralisé, rester réellement informé est devenu une tâche extrêmement chronophage. Il faut croiser, vérifier et filtrer un volume croissant d'informations éparses, ce que peu de gens ont le temps de faire.",
    },
    projectOverviewContent4: {
      EN: "That’s where Evidence Media comes in. Its mission is to filter and aggregate the most relevant and impactful independent news for North American audiences (Canada and the U.S.). The platform covers eight key categories: Business & Economics, Current Affairs, Environment, Health, International Affairs, Politics, Science & Technology, and Society.",
      FR: "C’est précisément là qu’intervient Evidence Media : sa mission est de filtrer et d’agréger les actualités indépendantes les plus importantes pour les Nord-Américains (Canada et États-Unis). Le projet couvre les thématiques suivantes : affaires et économie, actualités générales, environnement, santé, affaires internationales, politique, science et technologie, et société.",
    },
    projectOverviewContent5: {
      EN: "Every piece of information shared is accompanied by its original source, allowing readers to assess its relevance, verify its accuracy, or explore further if desired. Unlike mainstream outlets bound by top-down editorial lines—or some independent sources that lack rigorous sourcing—Evidence Media is built on transparency, reliability, and methodological integrity.",
      FR: "Chaque information relayée est accompagnée de sa source primaire, permettant au lecteur d’en juger la pertinence, d’en vérifier l’exactitude ou d’approfondir ses recherches s’il le souhaite. Contrairement aux médias traditionnels, souvent inféodés à une ligne éditoriale imposée, ou à certains médias indépendants peu rigoureux sur la traçabilité de leurs contenus, Evidence Media se distingue par sa transparence, sa fiabilité et son engagement méthodologique.",
    },
    projectOverviewContent6: {
      EN: "The project launched in spring 2025. After four major iterations, V5 shipped in spring 2026 as a complete ground-up rebuild with comprehensive test coverage, automated workflows, structured logging, and a continuous editorial improvement system.",
      FR: "Le projet a ete lance au printemps 2025. Apres quatre iterations majeures, la V5 a ete livree au printemps 2026, une reconstruction complete avec une couverture de tests exhaustive, des workflows automatises, un logging structure et un systeme d'amelioration editoriale continue.",
    },
    projectMyRoleTitle: {
      EN: "My Role",
      FR: "Mon rôle",
    },
    projectMyRoleContent1: {
      EN: "Evidence Media was a fully solo project. I handled every layer from vision to execution:",
      FR: "Evidence Media est un projet que j’ai mené 100 % en solo, de la vision initiale jusqu’à l’exécution finale :",
    },
    projectMyRoleContentPoint1: {
      EN: "Product Manager: I defined the mission, editorial identity, positioning, target personas, and long-term vision.",
      FR: "Chef de produit : j'ai defini la mission, l'identite editoriale, le positionnement, les personas cibles et la vision a long terme.",
    },
    projectMyRoleContentPoint2: {
      EN: "Backend Development: I built the entire V5 architecture in Python following TDD/SOLID principles, with domain models, adapters, pipelines, and 919 unit tests.",
      FR: "Developpement backend : j'ai concu l'architecture V5 complete en Python selon les principes TDD/SOLID, avec des modeles de domaine, des adaptateurs, des pipelines et 919 tests unitaires.",
    },
    projectMyRoleContentPoint3: {
      EN: "AI Integration: I orchestrated a multi-model pipeline using xAI Grok (all LLM tasks), OpenAI (embeddings), and Anthropic Claude (self-healing Selenium), with batch API optimization and prompt caching for cost efficiency.",
      FR: "Integration IA : j'ai orchestre un pipeline multi-modeles utilisant xAI Grok (toutes les taches LLM), OpenAI (embeddings) et Anthropic Claude (Selenium auto-reparateur), avec optimisation par API batch et mise en cache des prompts.",
    },
    projectMyRoleContentPoint4: {
      EN: "Advanced Automation: I designed a fully automated CI/CD pipeline with early-exit guardrails, dual failure alerts (issue tracking + email), and intelligent scheduling across multiple daily publishing windows.",
      FR: "Automatisation avancee : j'ai concu un pipeline CI/CD entierement automatise avec des gardes de sortie anticipee, des alertes de defaillance doubles (suivi d'issues + email) et une planification intelligente sur plusieurs fenetres de publication quotidiennes.",
    },
    projectMyRoleContent2: {
      EN: "From concept to iteration, from the first line of code to editorial strategy, I drove every decision with one clear goal: to build a resilient, automated, and trustworthy news platform that serves the public good.",
      FR: "Du concept à l’itération, de la première ligne de code à la ligne éditoriale, j’ai assumé chaque décision avec un objectif clair : créer une plateforme d'information automatisée, résiliente et digne de confiance, au service du bien commun.",
    },
    projectCreativityTitle: {
      EN: "Creativity & Inspiration",
      FR: "Créativité & inspiration",
    },
    projectCreativityContent1: {
      EN: "The creation of Evidence Media was born from a clear realization: staying properly informed has become both complex and time-consuming. This growing information gap allows politicians, institutions, and influential actors to operate without real checks and balances, a serious threat to any democratic society. Where journalism once served as a safeguard, traditional media is now largely owned by the very entities it should be holding accountable, breaking the bond of public trust.",
      FR: "La création d’Evidence Media est née d’un constat limpide : rester correctement informé est devenu une tâche complexe et chronophage. Ce déficit informationnel laisse les politiciens, institutions et acteurs d’influence agir sans réel contre-pouvoir — un danger majeur pour toute société démocratique. Jadis, le journalisme faisait office de rempart. Aujourd’hui, les médias traditionnels sont détenus par ceux qu’ils sont censés surveiller, brisant irrémédiablement le lien de confiance.",
    },
    projectCreativityContent2: {
      EN: "Evidence Media is a direct response to this imbalance, built on three core pillars: a personal observation, a tangible need for clarity in a fragmented media landscape, and a creative drive to structure independent information in a way that is both accessible and credible.",
      FR: "Evidence Media est une réponse directe à ce déséquilibre, fondée sur trois piliers : une observation personnelle, un besoin tangible de clarté dans un paysage médiatique fragmenté, et une impulsion créative visant à structurer l’information indépendante de manière accessible et crédible.",
    },
    projectCreativityContent3: {
      EN: "My studies at HEC Montréal shaped the project's strategic vision and business model, while my hands-on experience with Wise Duck Dev GPTs and Jean The Writer equipped me with the expertise in artificial intelligence and automation needed to develop a solution that is robust, reliable, and fully scalable.",
      FR: "Mon parcours à HEC Montréal a façonné la vision stratégique et le modèle d’affaires du projet, tandis que mes expériences avec Wise Duck Dev GPTs et Jean The Writer m’ont permis d’acquérir l’expertise en intelligence artificielle et en automatisation nécessaire pour construire une solution à la fois robuste, fiable et entièrement scalable.",
    },
    projectProcessTitle: {
      EN: "Process & Strategy",
      FR: "Processus & Stratégie",
    },
    projectProcessContent1: {
      EN: "Evidence Media was born from a clear mission: to deliver independent, sourced, reliable, and relevant information, with maximum signal and minimal noise. I began with a functional MVP (Version 1) focused on automation, content quality, and editorial integrity.",
      FR: "Evidence Media est né d’une mission claire : offrir une information indépendante, sourcée, fiable et pertinente, avec un signal maximal et un bruit minimal. J’ai démarré par un MVP fonctionnel (Version 1) centré sur l’automatisation, la qualité du contenu et l’intégrité éditoriale.",
    },
    projectProcessContent2: {
      EN: "Rather than building around predefined personas or chasing algorithmic trends, I created the media outlet I wished already existed—one aligned with my core values, free from the noise of traditional news cycles, and respectful of the reader’s intelligence.",
      FR: "Plutôt que de construire autour de personas prédéfinis ou de suivre les tendances algorithmiques, j’ai conçu le média que j’aurais aimé trouver : aligné avec mes principes, affranchi du vacarme médiatique traditionnel, et respectueux de l’intelligence du lecteur.",
    },
    projectProcessContent3: {
      EN: "This product-centric and values-driven approach naturally led to the development of a unique political doctrine, which became the project’s editorial backbone—ensuring coherence, honesty, and civic responsibility across every piece of published content.",
      FR: "Cette approche centrée produit et guidée par mes valeurs m’a naturellement conduit à définir une doctrine politique unique, qui est devenue la colonne vertébrale éditoriale du projet,  garantissant la cohérence, l’honnêteté et la responsabilité civique de chaque contenu diffusé.",
    },
    projectProcessContent4: {
      EN: "V5 publishes multiple content formats on X throughout the day across strategic peak windows, including news briefs, threads, ultra-shorts, and quote-tweets. On Substack, it publishes daily articles by category (paid), a free Daily Brief newsletter every morning, and Notes throughout the day.",
      FR: "La V5 publie plusieurs formats de contenu sur X tout au long de la journee sur des fenetres strategiques, incluant des breves, threads, ultra-courts et citations. Sur Substack, elle publie des articles quotidiens par categorie (payants), un Daily Brief gratuit chaque matin et des Notes tout au long de la journee.",
    },
    projectProcessContent5: {
      EN: "Growth strategy focuses on content quality over vanity metrics. The free Daily Brief builds trust and audience, paid articles convert engaged readers, and a Kaizen ideology feedback loop continuously improves the editorial framework based on real-world story coverage.",
      FR: "La strategie de croissance privilegie la qualite du contenu aux metriques de vanite. Le Daily Brief gratuit construit la confiance et l'audience, les articles payants convertissent les lecteurs engages, et une boucle de retour Kaizen ameliore continuellement le cadre editorial a partir de la couverture reelle des actualites.",
    },
    projectProcessContent6: {
      EN: "The methodology was agile and iterative—constantly refining the formats, editorial tone, and automation workflows based on personal observations, user feedback, comments, and algorithmic signals.",
      FR: "La méthodologie suivie fut agile et itérative, avec une amélioration continue des formats, du ton éditorial et des logiques d’automatisation, guidée par les observations personnelles, les retours utilisateurs, les commentaires, et les signaux algorithmiques.",
    },
    projectProcessContent7: {
      EN: "Finally, the system was designed for resilience and scale: 100% automated, agent-ready, and structured to evolve alongside the capabilities of the underlying APIs.",
      FR: "Enfin, le système a été pensé pour la résilience et la scalabilité : 100 % automatisé, agent-ready, et structuré pour évoluer au rythme des capacités offertes par les APIs des plateformes.",
    },
    projectStackTitle: {
      EN: "Stack and Tooling",
      FR: "Stack & outils",
    },
    projectStackPoint1: {
      EN: "Language: Python 3.12",
      FR: "Langage : Python 3.12",
    },
    projectStackPoint2: {
      EN: "AI: xAI Grok (all LLM tasks), OpenAI (embeddings), Anthropic Claude (self-healing)",
      FR: "IA : xAI Grok (toutes les taches LLM), OpenAI (embeddings), Anthropic Claude (auto-reparation)",
    },
    projectStackPoint3: {
      EN: "APIs: xAI SDK, xdk (X official SDK), OpenAI API, Anthropic API, Google API, Wikidata API",
      FR: "APIs : xAI SDK, xdk (SDK officiel X), OpenAI API, Anthropic API, Google API, Wikidata API",
    },
    projectStackPoint4: {
      EN: "Automation: GitHub Actions (CI/CD), cron scheduling, intelligent daily randomization",
      FR: "Automatisation : GitHub Actions (CI/CD), planification cron, randomisation quotidienne intelligente",
    },
    projectStackPoint5: {
      EN: "Security: HashiCorp Vault, OAuth 2.0 token rotation",
      FR: "Securite : HashiCorp Vault, rotation de tokens OAuth 2.0",
    },
    projectStackPoint6: {
      EN: "Publishing: curl_cffi (Substack API), Selenium (fallback), Tweepy (X media upload)",
      FR: "Publication : curl_cffi (API Substack), Selenium (fallback), Tweepy (upload media X)",
    },
    projectStackPoint7: {
      EN: "Quality: pytest (comprehensive test suite), Pydantic (domain models), GCP-compatible structured logging",
      FR: "Qualite : pytest (suite de tests exhaustive), Pydantic (modeles de domaine), logging structure compatible GCP",
    },
    projectStackContent1: {
      EN: "The V5 architecture follows clean separation of concerns: domain models (Pydantic), adapters (external APIs), pipelines (orchestration), and entrypoints (CLI). Every external integration is wrapped in a typed adapter with retry logic, structured logging, and cost tracking.",
      FR: "L'architecture V5 suit une separation claire des responsabilites : modeles de domaine (Pydantic), adaptateurs (APIs externes), pipelines (orchestration) et points d'entree (CLI). Chaque integration externe est encapsulee dans un adaptateur type avec logique de retry, logging structure et suivi des couts.",
    },
    projectStackContent2: {
      EN: "Cost optimization is central: xAI Batch API (50% token discount), prompt caching via conversation IDs (up to 75% off), and centralized pricing tracking across all providers.",
      FR: "L'optimisation des couts est centrale : API Batch xAI (50% de reduction sur les tokens), mise en cache des prompts via conversation IDs (jusqu'a 75% de reduction) et suivi centralise des tarifs de tous les fournisseurs.",
    },

    projectDesignTitle: {
      EN: "Design and UX Highlights",
      FR: "UX et points clés de conception",
    },
    projectDesignContent1: {
      EN: "Evidence Media doesn’t have a traditional UI, its user experience is entirely content-driven. I focused on crafting a readable, reliable, and recognizable content format, inspired by the most effective X and Substack accounts. Every post is designed to deliver immediate clarity and traceable credibility by citing original sources, similar to academic footnotes, helping users assess news at a glance or explore further.",
      FR: "Evidence Media ne possède pas d’interface utilisateur classique : son expérience repose entièrement sur le contenu produit. J’ai concentré mes efforts sur la création d’un format lisible, fiable et reconnaissable, inspiré des comptes X et Substack les plus efficaces. Chaque publication est conçue pour offrir une clarté immédiate et une crédibilité traçable, en citant systématiquement les sources d’origine, à la manière de notes de bas de page académiques,  afin que les lecteurs puissent soit juger rapidement de la fiabilité d’une information, soit approfondir s’ils le souhaitent.",
    },
    projectDesignContent2: {
      EN: "The main UX challenge was LLM hallucinations and inconsistency on politically sensitive topics. I addressed this through aggressive prompt engineering, and custom constraints, significantly reducing factual drift. Still, certain topics remain inherently unstable in current models, underscoring the importance of transparent sourcing.",
      FR: "Le principal défi UX résidait dans les hallucinations des modèles IA et leur instabilité sur les sujets politiquement sensibles. J’ai réduit ce phénomène grâce à une ingénierie de prompt rigoureuse et des contraintes personnalisées, ce qui a considérablement limité les dérives factuelles. Certains sujets restent néanmoins complexes à traiter avec les modèles actuels, ce qui renforce l’importance de sourcer chaque publication.",
    },
    projectDesignContent3: {
      EN: "To support discoverability and habit-building, I introduced consistent formatting across X posts (short, sourced, high-signal) and Substack articles (longer, categorized, contextualized), reinforcing trust and boosting engagement over time.",
      FR: "Pour favoriser la découvrabilité et l’adoption progressive, j’ai introduit une structure cohérente : des posts courts, sourcés et percutants sur X ; des articles plus longs, catégorisés et contextualisés sur Substack. Ce double format renforce la confiance, fidélise les lecteurs, et soutient l'engagement dans le temps.",
    },
    projectDeploymentTitle: {
      EN: "Deployment & Scalability",
      FR: "Déploiement & Scalabilité",
    },
    projectDeploymentContent1: {
      EN: "Evidence Media runs entirely from a GitHub-hosted codebase using GitHub Actions for scheduled, event-driven automation. While it doesn't rely on traditional deployment platforms (like Vercel or AWS), its architecture is optimized for resilience, modularity, and infinite scalability.",
      FR: "Evidence Media repose entièrement sur une base de code hébergée sur GitHub, avec des automatisations orchestrées via GitHub Actions, déclenchées de manière planifiée ou événementielle. Bien qu’il ne s’appuie pas sur des plateformes de déploiement classiques (comme Vercel ou AWS), son architecture est pensée pour être résiliente, modulaire et infiniment scalable.",
    },
    projectDeploymentContent2: {
      EN: "Each functional component, from scraping to AI generation to publishing, is encapsulated in discrete scripts that can be scaled horizontally or triggered independently, as needed.",
      FR: "Chaque composant fonctionnel, de l’extraction de contenu à la génération via IA, jusqu’à la publication, est encapsulé dans des scripts indépendants, pouvant être scalés horizontalement ou déclenchés séparément, selon les besoins.",
    },
    projectDeploymentContent3: {
      EN: "The system supports CI/CD via GitHub Actions, while monitoring and performance analytics are handled through native platform dashboards (X and Substack). The only true limitations are API usage quotas (xAI, X API, OpenAI, etc.), which define throughput, but the architecture itself is capable of 24/7 continuous publishing at industrial scale with minimal adjustments.",
      FR: "L'integration continue (CI/CD) est assuree par GitHub Actions, tandis que le suivi des performances et l'analytique s'effectuent directement via les tableaux de bord natifs de X et Substack. Les seules veritables limites proviennent des quotas des API (xAI, X API, OpenAI, etc.), qui definissent le debit, mais l'architecture en elle-meme permet une publication continue 24/7 a l'echelle industrielle avec un minimum d'ajustements.",
    },
    projectDeploymentContent4: {
      EN: "In short, the pipeline is not just automated, it’s built to grow.",
      FR: "En résumé, ce pipeline n’est pas seulement automatisé : il est conçu pour croître.",
    },
    projectRoadmapTitle: {
      EN: "Roadmap & Vision",
      FR: "Feuille de route & Vision",
    },
    projectRoadmapPoint1: {
      EN: "V1: X pipeline (short-form, sourced posts).",
      FR: "V1 : Pipeline X (posts courts et sources).",
    },
    projectRoadmapPoint2: {
      EN: "V2: Content redesign, improved cadence and formatting.",
      FR: "V2 : Refonte du contenu, amelioration du rythme et du format.",
    },
    projectRoadmapPoint3: {
      EN: "V3: Substack integration (daily sourced articles).",
      FR: "V3 : Integration Substack (articles quotidiens sources).",
    },
    projectRoadmapPoint4: {
      EN: "V4: Fully autonomous 24/7 pipeline on Raspberry Pi + GitHub Actions.",
      FR: "V4 : Pipeline 100% autonome 24/7 sur Raspberry Pi + GitHub Actions.",
    },
    projectRoadmapPoint5: {
      EN: "V5 (current): Complete ground-up rebuild with clean architecture, multiple publication formats, self-healing infrastructure, paid tier, and continuous editorial improvement.",
      FR: "V5 (actuel) : Reconstruction complete avec architecture propre, multiples formats de publication, infrastructure auto-reparatrice, abonnement payant et amelioration editoriale continue.",
    },
    projectRoadmapContent1: {
      EN: "Next: fine-tune a model on the curated dataset for improved cross-story context and historical linking.",
      FR: "Prochaine etape : fine-tuner un modele sur le dataset curate pour ameliorer le contexte inter-actualites et les liens historiques.",
    },
    projectResultsTitle: {
      EN: "Outcomes",
      FR: "Résultats",
    },
    projectResultsContent1: {
      EN: "Evidence Media's X account grew to over 500 organic followers, with consistent growth driven by sourced, high-quality content. Substack adoption is growing steadily with the introduction of the paid tier and Daily Brief. Audience feedback validates the editorial approach: readers appreciate the transparency, consistent sourcing, and the publication's willingness to cover stories mainstream outlets ignore.",
      FR: "Le compte X d'Evidence Media a depasse les 500 abonnes organiques, avec une croissance constante portee par un contenu source et de qualite. L'adoption sur Substack progresse regulierement avec l'introduction de l'abonnement payant et du Daily Brief. Les retours du public valident l'approche editoriale : les lecteurs apprecient la transparence, le sourcing systematique et la volonte de couvrir les actualites ignorees par les medias traditionnels.",
    },
    projectResultsContent2: {
      EN: "Engagement varies by topic, but the overall reception validates the project’s mission, offering verifiable, independent information in a time of institutional distrust. The system’s success further confirmed that automation, sourcing, and fast iteration are key levers for building trust and reach in digital media.",
      FR: "L’engagement varie selon les sujets traités, mais l’accueil global confirme la mission du projet : offrir une information indépendante, vérifiable, dans une ère marquée par la méfiance envers les institutions. Le succès du système démontre que l’automatisation, la traçabilité des sources et l’itération rapide sont les piliers essentiels pour construire la confiance et l’impact dans les médias numériques.",
    },
    projectConclusionTitle: {
      EN: "What I Took Away",
      FR: "Ce que j'en ai retiré",
    },
    projectConclusionContent1: {
      EN: "Evidence Media wasn’t just another automation project, it was a deep dive into building a living, breathing AI-powered media outlet from scratch. It sharpened every dimension of my technical skill set: Python, web scraping, prompt engineering, data integrity, CI/CD pipelines, API orchestration, and cybersecurity with Vault. I built systems that are not only fast and scalable, but also resilient, verifiable, and transparent, essential traits when working in information distribution.",
      FR: "Evidence Media n’a pas été un simple projet d’automatisation, c’était une plongée en profondeur dans la création, de A à Z, d’un média vivant, automatisé, propulsé par l’IA. Il a affûté toutes les dimensions de ma boîte à outils technique : Python, scraping web, prompt engineering, intégrité des données, pipelines CI/CD, orchestration d’APIs et cybersécurité avec HashiCorp Vault. J’ai bâti des systèmes non seulement rapides et scalables, mais aussi résilients, vérifiables et transparents, des qualités essentielles dès lors qu’on touche à la diffusion d’information.",
    },
    projectConclusionContent2: {
      EN: "I learned to tame large language models in high-stakes editorial contexts, resolving hallucinations, bias, and inconsistency through layered prompt strategies and dynamic content filtering. I developed ways to ensure that AI supports human understanding rather than distorting it, preserving truth and traceability through academic-style sourcing.",
      FR: "J’ai appris à dompter les grands modèles d’IA dans des contextes éditoriaux sensibles, à corriger les hallucinations, les biais et les incohérences grâce à des stratégies de prompt en couches et à des filtres de contenu dynamiques. J’ai développé des méthodes pour que l’IA soutienne la compréhension humaine, au lieu de la déformer, en préservant la véracité et la traçabilité via un sourcing rigoureux, à la manière des publications académiques.",
    },
    projectConclusionContent3: {
      EN: "But beyond the tech, this project solidified a core truth: building something truly useful doesn’t come from chasing trends or audience metrics, it comes from solving your own problem first, at scale. I built the news outlet I was searching for. The one I needed, but couldn’t find.",
      FR: "Mais au-delà de la tech, ce projet m’a ancré une conviction forte : ce qui est vraiment utile ne naît pas nécessairement des tendances ou des métriques d’audience, mais de la résolution d’un problème personnel, à grande échelle. J’ai construit le média que je cherchais. Celui dont j’avais besoin, mais qui n’existait pas.",
    },
    projectConclusionContent4: {
      EN: "Most importantly, this project reaffirmed a principle I now apply everywhere: quick, thoughtful iteration beats perfection. Shipping fast, observing real-world feedback, and improving continuously is the fastest path to building reliable, high-impact systems.",
      FR: "Et surtout, j’en ressors avec une règle que j’applique partout désormais : itérer vite vaut mieux que viser la perfection. Livrer rapidement, observer les retours réels, améliorer en continu, c’est le chemin le plus sûr vers des systèmes fiables et à fort impact.",
    },
    projectConclusionContent5: {
      EN: "Key takeaway: Think independently. Iterate rapidly. Automate relentlessly. Build solutions that you would genuinely use—and others will follow.",
      FR: "Leçon fondamentale : Pense librement. Itère rapidement. Automatise sans relâche. Crée des solutions que tu utiliserais toi-même, et d’autres suivront.",
    },
    buttonMainPage: {
      EN: "Main Page",
      FR: "Page Principale",
    },
    buttonBack: {
      EN: "Go Back",
      FR: "Retour",
    },
    metaTitle: {
      EN: "Evidence Media - AI-Powered Automated Content Generation & Publication System",
      FR: "Evidence Media - Système de génération et de publication de contenu automatisé alimenté par l'IA",
    },
    metaDescription: {
      EN: "Evidence Media is an AI-powered platform automating the curation and publication of sourced independent news on X and Substack for North America.",
      FR: "Evidence Media est une plateforme IA automatisant la curation et la publication d’actualités indépendantes sourcées sur X et Substack en Amérique du Nord.",
    },
    twitterImageAltDescription: {
      EN: "Evidence Media - AI-Powered Automated Content Generation & Publication System depicted by an AI generated image of Evidence Media logo",
      FR: "Evidence Media - Système de génération et de publication de contenu automatisé alimenté par l'IA, représenté par une image générée par IA du logo d'Evidence Media",
    },
    mainPictureAltDescription: {
      EN: "The Evidence Media Project main screenshot showing the Evidence Media Substack profile page",
      FR: "Capture d'écran principale du projet Evidence Media montrant la page de profil Substack d'Evidence Media",
    },
    og_locale: {
      EN: "en_US",
      FR: "fr_FR",
    },
  };

  const primaryImage = `https://www.wiseduckdev.com/images/projectsPictures/evidence_media/evidence_media_social_media_ai_automation_project.webp`;
  const secondaryImage = `https://www.wiseduckdev.com/images/projectsPictures/evidence_media/evidence_media_social_media_ai_automation_project_Twitter.webp`;
  const orgUrl = `https://${siteUrl}`;

  const evidenceMediaProjectUrl =
    activeLanguage === "EN"
      ? `https://${siteUrl}/evidence-media-project`
      : `https://${siteUrl}/fr/evidence-media-project`;

  const evidenceMediaSubstackUrl = `https://evidencemedianewsletter.substack.com/`;
  const evidenceMediaXUrl = `https://x.com/Evidence_X_News`;

  const pageLanguage = activeLanguage === "EN" ? "en-US" : "fr-FR";

  const contactPoint =
    activeLanguage === "EN"
      ? "https://wiseduckdev.com/#contact"
      : "https://wiseduckdev.com/fr/#contact";

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
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "inquiries",
            email: "wiseduckdev@gmail.com",
            url: contactPoint,
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${evidenceMediaSubstackUrl}#website`,
        url: evidenceMediaSubstackUrl,
        name: "Evidence Media on Substack",
      },
      {
        "@type": "WebSite",
        "@id": `${evidenceMediaXUrl}#website`,
        url: evidenceMediaXUrl,
        name: "Evidence Media on X (Twitter)",
      },
      {
        "@type": "WebPage",
        "@id": `${evidenceMediaProjectUrl}#webpage`,
        author: {
          "@type": "Organization",
          "@id": "https://wiseduckdev.com#organization",
        },
        url: evidenceMediaProjectUrl,
        name: translations.metaTitle[activeLanguage],
        description: translations.metaDescription[activeLanguage],
        isPartOf: { "@id": `${orgUrl}#website` },
        inLanguage: pageLanguage,
        primaryImageOfPage: { "@type": "ImageObject", url: primaryImage },
        image: [primaryImage, secondaryImage],
        breadcrumb: { "@id": `${evidenceMediaProjectUrl}#breadcrumb` },
        about: [{ "@id": `${evidenceMediaProjectUrl}#software` }],
        publisher: { "@id": `${orgUrl}#organization` },
        isAccessibleForFree: true,
        mainEntityOfPage: { "@id": `${evidenceMediaProjectUrl}#software` },
        datePublished: "2025-10-29",
        dateModified: "2026-04-30",

        potentialAction: {
          "@type": "ReadAction",
          target: `${evidenceMediaProjectUrl}`,
        },
      },
      {
        "@type": "Article",
        "@id": `${evidenceMediaProjectUrl}#article`,
        headline: translations.metaTitle[activeLanguage],
        description: translations.metaDescription[activeLanguage],
        image: [primaryImage, secondaryImage],
        author: {
          "@type": "Person",
          name: "Yannick Le Guennec",
          url: "https://wiseduckdev.com",
        },
        publisher: { "@id": `${orgUrl}#organization` },
        datePublished: "2025-10-29",
        dateModified: "2026-04-30",
        inLanguage: pageLanguage,
        isPartOf: { "@id": `${evidenceMediaProjectUrl}#webpage` },
        mainEntityOfPage: { "@id": `${evidenceMediaProjectUrl}#webpage` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${evidenceMediaProjectUrl}#software`,
        name: "Evidence Media",
        url: evidenceMediaProjectUrl,
        additionalType: "https://schema.org/WebApplication",
        applicationCategory: "ProductivityApplication",
        operatingSystem: "All",
        inLanguage: ["en-US"],
        description:
          activeLanguage === "EN"
            ? "Evidence Media is an AI-powered news automation system that curates, generates, and publishes sourced independent news on X and Substack at scale."
            : "Evidence Media est un système d’automatisation IA qui sélectionne, génère et publie à grande échelle des actualités indépendantes sourcées sur X et Substack.",
        publisher: { "@id": `${orgUrl}#organization` },
        creator: { "@id": `${orgUrl}#organization` },
        image: primaryImage,
        thumbnailUrl: secondaryImage,
        softwareVersion: "5.0",
        sameAs: [evidenceMediaSubstackUrl, evidenceMediaXUrl],
        audienceType: [
          "General Public",
          "Researchers",
          "Journalists",
          "Media Professionals",
          "Civic-Minded Individuals",
          "Policy Makers",
          "Academics",
          "Students",
          "Lifelong Learners",
          "Information Enthusiasts",
          "American Citizens",
          "Canadian Citizens",
        ],
        keywords: [
          "AI-powered news automation",
          "sourced independent news",
          "automated content generation",
          "X news publication",
          "Substack articles",
          "media transparency",
          "fact-based journalism",
          "information reliability",
          "news curation",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${evidenceMediaProjectUrl}#breadcrumb`,
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
                ? "Evidence Media Project"
                : "Projet Evidence Media",
            item: evidenceMediaProjectUrl,
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
          href={`https://${siteUrl}/evidence-media-project`}
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
          content={`https://www.wiseduckdev.com/images/projectsPictures/evidence_media/evidence_media_social_media_ai_automation_project_Facebook.webp`}
        />
        <meta
          property="og:url"
          content={
            activeLanguage === "FR"
              ? `https://${siteUrl}/fr/evidence-media-project`
              : `https://${siteUrl}/evidence-media-project`
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
          content={`https://www.wiseduckdev.com/images/projectsPictures/evidence_media/evidence_media_social_media_ai_automation_project_Twitter.webp`}
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
              href={`https://${siteUrl}/evidence-media-project`}
            />
            <link
              rel="alternate"
              hrefLang="fr"
              href={`https://${siteUrl}/fr/evidence-media-project`}
            />
          </>
        )}
        <link
          rel="canonical"
          href={
            activeLanguage === "EN"
              ? `https://${siteUrl}/evidence-media-project`
              : `https://${siteUrl}/fr/evidence-media-project`
          }
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <div className={classes.mainContainer}>
        <WrappedEvidenceMedia />
        <div className={classes.contentContainer}>
          <div className={classes.imagesContainer}>
            <img
              src={mainPicture.src}
              alt={translations.mainPictureAltDescription[activeLanguage]}
              className={classes.imagesBordered}
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
            <p className={classes.textParagraph}>
              {translations.projectOverviewContent3[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectOverviewContent4[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectOverviewContent5[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectOverviewContent6[activeLanguage]}
            </p>
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
            </ul>
            <p className={classes.textParagraph}>
              {translations.projectMyRoleContent2[activeLanguage]}
            </p>
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
            <p className={classes.textParagraph}>
              {translations.projectCreativityContent3[activeLanguage]}
            </p>
          </div>
          {/* Process Section */}
          <h2 className={classes.subtitle}>
            {translations.projectProcessTitle[activeLanguage]}
          </h2>
          <div className={classes.textContainer}>
            <p className={classes.textParagraph}>
              {translations.projectProcessContent1[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectProcessContent2[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectProcessContent3[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectProcessContent4[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectProcessContent5[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectProcessContent6[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectProcessContent7[activeLanguage]}
            </p>
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
              <li className={classes.textListItem}>
                {translations.projectStackPoint7[activeLanguage]}
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
            <p className={classes.textParagraph}>
              {translations.projectDesignContent2[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectDesignContent3[activeLanguage]}
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
            <p className={classes.textParagraph}>
              {translations.projectDeploymentContent2[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectDeploymentContent3[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectDeploymentContent4[activeLanguage]}
            </p>
          </div>
          {/* Roadmap Section */}
          <h2 className={classes.subtitle}>
            {translations.projectRoadmapTitle[activeLanguage]}
          </h2>
          <div className={classes.textContainer}>
            <ul className={classes.textList}>
              <li className={classes.textListItem}>
                {translations.projectRoadmapPoint1[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectRoadmapPoint2[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectRoadmapPoint3[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectRoadmapPoint4[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectRoadmapPoint5[activeLanguage]}
              </li>
            </ul>
            <p className={classes.textParagraph}>
              {translations.projectRoadmapContent1[activeLanguage]}
            </p>
          </div>
          {/* Results Section */}
          <h2 className={classes.subtitle}>
            {translations.projectResultsTitle[activeLanguage]}
          </h2>
          <div className={classes.textContainer}>
            <p className={classes.textParagraph}>
              {translations.projectResultsContent1[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectResultsContent2[activeLanguage]}
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
            <p className={classes.textParagraph}>
              {translations.projectConclusionContent2[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectConclusionContent3[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectConclusionContent4[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectConclusionContent5[activeLanguage]}
            </p>
          </div>
          <div className={classes.buttonsContainer}>
            <Link href="/#portfolio" className={classes.buttonReverted}>
              {translations.buttonBack[activeLanguage]}
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
