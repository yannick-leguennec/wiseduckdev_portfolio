import classes from "./Footer.module.scss";
import { FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.linksContainer}>
        <a
          href="mailto:wiseduckdev@gmail.com"
          className={classes.emailContainer_link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <MdOutlineAlternateEmail className={classes.logo} />
        </a>

        <a
          href="https://github.com/yannick-leguennec"
          rel="noopener noreferrer"
          target="_blank"
          className={classes.githubContainer_link}
        >
          <FaGithub className={classes.logo} />
        </a>

        <a
          href="https://twitter.com/wiseduckdev"
          className={classes.twitterContainer_link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaXTwitter className={classes.logo} />
        </a>
      </div>
      <div className={classes.textContainer}>
        <p>© 2024 Wise Duck Dev</p>
      </div>
    </footer>
  );
}

export default Footer;
