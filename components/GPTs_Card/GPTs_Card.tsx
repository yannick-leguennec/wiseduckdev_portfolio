import Image from "next/image";
import classes from "./GPTs_Card.module.scss";
import GPTs_Card_Type from "../../types/GPTs_Card_Type";
import { useLanguage } from "../../context/LanguageContext";

const GPTs_Card = (props: GPTs_Card_Type) => {
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();

  return (
    <a
      href={
        activeLanguage === "FR" ? `/fr/gpts${props.path}` : `/gpts${props.path}`
      }
      className={
        props.results === 1
          ? [classes.link, classes.cardContainer2].join(" ")
          : [classes.link, classes.cardContainer].join(" ")
      }
      onClick={() => {
        if (window.gtag) {
          window.gtag("event", "navigation_click", {
            event_category: "Navigation",
            event_navigation: `${props.title} card was clicked`,
          });
        }
      }}
    >
      <div className={classes.imageContainer}>
        <Image
          src={props.image}
          alt={props.alt}
          className={classes.image}
          width={100}
          height={100}
        />
      </div>
      <div className={classes.textContainer}>
        <h3 className={classes.title}>{props.title}</h3>
        <p className={classes.description}>{props.card_description}</p>
      </div>
    </a>
  );
};

export default GPTs_Card;
