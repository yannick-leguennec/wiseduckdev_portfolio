import { GetStaticProps } from "next";
import React, { useEffect } from "react";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Tips from "../../components/Tips/Tips";
import { useLoader } from "../../context/LoaderContext";
import schema from "../../public/schemas/promptingTipsSchema";
import classes from "../../styles/prompting-tips.module.scss";

const PromptingTips = () => {
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
    alt: {
      EN: "The Wise Duck Dev dresses as a teacher, offering educational tips for using custom GPTs in web, mobile and blockchain development",
      FR: "Le Wise Duck Dev se présente comme un enseignant, offrant des conseils pédagogiques pour utiliser des GPT personnalisés dans le développement web, mobile et blockchain",
    },
    title: {
      EN: "Mastering Wise Duck Dev GPTs: Expert Prompting Tips for Devs in Web, Mobile & Blokchain",
      FR: "Maîtriser les GPTs de Wise Duck Dev : Conseils d'expert en incitation pour les développeurs web, mobiles et blockchain",
    },
    description: {
      EN: "Unlock the full potential of over 100 specialized GPTs for web, mobile and blockchain development with the Wise Duck Dev's expert prompting tips. Dive into our comprehensive guide to enhance your development workflow and command GPTs with precision for groundbreaking innovation and efficiency. Start crafting effective prompts today!",
      FR: "Débloquez tout le potentiel de plus de 100 GPT spécialisés pour le développement web, mobile et blockchain avec les conseils d'expert en incitation de Wise Duck Dev. Plongez dans notre guide complet pour améliorer votre flux de travail de développement et maîtriser les GPT avec précision pour des innovations révolutionnaires et une efficacité accrue. Commencez dès aujourd'hui à créer des incitations efficaces !",
    },
    og_title: {
      EN: "Unleash Dev Genius with GPT: Exclusive Prompting Tips | The Wise Duck Dev",
      FR: "Libérez le génie du développement avec GPT : Conseils exclusifs en incitation | Le Wise Duck Dev",
    },
    og_description: {
      EN: "Step into the realm of The Wise Duck Dev and master over 100 custom GPTs. Elevate your web, mobile and blockchain projects with our insider prompting techniques and revolutionize your development process.",
      FR: "Entrez dans le domaine du Wise Duck Dev et maîtrisez plus de 100 GPT personnalisés. Élevez vos projets web, mobiles et blockchain avec nos techniques d'incitation exclusives et révolutionnez votre processus de développement.",
    },
    twitter_title: {
      EN: "MasterThe Wise Duck Dev GPTs: Exclusive Prompting Tips for optimal results",
      FR: "Maîtrisez les GPTs de Wise Duck Dev : Conseils exclusifs en incitation pour des résultats optimaux",
    },
    twitter_description: {
      EN: "Dive into specialized GPTs for devs! Get exclusive prompting techniques for web, mobile, and blockchain development from The Wise Duck Dev. #wiseduckdevgpts #customGPTs #GPT #DevTools #BlockchainDev",
      FR: "Plongez dans les GPT spécialisés pour les développeurs ! Obtenez des techniques d'incitation exclusives pour le développement web, mobile et blockchain du Wise Duck Dev. #wiseduckdevgpts #customGPTs #GPT #DevTools #BlockchainDev",
    },
  };

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
          content="GPT for developers, Prompting guide for GPT, Blockchain development AI, Mobile development AI tools, Web development GPT prompts, Custom GPT usage, AI programming tips, Developer AI integration, The Wise Duck Dev, Efficient GPT prompts, AI development techniques, GPT prompt optimization, Advanced GPT tips, GPT for web innovation, GPT in software development"
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
          content={`https://${siteUrl}/gpts/prompting-tips`}
        />
        <meta
          property="og:image"
          content={`https://${siteUrl}/images/index_gpts/the-wise-duck-dev-educational-tips-for-gpt-web-mobile-blockchain-development.webp`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@wiseduckdev" />
        <meta name="twitter:creator" content="@wiseduckdev" />
        <meta
          name="twitter:title"
          content={translation.twitter_title[activeLanguage]}
        />
        <meta
          name="twitter:description"
          content={translation.twitter_description[activeLanguage]}
        />
        <meta
          name="twitter:image"
          content={`https://${siteUrl}/images/index_gpts/the-wise-duck-dev-educational-tips-for-gpt-web-mobile-blockchain-development.webp`}
        />
        <meta
          name="twitter:image:alt"
          content={translation.alt[activeLanguage]}
        />
        {siteUrl && (
          <>
            <link
              rel="alternate"
              hrefLang="en"
              href={`https://${siteUrl}/gpts/prompting-tips`}
            />
            <link
              rel="alternate"
              hrefLang="fr"
              href={`https://${siteUrl}/fr/gpts/prompting-tips`}
            />
          </>
        )}
        <link rel="canonical" href={`https://${siteUrl}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <Header />
      <main className={classes.mainContainer}>
        <Tips />
      </main>
      <Footer />
      <SpeedInsights />
    </>
  );
};

export default PromptingTips;

// Static props
export const getStaGetStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
