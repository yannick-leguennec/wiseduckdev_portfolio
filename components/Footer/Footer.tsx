import classes from "./Footer.module.scss";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import { useRouter } from "next/router";
import { FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import logo from "../../public/images/logos/simple_logo_white.png";
import { BsCopy } from "react-icons/bs";

function Footer() {
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();
  // State to store if the modal should be shown
  const [showModal, setShowModal] = useState(false);
  // State to store the information copied to the clipboard
  const [copiedInfo, setCopiedInfo] = useState("");
  // Router
  const router = useRouter();
  const { pathname, locale } = router;
  // Site URL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  // Logic to determine if we are on the homepage or GPTs page
  const isHomePage = pathname === "/" || pathname === "/fr";
  const isGptsPage =
    pathname.startsWith("/gpts") || pathname.startsWith("/fr/gpts");
  // Determine the GPTs link based on the active language
  const gptsLink = activeLanguage === "FR" ? `/fr/gpts` : `/gpts`;
  const mainLink = activeLanguage === "FR" ? `/fr` : `/`;
  const policyLink =
    activeLanguage === "FR" ? `/fr/privacy-policy` : `/privacy-policy`;

  // Function to handle the copy to clipboard
  const handleCopy = (info) => {
    navigator.clipboard.writeText(info);
    setCopiedInfo(`Info Copied`);
    setTimeout(() => setCopiedInfo(""), 2000); // Clear notification after 2 seconds
  };

  // Object to store the translations for the alt attribute of the logo
  const translations: TranslationsType = {
    altLogo: {
      EN: "Certified Full Stack JavaScript Web and Web Mobile Developer specialized in React Wise Duck Dev Logo",
      FR: "Logo du développeur certifié web et web mobile Full Stack JavaScript spécialisé en React Wise Duck Dev",
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
    buttonClose: {
      EN: "Close",
      FR: "Fermer",
    },
    privacyPolicy: {
      EN: "Privacy Policy",
      FR: "Politique de confidentialité",
    },
  };

  return (
    <>
      {isGptsPage && (
        <div className={classes.donationBanner}>
          <button
            onClick={() => {
              setShowModal(true);
              if (window.gtag) {
                window.gtag("event", "navigation_click", {
                  event_category: "Navigation",
                  event_navigation: "Donation Banner Clicked",
                });
              }
            }}
            className={classes.clickHere}
          >
            {translations.donationBanner[activeLanguage]}
          </button>
        </div>
      )}
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
                  <button
                    onClick={() => {
                      handleCopy("@wiseduckdev");
                      if (window.gtag) {
                        window.gtag("event", "navigation_click", {
                          event_category: "Navigation",
                          event_navigation: "Paypal Copy Clicked",
                        });
                      }
                    }}
                  >
                    <BsCopy />
                  </button>
                </div>
              </div>
              <div className={classes.donationOption}>
                <p className={classes.donationText}>
                  {translations.BTC[activeLanguage]}
                </p>
                <div className={classes.donationCopy}>
                  <p className={classes.donationInfos}>
                    bc1qjalnp6rhvalxeyclcwfcp0madsmghcfzmylxf4
                  </p>
                  <button
                    onClick={() => {
                      handleCopy("bc1qjalnp6rhvalxeyclcwfcp0madsmghcfzmylxf4");
                      if (window.gtag) {
                        window.gtag("event", "navigation_click", {
                          event_category: "Navigation",
                          event_navigation: "BTC Copy Clicked",
                        });
                      }
                    }}
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
                    onClick={() => {
                      handleCopy("0x97553A534aD05fb7D67aFa8fd4d8BCC8C990b477");
                      if (window.gtag) {
                        window.gtag("event", "navigation_click", {
                          event_category: "Navigation",
                          event_navigation: "ETH Copy Clicked",
                        });
                      }
                    }}
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
              {translations.buttonClose[activeLanguage]}
            </button>
          </div>
        </div>
      )}
      <footer className={classes.footer}>
        <div className={classes.linksContainer}>
          <a
            href="mailto:wiseduckdev@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            onClick={() => {
              if (window.gtag) {
                window.gtag("event", "navigation_click", {
                  event_category: "Navigation",
                  event_navigation: "Footer Email Clicked",
                });
              }
            }}
          >
            <MdOutlineAlternateEmail className={classes.logo} />
          </a>

          <a
            href="https://github.com/yannick-leguennec"
            rel="noopener noreferrer"
            target="_blank"
            onClick={() => {
              if (window.gtag) {
                window.gtag("event", "navigation_click", {
                  event_category: "Navigation",
                  event_navigation: "Footer GitHub Clicked",
                });
              }
            }}
          >
            <FaGithub className={classes.logo} />
          </a>

          <a
            href="https://twitter.com/wiseduckdev"
            rel="noopener noreferrer"
            target="_blank"
            onClick={() => {
              if (window.gtag) {
                window.gtag("event", "navigation_click", {
                  event_category: "Navigation",
                  event_navigation: "Footer Twitter Clicked",
                });
              }
            }}
          >
            <FaXTwitter className={classes.logo} />
          </a>
          <a
            href="https://www.linkedin.com/in/wise-duck-dev/"
            rel="noopener noreferrer"
            target="_blank"
            onClick={() => {
              if (window.gtag) {
                window.gtag("event", "navigation_click", {
                  event_category: "Navigation",
                  event_navigation: "Footer LinkedIn Clicked",
                });
              }
            }}
          >
            <FaLinkedinIn className={classes.logo} />
          </a>
          {isHomePage && (
            <a
              href={gptsLink}
              rel="noopener noreferrer"
              onClick={() => {
                if (window.gtag) {
                  window.gtag("event", "navigation_click", {
                    event_category: "Navigation",
                    event_navigation: "Footer GPTs Clicked",
                  });
                }
              }}
            >
              <FaRobot className={classes.logo} />
            </a>
          )}
          {isGptsPage && (
            <a
              href={mainLink}
              rel="noopener noreferrer"
              onClick={() => {
                if (window.gtag) {
                  window.gtag("event", "navigation_click", {
                    event_category: "Navigation",
                    event_navigation: "Footer Portfolio Clicked",
                  });
                }
              }}
            >
              <Image
                src={logo}
                alt={translations.altLogo[activeLanguage]}
                className={classes.logo}
              />
            </a>
          )}
        </div>
        <div className={classes.textContainer}>
          <a
            href={policyLink}
            rel="noopener noreferrer"
            onClick={() => {
              if (window.gtag) {
                window.gtag("event", "navigation_click", {
                  event_category: "Navigation",
                  event_navigation: "Footer Privacy Policy Clicked",
                });
              }
            }}
          >
            <p>{translations.privacyPolicy[activeLanguage]}</p>
          </a>
          <p>© 2024 Wise Duck Dev</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
