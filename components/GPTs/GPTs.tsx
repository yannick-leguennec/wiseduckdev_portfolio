import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import GPTs_Card from "../GPTs_Card/GPTs_Card";
import GPTs_Card_Category from "../GPTs_Card_Category/GPTs_Card_Category";
import GPTs_Card_Type from "../../types/GPTs_Card_Type";
import GPTS_Card_Category_Type from "../../types/GPTs_Card_Category";
import { BsCopy } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import classes from "./GPTs.module.scss";

const GPTs = () => {
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
  // State to store if the modal should be shown
  const [showModal, setShowModal] = useState(false);
  // State to store the information copied to the clipboard
  const [copiedInfo, setCopiedInfo] = useState("");
  // Determine the GPTs link based on the active language
  const portfolioLink = activeLanguage === "FR" ? `/fr` : `/`;

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

  // Function to handle the copy to clipboard
  const handleCopy = (info) => {
    navigator.clipboard.writeText(info);
    setCopiedInfo(`Info Copied`);
    setTimeout(() => setCopiedInfo(""), 2000); // Clear notification after 2 seconds
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
      EN: "Want to know more about The Wise Duck Dev ? Click ",
      FR: "Vous voulez en savoir plus sur The Wise Duck Dev ? Cliquez ",
    },
    search_aria_label: {
      EN: "Search GPTs on the site",
      FR: "Rechercher des GPTs sur le site",
    },
    donationBanner: {
      EN: "To support this project, click here",
      FR: "Pour soutenir ce projet, cliquez ici",
    },
    donationTitle: {
      EN: "Support Our Mission",
      FR: "Soutenez notre mission",
    },
    donationText: {
      EN: "Your donation enables us to maintain and expand our philanthropic platform, empowering developers with innovative tools for a transformative future. Help us continue to redefine technology, donate today!",
      FR: "Votre don nous permet de maintenir et d'élargir notre plateforme philanthropique, permettant aux développeurs d'accéder à des outils innovants pour un avenir transformateur. Aidez-nous à continuer à redéfinir la technologie, faites un don aujourd'hui !",
    },
    BTC: {
      EN: "BTC Address: ",
      FR: "Adresse BTC: ",
    },
    ETH: {
      EN: "ETH Address: ",
      FR: "Adresse ETH: ",
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
          Reset
        </button>
        <button onClick={handleSearchClick} className={classes.button}>
          Search
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
      <p className={classes.promoText}>
        {translations.promo[activeLanguage]}{" "}
        <Link href={portfolioLink} className={`${classes.portfolioLinkOrange}`}>
          {" "}
          {activeLanguage === "FR" ? "ici" : "here"}
        </Link>{" "}
      </p>
      <div className={classes.donationBanner}>
        <button
          onClick={() => setShowModal(true)}
          className={classes.clickHere}
        >
          {translations.donationBanner[activeLanguage]}
        </button>
      </div>
      {showModal && (
        <div className={classes.overlay}>
          <div className={classes.modal}>
            <h2 className={classes.titleDonation}>
              {translations.donationTitle[activeLanguage]}
            </h2>
            <p>{translations.donationText[activeLanguage]}</p>

            <div className={classes.donationOptions}>
              <div className={classes.donationOption}>
                <p className={classes.donationText}>Paypal: </p>
                <div className={classes.donationCopy}>
                  <p className={classes.donationInfos}>@wiseduckdev</p>
                  <button onClick={() => handleCopy("@wiseduckdev")}>
                    <BsCopy />
                  </button>
                </div>
              </div>
              <div className={classes.donationOption}>
                <p className={classes.donationText}>
                  {translations.BTH[activeLanguage]}
                </p>
                <div className={classes.donationCopy}>
                  <p className={classes.donationInfos}>
                    bc1qjalnp6rhvalxeyclcwfcp0madsmghcfzmylxf4
                  </p>
                  <button
                    onClick={() =>
                      handleCopy("bc1qjalnp6rhvalxeyclcwfcp0madsmghcfzmylxf4")
                    }
                  >
                    <BsCopy />
                  </button>
                </div>
              </div>
              <div className={classes.donationOption}>
                <p className={classes.donationText}>
                  {translations.ETH[activeLanguage]}
                </p>
                <div className={classes.donationCopy}>
                  <p className={classes.donationInfos}>
                    0x97553A534aD05fb7D67aFa8fd4d8BCC8C990b477
                  </p>
                  <button
                    onClick={() =>
                      handleCopy("0x97553A534aD05fb7D67aFa8fd4d8BCC8C990b477")
                    }
                  >
                    <BsCopy />
                  </button>
                </div>
              </div>
              {copiedInfo && (
                <p className={classes.copiedNotification}>{copiedInfo}</p>
              )}
            </div>

            <button
              onClick={() => setShowModal(false)}
              className={classes.buttonReverted}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GPTs;
