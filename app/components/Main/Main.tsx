import { useLanguage } from "@/app/context/LanguageContext";
import classes from "./Main.module.scss";
import Image from "next/image";
import mainPicture from "../../public/images/duck-main.png";
import { TranslationsType } from "@/app/types/TranslationsType";

function Main() {
  const { activeLanguage } = useLanguage();

  const translations: TranslationsType = {
    subtitle: {
      EN: "Full-Stack JS Developer",
      FR: "Développeur Full-Stack JS",
    },
    description: {
      EN: "Make your dreams a reality",
      FR: "Faite de vos rêves une réalité",
    },
  };

  return (
    <section id="main" className={`${classes.mainSection}`}>
      <Image
        src={mainPicture}
        alt="Profil picture of the wise duck dev"
        className={`${classes.image}`}
        layout="fill"
        objectFit="cover"
      />
      <div className={`${classes.titleContainer}`}>
        <h1 className={`${classes.title}`}>The Wise Duck Dev</h1>
        <div className={`${classes.socialContainer}`}>
          <h2 className={`${classes.subtitle}`}>
            {translations.subtitle[activeLanguage]}
          </h2>
          <p className={`${classes.description}`}>
            {translations.description[activeLanguage]}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Main;
