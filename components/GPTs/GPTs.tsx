import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import GPTs_Card from "../GPTs_Card/GPTs_Card";
import GPTs_Card_Category from "../GPTs_Card_Category/GPTs_Card_Category";
import GPTs_Card_Type from "../../types/GPTs_Card_Type";
import GPTS_Card_Category_Type from "../../types/GPTs_Card_Category";
import { CiSearch } from "react-icons/ci";
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookMessengerShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
} from "react-share";
import { TwitterIcon } from "next-share";
import { IoMdShareAlt } from "react-icons/io";
import classes from "./GPTs.module.scss";

interface GPTsProps {
  deviceType: string;
}

const GPTs = ({ deviceType }: GPTsProps) => {
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();
  //   State to store the filtered GPTs by languages
  const [filteredGPTs, setFilteredGPTs] = useState([]);
  //  State to store the GPTs categories data
  const [gptsCategories, setGptsCategories] = useState([]);
  //  State to store the filtered categories by languages
  const [filteredCategories, setFilteredCategories] = useState([]);
  //   State to store the search term
  const [searchTerm, setSearchTerm] = useState("");
  //  State to store if the search has been executed
  const [searchExecuted, setSearchExecuted] = useState(false);
  // Determine the GPTs link based on the active language
  const portfolioLink = activeLanguage === "FR" ? `/fr` : `/`;
  // Site URL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // Fetch the GPTs categories data from the JSON file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/docs/GPTs/gpts_categories.json");
        const data = await response.json();
        if (data) {
          const orderedCategories = data[activeLanguage];
          setGptsCategories(orderedCategories);
          setFilteredCategories(orderedCategories);
        }
      } catch (error) {
        console.error("Failed to fetch GPTs categories data:", error);
      }
    };

    fetchData();
  }, [activeLanguage]);

  const executeSearch = async () => {
    if (!searchTerm.trim()) return; // Avoid searching with an empty or whitespace-only term

    setSearchExecuted(false); // Optionally, indicate search is in progress by resetting the flag
    setFilteredGPTs([]); // Clear previous search results before executing a new search

    try {
      const response = await fetch("/docs/GPTs/gpts.json");
      const data = await response.json();
      if (data) {
        const value = searchTerm.toLowerCase();
        // First, filter the data based on the search term
        const filteredData = data[activeLanguage]
          .filter(
            (gpt: GPTs_Card_Type) =>
              gpt.title.toLowerCase().includes(value) ||
              (Array.isArray(gpt.category) &&
                gpt.category.some((cat) => cat.toLowerCase().includes(value)))
          )
          // Then, sort the filtered data alphabetically by title
          .sort((a, b) => a.title.localeCompare(b.title));

        setFilteredGPTs(filteredData); // Set the sorted and filtered data

        // GA4 Event for tracking search
        gtag("event", "search", {
          event_category: "Site Search",
          event_label: value,
          search_term: value, // Sending the actual search term used
        });
      }
    } catch (error) {
      console.error("Failed to fetch GPTs data:", error);
    }
    setSearchExecuted(true); // Indicate that a search has been executed
  };

  const handleSearchClick = () => {
    executeSearch();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      executeSearch();
    }
  };

  // Use this function to reset the search state and clear results
  const resetSearch = () => {
    setSearchTerm("");
    setFilteredGPTs([]);
    setSearchExecuted(false);
  };

  // Function to handle the search change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle sharing
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: translations.shareTitle[activeLanguage],
          url:
            activeLanguage === "FR"
              ? `https://${siteUrl}/fr/gpts`
              : `https://${siteUrl}/gpts`,
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch((error) => {
          console.error("Error sharing:", error);
        });
    } else {
      alert("Your browser doesn't support the Share API");
    }
  };

  //   Object to store the translations for the title and subtitle
  const translations: TranslationsType = {
    title: {
      EN: "GPTs",
      FR: "GPTs",
    },
    subtitle: {
      EN: "Find Your Perfect GPT Match: Explore Specialized Tools for Developers",
      FR: "Trouvez votre optimal GPT : explorez des outils spécialisés pour les développeurs",
    },
    placeholder: {
      EN: "Search GPTs",
      FR: "Rechercher des GPTs",
    },
    results: {
      EN: "results found",
      FR: "résultats trouvés",
    },
    noResults: {
      EN: "No results found matching your search.",
      FR: "Aucun résultat trouvé correspondant à votre recherche.",
    },
    collection: {
      EN: "GPTs Collections",
      FR: "Collections de GPTs",
    },
    promo: {
      EN: "Learn more about The Wise Duck Dev ",
      FR: "Apprenez-en plus sur The Wise Duck Dev ",
    },
    search_aria_label: {
      EN: "Search GPTs on the site",
      FR: "Rechercher des GPTs sur le site",
    },
    buttonReset: {
      EN: "Reset",
      FR: "Effacer",
    },
    buttonSearch: {
      EN: "Search",
      FR: "Chercher",
    },
    facebookDescription: {
      EN: "Explore the future of development with The Wise Duck Dev GPTs! 🚀 Dive into our extensive collection of over 200 custom GPTs tailored for web, mobile, AI, and blockchain technologies. Whether you're refining frontend skills, tackling backend complexities, or pioneering in blockchain and AI innovations, our platform is designed to boost your creativity, streamline workflows, and elevate productivity. Join a community dedicated to reshaping development practices and pushing the boundaries of technology. Start transforming your development journey today!",
      FR: "Explorez l'avenir du développement avec les GPTs de The Wise Duck Dev! 🚀 Plongez dans notre vaste collection de plus de 200 GPTs personnalisés conçus pour les technologies web, mobile, IA et blockchain. Que vous perfectionniez vos compétences en frontend, que vous vous attaquiez à des complexités backend ou que vous soyez un pionnier dans les innovations en matière de blockchain et d'IA, notre plateforme est conçue pour stimuler votre créativité, rationaliser vos flux de travail et augmenter votre productivité. Rejoignez une communauté dédiée à remodeler les pratiques de développement et à repousser les limites de la technologie. Commencez à transformer votre parcours de développement dès aujourd'hui!",
    },
    twitterDescription: {
      EN: "Dive into the future of development with The Wise Duck Dev GPTs! 🔥 Over 200 custom GPTs for web, mobile, AI, and blockchain await. Elevate your dev skills and push the boundaries of what's possible. Join our tech revolution! #Developer #Innovation",
      FR: "Plongez dans l'avenir du développement avec les GPTs de The Wise Duck Dev! 🔥 Plus de 200 GPTs personnalisés pour le web, le mobile, l'IA et la blockchain vous attendent. Repoussez les limites de ce qui est possible",
    },
    mailMessage: {
      EN: "Hi, I'm excited to invite you to explore The Wise Duck Dev GPTs, a groundbreaking platform designed exclusively for developers like you, who are ready to push the limits of technology. With over 200 custom GPTs covering essential areas from web and mobile development to AI and blockchain innovations, our platform is tailor-made to enhance your skills, increase productivity, and inspire creativity. Whether you're mastering database management, seeking design perfection, or integrating cutting-edge cybersecurity measures, The Wise Duck Dev GPTs is your ultimate partner in redefining development practices. Join us to shape the future of technology together!",
      FR: "Bonjour, je suis ravi de vous inviter à explorer les GPTs de The Wise Duck Dev, une plateforme révolutionnaire conçue exclusivement pour les développeurs comme vous, prêts à repousser les limites de la technologie. Avec plus de 200 GPTs personnalisés couvrant des domaines essentiels du développement web et mobile aux innovations en matière d'IA et de blockchain, notre plateforme est conçue sur mesure pour améliorer vos compétences, augmenter votre productivité et inspirer votre créativité. Que vous maîtrisiez la gestion de bases de données, recherchiez la perfection en matière de design ou intégriez des mesures de cybersécurité de pointe, les GPTs de The Wise Duck Dev sont votre partenaire ultime pour redéfinir les pratiques de développement. Rejoignez-nous pour façonner ensemble l'avenir de la technologie!",
    },
    hashtags: {
      EN: "#developer #innovation #TechRevolution #TheWiseDuckDev #TheWiseDuckDevGPTS #GPTs #AI #Blockchain #WebDev #MobileDev #Frontend #Backend #Database #Cybersecurity #Design #Innovation #Technology #FutureTech #TechCommunity #TechInnovations",
      FR: "#developer #innovation #TechRevolution #TheWiseDuckDev #TheWiseDuckDevGPTS #GPTs #AI #Blockchain #WebDev #MobileDev #Frontend #Backend #Database #Cybersecurity #Design #Innovation #Technology #FutureTech #TechCommunity #TechInnovations",
    },
    metaTitle: {
      EN: "The Wise Duck Dev GPTs - Explore the Future of Development",
      FR: "The Wise Duck Dev GPTs - Explorez l'avenir du développement",
    },
    shareButton: {
      EN: "Share",
      FR: "Partagez",
    },
    shareTitle: {
      EN: "Explore and share The Wise Duck Dev GPTs with your network! The leading Library in custom GPTs for Web, Mobile, Blockchain, and AI Development",
      FR: "Explore et partage les GPTs de The Wise Duck Dev! La plus grande bibliothèque de GPTs personnalisés pour le développement Web, Mobile, Blockchain et IA",
    },
  };

  return (
    <section id="search" className={classes.mainContainer}>
      <h1 className={classes.title}>{translations.title[activeLanguage]}</h1>
      <h2 className={classes.subtitle}>
        {translations.subtitle[activeLanguage]}
      </h2>
      <div className={classes.searchContainer} role="search">
        <CiSearch className={classes.searchIcon} /> {/* Style this as needed */}
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          placeholder={translations.placeholder[activeLanguage]}
          className={classes.searchInput}
          aria-label={translations.search_aria_label[activeLanguage]}
        />
      </div>
      <div className={classes.buttonsContainer}>
        <button onClick={resetSearch} className={classes.buttonReverted}>
          {translations.buttonReset[activeLanguage]}
        </button>
        <button onClick={handleSearchClick} className={classes.button}>
          {translations.buttonSearch[activeLanguage]}
        </button>
      </div>
      {searchExecuted ? (
        <div className={classes.resultsInfo}>
          {filteredGPTs.length > 0 ? (
            `${filteredGPTs.length} ${translations.results[activeLanguage]}`
          ) : (
            <>
              {" "}
              <p>{translations.noResults[activeLanguage]}</p>{" "}
              <h2 className={classes.collectionTitle}>
                {translations.collection[activeLanguage]}
              </h2>{" "}
            </>
          )}
        </div>
      ) : (
        <h2 className={classes.collectionTitle}>
          {translations.collection[activeLanguage]}
        </h2>
      )}
      <div
        className={
          filteredGPTs.length === 1
            ? classes.cardsContainer2
            : classes.cardsContainer
        }
      >
        {searchTerm === "" || (searchTerm !== "" && filteredGPTs.length === 0)
          ? // Display categories when no search or search has no results
            gptsCategories.map((category: GPTS_Card_Category_Type) => (
              <GPTs_Card_Category
                key={uuidv4()}
                id={category.id}
                card_title={category.card_title}
                card_description={category.card_description}
                image={category.image}
                alt={category.alt}
                path={category.path}
              />
            ))
          : // Display GPTs when search has results
            filteredGPTs.map((gpt: GPTs_Card_Type) => (
              <GPTs_Card
                key={uuidv4()}
                title={gpt.title}
                image={gpt.image}
                alt={gpt.alt}
                path={gpt.path}
                card_description={gpt.card_description}
                category={gpt.category}
                results={filteredGPTs.length}
              />
            ))}
      </div>
      <div className={classes.socialButtonContainerGPTs}>
        {deviceType === "desktop" && (
          <>
            <FacebookShareButton url={`https://${siteUrl}/gpts`}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <FacebookMessengerShareButton
              url={`https://${siteUrl}/gpts`}
              appId="451991680722269"
            >
              <FacebookMessengerIcon size={32} round />
            </FacebookMessengerShareButton>
            <WhatsappShareButton
              url={`https://${siteUrl}/gpts`}
              title={translations.metaTitle[activeLanguage]}
              separator=": "
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <TwitterShareButton
              url={`https://${siteUrl}/gpts`}
              title={translations.twitterDescription[activeLanguage]}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LinkedinShareButton url={`https://${siteUrl}/gpts`}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <TelegramShareButton
              url={`https://${siteUrl}/gpts`}
              title={translations.metaTitle[activeLanguage]}
            >
              <TelegramIcon size={32} round />
            </TelegramShareButton>
            <EmailShareButton
              url={`https://${siteUrl}/gpts`}
              subject={translations.metaTitle[activeLanguage]}
              body={translations.mailMessage[activeLanguage]}
            >
              <EmailIcon size={32} round />
            </EmailShareButton>
          </>
        )}
        {(deviceType === "mobile" || deviceType === "tablet") && (
          <button onClick={handleShare} className={classes.shareButton}>
            {translations.shareButton[activeLanguage]} <IoMdShareAlt />
          </button>
        )}
      </div>

      <Link href={portfolioLink} className={classes.promoText}>
        {translations.promo[activeLanguage]}{" "}
        <span className={classes.portfolioLinkOrange}>
          {activeLanguage === "FR" ? "ici" : "here"}
        </span>
      </Link>
    </section>
  );
};

export default GPTs;
