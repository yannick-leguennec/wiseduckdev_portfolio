import classes from "./Footer.module.scss";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import { useRouter } from "next/router";
import { FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa";
import Image from "next/image";
import logo from "../../public/images/logos/simple_logo_white.png";

function Footer() {
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();
  // Router
  const router = useRouter();
  const { pathname, locale } = router;
  // Site URL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  // Logic to determine if we are on the homepage or GPTs page
  const isHomePage = pathname === "/" || pathname === "/fr";
  const isGptsPage = pathname === "/gpts" || pathname === "/fr/gpts";
  // Determine the GPTs link based on the active language
  const gptsLink = activeLanguage === "FR" ? `/fr/gpts` : `/gpts`;
  const mainLink = activeLanguage === "FR" ? `/fr` : `/`;

  // Object to store the translations for the alt attribute of the logo
  const translationAlt: TranslationsType = {
    altLogo: {
      EN: "Certified Full Stack JavaScript Web and Web Mobile Developer specialized in React Wise Duck Dev Logo",
      FR: "Logo du développeur certifié web et web mobile Full Stack JavaScript spécialisé en React Wise Duck Dev",
    },
  };

  return (
    <footer className={classes.footer}>
      <div className={classes.linksContainer}>
        <a
          href="mailto:wiseduckdev@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <MdOutlineAlternateEmail className={classes.logo} />
        </a>

        <a
          href="https://github.com/yannick-leguennec"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub className={classes.logo} />
        </a>

        <a
          href="https://twitter.com/wiseduckdev"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaXTwitter className={classes.logo} />
        </a>
        {isHomePage && (
          <a href={gptsLink} rel="noopener noreferrer">
            <FaRobot className={classes.logo} />
          </a>
        )}
        {isGptsPage && (
          <a href={mainLink} rel="noopener noreferrer">
            <Image
              src={logo}
              alt={translationAlt.altLogo[activeLanguage]}
              className={classes.logo}
            />
          </a>
        )}
      </div>
      <div className={classes.textContainer}>
        <p>© 2024 Wise Duck Dev</p>
      </div>
    </footer>
  );
}

export default Footer;
