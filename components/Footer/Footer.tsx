import classes from "./Footer.module.scss";
import { useLanguage } from "../../context/LanguageContext";
import { FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa";

function Footer() {
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();
  // Site URL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  // Determine the GPTs link based on the active language
  const gptsLink = activeLanguage === "FR" ? `/fr/gpts` : `/gpts`;

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
        <a href={gptsLink} rel="noopener noreferrer">
          <FaRobot className={classes.logo} />
        </a>
      </div>
      <div className={classes.textContainer}>
        <p>© 2024 Wise Duck Dev</p>
      </div>
    </footer>
  );
}

export default Footer;
