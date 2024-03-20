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
  //   State to store the data of the GPTs
  const [gptsData, setGptsData] = useState([]);
  //   State to store the filtered GPTs by languages
  const [filteredGPTs, setFilteredGPTs] = useState([]);
  //  State to store the GPTs categories data
  const [gptsCategories, setGptsCategories] = useState([]);
  //  State to store the filtered categories by languages
  const [filteredCategories, setFilteredCategories] = useState([]);
  //   State to store the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch the GPTs categories data from the JSON file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/docs/GPTs/gpts_categories.json");
        const data = await response.json();
        if (data) {
          // Shuffle the categories before setting them
          const shuffledCategories = shuffleArray([...data[activeLanguage]]);
          setGptsCategories(shuffledCategories);
          setFilteredCategories(shuffledCategories);
        }
      } catch (error) {
        console.error("Failed to fetch GPTs categories data:", error);
      }
    };

    fetchData();
  }, [activeLanguage]);

  //  Shuffle the categories to display them randomly
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // ES6 array destructuring syntax to swap elements
    }
    return array;
  }

  //  Fetch the GPTs data from the JSON file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/docs/GPTs/gpts_test.json");
        const data = await response.json();
        if (data) {
          setGptsData(data[activeLanguage]);
          setFilteredGPTs(data[activeLanguage]);
        }
      } catch (error) {
        console.error("Failed to fetch GPTs data:", error);
      }
    };

    fetchData();
  }, [activeLanguage]);

  const executeSearch = () => {
    const value = searchTerm.toLowerCase();
    const filteredData = gptsData.filter(
      (gpt: GPTs_Card_Type) =>
        gpt.name.toLowerCase().includes(value) ||
        gpt.category?.toLowerCase().includes(value)
    );
    setFilteredGPTs(filteredData);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      executeSearch();
    }
  };

  const resetSearch = () => {
    setSearchTerm("");
    setFilteredGPTs(gptsData);
  };

  const handleSearchClick = () => {
    executeSearch();
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
        <button onClick={resetSearch}>Reset</button>
        <button onClick={handleSearchClick}>Search</button>
      </div>
      <div className={classes.resultsInfo}>
        {filteredGPTs.length > 0
          ? `${filteredGPTs.length} ${translations.results[activeLanguage]}`
          : `${translations.noResults[activeLanguage]}`}
      </div>

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
