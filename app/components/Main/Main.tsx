import classes from "./Main.module.scss";
import Image from "next/image";
import mainPicture from "../../../public/images/duck-main.png";

function Main() {
  return (
    <section id="main" className={`${classes.mainSection}`}>
      {/* <Image
        src={mainPicture}
        alt="Profil picture of the wise duck dev"
        className={`${classes.image}`}
      /> */}
      <div className={`${classes.titleContainer}`}>
        <h1 className={`${classes.title}`}>The Wise Duck Dev</h1>
        <div className={`${classes.socialContainer}`}>
          <h2 className={`${classes.subtitle}`}>Full-Stack Developer</h2>
          <p className={`${classes.description}`}>
            Dreaming is just the beginning.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Main;
