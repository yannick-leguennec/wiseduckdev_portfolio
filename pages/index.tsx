import { GetStaticProps } from "next";
import Script from "next/script";
import indexSchema from "../public/schemas/indexSchema";
import React, { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import dynamic from "next/dynamic";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useLoader } from "../context/LoaderContext";
import { useConsent } from "../context/ConsentContext";
import { useLanguage } from "../context/LanguageContext";
import { TranslationsType } from "../types/TranslationsType";
import Image, { StaticImageData } from "next/image";
import duckCoachDesktop from "../public/images/index/innovative-developer-wise-duck-dev-white-suit-couch-tropical-plants.webp";
import duckCoachMobile from "../public/images/index/innovative-developer-wise-duck-dev-white-suit-couch-tropical-plants-mobile.webp";
import ConsentModal from "../components/Modals/consentModal/consentModal";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

const Profil = dynamic(() => import("../components/Profil/Profil"));
const Skills = dynamic(() => import("../components/Skills/Skills"));
const Experience = dynamic(() => import("../components/Experience/Experience"));
const Portfolio = dynamic(() => import("../components/Portfolio/Portfolio"));
const Contact = dynamic(() => import("../components/Contact/Contact"));
const Footer = dynamic(() => import("../components/Footer/Footer"));

export default function Home() {
  // Custom hook to manage the loading state
  const { loading, setLoading } = useLoader();
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();
  // State to manage the initial content loading
  const [initialContentLoaded, setInitialContentLoaded] = useState(false);
  // State to know when the contact form is loaded
  const [contactLoaded, setContactLoaded] = useState(false);
  // Site URL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  // Router
  const router = useRouter();
  //   usState hook managing the consent status
  const { consent, updateConsent } = useConsent();
  // Manage the consent modal
  const [showModal, setShowModal] = useState(false);

  // Effect to trigger consent modal display logic based on the consent value
  useEffect(() => {
    // Trigger modal display logic based on the consent value
    if (consent === null) {
      setShowModal(true);
    }
  }, [consent]);

  // Effect to manage the initial content loading
  useEffect(() => {
    setInitialContentLoaded(true);
  }, []);

  // Effect to manage the loading state and turn it off when the content is loaded
  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  // Object to store the translations
  const translation: TranslationsType = {
    altPicture: {
      EN: "AI and Photoshop-crafted image of The Wise Duck Dev in a white suit, embracing innovation and style, seating in a modern couch amidst tropical plants, bridging the Skills and Experience sections with a blend of professionalism and creativity.",
      FR: "Image du Wise Duck Dev en costume blanc, créée par IA et optimisée avec Photoshop, évoquant l'innovation avec style, assis dans un canapé moderne entouré de plantes tropicales, faisant le lien entre les sections 'Compétences' et 'Expérience' avec un mélange de professionnalisme et de créativité.",
    },
    logText: {
      EN: "🚀 Driven by a passion for web and mobile development with a specialization in React, I turn creative ideas into captivating digital realities. If you're seeking to bring your projects to life with a dedicated and innovative developer, feel free to reach out to explore fruitful collaborations together. Let's take a step towards the future of technology together! 🌐✨",
      FR: "🚀 Passionné par le développement web et mobile avec une expertise en React, je transforme les idées en réalités numériques captivantes. Si vous cherchez à donner vie à vos projets avec un développeur dédié et innovant, n'hésitez pas à me contacter pour explorer ensemble des collaborations fructueuses. Faisons ensemble un pas vers l'avenir de la technologie ! 🌐✨",
    },
    pageDescription: {
      EN: "Meet The Wise Duck Dev : A creative & innovative Full Stack JS Developer specializing in React. Dive into a world of cutting-edge web & mobile solutions!",
      FR: "Rencontrez The Wise Duck Dev : un développeur Full Stack JS créatif et innovant spécialisé en React. Plongez dans un monde de solutions web et mobile de pointe!",
    },
    loadingContent: {
      EN: "Loading more content...",
      FR: "Chargement du contenu en cours...",
    },
    og_title: {
      EN: "The Wise Duck Dev - Full Stack JS Developer specialized in React",
      FR: "The Wise Duck Dev - Développeur Full Stack JS spécialisé en React",
    },
    og_description: {
      EN: "The Wise Duck Dev is your go-to destination for innovative full stack JS web and mobile development solutions, specializing in React.",
      FR: "The Wise Duck Dev est votre destination de prédilection pour des solutions innovantes de développement web et mobile Full Stack JS, spécialisé en React.",
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

  // Props for the ResponsiveImage component
  interface ResponsiveImageProps {
    srcDesktop: StaticImageData;
    srcMobile: StaticImageData;
    alt: string;
  }

  // Component aiming to display a different image based on the screen size
  const ResponsiveImage = ({
    srcDesktop,
    srcMobile,
    alt,
  }: ResponsiveImageProps) => {
    const [windowWidth, setWindowWidth] = useState<number | null>(null);

    // Update the window width state when the window is resized
    useEffect(() => {
      const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", updateWindowWidth);
      updateWindowWidth(); // Initialisation

      return () => window.removeEventListener("resize", updateWindowWidth);
    }, []);

    // Choose the image source based on the window width
    const src = windowWidth && windowWidth >= 768 ? srcDesktop : srcMobile;

    return <Image src={src} alt={alt} />;
  };

  return (
    <>
      <Head>
        <title>The Wise Duck Dev | Portfolio</title>
        <meta
          name="description"
          content={translation.pageDescription[activeLanguage]}
        />
        <meta
          name="keywords"
          content="The Wise Duck Dev, Full Stack JS Developer, JavaScript, React Developer, Web Mobile Developer, Next.js, TypeScript, Web Development Canada, Web Development USA, React Development, Full Stack JS Solutions, Innovative Web Solutions"
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
          property="og:image"
          content={
            activeLanguage === "FR"
              ? `https://${siteUrl}/images/index/professional-wise-duck-developer-coding-laptop-office-Facebook-FR.webp`
              : `https://${siteUrl}/images/index/professional-wise-duck-developer-coding-laptop-office-Facebook-EN.webp`
          }
        />
        <meta
          property="og:url"
          content={
            activeLanguage === "FR"
              ? `https://${siteUrl}/fr`
              : `https://${siteUrl}`
          }
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
          content={translation.og_description[activeLanguage]}
        />
        <meta
          name="twitter:image"
          content={
            activeLanguage === "FR"
              ? `https://${siteUrl}/images/index/professional-wise-duck-developer-coding-laptop-office-Twitter-FR.webp`
              : `https://${siteUrl}/images/index/professional-wise-duck-developer-coding-laptop-office-Twitter-EN.webp`
          }
        />
        <meta
          name="twitter:image:alt"
          content={translation.altPicture[activeLanguage]}
        />

        {siteUrl && (
          <>
            <link rel="alternate" hrefLang="en" href={`https://${siteUrl}`} />
            <link
              rel="alternate"
              hrefLang="fr"
              href={`https://${siteUrl}/fr`}
            />
          </>
        )}
        <link
          rel="canonical"
          href={
            activeLanguage === "EN"
              ? `https://${siteUrl}`
              : `https://${siteUrl}/fr`
          }
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(indexSchema) }}
        />
        {consent === true && (
          <>
            {/* Google Analytics script */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
            cookie_domain: 'auto',
            cookie_flags: 'SameSite=None; Secure',
            anonymize_ip: true
          });
        `,
              }}
            />
          </>
        )}
      </Head>
      <Header />
      <main>
        <Main />
        <Suspense
          fallback={<div>{translation.loadingContent[activeLanguage]}</div>}
        >
          {initialContentLoaded && (
            <>
              <Profil />
              <Skills />
              <ResponsiveImage
                srcDesktop={duckCoachDesktop}
                srcMobile={duckCoachMobile}
                alt={translation.altPicture[activeLanguage]}
              />
              <Experience />
              <Portfolio />
              <Contact id="contact" onLoaded={setContactLoaded} />
              <Footer />
            </>
          )}
        </Suspense>
      </main>
      {showModal && (
        <ConsentModal
          updateConsent={updateConsent}
          setShowModal={setShowModal}
        />
      )}
      <SpeedInsights />
    </>
  );
}

export const getStaGetStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
