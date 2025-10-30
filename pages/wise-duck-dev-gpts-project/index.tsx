import { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import React from "react";
import Head from "next/head";
import WrappedWiseDuckDevGPTs from "../../components/v2/WrappedHeaderComponents/WrappedWiseDuckDevGPTs/WrappedWiseDuckDevGPTs";
import Footer from "../../components/v2/Footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useLoader } from "../../context/LoaderContext";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import classes from "../../styles/projects_pages.module.scss";
import Link from "next/link";
import mainPicture from "../../public/images/projectsPictures/wise_duck_dev_gpts/wise_duck_dev_gpts_project_main_picture.webp";
import collectionsPagePicture from "../../public/images/projectsPictures/wise_duck_dev_gpts/wise_duck_dev_gpts_v2_collections_page_EN_screenshot.webp";
import reactAssistantProfilePage from "../../public/images/projectsPictures/wise_duck_dev_gpts/wise_duck_dev_gpts_v2_react_mastery_pro_assistant_profile_page.webp";

export default function WiseDuckDevGPTsProject() {
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
      EN: "The Wise Duck Dev GPTs Project",
      FR: "Le projet Wise Duck Dev GPTs",
    },
    pageSubtitle: {
      EN: "AI-Powered Custom GPT Ecosystem for Developers",
      FR: "Un écosystème de plus de 800 custom GPTs spécialisés pour les développeurs",
    },
    pageIntroduction: {
      EN: "In 2024, I launched Wise Duck Dev GPTs, a groundbreaking platform offering over 800 custom GPTs tailored for developers. Born from my journey as a newly certified developer, this project evolved from a personal portfolio idea into a vibrant resource, empowering coders with AI-driven productivity tools.",
      FR: "En 2024, j’ai lancé The Wise Duck Dev GPTs, une plateforme avant-gardiste rassemblant plus de 800 GPTs sur mesure, conçus pour accompagner les développeurs dans leur quotidien. Initialement pensée comme un simple projet de portfolio, l’initiative a rapidement évolué en un véritable catalyseur de productivité et d’innovation, offrant des solutions concrètes aux professionnels du web, du mobile, de l’intelligence artificielle, de la blockchain et du jeu vidéo.",
    },
    projectOverviewTitle: {
      EN: "Project Overview",
      FR: "Aperçu du projet",
    },
    projectOverviewContent1: {
      EN: "Wise Duck Dev GPTs is a revolutionary platform delivering advanced custom GPTs designed for web, mobile, AI, blockchain, and video game developers. With over 800 specialized GPTs, it boosts productivity, enhances code quality, and simplifies complex tasks. Leveraging cutting-edge AI technologies, the platform not only helps complete projects efficiently but also serves as a technology repository for exploring new tools. Whether you’re building AI models, web apps, or blockchain solutions, Wise Duck Dev GPTs is your partner in pushing boundaries.  ",
      FR: "The Wise Duck Dev GPTs est une plateforme intelligente conçue pour les développeurs, centralisant une vaste collection de GPTs personnalisés destinés à automatiser, accélérer et fiabiliser leur travail au quotidien. Grâce à ces outils spécialisés, elle permet d’améliorer la qualité du code, de résoudre rapidement des problèmes complexes, et d’explorer de nouvelles technologies. Que ce soit pour prototyper une application mobile, automatiser un flux backend, affiner un modèle d’IA ou intégrer un smart contract, chaque GPT est pensé pour guider, stimuler et faire gagner un temps précieux.",
    },
    projectOverviewContent2: {
      EN: "The idea for the platform came right after I completed my developer certification. I wanted to build a portfolio that truly reflected who I was,  something original, useful, and personal. During my time at O’clock, I had created several custom GPTs to help me learn and code more efficiently. They made such a difference in my workflow that I thought: why not share them with others? What started as a small personal library of 10-15 GPTs quickly grew. By the summer of 2024, the platform hosted over 250 tools (Version 1), and by early 2025, that number had soared to more than 800 (Version 2). Each GPT is crafted to support developers in web, mobile, AI, blockchain, and gaming,  helping them code faster, solve problems smarter, and boost their creativity.",
      FR: "L’idée du projet a émergé juste après l’obtention de ma certification. Je souhaitais créer un portfolio qui me ressemble vraiment : original, utile, et profondément aligné avec mes valeurs. Pendant ma formation chez O’clock, j’avais conçu plusieurs GPTs personnalisés pour m’aider à apprendre et coder plus efficacement. Leur impact sur mon flux de travail a été tel qu’un tout nouveau champ de possibilités s’est ouvert à moi. Très vite, une conviction s’est imposée : ces outils devaient être partagés. Ce qui n’était au départ qu’une modeste bibliothèque personnelle d’une quinzaine de GPTs s’est transformé en un véritable écosystème. À l’été 2024, la plateforme hébergeait déjà plus de 250 outils (version 1), et début 2025, elle en proposait plus de 800 (version 2). Chaque GPT a été conçu pour accompagner les développeurs du web, du mobile, de l’IA, de la blockchain ou encore du jeu vidéo, afin de coder plus vite, résoudre plus intelligemment et créer avec plus d’élan.",
    },
    projectMyRoleTitle: {
      EN: "My Role",
      FR: "Mon rôle",
    },
    projectMyRoleContent1: {
      EN: "This was a solo project, meaning I handled everything from idea to launch, across design, development, AI, and automation.",
      FR: "Ce projet a été mené en solo, ce qui signifie que j’ai assuré l’ensemble des étapes : de l’idéation à la mise en ligne, en passant par la conception produit, le développement full-stack, l’ingénierie IA et l’automatisation.",
    },
    projectMyRoleContentPoint1: {
      EN: "Product Manager: I imagined the entire user experience, from how developers would browse GPTs to how each section should feel. I structured the app’s features, interface flow, and content to make everything intuitive and developer-friendly.",
      FR: "Chef de produit : J’ai imaginé l’expérience utilisateur dans sa globalité, navigation, structure des collections, hiérarchie de l’information,  en veillant à ce que chaque interaction soit fluide, intuitive et pensée pour les développeurs.",
    },
    projectMyRoleContentPoint2: {
      EN: "Technical Architecture: I built the foundation of the app with scalability and automation in mind, using a modular approach that supports innovation and future iterations.",
      FR: "Architecture technique : J’ai conçu une base solide en adoptant une approche modulaire et évolutive, pensée pour la scalabilité, la performance et les futures itérations.",
    },
    projectMyRoleContentPoint3: {
      EN: "Full-Stack Developer: I built the platform using Next.js, TypeScript, and Sass. For data management, I initially started with a simple JSON-based structure, then progressively migrated to a SQL database using Prisma to ensure scalability and reliability. I also integrated Meilisearch to deliver a fast, relevant, and seamless search experience.",
      FR: "Développeur full-stack :J’ai développé la plateforme avec Next.js, TypeScript et Sass. Pour la gestion des données, j’ai d’abord opté pour une base JSON simple, puis migré progressivement vers une base SQL structurée avec Prisma afin d’assurer évolutivité et fiabilité. J’ai également intégré Meilisearch pour offrir une expérience de recherche rapide, pertinente et fluide.",
    },
    projectMyRoleContentPoint4: {
      EN: "AI Engineer: I designed over 800 custom GPTs by leveraging automated systems that combined the latest AI technologies with advanced prompt engineering techniques. Each GPT follows a structured logic that ensures ecosystem-wide consistency, high-quality responses, and fast, centralized updates when needed.",
      FR: "Ingénieur IA : J’ai conçu plus de 800 GPTs personnalisés en m’appuyant sur des systèmes automatisés combinant les dernières IA du marché et des techniques avancées de prompt engineering. Chaque GPT suit une logique structurée garantissant la cohérence de l’écosystème, la qualité des réponses, ainsi qu’une mise à jour rapide et centralisée en cas d’évolution.",
    },
    projectMyRoleContentPoint5: {
      EN: "Automation Engineer: I used Make.com and OpenAI’s API to automate the creation of the custom GPTs and their bilingual documentation, saving a lot of time and making the platform highly scalable.",
      FR: "Ingénieur en automatisation : J’ai conçu un système d’automatisation complet en combinant Make.com et l’API d’OpenAI, permettant de générer à grande échelle les GPTs ainsi que leur documentation bilingue (FR/EN). Cette infrastructure m’a permis de maintenir un rythme de publication soutenu tout en garantissant rigueur, cohérence et qualité de contenu.",
    },
    projectMyRoleContentPoint6: {
      EN: "DevOps & SEO Specialist: I optimized the site for search engines and deployed it as a lightning-fast PWA using Vercel, ensuring users have a smooth, mobile-friendly experience.",
      FR: "Spécialiste DevOps & SEO : J’ai structuré l’ensemble des contenus selon les meilleures pratiques de référencement multilingue, en ciblant spécifiquement les intentions de recherche des développeurs. La plateforme a ensuite été déployée en tant que Progressive Web App (PWA) via Vercel, offrant des performances élevées, une accessibilité optimale sur mobile, et un pipeline d’intégration et de déploiement continu (CI/CD) robuste.",
    },
    projectMyRoleContent2: {
      EN: "From ideation to deployment, I led every aspect, blending technical prowess with product strategy.",
      FR: "De la stratégie à l’exécution, j’ai assumé chaque décision avec une double casquette : développeur full-stack et concepteur produit, alliant vision d’ensemble et rigueur technique à chaque étape du projet.",
    },
    projectCreativityTitle: {
      EN: "Creativity & Inspiration",
      FR: "Créativité & inspiration",
    },
    projectCreativityContent1: {
      EN: "The idea first came to me during a meditation session while I was completing my intensive Web & Mobile Development certification at O’Clock. I was reflecting on the portfolio I would need to build after graduating, and how, despite being a junior developer, I could stand out from the crowd and offer something truly unique to recruiters. That’s when I envisioned what would eventually become the logo of the Wise Duck Dev: a bold, stylized rubber duck seen in profile, almost like a playful nod to the iconic Apple logo.",
      FR: "L’idée m’est venue lors d’une séance de méditation, alors que je terminais ma certification intensive en développement web et mobile chez O’clock. Je réfléchissais au portfolio que je devrais construire une fois diplômé, et à la manière dont, en tant que développeur junior, je pourrais réellement me démarquer. C’est à ce moment-là que j’ai visualisé ce qui allait devenir le logo de Wise Duck Dev : un canard stylisé de profil, un clin d’œil assumé et ludique à l’iconique logo d’Apple.",
    },
    projectCreativityContent2: {
      EN: "At first, I laughed. A duck? Really? That’s my big idea?  But the more I thought about it, the more it made sense. Ducks are among the few animals that can move seamlessly across air, land, and water, they fly, swim, and walk. That adaptability resonated deeply with me. It perfectly symbolized the versatility of a Full-Stack developer, able to navigate front-end, back-end, and databases with ease. That was the spark: the Wise Duck Dev was born.",
      FR: "Sur le coup, j’ai souri. Un canard ? Vraiment ? C’était donc ça, mon idée ? Et pourtant, plus j’y pensais, plus cela faisait sens. Le canard est l’un des rares animaux capables de se déplacer avec aisance dans les airs, sur terre et dans l’eau. Il vole, nage et marche. Cette polyvalence naturelle résonnait profondément avec l’essence du métier de développeur full-stack : naviguer fluidement entre front-end, back-end et bases de données. C’était l’étincelle. The Wise Duck Dev était né.",
    },
    projectCreativityContent3: {
      EN: "A few months later, in November 2023, OpenAI released the Custom GPT feature, and that completely changed the game for me. I began creating specialized GPTs to support my learning in technologies like JavaScript and Next.js, and quickly realized how powerful they could be. Once I graduated and started working on my portfolio, the next step felt obvious: share these tools with the wider developer community. Not just to showcase my skills, but to empower others and help them work faster, better, and smarter.",
      FR: "Quelques mois plus tard, en novembre 2023, OpenAI lançait les Custom GPTs. Une révolution. J’ai immédiatement commencé à en créer pour m’accompagner dans l’apprentissage de technologies telles que JavaScript ou Next.js. J’ai rapidement compris leurs potentiel. Et quand le moment est venu de construire mon portfolio, partager ces outils avec la communauté dev m’est juste apparu comme une évidence. Pas seulement pour valoriser mon expertise en prompt engineering, mais pour offrir à d’autres ce que j’aurais moi-même rêvé d’avoir : un écosystème d’outils IA utiles, efficaces et pensés pour les besoins réels des devs.",
    },
    projectCreativityContent4: {
      EN: "That’s how the Wise Duck Dev GPTs platform was born, a blend of creativity, innovation, and a genuine desire to elevate other developers through the power of AI.",
      FR: "C’est ainsi qu’est née la plateforme Wise Duck Dev GPTs, le fruit d’un croisement entre intuition, vision stratégique et passion pour l’innovation.",
    },
    projectProcessTitle: {
      EN: "Process & Strategy",
      FR: "Processus & Stratégie",
    },
    projectProcessContent1: {
      EN: "The project initially began as a simple extension of my portfolio (version 1). However, once I envisioned the long-term potential of the project, and its version 2, it became clear that both the technical architecture and the overall business approach needed to be completely rethought.",
      FR: "Le projet a d’abord vu le jour comme une simple extension de mon portfolio (version 1). Mais très vite, en entrevoyant son potentiel à long terme et l’ambition d’une version 2, il est devenu très clair que l’architecture du projet, tout comme l’approche stratégique devaient être entièrement repensées.",
    },
    projectProcessContent2: {
      EN: "Drawing on insights from my training at HEC Montréal and O’Clock, I developed a full business model and a SMART strategic roadmap. I clearly defined the core questions: What real needs would this platform address? Who are the target users? What are their expectations, habits, and preferred channels of communication?",
      FR: "En m’appuyant sur les enseignements reçus à HEC Montréal et O’clock, j’ai conçu un modèle d’affaires structuré ainsi qu’une feuille de route SMART. J’ai commencé par poser les bonnes questions : à quels besoins concrets cette plateforme devait-elle répondre ? Qui sont ses utilisateurs cibles ? Quelles sont leurs attentes, leurs habitudes, leurs comportements numériques, et quels canaux privilégient-ils pour découvrir de nouveaux outils ?",
    },
    projectProcessContent3: {
      EN: "With a monetization goal set for 2026 (version 3), I designed a scalable and future-ready platform. I built the new concept using Midjourney and Figma, and followed Agile principles with rapid iterations, testing each version live on Vercel to guarantee a seamless PWA deployment.",
      FR: "Avec un objectif de monétisation fixé pour 2026 (version 3), j’ai développé une plateforme robuste, scalable et orientée vers l’avenir. Le concept a été matérialisé à l’aide de Midjourney pour l’identité visuelle, et de Figma pour le maquettage. L’ensemble du processus a suivi une méthodologie agile, avec des itérations rapides et des tests en continu via Vercel utilisant sa fonctionnalité preview , garantissant une expérience fluide et parfaitement optimisée en PWA.",
    },
    projectProcessContent4: {
      EN: "Content creation was automated using a custom 40-step Make.com workflow that generated GPTs and their bilingual (English/French) SEO-optimized documentation. Finally, to ensure content quality and alignment with Google’s SEO best practices, I leveraged one of my own custom GPTs specialized in SEO to support the writing process.",
      FR: "La création de contenu a été entièrement automatisée grâce à un scénario personnalisé créé sur Make.com comportant 40 étapes, permettant de générer chaque GPT ainsi que leur documentation bilingue (anglais/français) optimisée pour le référencement. Pour assurer la qualité rédactionnelle et le respect des bonnes pratiques SEO de Google, j’ai également mobilisé l’un de mes propres GPTs spécialisés en SEO, garantissant une cohérence éditoriale à grande échelle.",
    },
    projectStackTitle: {
      EN: "Stack and Tooling",
      FR: "Stack & outils",
    },
    projectStackPoint1: {
      EN: "Front-End : React, Next.js, TypeScript, CSS, Sass",
      FR: "Front-End: React, Next.js, TypeScript, Sass",
    },
    projectStackPoint2: {
      EN: "Back-End : Node.js, Express, Prisma",
      FR: "Back-End : Node.js, Express, Prisma",
    },
    projectStackPoint3: {
      EN: "Database : PostgreSQL",
      FR: "Base de données : PostgreSQL",
    },
    projectStackPoint4: {
      EN: "AI : OpenAI API, ChatGPT, Midjourney",
      FR: "IA : OpenAI API, ChatGPT, Midjourney",
    },
    projectStackPoint5: {
      EN: "Search engine : Meilisearch",
      FR: "Moteur de recherche : Meilisearch",
    },
    projectStackPoint6: {
      EN: "Deployment : Vercel, PWA",
      FR: "Déploiement : Vercel, PWA",
    },
    projectStackPoint7: {
      EN: "Automatisation : Make.com",
      FR: "Automatisation : Make.com",
    },
    projectStackPoint8: {
      EN: "Versioning : Git, GitHub",
      FR: "Versionnage : Git, GitHub",
    },
    projectStackPoint9: {
      EN: "Design : Figma",
      FR: "Design : Figma",
    },
    projectStackContent: {
      EN: "I chose Next.js and Vercel for their free, community-backed deployment platform, which made it easy to launch quickly and reliably. As a junior developer, Make.com helped me automate key processes without deep backend knowledge, though I now code those flows myself. For design, I switched from component libraries like MantineUI (used in Family Flow) to Sass, which gave me full creative control over the UI. I integrated Meilisearch to deliver a fast, Google-like search experience at no cost. Finally, using OpenAI and TypeScript allowed me to build high-quality features while minimizing bugs and runtime errors.",
      FR: "J’ai opté pour Next.js et Vercel afin de bénéficier d’une plateforme de déploiement gratuite, fiable et soutenue par une forte communauté, idéale pour un lancement rapide et efficient. En tant que développeur junior à l’époque, Make.com m’a permis d’automatiser les processus clés sans expertise backend avancée. Il est important de noter ici que je code maintenant tous mes scripts d’automatisation. Côté design, j’ai délaissé les bibliothèques comme MantineUI (utilisée dans Family Flow) au profit de Sass, afin de gagner en contrôle et liberté créative quant à l’interface. Pour la recherche, Meilisearch m’a offert une solution rapide, performante et sans coût, comparable à l’expérience Google, exactement ce dont j’avais besoin. Enfin, l’intégration de TypeScript m’a permis de concevoir des fonctionnalités robustes, tout en limitant les bugs et les erreurs à l’exécution",
    },
    projectDesignTitle: {
      EN: "Design and UX Highlights",
      FR: "UX et points clés de conception",
    },
    projectDesignContent1: {
      EN: "Showcasing over 800 custom GPTs meant designing a user experience that made exploration easy and enjoyable. I organized the platform into 14 clear categories (like Frontend, AI, or Blockchain), added a powerful Meilisearch-based search bar, and built intuitive navigation with breadcrumb trails. Each GPT is presented as a clean, visual card, featuring logos, concise descriptions, and links to detailed documentation. ",
      FR: "Présenter plus de 800 GPTs personnalisés exigeait une expérience utilisateur claire, fluide et engageante. J’ai structuré la plateforme autour de 14 catégories explicites (Frontend, IA, Blockchain, etc.), enrichies d’un moteur de recherche ultra-performant basé sur Meilisearch, et d’une navigation intuitive renforcée par un système de fil d’Ariane. Chaque GPT est mis en valeur via une carte visuelle épurée, incluant un logo, une description concise et un lien vers une documentation dédiée.",
    },
    projectDesignContent2: {
      EN: "Drawing from my 15 years of experience as a restaurant manager, I treated the site like a well-run dining room: everything in its place, easy to find, and designed to keep people coming back.",
      FR: "Fort de mes 15 années d’expérience comme gestionnaire de restaurant, j’ai abordé ce projet comme l’organisation d’une salle à manger bien orchestrée : chaque élément à sa place, facilement accessible, et pensé pour donner envie aux visiteurs de revenir.",
    },
    projectDeploymentTitle: {
      EN: "Deployment & Scalability",
      FR: "Déploiement & Scalabilité",
    },
    projectDeploymentContent1: {
      EN: "The platform was deployed as a Progressive Web App (PWA) via Vercel, supported by a continuous integration and deployment (CI/CD) pipeline ensuring fast and reliable releases. Google Analytics was integrated to provide accurate usage tracking. Today, the platform has over 400 active users and exceeds 10,000 interactions with its GPTs. Its modular and scalable architecture allows new categories to be added seamlessly while sustaining traffic growth without compromising performance.",
      FR: "La plateforme a été déployée en tant que Progressive Web App (PWA) via Vercel, avec un pipeline d’intégration et de déploiement continu (CI/CD) garantissant des mises en production rapides et fiables. Google Analytics a été intégré pour assurer un suivi précis de l’usage. Aujourd’hui, la plateforme compte plus de 400 utilisateurs actifs et dépasse les 10 000 interactions avec les GPTs. Son architecture modulaire et évolutive permet d’ajouter de nouvelles catégories et d’absorber la croissance du trafic sans compromis sur la performance.",
    },
    projectRoadmapTitle: {
      EN: "Roadmap & Vision",
      FR: "Feuille de route & Vision",
    },
    projectRoadmapPoint1: {
      EN: "Phase 1 (2024): 250 GPTs, 12 collections, 1,000 users.",
      FR: "Phase 1 (2024) : 250 GPTs, 12 collections, 1 000 utilisateurs",
    },
    projectRoadmapPoint2: {
      EN: "Phase 2 (2025*: 800+ GPTs, 14 collections, 10,000 users, PWA, Ducky AI assistant.",
      FR: "Phase 2 (2025) : 800+ GPTs, 14 collections, 10 000 utilisateurs, PWA, assistant IA Ducky.",
    },
    projectRoadmapPoint3: {
      EN: "Phase 3 (2026): 1000+ GPTs, 16 collections, 100,000 users, chat interface.",
      FR: "Phase 3 (2026) : 1000+ GPTs, 16 collections, 100 000 utilisateurs, interface de chat.",
    },
    projectRoadmapPoint4: {
      EN: "Phase 4 (2027/2028): 1,000,000 users, communities. ",
      FR: "Phase 4 (2027/2028) : 1 000 000 utilisateurs, mise en place des communautés.",
    },
    projectRoadmapContent: {
      EN: "Some of the possible evolutions we envisioned included:",
      FR: "Cette vision à long terme a guidé le développement d’une architecture modulaire, pensée pour évoluer. La version 3 a toutefois été mise en pause en anticipation des bouleversements liés à l’IGA attendus d’ici 2026, me poussant à recentrer mes efforts vers de nouvelles opportunités à fort impact.",
    },
    projectResultsTitle: {
      EN: "Outcomes",
      FR: "Résultats",
    },
    projectResultsContent1: {
      EN: "Version 2 of the platform launched with an initial core of 400 to 500 active users, generating over 10,000 interactions with the GPTs. Feedback was overwhelmingly positive, highlighting the clarity of the interface and the relevance of the tools provided. This project allowed me to strengthen key skills such as software modularity, large-scale automation (notably through Chain of Thought-style reasoning chains), and the design of scalable architectures, all of which now position me to take on higher-impact, large-scale projects.",
      FR: "La version 2 de la plateforme a été lancée avec un premier noyau de 400 à 500 utilisateurs actifs, générant plus de 10 000 interactions avec les GPTs. Les retours ont été largement positifs, soulignant la clarté de l’interface et la pertinence des outils proposés. Ce projet m’a permis de consolider des compétences clés comme la modularité logicielle, l’automatisation à grande échelle (notamment via des chaînes de raisonnement type Chain of Thoughts) et la conception d’architectures scalables, autant d’acquis qui me préparent aujourd’hui à des projets d’envergure supérieure.",
    },
    projectConclusionTitle: {
      EN: "What I Took Away",
      FR: "Ce que j'en ai retiré",
    },
    projectConclusionContent1: {
      EN: "This project solidified my capabilities not just as a developer, but as a full-stack product builder with a deep understanding of AI integration.",
      FR: "Ce projet a solidement renforcé mes compétences, non seulement en tant que développeur, mais aussi en tant que responsable de produit full-stack, avec une expertise approfondie dans l’intégration de l’intelligence artificielle.",
    },
    projectConclusionContent2: {
      EN: "I learned how to independently scale a complex product from concept to production, designing, developing, and deploying every layer myself. From the initial database schema to the frontend search experience, I took full ownership of the architecture and roadmap.",
      FR: "J’ai appris à faire évoluer un produit complexe de bout en bout, de l’idée initiale à la mise en production, en prenant en charge chaque couche de l’architecture : de la structure de base de données jusqu’à l’expérience de recherche côté front. J’ai assumé seul la conception, le développement et le déploiement, en pilotant également la feuille de route produit.",
    },
    projectConclusionContent3: {
      EN: "Through this process, I mastered large-scale prompt engineering. I developed robust systems for structuring GPTs with consistent logic, leveraging advanced chaining techniques to maintain modularity and ensure each GPT remained functional, relevant, and easy to adopt.",
      FR: "Au fil du projet, j’ai perfectionné mon ingénierie de prompts à grande échelle. J’ai conçu des systèmes robustes de structuration logique des GPTs, combinés à des techniques de chaînage avancées, garantissant modularité, cohérence, maintenabilité et adoption rapide.",
    },
    projectConclusionContent4: {
      EN: "Shipping with coherence became a guiding principle. I aligned design, UX, performance, and backend strategy around a unified vision, ensuring that every layer of the platform worked harmoniously together.",
      FR: "Développer des produits cohérent est devenu un principe central dans ma pratique : chaque décision, de l’UX au backend, a été alignée autour d’une vision unifiée, assurant que l’ensemble de la plateforme fonctionne de façon fluide, stable et efficace.",
    },
    projectConclusionContent5: {
      EN: "I also gained hands-on experience with no-code automation through Make.com, and later on using code, building scalable content workflows that allowed me to maintain and grow a database of over 800 GPTs efficiently. Automation wasn't just a productivity tool, it was a key enabler of platform sustainability.",
      FR: "J’ai aussi développé une réelle maîtrise de l’automatisation des processus, d’abord sans code via Make.com, puis avec du code, en mettant en place des workflows scalables capables de générer, maintenir et enrichir une base de plus de 800 GPTs. L’automatisation n’a pas seulement renforcé ma productivité : elle a été le socle de la viabilité et de la scalabilité de la plateforme.",
    },
    projectConclusionContent6: {
      EN: "Beyond development, I built expertise in multilingual SEO. I structured content and meta strategies specifically around how developers search for GPT tools across different languages and intents, ensuring discoverability and relevance at scale.",
      FR: "Sur le plan du référencement, j’ai acquis une expertise concrète en SEO multilingue. J’ai structuré mon contenu et mes métadonnées en fonction des intentions de recherche spécifiques des développeurs à l’international, garantissant visibilité, pertinence et portée organique.",
    },
    projectConclusionContent7: {
      EN: "Perhaps most importantly, I gained a deeper understanding of how developers actually search for, evaluate, and use AI tools within their daily workflows. That insight shaped every product decision and continues to inform how I build developer-first platforms.",
      FR: "Mais surtout, j’ai développé une compréhension fine de la façon dont les développeurs découvrent, évaluent et utilisent les outils d’IA dans leur quotidien. Cette compréhension a nourri chaque choix produit et continue d’orienter ma manière de concevoir des outils réellement utiles, pensés pour eux.",
    },
    projectConclusionContent8: {
      EN: "Ultimately, Wise Duck Dev GPTs taught me how to transform personal productivity needs into a globally useful solution. It reflects what I love most: building innovative, AI-powered tools that push the boundaries of what's possible for the next generation of developers.",
      FR: "En définitive, Wise Duck Dev GPTs m’a appris à transformer un besoin personnel en une solution concrète, utile à l’échelle mondiale. Ce projet incarne parfaitement ce qui me passionne le plus : créer des outils innovants, alimentés par l’IA, qui repoussent les limites du possible pour toute une génération de développeurs.",
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
      EN: "Wise Duck Dev GPTs - Developer-focused Custom GPT Ecosystem",
      FR: "Wise Duck Dev GPTs - Écosystème de GPTs personnalisés axé sur les développeurs",
    },
    metaDescription: {
      EN: "Discover Wise Duck Dev GPTs, a developer-focused ecosystem designed to simplify the creation and management of custom GPTs. Co-developed as part of an intensive Web & Mobile Development program.",
      FR: "Découvrez Wise Duck Dev GPTs, un écosystème axé sur les développeurs conçu pour simplifier la création et la gestion de GPTs personnalisés. Co-développé dans le cadre d'un programme intensif de développement Web & Mobile.",
    },
    twitterImageAltDescription: {
      EN: "Wise Duck Dev GPTs - White Anthropomorphic Duck wearing a suit with a V2 logo on its chest, standing in front of a dark violet background",
      FR: "Wise Duck Dev GPTs - Canard anthropomorphe blanc en costume avec un logo V2 sur la poitrine, se tenant devant un fond violet foncé",
    },
    mainPictureAltDescription: {
      EN: "The Wise Duck Dev GPTs Project main screenshot showing the opening page of the website",
      FR: "Capture d'écran principale du projet The Wise Duck Dev GPTs montrant la page d'accueil du site web",
    },
    collectionsPagePictureAltDescription: {
      EN: "The Wise Duck Dev GPTs Project screenshot showing the collections page of the website",
      FR: "Capture d'écran du projet The Wise Duck Dev GPTs montrant la page des collections du site web",
    },
    reactAssistantProfilePagePictureAltDescription: {
      EN: "The Wise Duck Dev GPTs Project screenshot showing the React Assistant custom GPT profile page of the website",
      FR: "Capture d'écran du projet The Wise Duck Dev GPTs montrant la page de profil du GPT personnalisé React Assistant du site web",
    },
    og_locale: {
      EN: "en_US",
      FR: "fr_FR",
    },
  };

  const primaryImage =
    activeLanguage === "EN"
      ? `https://www.wiseduckdevgpts.com/images/index/the_wise_duck_dev_gpts_application_version2_main_picture_landscape_EN_Facebook.webp`
      : `https://www.wiseduckdevgpts.com/images/index/the_wise_duck_dev_gpts_application_version2_main_picture_landscape_FR_Facebook.webp`;

  const twitterImage =
    activeLanguage === "EN"
      ? `https://www.wiseduckdevgpts.com/images/index/the_wise_duck_dev_gpts_application_version2_main_picture_landscape_EN_Twitter.webp`
      : `https://www.wiseduckdevgpts.com/images/index/the_wise_duck_dev_gpts_application_version2_main_picture_landscape_FR_Twitter.webp`;

  const orgUrl = `https://${siteUrl}`;
  const wiseDuckDevGPTsUrl = `https://www.wiseduckdevgpts.com`;

  const wddProjectUrl =
    activeLanguage === "EN"
      ? `https://${siteUrl}/wise-duck-dev-gpts-project`
      : `https://${siteUrl}/fr/wise-duck-dev-gpts-project`;

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
        "@id": `${wddProjectUrl}#webpage`,
        url: wddProjectUrl,
        name: translations.metaTitle[activeLanguage],
        description: translations.metaDescription[activeLanguage],
        isPartOf: { "@id": `${orgUrl}#website` },
        inLanguage: pageLanguage,
        primaryImageOfPage: { "@type": "ImageObject", url: primaryImage },
        image: [primaryImage, twitterImage],
        breadcrumb: { "@id": `${wddProjectUrl}#breadcrumb` },
        about: { "@id": `${wiseDuckDevGPTsUrl}#website` },
        publisher: { "@id": `${orgUrl}#organization` },
        isAccessibleForFree: true,
        mainEntityOfPage: `${wddProjectUrl}#webpage`,
      },
      {
        // External platform modeled as a WebSite (catalog/listing of GPTs)
        "@type": "WebSite",
        "@id": `${wiseDuckDevGPTsUrl}#website`, // <-- fixed fragment
        url: wiseDuckDevGPTsUrl,
        name: "Wise Duck Dev GPTs",
        inLanguage: ["en-US", "fr-FR"],
        description:
          activeLanguage === "EN"
            ? "A website cataloging 800+ custom GPTs for web, mobile, AI, blockchain, and game developers—boosting productivity, code quality, and exploration."
            : "Un site web référençant plus de 800 GPTs personnalisés pour les développeurs web, mobile, IA, blockchain et jeu vidéo — améliorant productivité, qualité du code et exploration.",
        publisher: { "@id": `${orgUrl}#organization` },
        image: primaryImage,
        thumbnailUrl: twitterImage,
        audience: {
          "@type": "Audience",
          audienceType: [
            "Web developers",
            "Mobile developers",
            "AI/ML engineers",
            "Blockchain developers",
            "Game developers",
          ],
        },
        keywords: [
          "Next.js",
          "React",
          "TypeScript",
          "Sass",
          "PostgreSQL",
          "Prisma",
          "Meilisearch",
          "OpenAI",
          "OpenAI API",
          "Midjourney",
          "Make.com",
          "Vercel",
          "PWA",
          "Prompt Engineering",
          "AI for Developers",
          "Custom GPTs",
          "Multilingual SEO",
          "Automation",
          "Full-Stack Development",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${wddProjectUrl}#breadcrumb`,
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
                ? "Wise Duck Dev GPTs Project"
                : "Projet Wise Duck Dev GPTs",
            item: wddProjectUrl,
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
          href={`https://${siteUrl}/wise-duck-dev-gpts-project`}
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
          property="og:imgage"
          content={
            activeLanguage === "EN"
              ? `https://www.wiseduckdevgpts.com/images/index/the_wise_duck_dev_gpts_application_version2_main_picture_landscape_EN_Facebook.webp`
              : `https://www.wiseduckdevgpts.com/images/index/the_wise_duck_dev_gpts_application_version2_main_picture_landscape_FR_Facebook.webp`
          }
        />
        <meta
          property="og:url"
          content={
            activeLanguage === "FR"
              ? `https://${siteUrl}/fr/wise-duck-dev-gpts-project`
              : `https://${siteUrl}/wise-duck-dev-gpts-project`
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
          content={
            activeLanguage === "EN"
              ? `https://www.wiseduckdevgpts.com/images/index/the_wise_duck_dev_gpts_application_version2_main_picture_landscape_EN_Twitter.webp`
              : `https://www.wiseduckdevgpts.com/images/index/the_wise_duck_dev_gpts_application_version2_main_picture_landscape_FR_Twitter.webp`
          }
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
              href={`https://${siteUrl}/wise-duck-dev-gpts-project`}
            />
            <link
              rel="alternate"
              hrefLang="fr"
              href={`https://${siteUrl}/fr/wise-duck-dev-gpts-project`}
            />
          </>
        )}
        <link
          rel="canonical"
          href={
            activeLanguage === "EN"
              ? `https://${siteUrl}/wise-duck-dev-gpts-project`
              : `https://${siteUrl}/fr/wise-duck-dev-gpts-project`
          }
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <div className={classes.mainContainer}>
        <WrappedWiseDuckDevGPTs />
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
              {translations.pageIntroduction[activeLanguage]}
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
            <p className={classes.textParagraph}>
              {translations.projectCreativityContent4[activeLanguage]}
            </p>
          </div>
          <div className={classes.imagesContainer}>
            <img
              src={collectionsPagePicture.src}
              alt={
                translations.collectionsPagePictureAltDescription[
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
            <p className={classes.textParagraph}>
              {translations.projectProcessContent2[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectProcessContent3[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectProcessContent4[activeLanguage]}
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
              <li className={classes.textListItem}>
                {translations.projectStackPoint8[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectStackPoint9[activeLanguage]}
              </li>
            </ul>
            <p className={classes.textParagraph}>
              {translations.projectStackContent[activeLanguage]}
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
          </div>
          <div className={classes.imagesContainer}>
            <img
              src={reactAssistantProfilePage.src}
              alt={
                translations.reactAssistantProfilePagePictureAltDescription[
                  activeLanguage
                ]
              }
              className={classes.imagesBordered}
            />
          </div>
          {/* Deployment Section */}
          <h2 className={classes.subtitle}>
            {translations.projectDeploymentTitle[activeLanguage]}
          </h2>
          <div className={classes.textContainer}>
            <p className={classes.textParagraph}>
              {translations.projectDeploymentContent1[activeLanguage]}
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
            </ul>
            <p className={classes.textParagraph}>
              {translations.projectRoadmapContent[activeLanguage]}
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
            <p className={classes.textParagraph}>
              {translations.projectConclusionContent6[activeLanguage]}
            </p>
          </div>
          <div className={classes.buttonsContainer}>
            <Link href="/#portfolio" className={classes.buttonReverted}>
              {translations.buttonBack[activeLanguage]}
            </Link>
            <Link href="/jean-the-writer-project" className={classes.button}>
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
