import Image from "next/image";
import classes from "./GPTs_Card.module.scss";
import GPTs_Card_Type from "../../types/GPTs_Card_Type";

const GPTs_Card = (props: GPTs_Card_Type) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className={[classes.link, classes.cardContainer].join(" ")}
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
        <h3 className={classes.title}>{props.name}</h3>
        <p className={classes.description}>{props.short}</p>
      </div>
    </a>
  );
};

export default GPTs_Card;
