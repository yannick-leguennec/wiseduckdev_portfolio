import UAParser from "ua-parser-js";
import React, { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useLoader } from "../../context/LoaderContext";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import Header from "../../components/Header/Header";
import Main_GPTs from "../../components/Main_GPTs/Main_GPTs";
import GPTs from "../../components/GPTs/GPTs";
const Footer = dynamic(() => import("../../components/Footer/Footer"));
import indexSchemaGPTs from "../../public/schemas/indexSchemaGPTs";
import { string } from "yup";

export default function GPTS({ deviceType }) {
  // Custom hook to manage the loading state
  const { setLoading } = useLoader();
  // Custom hook to manage the language state
  const { activeLanguage } = useLanguage();
  // Site URL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // Set the loading state to false after the component mounts
  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  // Translations object
  const translation: TranslationsType = {
    pageDescription: {
      EN: "The Wise Duck Dev - GPTs",
      FR: "The Wise Duck Dev - GPTs",
    },
    logText: {
      EN: "👨‍💻🚀 Hello there! As a Full Stack JS developer with a zest for React and a deep passion for AI innovations, I specialize in crafting bespoke GPTs that streamline workflows and supercharge development processes. If your company seeks to embrace AI's transformative power or if you're a recruiter looking for a developer who blends creativity with technology, let's chat! Together, we can create GPT solutions tailored to your unique needs, driving efficiency and excellence in every project. Let's innovate and elevate your operations with custom AI! 🤖✨",
      FR: "👨‍💻🚀 Bonjour ! En tant que développeur Full Stack JS passionné par React et les innovations en IA, je me spécialise dans la création de GPT sur mesure qui optimisent les flux de travail et dynamisent les processus de développement. Si votre entreprise souhaite exploiter la puissance transformatrice de l'IA, ou si vous êtes un recruteur à la recherche d'un développeur qui allie créativité et technologie, parlons-en ! Ensemble, nous pouvons développer des solutions GPT adaptées à vos besoins spécifiques, favorisant l'efficacité et l'excellence dans chaque projet. Innovons et élevons vos opérations avec l'IA personnalisée ! 🤖✨",
    },
    title: {
      EN: "The Wise Duck Dev GPTs | Explore Leading GPT Categories for Web and Mobile Development",
      FR: "GPT de The Wise Duck Dev | Explorez les principales catégories de GPT pour le développement Web et Mobile",
    },
    description: {
      EN: "Explore the world's largest library of custom GPTs at The Wise Duck Dev GPTs, catering to all developer needs in web, mobile, AI, and blockchain. With over 200 GPTs across 12 categories including frontend, backend, design, and more, elevate your development projects to new heights.",
      FR: "Explorez la plus grande bibliothèque de GPT personnalisés au monde chez The Wise Duck Dev GPTs, répondant à tous les besoins des développeurs en matière de web, mobile, IA et blockchain. Avec plus de 200 GPT répartis dans 12 catégories, dont le frontend, le backend, le design et plus encore, élevez vos projets de développement à de nouveaux sommets.",
    },
    alt: {
      EN: "The Wise Duck Dev emanates a suave and professional demeanor, dressed in a Men In Black style suit, symbolizing a sleek approach to GPT development and expertise.",
      FR: "Le Wise Duck Dev dégage une allure élégante et professionnelle, vêtu d'un costume de style Men In Black, symbolisant une approche élégante du développement et de l'expertise en GPT.",
    },
    og_title: {
      EN: "The Wise Duck Dev GPTs | Gateway to Specialized GPT for Developer",
      FR: "Les GPT de Wise Duck Dev | GPTS spécialisés pour les développeurs",
    },
    og_description: {
      EN: "Step into the world of specialized GPT development with The Wise Duck Dev. Explore categories from frontend to blockchain and automation. Tailored AI solutions for robust web development.",
      FR: "Plongez dans le monde du développement spécialisé en GPT avec Wise Duck Dev. Explorez des catégories du frontend à la blockchain et à l'automatisation. Des solutions d'IA sur mesure pour un développement web robuste.",
    },
    twitter_description: {
      EN: "Join The Wise Duck Dev in exploring specialized GPTs for every development need, from frontend to CMS and beyond. Dive into a world where AI meets innovation in web development.",
      FR: "Rejoignez Wise Duck Dev pour explorer des GPT spécialisés pour chaque besoin de développement, du frontend aux CMS et au-delà. Plongez dans un monde où l'IA rencontre l'innovation dans le développement web.",
    },
    twitter_image_alt: {
      EN: "The Wise Duck Dev emanates a suave and professional demeanor, dressed in a Men In Black style suit, symbolizing a sleek approach to GPT development and expertise.",
      FR: "Wise Duck Dev dégage une attitude suave et professionnelle, vêtu d'un costume de style Men In Black, symbolisant une approche élégante du développement et de l'expertise en GPT.",
    },
    og_locale: {
      EN: "en_US",
      FR: "fr_FR",
    },
  };

  // Custom console message for companies and recruiters
  console.log(
    `%c ${translation.logText[activeLanguage]}`,
    "background: #ff7300; color: #fafafa; font-size: 14px; padding: 10px; border-radius: 5px; font-weight: bold;"
  );

  return (
    <>
      <Head>
        <title>{translation.title[activeLanguage]}</title>
        <meta
          name="description"
          content={translation.description[activeLanguage]}
        />
        <meta
          name="keywords"
          content="GPT, The Wise Duck Dev, Frontend Development, Backend Solutions, Database Management, Design Integration, Development Frameworks, Productivity Enhancement, Blockchain Innovation, Cybersecurity, Content Management Systems, Automation, Web Development, AI Integration, Technology Solutions"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={translation.og_title[activeLanguage]}
        />
        <meta
          property="og:description"
          content={translation.og_description[activeLanguage]}
        />
        <meta
          property="og:url"
          content={
            activeLanguage === "FR"
              ? `https://${siteUrl}/fr/gpts`
              : `https://${siteUrl}/gpts`
          }
        />
        <meta
          property="og:image"
          content={`https://${siteUrl}/images/index_gpts/the-wise-duck-dev-gpt-expert-men-in-black-style-facebook.webp`}
        />
        <meta
          property="og:locale"
          content={translation.og_locale[activeLanguage]}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@wiseduckdev" />
        <meta name="twitter:creator" content="@wiseduckdev" />
        <meta
          name="twitter:title"
          content={translation.og_title[activeLanguage]}
        />
        <meta
          name="twitter:description"
          content={translation.twitter_description[activeLanguage]}
        />
        <meta
          name="twitter:image"
          content={`https://${siteUrl}/images/index_gpts/the-wise-duck-dev-gpt-expert-men-in-black-style-twitter.webp`}
        />
        <meta
          name="twitter:image:alt"
          content={translation.twitter_image_alt[activeLanguage]}
        />
        {siteUrl && (
          <>
            <link
              rel="alternate"
              hrefLang="en"
              href={`https://${siteUrl}/gpts`}
            />
            <link
              rel="alternate"
              hrefLang="fr"
              href={`https://${siteUrl}/fr/gpts`}
            />
          </>
        )}
        <link rel="canonical" href={`https://${siteUrl}/gpts`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(indexSchemaGPTs) }}
        />
      </Head>

      <Header />
      <Main_GPTs />
      <GPTs deviceType={deviceType} />
      {/* ! ONLY FOR TEST PURPOSES */}
      <p>Detected device type: {deviceType}</p>
      <Footer />
      <SpeedInsights />
    </>
  );
}

export async function getServerSideProps(context) {
  const parser = new UAParser(context.req.headers["user-agent"]);
  const result = parser.getResult();
  const deviceType: string = result.device.type || "desktop"; // Fallback to 'desktop' if no type is determined

  // Log the full result or just the device type
  console.log("Detected device type:", deviceType);
  console.log("Full UA parser result:", result);

  return {
    props: { deviceType },
  };
}
