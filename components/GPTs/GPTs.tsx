import React, { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import GPTs_Card from "../GPTs_Card/GPTs_Card";
import GPTs_Card_Type from "../../types/GPTs_Card_Type";
import { CiSearch } from "react-icons/ci";
import classes from "./GPTs.module.scss";
import GPTS_Card_Type from "../../types/GPTs_Card_Type";

const GPTs = () => {
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();
  //   State to store the data of the GPTs
  const [gptsData, setGptsData] = useState([]);
  //   State to store the filtered GPTs by languages
  const [filteredGPTs, setFilteredGPTs] = useState([]);
  //   State to store the search term
  const [searchTerm, setSearchTerm] = useState("");

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

  console.log(gptsData);

  const executeSearch = () => {
    const value = searchTerm.toLowerCase();
    const filteredData = gptsData.filter(
      (gpt: GPTS_Card_Type) =>
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
      <div>
        <button onClick={handleSearchClick}>Search</button>
        <button onClick={resetSearch}>Reset</button>
      </div>
      <div className={classes.resultsInfo}>
        {filteredGPTs.length > 0
          ? `${filteredGPTs.length} ${translations.results[activeLanguage]}`
          : `${translations.noResults[activeLanguage]}`}
      </div>

      <div className={classes.cardsContainer}>
        {filteredGPTs.map((gpt: GPTs_Card_Type) => (
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
