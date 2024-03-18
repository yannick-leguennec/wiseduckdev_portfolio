"use client";

import { useState, useEffect } from "react";
import { Router } from "next/router";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import Image from "next/image";
import logo from "../../public/images/logos/simple_logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import classes from "./Header_GPTs.module.scss";

function Header() {
  // State variable to store the current section
  const [activeSection, setActiveSection] = useState("main");
  // State variable to store the burger menu status
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Function to toggle the burger menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  // Custom hook to manage the language changes
  const { activeLanguage, toggleLanguage } = useLanguage();
  // Site URL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  // Router
  const router = Router;

  // Define the navigation links based on the active language
  const navLinks = [
    {
      name: "Profil",
      path: activeLanguage === "EN" ? `${siteUrl}` : `${siteUrl}/fr`,
    },
    {
      name: "GPTs",
      path: activeLanguage === "EN" ? `${siteUrl}/gpts` : `${siteUrl}/fr/gpts`,
    },
  ];

  // Adjusted isActive function
  const isActive = (path: string) => {
    // Construct the expected path based on activeLanguage
    const expectedPath = activeLanguage === "EN" ? path : `/fr${path}`;
    return router.pathname === expectedPath ? classes.activeLink : "";
  };

  // // Object to store the translations
  // const translations: TranslationsType = {
  //   main: { EN: "Main", FR: "Accueil" },
  //   profil: { EN: "Profile", FR: "Profil" },
  //   skills: { EN: "Skills", FR: "Expertise" },
  //   experience: { EN: "Experience", FR: "Expérience" },
  //   portfolio: { EN: "Portfolio", FR: "Portfolio" },
  //   contact: { EN: "Contact", FR: "Contact" },
  // };
  // Object to store the translations for the alt attribute of the logo
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
        // onClick={() => scrollToSection("main")}
        className={`${classes.containerLogo}`}
      >
        <Image
          src={logo}
          alt={translationAlt.altLogo[activeLanguage]}
          className={classes.containerLogo_logo}
          priority
        />
        <h1 className={classes.containerLogo_logoName}>
          the <strong>wise</strong>duck<strong>dev</strong>{" "}
          <span className={classes.containerLogo_gpts}>GPTs</span>
        </h1>
      </a>
      <div className={classes.containerNav}>
        <nav
          className={classes.navigation}
          role="navigation"
          aria-label="Main navigation"
        >
          <ul className={classes.navList}>
            {navLinks.map((link) => (
              <li key={link.name} className={classes.navItem}>
                <a
                  href={link.path}
                  className={`${classes.navLink} ${isActive(link.path)}`}
                >
                  {link.name}
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
        <RxHamburgerMenu
          className={classes.containerBurger_hamburger}
          aria-label=""
        />
      </div>
      {isMenuOpen && (
        <div className={classes.mobileMenu}>
          {" "}
          <nav
            className={classes.navigation}
            role="navigation"
            aria-label="Main navigation"
          >
            <ul className={classes.navList}>
              {navLinks.map((link) => (
                <li key={link.name} className={classes.navItem}>
                  <a
                    href={link.path}
                    className={`${classes.navLink} ${isActiveLink(link.path)}`}
                  >
                    {link.name}
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
