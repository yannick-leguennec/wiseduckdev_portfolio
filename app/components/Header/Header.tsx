"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/fake_logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import classes from "./Header.module.scss";
import { TranslationsType } from "@/app/types/TranslationsType";

function Header() {
  // State variable to store the current section
  const [activeSection, setActiveSection] = useState("main");
  // State variable to store the burger menu status
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Function to toggle the burger menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  // Custom hook to manage the language changes
  const { activeLanguage, toggleLanguage } = useLanguage();

  // Allow to detect the current section when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.1;

      const sections = [
        "main",
        "profil",
        "skills",
        "experience",
        "portfolio",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const sectionTop = el.offsetTop;
          const sectionHeight = el.offsetHeight;
          return (
            scrollPosition >= sectionTop &&
            scrollPosition <= sectionTop + sectionHeight
          );
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to add the activeLink class to the current section
  const isActive = (sectionName: string) =>
    activeSection === sectionName ? classes.activeLink : "";

  // This function is used to scroll to the section when the user clicks on the navigation buttons
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - window.innerHeight * (6 / 100);

      requestAnimationFrame(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      });
    }
  };

  // Object to store the translations
  const translations: TranslationsType = {
    main: { EN: "Main", FR: "Accueil" },
    profil: { EN: "Profile", FR: "Profil" },
    skills: { EN: "Skills", FR: "Expertise" },
    experience: { EN: "Experience", FR: "Expérience" },
    portfolio: { EN: "Portfolio", FR: "Portfolio" },
    contact: { EN: "Contact", FR: "Contact" },
  };

  const translationAlt: TranslationsType = {
    altLogo: {
      EN: "Certified Full Stack JavaScript Web and Web Mobile Developer specialized in React Wise Duck Dev Logo",
      FR: "Logo du développeur certifié web et web mobile Full Stack JavaScript spécialisé en React Wise Duck Dev",
    },
  };

  return (
    <header className={classes.header} role="banner">
      <a
        href="#main"
        tabIndex={0}
        onClick={() => scrollToSection("main")}
        className={`${classes.containerLogo}`}
      >
        <Image
          src={logo}
          alt={translationAlt.altLogo[activeLanguage]}
          width={50}
          height={50}
          className={classes.logo}
        />
        <h1 className={classes.logoName}>The Wise Duck</h1>
      </a>
      <div className={classes.containerNav}>
        <nav
          className={classes.navigation}
          role="navigation"
          aria-label="Main navigation"
        >
          <ul className={classes.navList}>
            {Object.keys(translations).map((key: string) => (
              <li key={key} className={classes.navItem}>
                <a
                  href={`#${key}`}
                  tabIndex={0}
                  className={`${classes.navLink} ${isActive(key)}`}
                  onClick={() => scrollToSection(key)}
                >
                  {translations[key][activeLanguage]}
                </a>
                <a
                  href={`#${key}`}
                  tabIndex={0}
                  className={`${classes.navLink} ${isActive(key)}`}
                  onClick={() => scrollToSection(key)}
                >
                  {translations[key][activeLanguage]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={classes.buttonsContainer}>
          <button
            className={`${classes.buttonLang} ${
              activeLanguage === "EN"
                ? classes.activeButton
                : classes.inactiveButton
            }`}
            onClick={() => toggleLanguage("EN")}
            role="button"
            aria-label="Change language to English"
          >
            EN
          </button>
          <button
            className={`${classes.buttonLang} ${
              activeLanguage === "FR"
                ? classes.activeButton
                : classes.inactiveButton
            }`}
            onClick={() => toggleLanguage("FR")}
            role="button"
            aria-label="Change language to French"
          >
            FR
          </button>
        </div>
      </div>
      <div
        role="button"
        tabIndex={0}
        aria-expanded={isMenuOpen ? "true" : "false"}
        aria-label="Toggle navigation menu"
        className={classes.containerBurger}
        onClick={toggleMenu}
      >
        <RxHamburgerMenu className={classes.hamburger} aria-label="" />
      </div>
      {isMenuOpen && (
        <div className={classes.mobileMenu}>
          {" "}
          <nav role="navigation">
            <ul className={classes.navigationMobile}>
              {Object.keys(translations).map((key) => (
                <li key={key} className={classes.navItem}>
                  <a
                    href={`#${key}`}
                    onClick={() => {
                      scrollToSection(key);
                      toggleMenu();
                    }}
                    className={`${classes.navLink} ${isActive(key)}`}
                  >
                    {translations[key][activeLanguage]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={classes.buttonsContainer}>
            <button
              className={`${classes.buttonLang} ${
                activeLanguage === "EN"
                  ? classes.activeButton
                  : classes.inactiveButton
              }`}
              onClick={() => {
                toggleLanguage("EN");
                if (isMenuOpen) toggleMenu();
              }}
              role="button"
            >
              EN
            </button>
            <button
              className={`${classes.buttonLang} ${
                activeLanguage === "FR"
                  ? classes.activeButton
                  : classes.inactiveButton
              }`}
              onClick={() => {
                toggleLanguage("FR");
                if (isMenuOpen) toggleMenu();
              }}
              role="button"
            >
              FR
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
