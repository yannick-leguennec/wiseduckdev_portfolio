import { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useLoader } from "../../context/LoaderContext";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import classes from "../../styles/family_flow_project.module.scss";

export default function FamilyFlowProject() {
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
      EN: "Family Flow",
      FR: "Family Flow",
    },
    pageSubtitle: {
      EN: "React-based task manager for modern families",
      FR: "Gestionnaire de tâches familial conçu avec React",
    },
    pageIntroduction: {
      EN: "In early 2024, I co-developed Family Flow, a web app designed to simplify task sharing and planning in households. The project began as a collaborative effort between two developers (including myself) and evolved into a fully functional productivity tool combining thoughtful UX and technical execution.",
      FR: "Au début de l'année 2024, j'ai co-développé Family Flow, une application web conçue pour simplifier le partage des tâches et la planification au sein des foyers. Développé dans le cadre de notre projet de fin d'études à l'école O'clock (1 500+ heures de formation intensive en développement Web et Mobile), ce projet est né d'une collaboration entre deux développeurs, et s'est concrétisé en un outil de productivité fonctionnel combinant UX réfléchie et exécution technique solide.",
    },
    projectOverviewTitle: {
      EN: "Project Overview",
      FR: "Aperçu du projet",
    },
    projectOverviewContent: {
      EN: "Family Flow is a collaborative web application designed to help families streamline task management and household organization. Built in collaboration with another developer, this tool aims to reduce mental overload and improve everyday communication between family members. The project was delivered as part of our final exam for O’clock’s intensive Web & Mobile Development program (1,500+ hours), with a public demo and live deployment.",
      FR: "L’idée était simple : créer une application web pour aider les familles à coordonner leurs tâches journalières, sans complexité ni surcharge. Nous avons ciblé un MVP capable de répondre à des cas d’usage concrets, avec une interface légère et adaptable à différents styles de vie.",
    },
    projectMyRoleTitle: {
      EN: "My Role",
      FR: "Mon rôle",
    },
    projectMyRoleContent1: {
      EN: "I was deeply involved across multiple domains:",
      FR: "J’ai joué un rôle clé sur plusieurs aspects :",
    },
    projectMyRoleContentPoint1: {
      EN: "Product strategy : defined features, roadmap, and target personas",
      FR: "Stratégie produit : définition des fonctionnalités, roadmap et personas cibles",
    },
    projectMyRoleContentPoint2: {
      EN: "Scrum Master : led sprint planning and async communication",
      FR: "Scrum Master : gestion des sprints et de la communication asynchrone",
    },
    projectMyRoleContentPoint3: {
      EN: "Lead Front-End Developer : owned component architecture, UI state logic, and styling",
      FR: "Lead Front-End — conception de l’architecture des composants, logique des états, et stylisation, UI/UX",
    },
    projectMyRoleContent2: {
      EN: "This dual focus on technical depth and product thinking allowed me to make impactful decisions from both perspectives.",
      FR: "Ce double regard sur le produit et la technique m’a permis de prendre des décisions impactantes à tous les niveaux du projet.",
    },
    projectCreativityTitle: {
      EN: "Creativity & Inspiration",
      FR: "Créativité & inspiration",
    },
    projectCreativityContent1: {
      EN: "The idea for Family Flow didn’t come from a client brief, it came from my own life.",
      FR: "L'idée de Family Flow ne vient pas d'un client, mais de mon expérience personnelle. ",
    },
    projectCreativityContent2: {
      EN: "I became a father just before starting my developer training. What struck me in those early months wasn’t just the sleepless nights, it was how quickly communication breaks down when a family is overwhelmed. Tasks pile up, everyone does their best, but things fall through the cracks. Misunderstandings grow. Frustration builds.",
      FR: "Je suis devenu papa juste avant de commencer ma formation de développeur Full-Stack. Ce qui m’a frappé durant ces premiers mois, ce n'était pas seulement le manque de sommeil, mais la rapidité avec laquelle la communication peut se dégrader au sein d’une famille débordée. Les tâches s’accumulent, chacun fait de son mieux, mais parfois des choses passent entre les mailles du filet. Les malentendus se multiplient. La frustration grandit.",
    },
    projectCreativityContent3: {
      EN: "I realized: in today’s hyper-connected world, families lack a simple, shared space to align on what needs to be done, without friction or micromanagement. That’s where the idea for Family Flow came from: A calm, structured environment where each family member can view, assign, and manage tasks together, reducing cognitive load, minimizing conflict, and creating room for what matters most.",
      FR: "J’ai réalisé qu’à l’ère de l’hyperconnexion et de l’hyperproductivité imposée par nos modes de vie modernes, les familles manquent cruellement d’un espace simple pour organiser leurs quotidiens, communiquer sur ce qu’il y a à faire, sans friction ni microgestion. C’est de là qu’est née l’idée de Family Flow : une application web accessible et facile à prendre en main où chaque membre de la famille peut consulter, attribuer et gérer les tâches de la famille ensemble, réduisant ainsi la charge cognitive, minimisant les conflits et créant plus d’espace pour ce qui compte vraiment.",
    },
    projectCreativityContent4: {
      EN: "This project reflects my belief that creativity starts with observation. By identifying a problem in my daily life, I transformed it into a real solution, something many families could benefit from.",
      FR: "Ce projet reflète ma conviction que la créativité commence tout d’abord par une observation. En identifiant ce problème dans mon quotidien, me vint alors l’idée de créer une solution concrète visant à répondre à ce besoin, une solution qui s’avérer utile pour de nombreuses familles.",
    },
    projectStackTitle: {
      EN: "Stack and Tooling",
      FR: "Stack & outils",
    },
    projectStackPoint1: {
      EN: "Front-End: React, TypeScript, Mantine UI",
      FR: "Front-End: React, TypeScript, Mantine UI",
    },
    projectStackPoint2: {
      EN: "Testing: Vitest",
      FR: "Tests : Vitest",
    },
    projectStackPoint3: {
      EN: "Deployment: Railway",
      FR: "Déploiement : Railway",
    },
    projectStackPoint4: {
      EN: "Design & Prototyping: Excalidraw",
      FR: "Design & prototypage : Excalidraw",
    },
    projectStackPoint5: {
      EN: "Versioning: Git, GitHub",
      FR: "Versioning : Git, GitHub",
    },
    projectStackContent: {
      EN: "We used Mantine UI to accelerate development with polished, accessible components and dark-mode support. Vitest was integrated early for test coverage on core logic.",
      FR: "Nous avons utilisé Mantine UI pour accélérer le développement avec des composants accessibles, élégants et compatibles avec notre vision du projet. L’intégration de Vitest nous a permis d'assurer une bonne couverture des tests dès les premières étapes.",
    },
    projectDesignTitle: {
      EN: "Design and Implementation Highlights",
      FR: "UX et points clés de conception",
    },
    projectDesignContent1: {
      EN: "One of our main challenges was to make the interface intuitive and suitable for all family members, from tech-savvy parents to children and teenagers. To achieve this, we focused on accessibility, quick onboarding, a minimalist and efficient design, and of course, the user experience, directly inspired by the observation of the relevant family dynamics.",
      FR: "L’un de nos principaux défis était de rendre l’interface intuitive et adaptée à tous les membres de la famille, des parents à l’aise avec la technologie aux enfants et adolescents. Pour y parvenir, nous avons misé sur l’accessibilité, la prise en main rapide, un design minimaliste et efficient, et bien entendu l’expérience utilisateur, directement inspirées par l’observation des dynamiques familiales concernées.",
    },
    projectDesignContent2: {
      EN: "From our initial observations, we identified two dominant types of family activities: chores and events. To reflect this distinction, we designed a system of color-coded icons,  for example, yellow for events and red for chores,  allowing users to immediately grasp the nature of each task at a glance.",
      FR: "Dès nos premières observations, nous avons identifié deux grands types d’activités familiales : les corvées et les événements. Pour refléter cette distinction, nous avons conçu un système d’icônes colorées : par exemple, jaune pour les événements et rouge pour les corvées, permettant aux utilisateurs de saisir immédiatement la nature de chaque tâche d’un seul coup d’œil.",
    },
    projectDesignContent3: {
      EN: "We also implemented chronological sorting by default, ensuring that the most urgent or timely activities were always surfaced first. This decision was essential to maintain relevance, especially in busy households juggling multiple responsibilities.",
      FR: "Nous avons également implémenté un tri chronologique par défaut, garantissant que les activités les plus urgentes ou proches dans le temps apparaissent toujours en premier. Cette décision était essentielle pour rester pertinent, surtout dans des foyers gérant de multiples responsabilités.",
    },
    projectDesignContent4: {
      EN: "To improve personalization and clarity, we introduced smart filters. Each user could choose to view only the activities they were involved in, while those who opted to see the full family agenda could still easily identify their own tasks, thanks to subtle visual cues like green or red dots on activity cards indicating their involvement.",
      FR: "Pour améliorer la personnalisation et la clarté, nous avons introduit des filtres intelligents. Chaque utilisateur pouvait choisir de n’afficher que les activités qui le concernaient, tandis que ceux préférant consulter l’agenda familial complet pouvaient toujours repérer facilement leurs propres tâches grâce à de subtils indicateurs visuels (points verts ou rouges sur les cartes d’activité).",
    },
    projectDesignContent5: {
      EN: "UI design and flow were prototyped using Excalidraw and refined collaboratively with my teammate. We maintained a mobile-first responsive layout, optimized for both phones and tablets, a critical feature for families on the go.",
      FR: "Le design et le flow UI ont été prototypés avec Excalidraw et raffinés en collaboration avec mon coéquipier. Nous avons maintenu une approche mobile-first réactive, optimisée pour téléphones et tablettes, une fonctionnalité clé pour les familles en déplacement.",
    },
    projectDesignContent6: {
      EN: "We completed the MVP in just five weeks, balancing scope and usability. While there’s still room for future features and refinements, the core foundation is robust, and the concept remains highly adaptable for real-world use.",
      FR: "Nous avons finalisé le MVP en seulement cinq semaines, en équilibrant portée fonctionnelle et utilisabilité. Bien que ce projet présente de nombreuses améliorations possibles (il y a toujours place à amélioration), la fondation de celui-ci reste néanmoins très solide et le concept hautement adaptable à une utilisation réelle.",
    },
    projectDeploymentTitle: {
      EN: "Deployment & QA",
      FR: "Déploiement & QA",
    },
    projectDeploymentContent1: {
      EN: "We deployed Family Flow via Railway, leveraging a CI/CD pipeline for fast and reliable releases. Throughout the development cycle, we applied agile practices: daily syncs, feature-based branching with Git, and weekly retrospectives. We also implemented tests with Vitest to ensure the platform’s proper functionality, while simultaneously running manual tests on different devices such as tablets and smartphones to guarantee smooth performance across mediums.",
      FR: "Nous avons déployé Family Flow via Railway, en exploitant un pipeline CI/CD pour des mises en ligne rapides et fiables. Tout au long du cycle de développement, nous avons appliqué les pratiques agiles : synchronisations quotidiennes, branches par fonctionnalité avec Git, et rétrospectives hebdomadaires. Nous avons également mis en place des tests avec Vitest afin d’assurer la bonne fonctionnalité de la plateforme, tout veillant bien à effectuer en parallèle des tests directs sur différents médiums tels que sur tablette ou téléphone intelligent afin de s’assurer du bon fonctionnement de l’application.",
    },
    projectDeploymentContent2: {
      EN: "From the start, it was important for us to establish an architecture that could support future iterations and evolutions. Our vision went far beyond the MVP: we designed Family Flow with the ambitious goal that one day, this project could potentially become the social network for families.",
      FR: "Dès le départ, il nous est apparu important d’établir dès le départ une architecture qui pourrait supporter de futurs itérations et évolutions. Notre vision allait bien au-delà du MVP : nous avons conçu Family Flow avec la vision ambitieuse que ce projet pourrait potentiellement un jour devenir le réseau social pour les familles.",
    },
    projectDeploymentContent3: {
      EN: "Some of the possible evolutions we envisioned included:",
      FR: "Parmi les possibles évolutions envisagées il y avait :",
    },
    projectDeploymentPoint1: {
      EN: "Expanding activity categories for finer filtering",
      FR: "Extension des catégories d’activités pour un meilleur filtrage",
    },
    projectDeploymentPoint2: {
      EN: "A family newsfeed to share updates and important moments",
      FR: "Flux d’actualités familial pour partager mises à jour et moments importants",
    },
    projectDeploymentPoint3: {
      EN: "Transforming the project into a PWA",
      FR: "Transformer le projet en PWA",
    },
    projectDeploymentPoint4: {
      EN: "A built-in chat feature to further enhance communication",
      FR: "Intégration d’une fonctionnalité chat permettant d’améliorer encore la communication",
    },
    projectDeploymentPoint5: {
      EN: "And eventually, integration of an AI assistant or chatbot to support users in real time",
      FR: "Et à terme, intégration d’un assistant ou chatbot IA pour accompagner les utilisateurs en temps réel",
    },
    projectResultsTitle: {
      EN: "Outcomes",
      FR: "Résultats",
    },
    projectResultsContent1: {
      EN: "The MVP was shipped in under five weeks and tested by several families in real conditions. Feedback consistently highlighted its ease of use and calming UI. We opted to pause the roadmap as each of us transitioned to new major projects, but the foundations for future growth remain strong.",
      FR: "Le MVP a été livré en moins de cinq semaines, et testé dans des conditions réelles par plusieurs familles. Le retour était unanime : une interface agréable, simple, et facile à prendre en main. Nous avons choisi de suspendre la roadmap pour nous concentrer sur de nouveaux projets, mais les bases sont solides pour un futur développement.",
    },
    projectConclusionTitle: {
      EN: "What I Took Away",
      FR: "Ce que j'en ai retiré",
    },
    projectConclusionContent1: {
      EN: "This project was my first true end-to-end development experience. More than just code, it taught me how to build a coherent product with a clear purpose from the ground up.",
      FR: "Ce projet a été ma première véritable expérience de développement de bout en bout. Plus que du code, il m’a appris à construire un produit cohérent et orienté vers un objectif clair, depuis zéro.",
    },
    projectConclusionContent2: {
      EN: "I learned how to turn an idea into a structured project by starting with the fundamentals: understanding the problem, identifying the target users, analyzing their real needs, and defining clear personas. From this foundation, we built a product vision focused on usefulness, simplicity, and efficiency.",
      FR: "J’ai appris à traduire une idée en projet structuré en partant des fondamentaux : comprendre le problème, identifier les utilisateurs cibles, analyser leurs besoins réels et définir des personas clairs. À partir de cette base, nous avons construit une vision produit centrée sur l’utilité, la simplicité et l'efficacité.",
    },
    projectConclusionContent3: {
      EN: "I gained a solid understanding of product strategy: how to define a lean but impactful MVP, write clear and actionable user stories, and design intuitive UI/UX flows tailored to families. Every technical and design decision was made to support a consistent and engaging user experience.",
      FR: "J’ai acquis une solide compréhension de la stratégie produit : définir un MVP lean mais impactant, rédiger des user stories claires et utilisables, concevoir des parcours UI/UX intuitifs adaptés aux familles. Chaque décision technique ou de design visait à servir une expérience utilisateur cohérente et engageante.",
    },
    projectConclusionContent4: {
      EN: "On the technical side, I strengthened my skills in designing robust software architectures and developing responsive designs. I also advanced in cybersecurity, agile methodologies, collaboration with Git/GitHub, and remote teamwork. I learned to manage project versioning effectively, quickly identify and fix bugs, deploy a product online, and improve it continuously based on user feedback, all within tight deadlines.",
      FR: "Sur le plan technique, j’ai consolidé mes compétences en conception d’architectures logicielles robustes et en développement de designs responsive. J’ai également progressé en cybersécurité, dans l’utilisation des méthodes agiles, la collaboration via Git/GitHub et le travail en équipe à distance. J’ai appris à gérer efficacement le versioning d’un projet, à identifier et corriger rapidement des bugs, à déployer un produit en ligne et à l’améliorer en continu grâce aux retours des utilisateurs, même dans des délais serrés.",
    },
    projectConclusionContent5: {
      EN: "Equally important, I experienced the reality of product delivery: balancing vision and constraints, making trade-offs, while delivering a fully functional and reliable solution on time.",
      FR: "Tout aussi important, j’ai goûté à la réalité de la livraison produit : équilibrer vision et contraintes, faire des compromis tout en assurant la livraison d’une solution parfaitement fonctionnelle et fiable dans les temps.",
    },
    projectConclusionContent6: {
      EN: "Finally, my background in Entrepreneurship and Business Creation at HEC Montréal was instrumental in shaping this project. It gave me the invaluable opportunity to think not only as a developer but also as a product manager, someone who imagines, designs, and delivers useful solutions that are perfectly aligned with the target market, and for that I am deeply grateful.",
      FR: "Enfin, mon parcours en Entrepreneuriat et Création d’Entreprise à HEC Montréal a été déterminant dans l’orientation de ce projet. Il m’a donné l’incroyable opportunité de penser non seulement comme un développeur, mais également comme un gestionnaire de produit : quelqu’un qui imagine, conçoit et livre des solutions utiles et parfaitement cohérentes avec le marché visé, et pour cela je suis profondément reconnaissant.",
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
      EN: "Family Flow - React-based task manager for modern families",
      FR: "Family Flow - Gestionnaire de tâches familial conçu avec React",
    },
    metaDescription: {
      EN: "Discover Family Flow, a React-based web app designed to simplify task sharing and planning in households. Co-developed as part of an intensive Web & Mobile Development program.",
      FR: "Découvrez Family Flow, une application web conçue avec React pour simplifier le partage des tâches et la planification au sein des foyers. Co-développée dans le cadre d'un programme intensif de développement Web & Mobile.",
    },
    twitterImageAltDescription: {
      EN: "Family Flow - Logo of the project on a blue background",
      FR: "Family Flow - Logo du projet sur fond bleu",
    },
    og_locale: {
      EN: "en-US",
      FR: "fr-FR",
    },
  };

  // --- helpers ---
  const primaryImage = `https://${siteUrl}/images/projectsPictures/family_flow/family_flow_og_image.png`;
  const twitterImage = `https://${siteUrl}/images/projectsPictures/family_flow/family_flow_twitter_image.png`;

  const familyFlowUrl = "https://familyflow.up.railway.app/";

  const familyFlowProjectUrl =
    activeLanguage === "EN"
      ? `https://${siteUrl}/family-flow-project`
      : `https://${siteUrl}/fr/family-flow-project`;

  const orgUrl = `https://${siteUrl}`;

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
          url: `${orgUrl}/images/logo/android-chrome-512x512.png`,
        },
        sameAs: ["https://x.com/wiseduckdev"],
      },
      {
        "@type": "WebPage",
        "@id": `${familyFlowProjectUrl}#webpage`,
        url: familyFlowProjectUrl,
        name: translations.metaTitle[activeLanguage], // localized
        description: translations.metaDescription[activeLanguage], // localized
        isPartOf: { "@id": `${orgUrl}#website` },
        inLanguage: pageLanguage, // single locale for this page
        primaryImageOfPage: { "@type": "ImageObject", url: primaryImage },
        image: [primaryImage, twitterImage],
        breadcrumb: { "@id": `${familyFlowProjectUrl}#breadcrumb` },
        about: { "@id": `${familyFlowUrl}#software` }, // this page is about the live app
        publisher: { "@id": `${orgUrl}#organization` },
        isAccessibleForFree: true,
        mainEntityOfPage: `${familyFlowProjectUrl}#webpage`,
      },
      {
        // The live app being showcased
        "@type": "WebApplication",
        "@id": `${familyFlowUrl}#software`,
        name: "Family Flow",
        url: familyFlowUrl,
        applicationCategory: "ProductivityApplication",
        operatingSystem: "Web",
        inLanguage: ["fr-FR"], // list actual supported languages
        description:
          activeLanguage === "EN"
            ? "A React-based web app for families to streamline task management and household organization. Built as an MVP with a focus on accessibility, clarity, and real-life usability."
            : "Application web conçue avec React pour aider les familles à organiser et partager les tâches du quotidien. MVP axé sur l’accessibilité, la clarté et l’usage réel.",
        creator: { "@id": `${orgUrl}#organization` },
        publisher: { "@id": `${orgUrl}#organization` },
        image: primaryImage,
        thumbnailUrl: twitterImage,
        audience: {
          "@type": "Audience",
          audienceType: ["Families", "Parents", "Households"],
        },
        browserRequirements:
          "Requires a modern web browser with JavaScript enabled",
        isAccessibleForFree: true,
        keywords: [
          "Task management",
          "Household organization",
          "Family productivity",
          "React",
          "TypeScript",
          "CSS",
          "Mantine UI",
          "SQL",
          "PostgreSQL",
          "Vitest",
          "Railway",
          "Excalidraw",
          "Responsive design",
          "MVP",
          "Agile",
          "CI/CD",
          "Git",
          "GitHub",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${familyFlowProjectUrl}#breadcrumb`,
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
                ? "Family Flow Project"
                : "Projet Family Flow",
            item: familyFlowProjectUrl,
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
          hrefLang="en"
          href={`https://${siteUrl}/family-flow-project`}
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
          content={`https://${siteUrl}/images/projectsPictures/family_flow/family_flow_og_image.png`}
        />
        <meta
          property="og:url"
          content={
            activeLanguage === "FR"
              ? `https://${siteUrl}/fr/family-flow-project`
              : `https://${siteUrl}/family-flow-project`
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
          content={`https://${siteUrl}/images/projectsPictures/family_flow/family_flow_twitter_image.png`}
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
              href={`https://${siteUrl}/family-flow-project`}
            />
            <link
              rel="alternate"
              hrefLang="fr"
              href={`https://${siteUrl}/fr/family-flow-project`}
            />
          </>
        )}
        <link
          rel="canonical"
          href={
            activeLanguage === "EN"
              ? `https://${siteUrl}/family-flow-project`
              : `https://${siteUrl}/fr/family-flow-project`
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
        <h2>{translations.pageSubtitle[activeLanguage]}</h2>
        <p>{translations.pageIntroduction[activeLanguage]}</p>
        <h2>{translations.projectOverviewTitle[activeLanguage]}</h2>
        <p>{translations.projectOverviewContent[activeLanguage]}</p>
        <h2>{translations.projectMyRoleTitle[activeLanguage]}</h2>
        <p>{translations.projectMyRoleContent1[activeLanguage]}</p>
        <ul>
          <li>{translations.projectMyRoleContentPoint1[activeLanguage]}</li>
          <li>{translations.projectMyRoleContentPoint2[activeLanguage]}</li>
          <li>{translations.projectMyRoleContentPoint3[activeLanguage]}</li>
        </ul>
        <p>{translations.projectMyRoleContent2[activeLanguage]}</p>
        <h2>{translations.projectCreativityTitle[activeLanguage]}</h2>
        <p>{translations.projectCreativityContent1[activeLanguage]}</p>
        <p>{translations.projectCreativityContent2[activeLanguage]}</p>
        <p>{translations.projectCreativityContent3[activeLanguage]}</p>
        <p>{translations.projectCreativityContent4[activeLanguage]}</p>
        <h2>{translations.projectStackTitle[activeLanguage]}</h2>
        <ul>
          <li>{translations.projectStackPoint1[activeLanguage]}</li>
          <li>{translations.projectStackPoint2[activeLanguage]}</li>
          <li>{translations.projectStackPoint3[activeLanguage]}</li>
          <li>{translations.projectStackPoint4[activeLanguage]}</li>
          <li>{translations.projectStackPoint5[activeLanguage]}</li>
        </ul>
        <p>{translations.projectStackContent[activeLanguage]}</p>
        <h2>{translations.projectDesignTitle[activeLanguage]}</h2>
        <p>{translations.projectDesignContent1[activeLanguage]}</p>
        <p>{translations.projectDesignContent2[activeLanguage]}</p>
        <p>{translations.projectDesignContent3[activeLanguage]}</p>
        <p>{translations.projectDesignContent4[activeLanguage]}</p>
        <p>{translations.projectDesignContent5[activeLanguage]}</p>
        <p>{translations.projectDesignContent6[activeLanguage]}</p>
        <h2>{translations.projectDeploymentTitle[activeLanguage]}</h2>
        <p>{translations.projectDeploymentContent1[activeLanguage]}</p>
        <p>{translations.projectDeploymentContent2[activeLanguage]}</p>
        <p>{translations.projectDeploymentContent3[activeLanguage]}</p>
        <ul>
          <li>{translations.projectDeploymentPoint1[activeLanguage]}</li>
          <li>{translations.projectDeploymentPoint2[activeLanguage]}</li>
          <li>{translations.projectDeploymentPoint3[activeLanguage]}</li>
          <li>{translations.projectDeploymentPoint4[activeLanguage]}</li>
          <li>{translations.projectDeploymentPoint5[activeLanguage]}</li>
        </ul>
        <h2>{translations.projectResultsTitle[activeLanguage]}</h2>
        <p>{translations.projectResultsContent1[activeLanguage]}</p>
        <h2>{translations.projectConclusionTitle[activeLanguage]}</h2>
        <p>{translations.projectConclusionContent1[activeLanguage]}</p>
        <p>{translations.projectConclusionContent2[activeLanguage]}</p>
        <p>{translations.projectConclusionContent3[activeLanguage]}</p>
        <p>{translations.projectConclusionContent4[activeLanguage]}</p>
        <p>{translations.projectConclusionContent5[activeLanguage]}</p>
        <p>{translations.projectConclusionContent6[activeLanguage]}</p>
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
