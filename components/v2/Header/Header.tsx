"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useLanguage } from "../../../context/LanguageContext";
import Image from "next/image";
import logo from "../../../public/images/logos/wise-duck-dev-full-stack-js-logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import classes from "./Header.module.scss";
import { TranslationsType } from "../../../types/TranslationsType";

function Header() {
  const [activeSection, setActiveSection] = useState("main");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeLanguage, toggleLanguage } = useLanguage();
  const router = useRouter();
  const { pathname, query } = router;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.1;

      const sections = [
        "main",
        "profil",
        "experience",
        "portfolio",
        "skills",
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

  // Check if there's a query parameter to scroll to a section on load
  useEffect(() => {
    if (query.section) {
      scrollToSectionDirect(query.section);
      router.replace(pathname); // Clear the query parameter from the URL
    }
  }, [query.section]);

  const isActive = (sectionName) =>
    activeSection === sectionName ? classes.activeLink : "";

  const scrollToSectionDirect = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition;

      requestAnimationFrame(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      });

      if (isMenuOpen) toggleMenu();
    }
  };

  const scrollToSection = (id) => {
    const isOnHomePage = pathname === "/" || pathname === "/fr";
    const homePath = activeLanguage === "FR" ? "/fr" : "/";

    if (!isOnHomePage) {
      // Navigate to the homepage with the section query parameter
      router.push({ pathname: homePath, query: { section: id } });
    } else {
      scrollToSectionDirect(id); // Scroll directly if already on the homepage
    }
  };

  const translations = {
    main: { EN: "Main", FR: "Accueil" },
    profil: { EN: "Profile", FR: "À propos" },
    experience: { EN: "Expertise", FR: "Expertise" },
    portfolio: { EN: "Projects", FR: "Projets" },
    skills: { EN: "Toolkit", FR: "Boîte à outils" },
    contact: { EN: "Contact", FR: "Me contacter" },
  };

  const translationAlt = {
    altLogo: {
      EN: "Logo of The Wise Duck Dev, certified Full Stack JavaScript and React Developer",
      FR: "Logo du développeur certifié Full Stack JavaScript et React The Wise Duck Dev",
    },
  };

  return (
    <header className={classes.header} role="banner">
      <a
        href={activeLanguage === "FR" ? "/fr" : "/"}
        tabIndex={0}
        className={classes.containerLogo}
        aria-label={
          activeLanguage === "FR"
            ? "Retour à la page d'accueil"
            : "Return to homepage"
        }
      >
        <Image
          src={logo}
          alt={translationAlt.altLogo[activeLanguage]}
          className={classes.containerLogo_logo}
          priority
        />
        <p className={classes.containerLogo_logoName}>
          the <strong>wise</strong>duck<strong>dev</strong>
        </p>
      </a>

      <div className={classes.containerNav}>
        <nav
          className={classes.navigation}
          role="navigation"
          aria-label={
            activeLanguage === "FR"
              ? "Navigation principale"
              : "Main navigation"
          }
        >
          <ul className={classes.navList}>
            {Object.keys(translations).map((key) => (
              <li key={key} className={classes.navItem}>
                <a
                  href={`#${key}`}
                  tabIndex={0}
                  className={`${classes.navLink} ${isActive(key)}`}
                  aria-label={
                    activeLanguage === "FR"
                      ? `Aller à la section ${translations[key].FR}`
                      : `Go to ${translations[key].EN} section`
                  }
                  onClick={() => {
                    scrollToSection(key);
                    if (window.gtag) {
                      window.gtag("event", "navigation_click", {
                        event_category: "Navigation",
                        event_navigation: `${key} from Header`,
                      });
                    }
                  }}
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
              if (window.gtag) {
                window.gtag("event", "language_change", {
                  event_category: "Language",
                  event_navigation: "EN from Header",
                });
              }
            }}
            role="button"
            aria-label="Switch to English"
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
              if (window.gtag) {
                window.gtag("event", "language_change", {
                  event_category: "Language",
                  event_navigation: "FR from Header",
                });
              }
            }}
            role="button"
            aria-label="Passer au français"
          >
            FR
          </button>
        </div>
      </div>

      <div
        role="button"
        tabIndex={0}
        aria-expanded={isMenuOpen ? "true" : "false"}
        aria-label={
          activeLanguage === "FR"
            ? "Ouvrir le menu de navigation"
            : "Open navigation menu"
        }
        className={classes.containerBurger}
        onClick={toggleMenu}
      >
        <RxHamburgerMenu className={classes.containerBurger_hamburger} />
      </div>

      {isMenuOpen && (
        <div className={classes.mobileMenu}>
          <nav
            role="navigation"
            aria-label={
              activeLanguage === "FR"
                ? "Navigation mobile principale"
                : "Main mobile navigation"
            }
          >
            <ul className={classes.navigationMobile}>
              {Object.keys(translations).map((key) => (
                <li key={key} className={classes.navItem}>
                  <a
                    href={`#${key}`}
                    tabIndex={0}
                    className={`${classes.navLink} ${isActive(key)}`}
                    aria-label={
                      activeLanguage === "FR"
                        ? `Aller à la section ${translations[key].FR}`
                        : `Go to ${translations[key].EN} section`
                    }
                    onClick={() => {
                      scrollToSection(key);
                      if (window.gtag) {
                        window.gtag("event", "navigation_click", {
                          event_category: "Navigation",
                          event_navigation: `${key} from Hamburger Menu`,
                        });
                      }
                    }}
                  >
                    {translations[key][activeLanguage]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
