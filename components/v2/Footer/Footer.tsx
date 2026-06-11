import classes from "./Footer.module.scss";
import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { TranslationsType } from "../../../types/TranslationsType";
import { FaRobot } from "react-icons/fa";

function Footer() {
  const { activeLanguage } = useLanguage();
  const [copiedInfo, setCopiedInfo] = useState("");

  const translations: TranslationsType = {
    altLogo: {
      EN: "Wise Duck Dev — AI Integration & Automation Specialist and certified Full-Stack JavaScript Developer logo",
      FR: "Logo de Wise Duck Dev — Spécialiste Intégration d'IA & Automatisation et Développeur Full-Stack JavaScript certifié",
    },
    privacyPolicy: {
      EN: "Privacy Policy",
      FR: "Politique de confidentialité",
    },
  };

  // Function to handle the copy to clipboard
  const handleCopy = (info) => {
    navigator.clipboard.writeText(info);
    setCopiedInfo(`Info Copied`);
    setTimeout(() => setCopiedInfo(""), 2000);
  };

  return (
    <footer className={classes.footer}>
      <div className={classes.textContainer}>
        <a
          href="https://wiseduckdevgpts.com"
          rel="noopener noreferrer"
          target="_blank"
          aria-label={
            activeLanguage === "FR"
              ? "Accéder à la plateforme GPTs de Wise Duck Dev dans un nouvel onglet"
              : "Visit Wise Duck Dev's GPTs platform in a new tab"
          }
          onClick={() => {
            if (window.gtag) {
              window.gtag("event", "navigation_click", {
                event_category: "Navigation",
                event_navigation: "Footer GPTs Clicked",
              });
            }
          }}
        >
          <FaRobot className={classes.logo} />
        </a>
        <a
          href={
            activeLanguage === "FR" ? "/fr/privacy-policy" : "/privacy-policy"
          }
          rel="noopener noreferrer"
          aria-label={
            activeLanguage === "FR"
              ? "Voir la politique de confidentialité"
              : "View the privacy policy"
          }
          onClick={() => {
            if (window.gtag) {
              window.gtag("event", "navigation_click", {
                event_category: "Navigation",
                event_navigation: "Footer Privacy Policy Clicked",
              });
            }
          }}
        >
          <p>{translations.privacyPolicy[activeLanguage]}</p>
        </a>
        <p>© 2024 Wise Duck Dev</p>
      </div>
    </footer>
  );
}

export default Footer;
