"use client";

/**
 * Header Component
 *
 * This component renders the main navigation bar for the website.
 * It includes:
 *  - A logo that links back to the homepage.
 *  - A desktop navigation menu.
 *  - A mobile hamburger menu that opens a full-screen overlay.
 *  - Language switch buttons (EN / FR).
 *
 * It also:
 *  - Tracks the active section while scrolling.
 *  - Smoothly scrolls to sections when navigation links are clicked.
 *  - Uses the Language Context to toggle site language.
 *  - Sends Google Analytics events for interactions.
 */
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useLanguage } from "../../../context/LanguageContext";
import Image from "next/image";
import logo from "../../../public/images/logos/wise-duck-dev-full-stack-js-logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import classes from "./Header.module.scss";
import { TranslationsType } from "../../../types/TranslationsType";

function Header() {
  /** ----------------------------
   *  STATE MANAGEMENT
   *  ---------------------------- */
  // Track which section is currently active (used to highlight nav links)
  const [activeSection, setActiveSection] = useState("main");

  // Track if the mobile menu is currently open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Controls visibility of the mobile menu (kept visible during transition)
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const [menuRoot, setMenuRoot] = useState<HTMLElement | null>(null);

  // Access language context (active language + function to toggle)
  const { activeLanguage, toggleLanguage } = useLanguage();

  // Next.js router instance (used for navigation and query detection)
  const router = useRouter();
  const { pathname, query } = router;

  /** ----------------------------
   *  MENU TOGGLING LOGIC
   *  ---------------------------- */
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Keep the menu visible slightly longer after closing (for smooth fade-out)
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuVisible(true);
    } else {
      // Wait for the CSS transition (0.5s) before removing from DOM
      const timer = setTimeout(() => setIsMenuVisible(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    setMenuRoot(document.getElementById("menu-root"));
  }, []);

  /** ----------------------------
   *  ACTIVE SECTION DETECTION (ScrollSpy)
   *  ---------------------------- */
  useEffect(() => {
    const isOnHomePage = pathname === "/" || pathname === "/fr";

    if (!isOnHomePage) {
      // If not on the homepage, clear the highlight
      setActiveSection("");
      return; // Skip setting up the scroll listener
    }

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
      } else {
        setActiveSection("");
      }
    };

    // Run once and attach listener
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  /** ----------------------------
   *  QUERY-BASED SCROLL HANDLING
   *  ---------------------------- */
  // If the page loads with ?section=xyz, scroll directly to that section
  useEffect(() => {
    if (query.section && typeof query.section === "string") {
      scrollToSectionDirect(query.section);
      router.replace(pathname); // Clear the query from the URL
    }
  }, [query.section]);

  /** ----------------------------
   *  SCROLL LOGIC
   *  ---------------------------- */
  // Add an "active" class for highlighting current section links
  const isActive = (sectionName: string) =>
    activeSection === sectionName ? classes.activeLink : "";

  // Scroll to a section directly (smooth behavior)
  const scrollToSectionDirect = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      // Smooth scroll animation
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });

      // Close menu if it’s open
      if (isMenuOpen) toggleMenu();
    }
  };

  // Scroll to section, or navigate to homepage first if needed
  const scrollToSection = (id: string) => {
    const isOnHomePage = pathname === "/" || pathname === "/fr";
    const homePath = activeLanguage === "FR" ? "/fr" : "/";

    if (!isOnHomePage) {
      // ✅ Use `window.location` for hash navigation across routes
      window.location.href = `${homePath}#${id}`;
    } else {
      scrollToSectionDirect(id);
    }
  };

  /** ----------------------------
   *  TEXT & TRANSLATIONS
   *  ---------------------------- */
  const translations: TranslationsType = {
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

  /** ----------------------------
   *  RENDER
   *  ---------------------------- */
  return (
    <header className={classes.header} role="banner">
      {/* ---------------- LOGO SECTION ---------------- */}
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

      {/* ---------------- DESKTOP NAVIGATION ---------------- */}
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

        {/* ---------------- LANGUAGE BUTTONS (DESKTOP) ---------------- */}
        <div className={classes.buttonsContainer}>
          {(["EN", "FR"] as const).map((lang) => (
            <button
              key={lang}
              className={`${classes.buttonLang} ${
                activeLanguage === lang
                  ? classes.activeButton
                  : classes.inactiveButton
              }`}
              onClick={() => {
                toggleLanguage(lang);
                setIsMenuOpen(false);
                if (window.gtag) {
                  window.gtag("event", "language_change", {
                    event_category: "Language",
                    event_navigation: `${lang} from Header`,
                  });
                }
              }}
              aria-label={
                lang === "EN"
                  ? "Switch to English"
                  : "Passer le site en français"
              }
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* ---------------- HAMBURGER BUTTON (MOBILE) ---------------- */}
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

      {/* ---------------- MOBILE MENU OVERLAY ---------------- */}
      {isMenuVisible &&
        createPortal(
          <div
            className={`${classes.mobileMenu} ${
              isMenuOpen ? classes.open : classes.close
            }`}
            aria-hidden={!isMenuOpen}
          >
            {/* Mobile Navigation Links */}
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
                        setIsMenuOpen(false); // Close menu after click
                        if (window.gtag) {
                          window.gtag("event", "navigation_click", {
                            event_category: "Navigation",
                            event_navigation: `${key} from Mobile Menu`,
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

            {/* Mobile Language Buttons */}
            <div className={classes.mobileLangButtons}>
              {(["EN", "FR"] as const).map((lang) => (
                <button
                  key={lang}
                  className={`${classes.buttonLang} ${
                    activeLanguage === lang
                      ? classes.activeButton
                      : classes.inactiveButton
                  }`}
                  onClick={() => {
                    toggleLanguage(lang);
                    setIsMenuOpen(false);
                    if (window.gtag) {
                      window.gtag("event", "language_change", {
                        event_category: "Language",
                        event_navigation: `${lang} from Mobile Menu`,
                      });
                    }
                  }}
                  aria-label={
                    lang === "EN"
                      ? "Switch to English"
                      : "Passer le site en français"
                  }
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>,
          menuRoot!
        )}
    </header>
  );
}

export default Header;
