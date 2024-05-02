import { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import React from "react";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useLoader } from "../context/LoaderContext";
import { useLanguage } from "../context/LanguageContext";
import { TranslationsType } from "../types/TranslationsType";
import classes from "./privacy_policy.module.scss";
import { date } from "yup";

export default function PrivacyPolicy() {
  // Custom hook to manage the loading state
  const { loading, setLoading } = useLoader();

  // Effect to manage the loading state and turn it off when the content is loaded
  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  const translation: TranslationsType = {
    pageTitle: {
      EN: "Privacy Policy",
      FR: "Politique de confidentialité",
    },
    lastUpdate: {
      EN: "Last update: ",
      FR: "Dernière mise à jour : ",
    },
    date: {
      EN: "May 1, 2024",
      FR: "1er mai 2024",
    },
    introduction: {
      EN: "This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and informs You of Your privacy rights and how the law protects You. We have updated this policy to clearly articulate the technologies used on our website, including Google Analytics, Google Search Console, and device detection via ua-parser-js library.",
      FR: "Cette politique de confidentialité décrit nos politiques et procédures relatives à la collecte, à l'utilisation et à la divulgation de vos informations lorsque vous utilisez le service et vous informe de vos droits en matière de confidentialité et de la manière dont la loi vous protège. Nous avons mis à jour cette politique pour articuler clairement les technologies utilisées sur notre site Web, notamment Google Analytics, Google Search Console et la détection des appareils via la bibliothèque ua-parser-js.",
    },
  };

  return <div>privacy_policy</div>;
}

export const getStaGetStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
