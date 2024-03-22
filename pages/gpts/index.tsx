import { GetStaticProps } from "next";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import Header from "../../components/Header/Header";
import Main_GPTs from "../../components/Main_GPTs/Main_GPTs";
const GPTs = dynamic(() => import("../../components/GPTs/GPTs"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));
import indexSchemaGPTs from "../../public/schemas/indexSchemaGPTs";

export default function GPTS() {
  // Custom hook to manage the language state
  const { activeLanguage } = useLanguage();
  // Site URL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const translation: TranslationsType = {
    pageDescription: {
      EN: "The Wise Duck Dev - GPTs",
      FR: "The Wise Duck Dev - GPTs",
    },
    logText: {
      EN: "👨‍💻🚀 Hello there! As a Full Stack JS developer with a zest for React and a deep passion for AI innovations, I specialize in crafting bespoke GPTs that streamline workflows and supercharge development processes. If your company seeks to embrace AI's transformative power or if you're a recruiter looking for a developer who blends creativity with technology, let's chat! Together, we can create GPT solutions tailored to your unique needs, driving efficiency and excellence in every project. Let's innovate and elevate your operations with custom AI! 🤖✨",
      FR: "👨‍💻🚀 Bonjour ! En tant que développeur Full Stack JS passionné par React et les innovations en IA, je me spécialise dans la création de GPT sur mesure qui optimisent les flux de travail et dynamisent les processus de développement. Si votre entreprise souhaite exploiter la puissance transformatrice de l'IA, ou si vous êtes un recruteur à la recherche d'un développeur qui allie créativité et technologie, parlons-en ! Ensemble, nous pouvons développer des solutions GPT adaptées à vos besoins spécifiques, favorisant l'efficacité et l'excellence dans chaque projet. Innovons et élevons vos opérations avec l'IA personnalisée ! 🤖✨",
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
        <title>
          The Wise Duck Dev GPTs | Explore Leading GPT Categories for Web and
          Mobile Development
        </title>
        <meta
          name="description"
          content="Discover The Wise Duck Dev's curated GPTs, specializing in frontend, backend, database, design, framework, productivity, blockchain, cybersecurity, CMS, and automation. Elevate your web development with our tailored GPT expertise."
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
          content="The Wise Duck Dev GPTs | Gateway to Specialized GPT Development"
        />
        <meta
          property="og:description"
          content="Step into the world of specialized GPT development with The Wise Duck Dev. Explore categories from frontend to blockchain and automation. Tailored AI solutions for robust web development."
        />
        <meta property="og:url" content={`https://${siteUrl}/gpts`} />
        <meta
          property="og:image"
          content={`https://${siteUrl}/images/index_gpts/the-wise-duck-dev-gpt-expert-men-in-black-style-profile.webp`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@wiseduckdev" />
        <meta
          name="twitter:title"
          content="The Wise Duck Dev GPTs | Specialized GPT Development"
        />
        <meta
          name="twitter:description"
          content="Join The Wise Duck Dev in exploring specialized GPTs for every development need, from frontend to CMS and beyond. Dive into a world where AI meets innovation in web development."
        />
        <meta
          name="twitter:image"
          content={`https://${siteUrl}/images/index_gpts/the-wise-duck-dev-gpt-expert-men-in-black-style-profile.webp`}
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
        <link rel="canonical" href={`https://${siteUrl}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(indexSchemaGPTs) }}
        />
      </Head>

      <Header />
      <Main_GPTs />
      <GPTs />
      <Footer />
      <SpeedInsights />
    </>
  );
}

export const getStaGetStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
