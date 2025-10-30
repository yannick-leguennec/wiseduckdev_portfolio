import { useState, useEffect } from "react";
import { useLanguage } from "../../../../context/LanguageContext";
import Header from "../../Header/Header";
import classes from "./WrappedPrivacyPolicy.module.scss";
import Image from "next/image";
import { TranslationsType } from "../../../../types/TranslationsType";

// ====== IMPORT ALL LANGUAGE + ORIENTATION VARIANTS ======
import policyPictureEN from "../../../public/images/policy_privacy/privacy-policy-page-secure-data-protection-wise-duck-dev-EN.webp";
import policyPictureFR from "../../../public/images/policy_privacy/privacy-policy-page-secure-data-protection-wise-duck-dev-FR.webp";
import policyPictureMobileEN from "../../../public/images/policy_privacy/privacy-policy-page-secure-data-protection-wise-duck-dev-mobile-EN.webp";
import policyPictureMobileFR from "../../../public/images/policy_privacy/privacy-policy-page-secure-data-protection-wise-duck-dev-mobile-FR.webp";

// =============================================
// TRANSLATIONS
// =============================================
const translations: TranslationsType = {
  altPicture: {
    EN: "Portrait of a dignified duck in judge's robes and a white curly wig, symbolizing authority and privacy protection on Wise Duck Dev's Privacy Policy page.",
    FR: "Portrait d'un canard digne en robe de juge et perruque bouclée blanche, symbolisant l'autorité et la protection de la vie privée sur la page de Politique de Confidentialité de Wise Duck Dev.",
  },
};

// =============================================
// RESPONSIVE IMAGE COMPONENT
// =============================================
// Dynamically selects the correct image based on:
// - Language (English / French)
// - Orientation (portrait / landscape)
const ResponsiveImage = ({
  alt,
  language,
}: {
  alt: string;
  language: string;
}) => {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    // Function to detect current orientation
    const handleOrientationChange = () => {
      const matchPortrait = window.matchMedia(
        "(orientation: portrait)"
      ).matches;
      setIsPortrait(matchPortrait);
    };

    // Initial check and listeners
    handleOrientationChange();
    window.addEventListener("orientationchange", handleOrientationChange);
    window.addEventListener("resize", handleOrientationChange);

    // Cleanup listeners when component unmounts
    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);

  // =============================================
  // Select the correct image based on:
  // - Orientation (portrait or not)
  // - Active language (EN or FR)
  // =============================================
  let src;
  if (language === "FR") {
    src = isPortrait ? policyPictureMobileFR : policyPictureFR;
  } else {
    src = isPortrait ? policyPictureMobileEN : policyPictureEN;
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={classes.image}
      priority
      placeholder="blur"
    />
  );
};

// =============================================
// MAIN WRAPPER COMPONENT
// =============================================
function WrappedPrivacyPolicy() {
  const { activeLanguage } = useLanguage();

  return (
    <section className={classes.wrappedMain}>
      {/* Dynamically load the correct localized + orientation-specific image */}
      <ResponsiveImage
        alt={translations.altPicture[activeLanguage]}
        language={activeLanguage}
      />

      {/* Fixed header layer overlaying the background */}
      <div className={classes.headerLayer}>
        <Header />
      </div>

      {/* Main content of the privacy policy */}
    </section>
  );
}

export default WrappedPrivacyPolicy;
