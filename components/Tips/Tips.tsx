import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import classes from "./Tips.module.scss";

function Tips() {
  const { activeLanguage } = useLanguage();

  // Define the translations
  const translation: TranslationsType = {
    promptTitle: {
      EN: "Prompting Tips",
      FR: "Conseils d'utilisation",
    },
    promptTitle1: {
      EN: "Read the Documentation",
      FR: "Lisez la documentation",
    },
    point1: {
      EN: "Before starting, it's crucial to carefully review the GPT's description to ensure it adequately meets your specific development needs. This initial step is fundamental for aligning the GPT's capabilities with your project objectives, thus ensuring efficient and targeted use.",
      FR: "Avant de commencer, il est crucial de lire attentivement la description du GPT pour vous assurer qu'il répond adéquatement à vos besoins de développement spécifiques. Cette étape initiale est fondamentale pour aligner les capacités du GPT avec les objectifs de votre projet, garantissant ainsi une utilisation efficace et ciblée.",
    },
    promptTitle2: {
      EN: "Pick the Right Mode",
      FR: "Choisissez le bon mode",
    },
    point2: {
      EN: "Choosing the appropriate mode is essential for optimizing your interaction with the GPT. Whether you opt for '/general' for broad inquiries or another specialized mode for a more technical queries, each mode is specifically designed to facilitate your work. Activating the suitable mode enriches the assistance provided by the GPT, making it more relevant and useful for your particular context. All you have to is to tap the '/mode' at the beginning of your prompt to activate it. Finally you swith back to the 'general' mode by typing '/general' at the beginning of your prompt or any other modes that you may need.",
      FR: "Choisir le mode approprié est essentiel pour optimiser votre interaction avec le GPT. Que vous optiez pour '/general' pour des questions générales ou un autre mode spécialisé pour des requêtes plus techniques, chaque mode est spécifiquement conçu pour faciliter votre travail. L'activation du mode adéquat enrichit l'assistance fournie par le GPT, la rendant plus pertinente et utile pour votre contexte particulier. Tout ce que vous avez à faire est de taper le '/mode' au début de votre invite pour l'activer. Enfin, vous revenez au mode 'général' en tapant '/general' au début de votre invite ou tout autre mode dont vous pourriez avoir besoin.",
    },
    promptTitle3: {
      EN: "Clarify your Objectives",
      FR: "Clarifiez vos objectifs",
    },
    point3: {
      EN: "It's crucial to precisely define what you expect from the GPT. Articulating your needs clearly leads to more tailored and effective advice. By specifying your expectations, you guide the GPT to provide responses that match exactly what you're looking for, thereby improving the accuracy and relevance of the proposed solutions.",
      FR: "Il est crucial de définir précisément ce que vous attendez du GPT. Articuler clairement vos besoins conduit à des conseils plus adaptés et efficaces. En spécifiant vos attentes, vous guidez le GPT pour fournir des réponses qui correspondent exactement à ce que vous recherchez, améliorant ainsi la précision et la pertinence des solutions proposées.",
    },
    promptTitle4: {
      EN: "Enrich the context of your prompts",
      FR: "Enrichissez le contexte de vos prompts",
    },
    point4: {
      EN: "Providing detailed context about your project allows the GPT to understand your specific challenges and offer personalized advice. By sharing a comprehensive overview of your situation, including technical challenges and project objectives, you enable the GPT to generate more precise and tailored suggestions for your unique needs.",
      FR: "Fournir un contexte détaillé sur votre projet permet au GPT de comprendre vos défis spécifiques et de vous offrir des conseils personnalisés. En partageant un aperçu complet de votre situation, y compris les défis techniques et les objectifs du projet, vous permettez au GPT de générer des suggestions plus précises et adaptées à vos besoins uniques.",
    },
    promptTitle5: {
      EN: "Be specific in your requests",
      FR: "Soyez précis dans vos demandes",
    },
    point5: {
      EN: "The more specific your questions, the more relevant the GPT's responses will be. Detailing the technical aspects and specific goals of your project directs the GPT to focus its advice more effectively, resulting in more precise and applicable suggestions for your situation.",
      FR: "Plus vos questions sont spécifiques, plus les réponses du GPT seront pertinentes. Détaillez les aspects",
    },
    promptTitle6: {
      EN: "Fill the customs instructions",
      FR: "Remplissez les customs instructions",
    },
    point6: {
      EN: "Sharing personalized information significantly enriches the quality of the GPT's responses. Providing details about your role, specialties, programming languages mastered, work environment (operating system, machine, IDE), and current project refines the GPT's advice to be highly relevant and suited to your specific professional context.",
      FR: "Partager ses informations dans les 'customs instrcutions' enrichit considérablement la qualité des réponses du GPT. Fournir des détails sur votre rôle, vos spécialités, les langages de programmation maîtrisés, votre environnement de travail (système d'exploitation, machine, IDE) et le projet en cours affine les conseils du GPT pour qu'il soit plus pertinent et adapté à votre contexte professionnel spécifique.",
    },
    promptTitle7: {
      EN: "Use the GPT as an assitant",
      FR: "Utilisez le GPT comme un assistant",
    },
    point7: {
      EN: "The GPT is designed to support you in your development tasks, not to replace your expertise. By leveraging the GPT's capabilities as a tool for generating ideas, solving problems, and enhancing your workflow, you maximize its potential to streamline your development processes and boost your productivity.",
      FR: "Le GPT est conçu pour vous soutenir dans vos tâches de développement, et non pour remplacer votre expertise. En exploitant les capacités du GPT comme un outil pour générer des idées, résoudre des problèmes et améliorer votre flux de travail, vous maximisez son potentiel pour rationaliser vos processus de développement et augmenter votre productivité.",
    },
    promptTitle8: {
      EN: "Always test the GPT's suggestions",
      FR: "Testez toujours les suggestions du GPT",
    },
    point8: {
      EN: "Testing and validating the GPT's recommendations is a crucial step. This verification practice ensures the accuracy and applicability of solutions in your specific project context, avoiding potential errors and ensuring that the advice is not only theoretically valid but also practically feasible.",
      FR: "Tester et valider les recommandations du GPT est une étape cruciale. Cette pratique de vérification garantit la précision et l'applicabilité des solutions dans votre contexte de projet spécifique, évitant les erreurs potentielles et garantissant que les conseils sont non seulement théoriquement valides, mais aussi pratiquement réalisables.",
    },
    promptTitle9: {
      EN: "Cautions Regarding Confidentiality and Intellectual Property",
      FR: "Prudence concernant la confidentialité et la propriété intellectuelle",
    },
    point9: {
      EN: "Caution is advised when sharing sensitive information or proprietary code. Before disclosing such data, ensure you have the necessary permissions to avoid compromising information confidentiality or security. In a professional context, reviewing confidentiality policies and considering secure options, such as using a Team account, are critical to protecting your organization's intellectual assets.",
      FR: "Il est conseillé de faire preuve de prudence lors de la divulgation d'informations sensibles ou de code propriétaire. Avant de divulguer de telles données, assurez-vous d'avoir les autorisations nécessaires pour éviter de compromettre la confidentialité ou la sécurité des informations. Dans un contexte professionnel, l'examen des politiques de confidentialité et la prise en compte d'options sécurisées, telles que l'utilisation d'un compte Team, sont essentiels pour protéger les actifs intellectuels de votre organisation.",
    },
    promptTitle10: {
      EN: "Use all the GPTs that you need in the same conversation",
      FR: "Utilisez tous les GPTs dont vous avez besoin dans la même conversation",
    },
    point10: {
      EN: "Employing different GPTs in the same conversation, by using the '@' symbol followed by the desired GPT's name, offers a diversity of perspectives and a wealth of solutions. This multi-GPT approach enriches your development toolkit by providing a broader array of advice and insights, fostering innovation and efficiency in your project realization.",
      FR: "Utiliser différents GPTs dans la même conversation, en utilisant le symbole '@' suivi du nom du GPT souhaité, offre une diversité de perspectives et une multitude de solutions. Cette approche multi-GPT enrichit votre boîte à outils de développement en fournissant un éventail plus large de conseils et d'informations, favorisant l'innovation et l'efficacité dans la réalisation de votre projet.",
    },
    promptTitle11: {
      EN: "Updating Information Through Online Research",
      FR: "Mise à jour des informations par la recherche en ligne",
    },
    point11: {
      EN: "In a rapidly evolving field like web, mobile, and blockchain development,and considering that the information used by the GPTs stop in march 2023, access to up-to-date information is indispensable. Explicitly indicate when you need the GPT to perform online searches to ensure that the advice received is based on the latest trends and technologies, thus ensuring that your projects remain at the forefront of innovation.",
      FR: "Dans un domaine en évolution rapide comme le développement web, mobile et blockchain, et compte tenu du fait que les informations utilisées par les GPTs s'arrêtent en mars 2023, l'accès à des informations à jour est indispensable. Indiquez explicitement quand vous avez besoin que le GPT effectue des recherches en ligne pour vous assurer que les conseils reçus sont basés sur les dernières tendances et technologies, garantissant ainsi que vos projets restent à la pointe de l'innovation.",
    },
  };

  return (
    <div className={classes.tipsContainer}>
      <h1 className={classes.subtitleBold}>
        {translation.promptTitle[activeLanguage]}
      </h1>

      <ul className={classes.itemsContainer}>
        {Array.from({ length: 11 }, (_, i) => i + 1).map((index) => {
          const titleKey = `promptTitle${index}`;
          const pointKey = `point${index}`;
          if (!translation[titleKey] || !translation[pointKey]) return null;
          return (
            <li key={titleKey} className={classes.tipsItem}>
              <strong>{translation[titleKey][activeLanguage]}</strong>:{" "}
              {translation[pointKey][activeLanguage]}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Tips;
