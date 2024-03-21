import React, { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import GPTs_Card from "../GPTs_Card/GPTs_Card";
import GPTs_Card_Category from "../GPTs_Card_Category/GPTs_Card_Category";
import GPTs_Card_Type from "../../types/GPTs_Card_Type";
import GPTS_Card_Category_Type from "../../types/GPTs_Card_Category";
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
      const response = await fetch("/docs/GPTs/gpts_test.json");
      const data = await response.json();
      if (data) {
        const value = searchTerm.toLowerCase();
        const filteredData = data[activeLanguage].filter(
          (gpt: GPTs_Card_Type) =>
            gpt.name.toLowerCase().includes(value) ||
            gpt.category?.toLowerCase().includes(value)
        );
        setFilteredGPTs(filteredData);
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

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
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
  };

  return (
    <section id="gpts" className={classes.mainContainer}>
      <h1 className={classes.title}>{translations.title[activeLanguage]}</h1>
      <h2 className={classes.subtitle}>
        {translations.subtitle[activeLanguage]}
      </h2>
      <div className={classes.searchContainer}>
        <CiSearch className={classes.searchIcon} /> {/* Style this as needed */}
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          placeholder={translations.placeholder[activeLanguage]}
          className={classes.searchInput} // Apply styles to position the input correctly
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

      <div className={classes.cardsContainer}>
        {searchTerm === "" || (searchTerm !== "" && filteredGPTs.length === 0)
          ? // Display categories when no search or search has no results
            gptsCategories.map((category: GPTS_Card_Category_Type) => (
              <GPTs_Card_Category
                key={category.id}
                id={category.id}
                card_title={category.card_title}
                card_description={category.card_description}
                image={category.image}
                alt={category.alt}
                link={category.link}
              />
            ))
          : // Display GPTs when search has results
            filteredGPTs.map((gpt: GPTs_Card_Type) => (
              <GPTs_Card
                key={gpt.id}
                id={gpt.id}
                name={gpt.name}
                image={gpt.image}
                alt={gpt.alt}
                link={gpt.link}
                short={gpt.short}
                category={gpt.category}
              />
            ))}
      </div>
    </section>
  );
};

export default GPTs;
