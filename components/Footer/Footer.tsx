import classes from "./Footer.module.scss";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import { FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import logo from "../../public/images/logos/simple_logo_white.png";
import { BsCopy } from "react-icons/bs";

function Footer() {
  const { activeLanguage } = useLanguage();
  const [copiedInfo, setCopiedInfo] = useState("");

  const translations: TranslationsType = {
    altLogo: {
      EN: "Certified Full Stack JavaScript Web and Web Mobile Developer specialized in React Wise Duck Dev Logo",
      FR: "Logo du développeur certifié web et web mobile Full Stack JavaScript spécialisé en React Wise Duck Dev",
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
      <div className={classes.linksContainer}>
        <a
          href="mailto:wiseduckdev@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          aria-label={
            activeLanguage === "FR"
              ? "Envoyer un e-mail à Wise Duck Dev"
              : "Send an email to Wise Duck Dev"
          }
          onClick={() => {
            if (window.gtag) {
              window.gtag("event", "navigation_click", {
                event_category: "Navigation",
                event_navigation: "Footer Email Clicked",
              });
            }
          }}
        >
          <MdOutlineAlternateEmail className={classes.logo} />
        </a>

        <a
          href="https://github.com/yannick-leguennec"
          rel="noopener noreferrer"
          target="_blank"
          aria-label={
            activeLanguage === "FR"
              ? "Accéder au profil GitHub de Wise Duck Dev"
              : "Visit Wise Duck Dev's GitHub profile"
          }
          onClick={() => {
            if (window.gtag) {
              window.gtag("event", "navigation_click", {
                event_category: "Navigation",
                event_navigation: "Footer GitHub Clicked",
              });
            }
          }}
        >
          <FaGithub className={classes.logo} />
        </a>

        <a
          href="https://twitter.com/wiseduckdev"
          rel="noopener noreferrer"
          target="_blank"
          aria-label={
            activeLanguage === "FR"
              ? "Accéder au profil Twitter de Wise Duck Dev"
              : "Visit Wise Duck Dev's Twitter profile"
          }
          onClick={() => {
            if (window.gtag) {
              window.gtag("event", "navigation_click", {
                event_category: "Navigation",
                event_navigation: "Footer Twitter Clicked",
              });
            }
          }}
        >
          <FaXTwitter className={classes.logo} />
        </a>

        <a
          href="https://www.linkedin.com/in/wise-duck-dev/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label={
            activeLanguage === "FR"
              ? "Accéder au profil LinkedIn de Wise Duck Dev"
              : "Visit Wise Duck Dev's LinkedIn profile"
          }
          onClick={() => {
            if (window.gtag) {
              window.gtag("event", "navigation_click", {
                event_category: "Navigation",
                event_navigation: "Footer LinkedIn Clicked",
              });
            }
          }}
        >
          <FaLinkedinIn className={classes.logo} />
        </a>

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
      </div>

      <div className={classes.textContainer}>
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
