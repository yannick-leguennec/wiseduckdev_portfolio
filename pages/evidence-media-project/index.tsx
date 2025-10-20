import { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import React from "react";
import Head from "next/head";
import Header from "../../components/v1/Header/Header";
import Footer from "../../components/v1/Footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useLoader } from "../../context/LoaderContext";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import classes from "../../styles/family_flow_project.module.scss";

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

  // Function to go back to the previous page
  const handleBackClick = () => {
    window.history.back();
  };

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
      EN: "In spring 2025, I launched Evidence Media, a groundbreaking platform that automates the curation and publication of independent online news, delivering sourced posts on X and detailed articles on Substack. Born from my desire to counter misinformation, this solo project evolved from a personal idea into an essential resource for informing the North American public.",
      FR: "Au printemps 2025, j’ai lancé Evidence Media, une plateforme innovante qui automatise la curation et la publication de nouvelles indépendantes en ligne, diffusant des publications sourcées sur X et des articles détaillés sur Substack. Né de ma volonté de contrer la désinformation, ce projet solo a évolué d’une idée personnelle vers une ressource essentielle pour informer le public nord-américain.",
    },
    projectOverviewTitle: {
      EN: "Project Overview",
      FR: "Aperçu du projet",
    },
    projectOverviewContent1: {
      EN: "Evidence Media is a fully automated, AI-powered news pipeline designed to curate, aggregate, and distribute information from independent online sources. It publishes daily sourced updates on X (formerly Twitter) and long-form articles on Substack.",
      FR: "Evidence Media est un pipeline d'information entièrement automatisé et propulsé par l'IA, conçu pour sélectionner, agréger et diffuser les actualités provenant de sources indépendantes en ligne. Il génère quotidiennement des publications sourcées sur X et des articles sur Substack.",
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
      EN: "The project was initiated in early spring 2025, with its first official version launched by late spring of the same year.",
      FR: "Le projet a été initié au début du printemps 2025, et sa version 1 a été lancée à la fin du printemps de la même année.",
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
      EN: "Product Strategy: I defined the mission, editorial identity, positioning, target personas, and long-term vision.",
      FR: "Stratégie produit : définition des fonctionnalités en fonction des besoins du client (correction, relecture, suggestions, recherche d’éditeurs).",
    },
    projectMyRoleContentPoint2: {
      EN: "Backend Development: I built all automation scripts in Python, structured a modular architecture, and managed data workflows.",
      FR: "Développement backend : j’ai conçu tous les scripts d’automatisation en Python, structuré une architecture modulaire, et mis en place les flux de traitement des données.",
    },
    projectMyRoleContentPoint3: {
      EN: "AI Integration: I orchestrated a multi-model pipeline using OpenAI, Perplexity, and xAI APIs to generate contextualized, sourced content, as their relative media.",
      FR: "Intégration de l’IA : j’ai orchestré un pipeline multi-modèles utilisant les API d’OpenAI, Perplexity et xAI, afin de générer des contenus contextualisés, sourcés, et accompagnés de leurs médias associés.",
    },
    projectMyRoleContentPoint4: {
      EN: "Advanced Automation: I implemented GitHub Actions for scheduling and deployment, secured secrets with HashiCorp Vault, and designed a system built for scale.",
      FR: "Automatisation avancée : j’ai intégré GitHub Actions pour déclencher chaque étape clé du système de manière autonome, sécurisé l’ensemble des données sensibles du projet avec HashiCorp Vault, et bâti un socle technique capable d’absorber la croissance sans compromis.",
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
      EN: "Operational workflows were designed in response to the constraints of the platforms used. For example, X’s free API limits posting to 17 publications per day—this technical limitation directly shaped the platform’s daily editorial cadence. Substack, on the other hand, emerged as the ideal channel for long-form daily articles, organized across eight key content categories. The goal: to help readers build a cross-disciplinary, contextual, and informed understanding of current events.",
      FR: "Les workflows opérationnels ont été pensés en fonction des contraintes des plateformes utilisées. L’API gratuite de X limite à 17 publications quotidiennes, une contrainte qui a façonné le rythme éditorial journalier. Substack, de son côté, s’est imposé comme canal idéal pour des articles plus longs et quotidiens, couvrant huit grandes catégories essentielles. L’objectif : aider les lecteurs à construire une vision transversale, contextuelle et éclairée de l’actualité.",
    },
    projectProcessContent5: {
      EN: "Instead of chasing conventional growth metrics, I chose to focus on strategic milestones: reaching 500 verified subscribers and 5 million impressions on X within the first year to unlock monetization, then reinvesting in the paid API. On Substack, I made the decision to keep all content fully free for a year to build reader trust before introducing a premium model.",
      FR: "Plutôt que de courir après les métriques classiques de croissance, j’ai préféré viser des jalons stratégiques : atteindre 500 abonnés vérifiés et 5 millions d’impressions sur X en un an pour activer la monétisation, puis investir dans l’API payante. Côté Substack, j’ai choisi de rendre le contenu entièrement gratuit pendant un an, afin de bâtir la confiance avec les lecteurs avant de proposer un modèle premium.",
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
      EN: "Languages/Frameworks: Python, Flask",
      FR: "Langages / Frameworks : Python, Flask",
    },
    projectStackPoint2: {
      EN: "AI: OpenAI, Perplexity, Xai",
      FR: " IA : OpenAI, Perplexity, Xai",
    },
    projectStackPoint3: {
      EN: "APIs: X API v2, Xai API, Perplexity API, OpenAI API, Google API",
      FR: "APIs : X API v2, API Xai, API Perplexity, API OpenAI, API Google",
    },
    projectStackPoint4: {
      EN: "Automation: GitHub Actions",
      FR: " Automatisation : GitHub Actions",
    },
    projectStackPoint5: {
      EN: "Security: HashiCorp Vault",
      FR: "Sécurité : HashiCorp Vault",
    },
    projectStackPoint6: {
      EN: "Scraping: BeautifulSoup, Selenium",
      FR: " Scraping : BeautifulSoup, Selenium",
    },
    projectStackPoint7: {
      EN: "Others: Tweepy, PyVirtualDisplay",
      FR: "Autres : Tweepy, PyVirtualDisplay",
    },
    projectStackContent1: {
      EN: "I chose Python for its rich ecosystem in automation, especially tools like Selenium and BeautifulSoup. What started as a new technical venture quickly became a passion. All the technologies I used are reliable, well-documented, free (except for the AI APIs), and perfectly suited for automated scripting.",
      FR: "J’ai choisi Python pour la richesse de son écosystème en automatisation (notamment avec Selenium et BeautifulSoup). C’était une nouvelle aventure technique, qui s’est rapidement transformée en véritable coup de cœur. Toutes les technologies utilisées sont fiables, bien documentées, gratuites (à l’exception des APIs IA) et parfaitement adaptées aux scripts automatisés.",
    },
    projectStackContent2: {
      EN: "AI integration (e.g., xAI) and secure automation (via GitHub Actions and Vault) are central pillars of the project.",
      FR: "L’intégration de l’IA (Xai, etc.) et l’automatisation sécurisée (GitHub Actions, Vault) sont au cœur du projet.",
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
    projectDeployemntContent3: {
      EN: "The system supports CI/CD via GitHub Actions, while monitoring and performance analytics are handled through native platform dashboards (X and Substack). The only true limitations are API usage quotas (OpenAI, Perplexity, X API, etc.), which define throughput, but the architecture itself is capable of 24/7 continuous publishing at industrial scale with minimal adjustments.",
      FR: "L’intégration continue (CI/CD) est assurée par GitHub Actions, tandis que le suivi des performances et l’analytique s’effectuent directement via les tableaux de bord natifs de X et Substack. Les seules véritables limites proviennent des quotas des API (OpenAI, Perplexity, X API, etc.), qui définissent le débit, mais l’architecture en elle-même permet une publication continue 24/7 à l’échelle industrielle avec un minimum d’ajustements.",
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
      FR: "V1 : Lancement du pipeline d’information pour X (posts courts et sourcés).",
    },
    projectRoadmapPoint2: {
      EN: "V2: Content redesign, improved cadence and formatting.",
      FR: " V2 : Refonte du contenu, amélioration du rythme et du format.",
    },
    projectRoadmapPoint3: {
      EN: "V3: Substack integration (daily sourced articles).",
      FR: "V3 : Intégration de Substack (articles quotidiens sourcés).",
    },
    projectRoadmapPoint4: {
      EN: "V4: Toward a fully autonomous 24/7 pipeline.",
      FR: "V4 : Vers un pipeline 100% autonome fonctionnant 24/7.",
    },
    projectRoadmapContent1: {
      EN: "Next: progress from Chain of Thoughts (CoT) pipelines to agentic AI, and once a sufficient vetted corpus exists, fine-tune a model on the curated dataset to improve cross-story linking and historical context.",
      FR: "Prochaine étape : passer d’une architecture basée sur le raisonnement en chaîne (Chain of Thoughts) à une intelligence agentique. Une fois un corpus suffisamment riche et vérifié, l’objectif est de fine-tuner un modèle sur ce dataset afin d’améliorer la mise en contexte historique et les connexions transversales entre les actualités.",
    },
    projectResultsTitle: {
      EN: "Outcomes",
      FR: "Résultats",
    },
    projectResultsContent1: {
      EN: "Evidence Media’s X account quickly reached over 500 organic followers, with consistent growth driven by high-quality, source-backed content. Substack adoption is slower but steadily increasing. Audience feedback reflects the polarized landscape of modern media consumption: while many users appreciate the transparency, reliability, and AI-powered curation (notably the “Evidence” AI editor persona), others remain skeptical of AI involvement.",
      FR: "Le compte X d’Evidence Media a rapidement dépassé les 500 abonnés organiques, avec une croissance constante portée par un contenu de qualité, sourcé et pertinent. L’adoption sur Substack progresse plus lentement, mais de manière régulière. Les retours du public reflètent la polarisation actuelle dans la consommation médiatique : beaucoup saluent la transparence, la fiabilité et la rigueur de la curation assistée par IA (notamment la figure éditoriale d’Evidence), tandis que d’autres restent méfiants envers l’implication de l’IA dans les médias.",
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
    buttonViewLive: {
      EN: "View Live Project",
      FR: "Voir le projet en ligne",
    },
    buttonGitHubRepo: {
      EN: "View GitHub Repo",
      FR: "Voir le dépôt GitHub",
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
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${evidenceMediaProjectUrl}#software`,
        name: "Evidence Media",
        url: evidenceMediaProjectUrl,
        additionalType: "https://schema.org/WebApplication",
        applicationCategory: "ProductivityApplication",
        operatingSystem: "Any",
        inLanguage: ["en-US"],
        description:
          activeLanguage === "EN"
            ? "Evidence Media is an AI-powered news automation system that curates, generates, and publishes sourced independent news on X and Substack at scale."
            : "Evidence Media est un système d’automatisation IA qui sélectionne, génère et publie à grande échelle des actualités indépendantes sourcées sur X et Substack.",
        publisher: { "@id": `${orgUrl}#organization` },
        creator: { "@id": `${orgUrl}#organization` },
        image: primaryImage,
        thumbnailUrl: secondaryImage,
        softwareVersion: "3.0",
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
      <Header />
      <main className={classes.mainContainer}>
        <h1>{translations.pageTitle[activeLanguage]}</h1>
        {/* Introduction Section */}
        <h2>{translations.pageSubtitle[activeLanguage]}</h2>
        <p>{translations.pageIntroduction1[activeLanguage]}</p>
        {/* Overview Section */}
        <h2>{translations.projectOverviewTitle[activeLanguage]}</h2>
        <p>{translations.projectOverviewContent1[activeLanguage]}</p>
        <p>{translations.projectOverviewContent2[activeLanguage]}</p>
        <p>{translations.projectOverviewContent3[activeLanguage]}</p>
        <p>{translations.projectOverviewContent4[activeLanguage]}</p>
        <p>{translations.projectOverviewContent5[activeLanguage]}</p>
        <p>{translations.projectOverviewContent6[activeLanguage]}</p>
        {/* My Role Section */}
        <h2>{translations.projectMyRoleTitle[activeLanguage]}</h2>
        <p>{translations.projectMyRoleContent1[activeLanguage]}</p>
        <ul>
          <li>{translations.projectMyRoleContentPoint1[activeLanguage]}</li>
          <li>{translations.projectMyRoleContentPoint2[activeLanguage]}</li>
          <li>{translations.projectMyRoleContentPoint3[activeLanguage]}</li>
          <li>{translations.projectMyRoleContentPoint4[activeLanguage]}</li>
        </ul>
        <p>{translations.projectMyRoleContent2[activeLanguage]}</p>
        {/* Creativity Section */}
        <h2>{translations.projectCreativityTitle[activeLanguage]}</h2>
        <p>{translations.projectCreativityContent1[activeLanguage]}</p>
        <p>{translations.projectCreativityContent2[activeLanguage]}</p>
        <p>{translations.projectCreativityContent3[activeLanguage]}</p>
        {/* Process Section */}
        <h2>{translations.projectProcessTitle[activeLanguage]}</h2>
        <p>{translations.projectProcessContent1[activeLanguage]}</p>
        <p>{translations.projectProcessContent2[activeLanguage]}</p>
        <p>{translations.projectProcessContent3[activeLanguage]}</p>
        <p>{translations.projectProcessContent4[activeLanguage]}</p>
        <p>{translations.projectProcessContent5[activeLanguage]}</p>
        <p>{translations.projectProcessContent6[activeLanguage]}</p>
        <p>{translations.projectProcessContent7[activeLanguage]}</p>
        {/* Stack Section */}
        <h2>{translations.projectStackTitle[activeLanguage]}</h2>
        <ul>
          <li>{translations.projectStackPoint1[activeLanguage]}</li>
          <li>{translations.projectStackPoint2[activeLanguage]}</li>
          <li>{translations.projectStackPoint3[activeLanguage]}</li>
          <li>{translations.projectStackPoint4[activeLanguage]}</li>
          <li>{translations.projectStackPoint5[activeLanguage]}</li>
          <li>{translations.projectStackPoint6[activeLanguage]}</li>
          <li>{translations.projectStackPoint7[activeLanguage]}</li>
        </ul>
        <p>{translations.projectStackContent1[activeLanguage]}</p>
        <p>{translations.projectStackContent2[activeLanguage]}</p>
        {/* Design Section */}
        <h2>{translations.projectDesignTitle[activeLanguage]}</h2>
        <p>{translations.projectDesignContent1[activeLanguage]}</p>
        <p>{translations.projectDesignContent2[activeLanguage]}</p>
        <p>{translations.projectDesignContent3[activeLanguage]}</p>
        {/* Deployment Section */}
        <h2>{translations.projectDeploymentTitle[activeLanguage]}</h2>
        <p>{translations.projectDeploymentContent1[activeLanguage]}</p>
        <p>{translations.projectDeploymentContent2[activeLanguage]}</p>
        <p>{translations.projectDeploymentContent3[activeLanguage]}</p>
        <p>{translations.projectDeploymentContent4[activeLanguage]}</p>
        {/* Roadmap Section */}
        <h2>{translations.projectRoadmapTitle[activeLanguage]}</h2>
        <ul>
          <li>{translations.projectRoadmapPoint1[activeLanguage]}</li>
          <li>{translations.projectRoadmapPoint2[activeLanguage]}</li>
          <li>{translations.projectRoadmapPoint3[activeLanguage]}</li>
          <li>{translations.projectRoadmapPoint4[activeLanguage]}</li>
        </ul>
        <p>{translations.projectRoadmapContent1[activeLanguage]}</p>
        {/* Results Section */}
        <h2>{translations.projectResultsTitle[activeLanguage]}</h2>
        <p>{translations.projectResultsContent1[activeLanguage]}</p>
        <p>{translations.projectResultsContent2[activeLanguage]}</p>
        {/* Conclusion Section */}
        <h2>{translations.projectConclusionTitle[activeLanguage]}</h2>
        <p>{translations.projectConclusionContent1[activeLanguage]}</p>
        <p>{translations.projectConclusionContent2[activeLanguage]}</p>
        <p>{translations.projectConclusionContent3[activeLanguage]}</p>
        <p>{translations.projectConclusionContent4[activeLanguage]}</p>
        <p>{translations.projectConclusionContent5[activeLanguage]}</p>
      </main>
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
