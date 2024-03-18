import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import Image from "next/image";
import plantPicture from "../../public/images/index/plants.webp";
import classes from "./Experience.module.scss";

function Experience() {
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();

  // Object containing the translations for the Experience component
  const translation: TranslationsType = {
    altPicture: {
      EN: "AI-generated vibrant green plant symbolizing growth and innovation in my professional web and mobile development experience.",
      FR: "Plante verte vibrante générée par IA symbolisant la croissance et l'innovation dans mon expérience professionnelle en développement web et mobile.",
    },
    title: {
      EN: "Experience",
      FR: "Expérience",
    },
    subtitle1: {
      EN: "Passionned Full Stack JS Web and Web Mobile Developer",
      FR: "Développeur Web et Mobile Full Stack passionné",
    },
    point1: {
      EN: "Starting my career in web and mobile development, I combine technical expertise and strategic vision, thanks to specialized training in React and a solid foundation in full stack JS. My journey is marked in addition by over 30 online courses, reflecting my commitment to continuous learning and my desire to stay at the forefront of technological innovation.",
      FR: "Débutant ma nouvelle carrière en développement web et mobile, je combine expertise technique et vision stratégique, grâce à une formation spécialisée en React et une solide base en full stack JS. Mon parcours est deplus renforcé par plus de 30 cours en ligne, refletant mon engagement envers l'apprentissage continu et de mon désir de rester à l'avant-garde de l'innovation technologique.",
    },
    subtitle2: {
      EN: "A Team Spirit Forged in the Diversity of Experiences",
      FR: "Un Esprit d'Équipe Forgé dans la Diversité des Expériences",
    },
    point2: {
      EN: "My experience in management and entrepreneurship, enriched by over 10 years in the restaurant industry, demonstrates my ability to work in a team and to adapt to dynamic environments. This versatility allows me to quickly understand the needs of projects and to respond to them with creativity and efficiency.",
      FR: "Mon expérience en management et en entrepreneuriat, enrichie par plus de 10 ans dans l'industrie de la restauration, témoigne de ma capacité à travailler en équipe et à m'adapter à des environnements dynamiques. Cette polyvalence me permet de comprendre rapidement les besoins des projets et d'y répondre avec créativité et efficacité.",
    },
    point3: {
      EN: "Graduated from HEC Montréal in entrepreneurship and from the O'clock school in web/mobile development, I have developed advanced expertise in teleworking and virtual collaboration. My distance learning has made me particularly autonomous and competent in the management of virtual teams, qualifying me as an agile full stack developer adapted to the innovative digital projects of modern companies.",
      FR: "Diplômé de HEC Montréal en entrepreneuriat et de l'école O'clock en développement web/mobile, j'ai développé une expertise avancée en télétravail et en collaboration virtuelle. Mes formations à distance m'ont rendu particulièrement autonome et compétent dans la gestion d'équipes virtuelles, me qualifiant comme un développeur full stack agile adapté aux projets numériques innovants des entreprises modernes.",
    },
    subtitle3: {
      EN: "Expertise in Remote Work and Virtual Collaboration",
      FR: "Expertise en Travail à Distance et Collaboration Virtuelle",
    },
    subtitle4: {
      EN: "Passionate about Continuous Learning and Technological Watch",
      FR: "Passionné par l'Apprentissage Continu et la Veille Technologique",
    },
    point4: {
      EN: "I am constantly investing in learning, whether through online courses, specialized newsletters, or constant monitoring of market trends. This thirst for knowledge allows me to stay informed of the latest innovations, ensuring that my skills and projects remain at the forefront.",
      FR: "Je m'investis continuellement dans l'apprentissage, que ce soit à travers des cours en ligne, des newsletters spécialisées, ou une veille constante des tendances du marché. Cette soif de connaissances me permet de rester informé des dernières innovations, assurant ainsi que mes compétences et mes projets demeurent à l'avant-garde.",
    },
  };

  return (
    <section id="experience" className={classes.experienceSection}>
      <div className={classes.contentContainer}>
        <h1 className={classes.title}>{translation.title[activeLanguage]}</h1>
        <article className={classes.article}>
          <h2 className={classes.subtitle}>
            {translation.subtitle1[activeLanguage]}
          </h2>
          <p>{translation.point1[activeLanguage]}</p>
        </article>
        <article className={classes.article}>
          <h2 className={classes.subtitle}>
            {translation.subtitle2[activeLanguage]}
          </h2>
          <p>{translation.point2[activeLanguage]}</p>
        </article>
        <article className={classes.article}>
          <h2 className={classes.subtitle}>
            {translation.subtitle3[activeLanguage]}
          </h2>
          <p>{translation.point3[activeLanguage]}</p>
        </article>
        <article className={classes.article}>
          <h2 className={classes.subtitle}>
            {translation.subtitle4[activeLanguage]}
          </h2>
          <p>{translation.point4[activeLanguage]}</p>
        </article>
      </div>
      <div className={classes.imageContainer}>
        <Image
          src={plantPicture}
          alt={translation.altPicture[activeLanguage]}
          className={classes.image}
        />
      </div>
    </section>
  );
}

export default Experience;
