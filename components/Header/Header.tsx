"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useLanguage } from "../../context/LanguageContext";
import Image from "next/image";
import logo from "../../public/images/logos/wise-duck-dev-full-stack-js-logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import classes from "./Header.module.scss";
import { TranslationsType } from "../../types/TranslationsType";

function Header() {
  // State variable to store the current section
  const [activeSection, setActiveSection] = useState("main");
  // State variable to store the burger menu status
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Function to toggle the burger menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  // Custom hook to manage the language changes
  const { activeLanguage, toggleLanguage } = useLanguage();
  // Router
  const router = useRouter();
  const { pathname, locale } = router;
  // Site URL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

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
      if (isMenuOpen) toggleMenu();
    }
  };

  // Prevent the default anchor tag behavior and use Next.js router for navigation
  const handleLogoClick = (e) => {
    e.preventDefault(); // Prevent the default anchor action

    // Determine the base path depending on whether the user is within the GPTs section
    let basePath;
    if (pathname.startsWith("/gpts")) {
      basePath = activeLanguage === "FR" ? "/fr/gpts" : "/gpts";
    } else {
      basePath = activeLanguage === "FR" ? "/fr" : "/";
    }

    // Navigate to the determined path
    router.push(basePath);

    if (window.gtag) {
      window.gtag("event", "navigation_click", {
        event_category: "Navigation",
        event_navigation: `Clicked on Logo from Header to ${basePath}`,
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

  // New navigation items for GPTs and Blog pages
  const newNavItems = [
    {
      name: "Portfolio Dev",
      path: locale === "fr" ? "/fr" : "/",
      key: "portfolio",
    },
    {
      name: "GPTs",
      path: locale === "fr" ? "/fr/gpts" : "/gpts",
      key: "gpts",
      active: pathname.includes("gpts"),
    },
    // ! Blog is not ready yet
    // {
    //   name: "Blog",
    //   path: locale === "fr" ? "/fr/blog" : "/blog",
    //   key: "blog",
    //   active: pathname.includes("blog"),
    // },
  ];

  // Determine the content and font style based on the path
  let spanContent = "";
  let spanClass = "";

  if (pathname.includes("/gpts")) {
    spanContent = "GPTs";
    spanClass = classes.containerLogo_fontCaramel; // Make sure your classes object is correctly imported/defined
  } else if (pathname.includes("/blog")) {
    spanContent = "Blog";
    spanClass = classes.containerLogo_fontSpecialElite;
  }

  // Determine if we're on the homepage
  const isHomePage = pathname === "/" || pathname === "/fr";

  // Object to store the translations for the alt attribute of the logo
  const translationAlt: TranslationsType = {
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
        onClick={handleLogoClick}
        className={`${classes.containerLogo}`}
      >
        <Image
          src={logo}
          alt={translationAlt.altLogo[activeLanguage]}
          className={classes.containerLogo_logo}
          priority
        />
        <p className={classes.containerLogo_logoName}>
          the <strong>wise</strong>duck<strong>dev</strong>{" "}
          {spanContent && <span className={spanClass}> {spanContent}</span>}
        </p>
      </a>

      <div className={classes.containerNav}>
        <nav
          className={classes.navigation}
          role="navigation"
          aria-label="Main navigation"
        >
          <ul className={classes.navList}>
            {isHomePage
              ? Object.keys(translations).map((key: string) => (
                  <li key={key} className={classes.navItem}>
                    <a
                      href={`#${key}`}
                      tabIndex={0}
                      className={`${classes.navLink} ${isActive(key)}`}
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
                ))
              : newNavItems.map(({ name, path, key, active }) => (
                  <li key={key}>
                    <a
                      href={path}
                      tabIndex={0}
                      className={`${classes.navLink} ${
                        active ? classes.activeLink : ""
                      }`}
                      onClick={() => {
                        if (window.gtag) {
                          window.gtag("event", "navigation_click", {
                            event_category: "Navigation",
                            event_navigation: `${name} from GPTs Header`,
                          });
                        }
                      }}
                    >
                      {name}
                    </a>
                  </li>
                ))}
            {isHomePage && (
              <li>
                <a
                  href={activeLanguage === "FR" ? "/fr/gpts" : "/gpts"}
                  tabIndex={0}
                  className={classes.navLinkGPTs}
                  onClick={() => {
                    if (window.gtag) {
                      window.gtag("event", "navigation_click", {
                        event_category: "Navigation",
                        event_navigation: "Portofolio to GPTs from Header",
                      });
                    }
                  }}
                >
                  GPTs
                </a>
              </li>
            )}
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
          <nav role="navigation">
            <ul className={classes.navigationMobile}>
              {isHomePage
                ? Object.keys(translations).map((key: string) => (
                    <li key={key} className={classes.navItem}>
                      <a
                        href={`#${key}`}
                        tabIndex={0}
                        className={`${classes.navLink} ${isActive(key)}`}
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
                  ))
                : newNavItems.map(({ name, path, key, active }) => (
                    <li key={key} className={classes.navItem}>
                      <a
                        href={path}
                        tabIndex={0}
                        className={`${classes.navLink} ${
                          active ? classes.activeLink : ""
                        }`}
                        onClick={() => {
                          if (window.gtag) {
                            window.gtag("event", "navigation_click", {
                              event_category: "Navigation",
                              event_navigation: `${name} from Hamburger Menu`,
                            });
                          }
                        }}
                      >
                        {name}
                      </a>
                    </li>
                  ))}
              {isHomePage && (
                <li>
                  <a
                    href={activeLanguage === "FR" ? "/fr/gpts" : "/gpts"}
                    tabIndex={0}
                    className={classes.navLinkGPTs}
                    onClick={() => {
                      if (window.gtag) {
                        window.gtag("event", "navigation_click", {
                          event_category: "Navigation",
                          event_navigation:
                            "Portofolio to GPTs from Hambuger Menu",
                        });
                      }
                    }}
                  >
                    GPTs
                  </a>
                </li>
              )}
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
                if (window.gtag) {
                  window.gtag("event", "language_change", {
                    event_category: "Language",
                    event_navigation: "EN from Hamburger Menu",
                  });
                }
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
                if (window.gtag) {
                  window.gtag("event", "language_change", {
                    event_category: "Language",
                    event_navigation: "FR from Hamburger Menu",
                  });
                }
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
