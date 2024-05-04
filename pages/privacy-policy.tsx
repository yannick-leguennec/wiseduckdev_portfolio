import { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useLoader } from "../context/LoaderContext";
import { useLanguage } from "../context/LanguageContext";
import { TranslationsType } from "../types/TranslationsType";
import classes from "../styles/privacy_policy.module.scss";
import policyPictureEN from "../public/images/policy_privacy/privacy-policy-page-secure-data-protection-wise-duck-dev-EN.webp";
import policyPictureFR from "../public/images/policy_privacy/privacy-policy-page-secure-data-protection-wise-duck-dev-FR.webp";
import policyPictureMobileFR from "../public/images/policy_privacy/privacy-policy-page-secure-data-protection-wise-duck-dev-mobile-FR.webp";
import policyPictureMobileEN from "../public/images/policy_privacy/privacy-policy-page-secure-data-protection-wise-duck-dev-mobile-EN.webp";

export default function PrivacyPolicy() {
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();
  // Custom hook to manage the loading state
  const { loading, setLoading } = useLoader();
  // Site URL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  // Router
  const router = useRouter();

  // Effect to manage the loading state and turn it off when the content is loaded
  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  // Component to display the image based on the screen orientation
  function ResponsiveImageComponent() {
    const [isPortrait, setIsPortrait] = useState(false);

    useEffect(() => {
      const handleOrientationChange = () => {
        // Check if the screen is in portrait orientation
        const matchPortrait = window.matchMedia(
          "(orientation: portrait)"
        ).matches;
        setIsPortrait(matchPortrait);
      };

      // Add event listener for orientation changes
      window.addEventListener("orientationchange", handleOrientationChange);
      // Also check on resize in case of devices that do not support orientationchange
      window.addEventListener("resize", handleOrientationChange);

      // Initial check
      handleOrientationChange();

      // Remove event listener on cleanup
      return () => {
        window.removeEventListener(
          "orientationchange",
          handleOrientationChange
        );
        window.removeEventListener("resize", handleOrientationChange);
      };
    }, []);

    // Determine the correct image path based on screen orientation and active language
    const getImagePath = (): string => {
      if (isPortrait) {
        return activeLanguage === "FR"
          ? policyPictureMobileFR.src
          : policyPictureMobileEN.src;
      } else {
        return activeLanguage === "FR"
          ? policyPictureFR.src
          : policyPictureEN.src;
      }
    };

    return (
      <img
        src={getImagePath()}
        alt={translation.altDescription[activeLanguage]}
        className={
          isPortrait ? `${classes.imageMobile}` : `${classes.imageDesktop}`
        }
      />
    );
  }

  // Function to go back to the previous page
  const handleBackClick = () => {
    window.history.back();
  };

  const translation: TranslationsType = {
    altDescription: {
      EN: "Portrait of a dignified duck in judge's robes and a white curly wig, symbolizing authority and privacy protection on Wise Duck Dev's Privacy Policy page.",
      FR: "Portrait d'un canard digne en robe de juge et perruque bouclée blanche, symbolisant l'autorité et la protection de la vie privée sur la page de Politique de Confidentialité de Wise Duck Dev.",
    },
    pageTitle: {
      EN: "Privacy Policy",
      FR: "Politique de confidentialité",
    },
    lastUpdate: {
      EN: "Last update: ",
      FR: "Dernière mise à jour : ",
    },
    date: {
      EN: "May 1, 2024",
      FR: "1er mai 2024",
    },
    introduction: {
      EN: "This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and informs You of Your privacy rights and how the law protects You. We have updated this policy to clearly articulate the technologies used on our website, including Google Analytics, Google Search Console, and device detection via ua-parser-js library.",
      FR: "Cette politique de confidentialité décrit nos politiques et procédures relatives à la collecte, à l'utilisation et à la divulgation de vos informations lorsque vous utilisez le service et vous informe de vos droits en matière de confidentialité et de la manière dont la loi vous protège. Nous avons mis à jour cette politique pour articuler clairement les technologies utilisées sur notre site Web, notamment Google Analytics, Google Search Console et la détection des appareils via la bibliothèque ua-parser-js.",
    },
    interpretationTitle: {
      EN: "Interpretation and Definitions",
      FR: "Interprétation et définitions",
    },
    interpretationSubtitle: {
      EN: "Interpretation",
      FR: "Interprétation",
    },
    interpretationDefinition: {
      EN: "The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.",
      FR: "Les mots dont la première lettre est en majuscule ont des significations définies dans les conditions suivantes. Les définitions suivantes auront la même signification qu'elles apparaissent au singulier ou au pluriel.",
    },
    definitionSubtitle: {
      EN: "Definitions",
      FR: "Définitions",
    },
    definitionIntroSentence: {
      EN: "For the purposes of this Privacy Policy:",
      FR: "Aux fins de cette politique de confidentialité :",
    },
    accountWord: {
      EN: "Account",
      FR: "Compte",
    },
    definitionAccount: {
      EN: " means a unique account created for You to access our Service or parts of our Service.",
      FR: " signifie un compte unique créé pour vous permettre d'accéder à notre service ou à des parties de notre service.",
    },
    affiliateWord: {
      EN: "Affiliate",
      FR: "Affilié",
    },
    definitionAffiliate: {
      EN: " means an entity that controls, is controlled by, or is under common control with a party, where 'control' means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for the election of directors or other managing authority.",
      FR: " signifie une entité qui contrôle, est contrôlée par ou est sous contrôle commun avec une partie, où 'contrôle' signifie la propriété de 50 % ou plus des actions, des intérêts en capitaux propres ou d'autres titres donnant droit de vote pour l'élection des administrateurs ou d'autres autorités de gestion.",
    },
    companyWord: {
      EN: "Company",
      FR: "Société",
    },
    definitionCompany: {
      EN: " (referred to as either 'the Company', 'We', 'Us' or 'Our' in this Agreement) refers to The Wise Duck Dev.",
      FR: " (désignée sous le nom de 'la Société', 'Nous', 'Notre' ou 'Nos' dans le présent Accord) fait référence à The Wise Duck Dev.",
    },
    cookiesWord: {
      EN: "Cookies",
      FR: "Les Cookies",
    },
    definitionCookies: {
      EN: " are small files that are placed on Your computer, mobile device, or any other device by a website, containing the details of Your browsing history on that website among its many uses.",
      FR: " sont de petits fichiers qui sont placés sur votre ordinateur, votre appareil mobile ou tout autre appareil par un site Web, contenant les détails de votre historique de navigation sur ce site Web parmi ses nombreuses utilisations.",
    },
    countryWord: {
      EN: "Country",
      FR: "Pays",
    },
    definitionCountry: {
      EN: " refers to: Quebec, Canada",
      FR: " fait référence à : Québec, Canada",
    },
    deviceWord: {
      EN: "Device",
      FR: "Appareil",
    },
    definitionDevice: {
      EN: " means any device that can access the Service such as a computer, a cellphone, or a digital tablet.",
      FR: " signifie tout appareil qui peut accéder au service tel qu'un ordinateur, un téléphone portable ou une tablette numérique.",
    },
    personalDataWord: {
      EN: "Personal Data",
      FR: "Les Données personnelles",
    },
    definitionPersonalData: {
      EN: " is any information that relates to an identified or identifiable individual.",
      FR: " désignent toute information se rapportant à un individu identifié ou identifiable.",
    },
    serviceWord: {
      EN: "Service",
      FR: "Service",
    },
    definitionService: {
      EN: " refers to the Website.",
      FR: " fait référence au Site Web.",
    },
    serviceProviderWord: {
      EN: "Service Provider",
      FR: "Prestataire de services",
    },
    definitionServiceProvider: {
      EN: " means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service, or to assist the Company in analyzing how the Service is used.",
      FR: " désigne toute personne physique ou morale qui traite les données pour le compte de la Société. Il fait référence à des sociétés ou des individus tiers employés par la Société pour faciliter le Service, fournir le Service pour le compte de la Société, réaliser des services liés au Service ou aider la Société à analyser comment le Service est utilisé.",
    },
    usageDataWord: {
      EN: "Usage Data",
      FR: "Les données d'utilisation",
    },
    definitionUsageData: {
      EN: " refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).",
      FR: " désignent les données collectées automatiquement, générées soit par l'utilisation du Service, soit par l'infrastructure du Service elle-même (par exemple, la durée d'une visite de page).",
    },
    websiteWord: {
      EN: "Website",
      FR: "Site Web",
    },
    definitionWebsite: {
      EN: " refers to The Wise Duck Dev, accessible from https://wiseduckdev.com",
      FR: " fait référence à The Wise Duck Dev, accessible depuis https://wiseduckdev.com",
    },
    youWord: {
      EN: "You",
      FR: "Vous",
    },
    definitionYou: {
      EN: " means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.",
      FR: " désigne la personne physique accédant ou utilisant le Service, ou la société, ou toute autre entité juridique au nom de laquelle cette personne physique accède ou utilise le Service, le cas échéant.",
    },
    collectingDataTitle: {
      EN: "Collecting and Using Your Personal Data",
      FR: "Collecte et utilisation de vos données personnelles",
    },
    collectingDataSubtitle: {
      EN: "Types of Data Collected",
      FR: "Types de données collectées",
    },
    collectingDataSubtitle2: {
      EN: "Personal Data",
      FR: "Données personnelles",
    },
    personalDataParagraph1: {
      EN: "While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:",
      FR: "Lorsque vous utilisez notre Service, nous pouvons vous demander de nous fournir certaines informations personnellement identifiables qui peuvent être utilisées pour vous contacter ou vous identifier. Les informations personnellement identifiables peuvent inclure, mais sans s'y limiter :",
    },
    personalDataList1: {
      EN: "Usage Data",
      FR: "Données d'utilisation",
    },
    collectingDataSubtitle3: {
      EN: "Usage Data",
      FR: "Données d'utilisation",
    },
    usageDataParagraph1: {
      EN: "Usage Data is collected automatically when using the Service. This includes data related to your device type detected through the ua-parser-js library, which helps us tailor the experience to the device you are using.",
      FR: "Les données d'utilisation sont collectées automatiquement lors de l'utilisation du Service. Cela inclut les données relatives à votre type d'appareil détecté grâce à la bibliothèque ua-parser-js, ce qui nous aide à adapter le design de la platforme en fonction de l'appareil que vous utilisez.",
    },
    collectingDataSubtitle4: {
      EN: "Tracking Technologies and Cookies",
      FR: "Technologies de suivi et cookies",
    },
    cookiesParagraph1: {
      EN: "Our Service does not use cookies except as required by third-party services such as Google Analytics and Google Search Console for website analytics and performance improvements. These services may set cookies to function correctly.",
      FR: "Notre Service n'utilise pas de cookies, sauf ceux relatifs et requis par les services tiers suivant: Google Analytics et Google Search Console, outils mis à la disposition du site web par Google pour l'analyse du site Web et l'amélioration des performances. Ces services peuvent définir des cookies pour fonctionner correctement.",
    },
    cookiesParagraph2: {
      EN: "Google Analytics: Helps us analyze user interactions and traffic, managed by cookies that track and report on your interactions on our website. Google's privacy policy can be accessed at: ",
      FR: "Google Analytics : Nous aide à analyser les interactions des utilisateurs et le trafic, géré par des cookies qui suivent et rapportent vos interactions sur notre site Web. La politique de confidentialité de Google peut être consultée à l'adresse suivante : ",
    },
    cookiesParagraph3: {
      EN: "Google Search Console: Used for monitoring and managing site presence in Google Search results. Information about Google’s data collection through Search Console can be viewed in their privacy policy.",
      FR: "Google Search Console : Utilisé pour surveiller et gérer la présence du site dans les résultats de recherche Google. Les informations sur la collecte de données par Google via Search Console peuvent être consultées dans leur politique de confidentialité.",
    },
    useDataSubtitle: {
      EN: "Use of Your Personal Data",
      FR: "Utilisation de vos données personnelles",
    },
    useDataParagraph1: {
      EN: "The Company may use Personal Data for the following purposes:",
      FR: "La Société peut utiliser les données personnelles aux fins suivantes :",
    },
    useDataList1: {
      EN: "To provide, maintain, and analyze the usage of our Service: Including monitoring the usage through technologies like Google Analytics and adjustments based on device type detection using userAgent.",
      FR: "Pour fournir, maintenir et analyser l'utilisation de notre Service : y compris surveiller l'utilisation grâce à des technologies comme Google Analytics et apporter des ajustements en fonction de la détection du type d'appareil à l'aide de userAgent.",
    },
    useDataList2: {
      EN: "To manage Your requests: To attend and manage Your requests when contacting us through our contact form.",
      FR: "Pour gérer vos demandes : Pour répondre et gérer vos demandes lorsque vous nous contactez via notre formulaire de contact.",
    },
    retentionDataSubtitle: {
      EN: "Retention of Your Personal Data",
      FR: "Conservation de vos données personnelles",
    },
    retentionDataParagraph1: {
      EN: "The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.",
      FR: "La Société ne conservera vos données personnelles que le temps nécessaire aux fins énoncées dans la présente politique de confidentialité. Nous conserverons et utiliserons vos données personnelles dans la mesure nécessaire pour nous conformer à nos obligations légales (par exemple, si nous sommes tenus de conserver vos données pour nous conformer aux lois applicables), résoudre les litiges et faire respecter nos accords et politiques juridiques.",
    },
    transfertDataSubtitle: {
      EN: "Transfer of Your Personal Data",
      FR: "Transfert de vos données personnelles",
    },
    transfertDataParagraph1: {
      EN: "Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country, or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.",
      FR: "Vos informations, y compris les données personnelles, sont traitées dans les bureaux d'exploitation de la Société et dans tout autre lieu où se trouvent les parties impliquées dans le traitement. Cela signifie que ces informations peuvent être transférées vers — et conservées sur — des ordinateurs situés en dehors de votre état, province, pays ou autre juridiction gouvernementale où les lois sur la protection des données peuvent différer de celles de votre juridiction.",
    },
    transfertDataParagraph2: {
      EN: "Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.",
      FR: "Votre consentement à la présente politique de confidentialité suivi de votre soumission de ces informations représente votre accord à ce transfert.",
    },
    transfertDataParagraph3: {
      EN: "The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.",
      FR: "La Société prendra toutes les mesures raisonnablement nécessaires pour garantir que vos données sont traitées en toute sécurité et conformément à la présente politique de confidentialité et aucun transfert de vos données personnelles ne sera effectué vers une organisation ou un pays à moins qu'il n'y ait des contrôles adéquats en place, y compris la sécurité de vos données et autres informations personnelles.",
    },
    deleteDataSubtitle: {
      EN: "Delete Your Personal Data",
      FR: "Suppression de vos données personnelles",
    },
    deleteDataParagraph1: {
      EN: "You have the right to request the deletion of Your Personal Data stored by the Company. Please note that we may be required to retain this information for legal reasons.",
      FR: "Vous avez le droit de demander la suppression de vos données personnelles stockées par la Société. Veuillez noter que nous pouvons être tenus de conserver ces informations pour des raisons légales.",
    },
    deleteDataParagraph2: {
      EN: "If you wish to delete your Personal Data, please contact us.",
      FR: "Si vous souhaitez supprimer vos données personnelles, veuillez nous contacter.",
    },
    disclosureDataSubtitle: {
      EN: "Disclosure of Your Personal Data",
      FR: "Divulgation de vos données personnelles",
    },
    disclosureDataPoint1: {
      EN: "Business Transactions",
      FR: "Transactions commerciales",
    },
    disclosureDataParagraph1: {
      EN: "If the Company is involved in a merger, acquisition, or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.",
      FR: "Si la Société est impliquée dans une fusion, une acquisition ou une vente d'actifs, vos données personnelles peuvent être transférées. Nous vous informerons avant que vos données personnelles ne soient transférées et ne soient soumises à une politique de confidentialité différente.",
    },
    disclosureDataPoint2: {
      EN: "Law enforcement",
      FR: "Application de la loi",
    },
    disclosureDataParagraph2: {
      EN: "Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).",
      FR: "Dans certaines circonstances, la Société peut être tenue de divulguer vos données personnelles si la loi l'exige ou en réponse à des demandes valides des autorités publiques (par exemple un tribunal ou un organisme gouvernemental).",
    },
    disclosureDataPoint3: {
      EN: "Other legal requirements",
      FR: "Autres exigences légales",
    },
    disclosureDataParagraph3: {
      EN: "The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:",
      FR: "La Société peut divulguer vos données personnelles de la conviction sincère que cette action est nécessaire pour :",
    },
    disclosureDataList1: {
      EN: "Comply with a legal obligation",
      FR: "Se conformer à une obligation légale",
    },
    disclosureDataList2: {
      EN: "Protect and defend the rights or property of the Company",
      FR: "Protéger et défendre les droits ou les biens de la Société",
    },
    disclosureDataList3: {
      EN: "Prevent or investigate possible wrongdoing in connection with the Service",
      FR: "Empêcher ou enquêter sur d'éventuels actes répréhensibles en lien avec le Service",
    },
    disclosureDataList4: {
      EN: "Protect the personal safety of Users of the Service or the public",
      FR: "Protéger la sécurité personnelle des utilisateurs du Service ou du public",
    },
    disclosureDataList5: {
      EN: "Protect against legal liability",
      FR: "Se protéger contre la responsabilité légale",
    },
    securityDataSubtitle: {
      EN: "Security of Your Personal Data",
      FR: "Sécurité de vos données personnelles",
    },
    securityDataParagraph1: {
      EN: "The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.",
      FR: "La sécurité de vos données personnelles est importante pour nous, mais n'oubliez pas qu'aucune méthode de transmission sur Internet, ou méthode de stockage électronique n'est 100 % sécurisée. Bien que nous nous efforcions d'utiliser des moyens commercialement acceptables pour protéger vos données personnelles, nous ne pouvons garantir leur sécurité absolue.",
    },
    GDPRTitle: {
      EN: "Legal Basis for Processing Personal Data under GDPR",
      FR: "Base légale du traitement des données personnelles en vertu du RGPD",
    },
    GDPRParagraph1: {
      EN: "We process Personal Data under the following bases: ",
      FR: "Nous traitons les données personnelles sur les bases suivantes :",
    },
    GDPRList1: {
      EN: "Consent: You have given Your consent for processing Personal Data for one or more specific purposes.",
      FR: "Consentement : Vous avez donné votre consentement pour le traitement des données personnelles à des fins spécifiques.",
    },
    GDPRList2: {
      EN: "Performance of a contract: Provision of Personal Data is necessary for the performance of an agreement with You and/or for any pre-contractual obligations thereof.",
      FR: "Exécution d'un contrat : La fourniture de données personnelles est nécessaire à l'exécution d'un accord avec vous et/ou à toute obligation précontractuelle de celui-ci.",
    },
    GDPRList3: {
      EN: "Legal obligations: Processing Personal Data is necessary for compliance with a legal obligation to which the Company is subject.",
      FR: "Obligations légales : Le traitement des données personnelles est nécessaire pour se conformer à une obligation légale à laquelle la Société est soumise.",
    },
    GDPRList4: {
      EN: "Vital interests: Processing Personal Data is necessary in order to protect Your vital interests or of another natural person.",
      FR: "Intérêts vitaux : Le traitement des données personnelles est nécessaire pour protéger vos intérêts vitaux ou ceux d'une autre personne physique.",
    },
    GDPRList5: {
      EN: "Public interests: Processing Personal Data is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Company.",
      FR: "Intérêts publics : Le traitement des données personnelles est lié à une tâche qui est effectuée dans l'intérêt public ou dans l'exercice de l'autorité officielle conférée à la Société.",
    },
    GDPRList6: {
      EN: "Legitimate interests: Processing Personal Data is necessary for the purposes of the legitimate interests pursued by the Company.",
      FR: "Intérêts légitimes : Le traitement des données personnelles est nécessaire aux fins des intérêts légitimes poursuivis par la Société.",
    },
    CCPATitle: {
      EN: "CCPA-Related Information",
      FR: "Informations relatives à la CCPA",
    },
    CCPAParagraph1: {
      EN: "Under the California Consumer Privacy Act (CCPA), California consumers have the right to: ",
      FR: "En vertu de la California Consumer Privacy Act (CCPA), les consommateurs californiens ont le droit de :",
    },
    CCPAList1: {
      EN: "Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.",
      FR: "Demander à une entreprise qui collecte les données personnelles d'un consommateur de divulguer les catégories et les éléments spécifiques de données personnelles qu'une entreprise a collectés sur les consommateurs.",
    },
    CCPAList2: {
      EN: "Request that a business delete any personal data about the consumer that a business has collected.",
      FR: "Demander à une entreprise de supprimer toutes les données personnelles concernant le consommateur que l'entreprise a collectées.",
    },
    CCPAList3: {
      EN: "Request that a business that sells a consumer's personal data, not sell the consumer's personal data.",
      FR: "Demander à une entreprise qui vend les données personnelles d'un consommateur de ne pas vendre les données personnelles du consommateur.",
    },
    GDPRTitle2: {
      EN: "GDPR Rights",
      FR: "Droits RGPD",
    },
    GDPRParagraph2: {
      EN: "If you are from the European Economic Area (EEA), you have certain data protection rights aimed at strictly limiting the use of your personal data, including the right to access, correct, or ask for deletion of your personal data.",
      FR: "Si vous êtes ressortissant de l'Espace économique européen (EEE), vous disposez de certains droits de protection des données visant à limiter strictement l'utilisation de vos données personnelles, y compris le droit d'accès, de rectification ou de suppression de vos données personnelles.",
    },
    childrenPrivacyTitle: {
      EN: "Children's Privacy",
      FR: "Confidentialité des enfants",
    },
    childrenPrivacyParagraph1: {
      EN: "Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.",
      FR: "Notre Service ne s'adresse à personne de moins de 13 ans. Nous ne collectons pas sciemment d'informations personnellement identifiables auprès de quiconque de moins de 13 ans. Si vous êtes un parent ou un tuteur et que vous savez que votre enfant nous a fourni des données personnelles, veuillez nous contacter. Si nous découvrons que nous avons collecté des données personnelles auprès de quiconque de moins de 13 ans sans vérification du consentement parental, nous prenons des mesures pour supprimer ces informations de nos serveurs.",
    },
    linksToOtherSitesTitle: {
      EN: "Links to Other Websites",
      FR: "Liens vers d'autres sites Web",
    },
    linksToOtherSitesParagraph1: {
      EN: "Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.",
      FR: "Notre Service peut contenir des liens vers d'autres sites Web qui ne sont pas exploités par nous. Si vous cliquez sur un lien tiers, vous serez dirigé vers le site de ce tiers. Nous vous recommandons vivement de consulter la politique de confidentialité de chaque site que vous visitez.",
    },
    changeToPrivacyPolicyTitle: {
      EN: "Changes to this Privacy Policy",
      FR: "Modification de cette politique de confidentialité",
    },
    changeToPrivacyPolicyParagraph1: {
      EN: "We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.",
      FR: "Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique de confidentialité sur cette page.",
    },
    changeToPrivacyPolicyParagraph2: {
      EN: "We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the 'Last updated' date at the top of this Privacy Policy.",
      FR: "Nous vous informerons par courriel et/ou par un avis en évidence sur notre Service, avant que le changement ne devienne effectif et nous mettrons à jour la 'Dernière mise à jour' en haut de cette politique de confidentialité.",
    },
    changeToPrivacyPolicyParagraph3: {
      EN: "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
      FR: "Il est recommandé de consulter périodiquement cette politique de confidentialité pour tout changement. Les changements apportés à cette politique de confidentialité sont effectifs lorsqu'ils sont publiés sur cette page.",
    },
    contactUsTitle: {
      EN: "Contact Us",
      FR: "Contactez-nous",
    },
    contactUsParagraph1: {
      EN: "If you have any questions about this Privacy Policy, You can contact us:",
      FR: "Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter :",
    },
    contactUsEmail: {
      EN: "By email: wiseduckdev@gmail.com",
      FR: "Par courriel : wiseduckdev@gmail.com",
    },
    contactForm: {
      EN: "Or by using our contact form : ",
      FR: "Ou en utilisant notre formulaire de contact: ",
    },
    contactLink: {
      EN: "Contact Form",
      FR: "Formulaire de contact",
    },
    licenseTitle: {
      EN: "Content License Policy - The Wise Duck Dev",
      FR: "Politique de licence de contenu - The Wise Duck Dev",
    },
    copyrightSubtitle: {
      EN: "Copyright and Intellectual Property",
      FR: "Droits d'auteur et propriété intellectuelle",
    },
    copyrightParagraph1: {
      EN: "All content on this website, including but not limited to text, images and other media, is the exclusive property of The Wise Duck Dev and is protected by copyright and other intellectual property laws.",
      FR: "Tout le contenu de ce site Web, y compris, mais sans s'y limiter, le texte, les images et autres médias, est la propriété exclusive de The Wise Duck Dev et est protégé par les lois sur le droit d'auteur et la propriété intellectuelle.",
    },
    permissionSubtitle: {
      EN: "Permitted Use",
      FR: "Utilisation autorisée",
    },
    permissionParagraph1: {
      EN: "Users are granted a limited, non-exclusive, non-transferable license to view, share, and discuss the content on this website for personal, non-commercial use. Bloggers and other third-party websites are permitted to publish articles, reviews, or commentary about this website, provided that they:",
      FR: "Les utilisateurs se voient accorder une licence limitée, non exclusive et non transférable pour visualiser, partager et discuter du contenu de ce site Web à des fins personnelles et non commerciales. Les blogueurs et autres sites Web tiers sont autorisés à publier des articles, des critiques ou des commentaires sur ce site Web, à condition qu'ils :",
    },
    permissionItem1: {
      EN: "Do not reproduce, copy, or distribute any of the website's content, code, design, or other intellectual property without prior written permission from The Wise Duck Dev.",
      FR: "Ne reproduisent, ne copient ou ne distribuent aucun contenu, code, design ou autre propriété intellectuelle du site Web sans l'autorisation écrite préalable de The Wise Duck Dev.",
    },
    permissionItem2: {
      EN: "Provide proper attribution to The Wise Duck Dev and include a link to the website.",
      FR: "Fournissent une attribution appropriée à The Wise Duck Dev et incluent un lien vers le site Web.",
    },
    prohibitedSubtitle: {
      EN: "Prohibited Activities",
      FR: "Activités interdites",
    },
    prohibitedParagraph1: {
      EN: "The following activities are strictly prohibited without the express written consent of The Wise Duck Dev:",
      FR: "Les activités suivantes sont strictement interdites sans le consentement écrit exprès de The Wise Duck Dev :",
    },
    prohibitedItem1: {
      EN: "Copying, reproducing, or distributing any content, code, design, data, or other intellectual property from the website",
      FR: "Copier, reproduire ou distribuer tout contenu, code, design, données ou autre propriété intellectuelle du site Web",
    },
    prohibitedItem2: {
      EN: "Modifying, creating derivative works from, or publicly displaying any of the website's intellectual property",
      FR: "Modifier, créer des œuvres dérivées à partir de, ou afficher publiquement toute propriété intellectuelle du site Web",
    },
    prohibitedItem3: {
      EN: "Embedding, framing, or integrating any part of the website on other websites or platforms",
      FR: "Intégrer, encadrer ou intégrer une partie du site Web sur d'autres sites Web ou plateformes",
    },
    prohibitedItem4: {
      EN: "Extracting, scraping, or indexing any content or data from the website for commercial purposes",
      FR: "Extraire, gratter ou indexer tout contenu ou données du site Web à des fins commerciales",
    },
    enforcementSubtitle: {
      EN: "Enforcement",
      FR: "Application",
    },
    enforcementParagraph1: {
      EN: "The Wise Duck Dev reserves the right to take legal action against any individual or entity that violates the terms of this Content License Policy. Violators may be subject to civil and criminal penalties.",
      FR: "The Wise Duck Dev se réserve le droit d'intenter une action en justice contre toute personne ou entité qui viole les termes de cette politique de licence de contenu. Les contrevenants peuvent être passibles de sanctions civiles et pénales.",
    },
    button: {
      EN: "Go back",
      FR: "Retourner",
    },
  };

  return (
    <>
      <Header />
      <main className={classes.mainContainer}>
        <div className={classes.imageContainer}>
          <ResponsiveImageComponent />
        </div>
        <div className={classes.textContainer}>
          <section className={classes.policyTextContainer}>
            <h1 className={classes.title1}>
              {translation.pageTitle[activeLanguage]}
            </h1>
            <p className={classes.title3}>
              {translation.lastUpdate[activeLanguage]}
              {translation.date[activeLanguage]}
            </p>
            <p className={classes.paragraph}>
              {translation.introduction[activeLanguage]}
            </p>
            <h2 className={classes.title2}>
              {translation.interpretationTitle[activeLanguage]}
            </h2>
            <h3 className={classes.title3}>
              {translation.interpretationSubtitle[activeLanguage]}
            </h3>
            <p className={classes.paragraph}>
              {translation.interpretationDefinition[activeLanguage]}
            </p>
            <h3 className={classes.title3}>
              {translation.definitionSubtitle[activeLanguage]}
            </h3>
            <p className={classes.paragraph}>
              {translation.definitionIntroSentence[activeLanguage]}
            </p>
            <ul className={classes.unorderedList}>
              <li className={classes.listItem}>
                <strong>{translation.accountWord[activeLanguage]}</strong>
                {translation.definitionAccount[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                <strong>{translation.affiliateWord[activeLanguage]}</strong>
                {translation.definitionAffiliate[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                <strong>{translation.companyWord[activeLanguage]}</strong>
                {translation.definitionCompany[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                <strong>{translation.cookiesWord[activeLanguage]}</strong>
                {translation.definitionCookies[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                <strong>{translation.countryWord[activeLanguage]}</strong>
                {translation.definitionCountry[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                <strong>{translation.deviceWord[activeLanguage]}</strong>
                {translation.definitionDevice[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                <strong>{translation.personalDataWord[activeLanguage]}</strong>
                {translation.definitionPersonalData[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                <strong>{translation.serviceWord[activeLanguage]}</strong>
                {translation.definitionService[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                <strong>
                  {translation.serviceProviderWord[activeLanguage]}
                </strong>
                {translation.definitionServiceProvider[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                <strong>{translation.usageDataWord[activeLanguage]}</strong>
                {translation.definitionUsageData[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                <strong>{translation.websiteWord[activeLanguage]}</strong>
                {translation.definitionWebsite[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                <strong>{translation.youWord[activeLanguage]}</strong>
                {translation.definitionYou[activeLanguage]}
              </li>
            </ul>
            <h2 className={classes.title2}>
              {translation.collectingDataTitle[activeLanguage]}
            </h2>
            <h3 className={classes.title3}>
              {translation.collectingDataSubtitle[activeLanguage]}
            </h3>
            <h4 className={classes.title4}>
              {translation.collectingDataSubtitle2[activeLanguage]}
            </h4>
            <p className={classes.paragraph}>
              {translation.personalDataParagraph1[activeLanguage]}
            </p>
            <ul className={classes.unorderedList}>
              <li className={classes.listItem}>
                <strong>{translation.personalDataList1[activeLanguage]}</strong>
              </li>
            </ul>
            <h4 className={classes.title4}>
              {translation.collectingDataSubtitle3[activeLanguage]}
            </h4>
            <p className={classes.paragraph}>
              {translation.usageDataParagraph1[activeLanguage]}
            </p>
            <h4 className={classes.title4}>
              {translation.collectingDataSubtitle4[activeLanguage]}
            </h4>
            <p className={classes.paragraph}>
              {translation.cookiesParagraph1[activeLanguage]}
            </p>
            <p className={classes.paragraph}>
              {translation.cookiesParagraph2[activeLanguage]}
              <a
                href="https://policies.google.com/privacy?hl=en"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                Google Privacy Policies
              </a>
            </p>

            <p className={classes.paragraph}>
              {translation.cookiesParagraph3[activeLanguage]}
            </p>

            <h2 className={classes.title2}>
              {translation.useDataSubtitle[activeLanguage]}
            </h2>
            <p className={classes.paragraph}>
              {translation.useDataParagraph1[activeLanguage]}
            </p>
            <ul className={classes.unorderedList}>
              <li className={classes.listItem}>
                {translation.useDataList1[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                {translation.useDataList2[activeLanguage]}
              </li>
            </ul>
            <h2 className={classes.title2}>
              {translation.retentionDataSubtitle[activeLanguage]}
            </h2>
            <p className={classes.paragraph}>
              {translation.retentionDataParagraph1[activeLanguage]}
            </p>
            <h2 className={classes.title2}>
              {translation.transfertDataSubtitle[activeLanguage]}
            </h2>
            <p className={classes.paragraph}>
              {translation.transfertDataParagraph1[activeLanguage]}
            </p>
            <p className={classes.paragraph}>
              {translation.transfertDataParagraph2[activeLanguage]}
            </p>
            <p className={classes.paragraph}>
              {translation.transfertDataParagraph3[activeLanguage]}
            </p>
            <h2 className={classes.title2}>
              {translation.deleteDataSubtitle[activeLanguage]}
            </h2>
            <p className={classes.paragraph}>
              {translation.deleteDataParagraph1[activeLanguage]}
            </p>
            <p className={classes.paragraph}>
              {translation.deleteDataParagraph2[activeLanguage]}
            </p>
            <h2 className={classes.title2}>
              {translation.disclosureDataSubtitle[activeLanguage]}
            </h2>
            <h3 className={classes.title3}>
              {translation.disclosureDataPoint1[activeLanguage]}
            </h3>
            <p className={classes.paragraph}>
              {translation.disclosureDataParagraph1[activeLanguage]}
            </p>
            <h3 className={classes.title3}>
              {translation.disclosureDataPoint2[activeLanguage]}
            </h3>
            <p className={classes.paragraph}>
              {translation.disclosureDataParagraph2[activeLanguage]}
            </p>
            <h3 className={classes.title3}>
              {translation.disclosureDataPoint3[activeLanguage]}
            </h3>
            <p className={classes.paragraph}>
              {translation.disclosureDataParagraph3[activeLanguage]}
            </p>
            <ul className={classes.unorderedList}>
              <li className={classes.listItem}>
                {translation.disclosureDataList1[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                {translation.disclosureDataList2[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                {translation.disclosureDataList3[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                {translation.disclosureDataList4[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                {translation.disclosureDataList5[activeLanguage]}
              </li>
            </ul>
            <h2 className={classes.title2}>
              {translation.securityDataSubtitle[activeLanguage]}
            </h2>
            <p className={classes.paragraph}>
              {translation.securityDataParagraph1[activeLanguage]}
            </p>
            <h2 className={classes.title2}>
              {translation.GDPRTitle[activeLanguage]}
            </h2>
            <p className={classes.paragraph}>
              {translation.GDPRParagraph1[activeLanguage]}
            </p>
            <ul className={classes.unorderedList}>
              <li className={classes.listItem}>
                {translation.GDPRList1[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                {translation.GDPRList2[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                {translation.GDPRList3[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                {translation.GDPRList4[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                {translation.GDPRList5[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                {translation.GDPRList6[activeLanguage]}
              </li>
            </ul>
            <h2 className={classes.title2}>
              {translation.CCPATitle[activeLanguage]}
            </h2>
            <p className={classes.paragraph}>
              {translation.CCPAParagraph1[activeLanguage]}
            </p>
            <ul className={classes.unorderedList}>
              <li className={classes.listItem}>
                {translation.CCPAList1[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                {translation.CCPAList2[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                {translation.CCPAList3[activeLanguage]}
              </li>
            </ul>
            <h2 className={classes.title2}>
              {translation.GDPRTitle2[activeLanguage]}
            </h2>
            <p className={classes.paragraph}>
              {translation.GDPRParagraph2[activeLanguage]}
            </p>
            <h2 className={classes.title2}>
              {translation.childrenPrivacyTitle[activeLanguage]}
            </h2>
            <p className={classes.paragraph}>
              {translation.childrenPrivacyParagraph1[activeLanguage]}
            </p>
            <h2 className={classes.title2}>
              {translation.linksToOtherSitesTitle[activeLanguage]}
            </h2>
            <p className={classes.paragraph}>
              {translation.linksToOtherSitesParagraph1[activeLanguage]}
            </p>
            <h2 className={classes.title2}>
              {translation.changeToPrivacyPolicyTitle[activeLanguage]}
            </h2>
            <p className={classes.paragraph}>
              {translation.changeToPrivacyPolicyParagraph1[activeLanguage]}
            </p>
            <p className={classes.paragraph}>
              {translation.changeToPrivacyPolicyParagraph2[activeLanguage]}
            </p>
            <p className={classes.paragraph}>
              {translation.changeToPrivacyPolicyParagraph3[activeLanguage]}
            </p>
          </section>
          <section className={classes.licenseTextContainer}>
            <h1 className={classes.title1}>
              {translation.licenseTitle[activeLanguage]}
            </h1>
            <h2 className={classes.title2}>
              {translation.copyrightSubtitle[activeLanguage]}
            </h2>
            <p className={classes.paragraph}>
              {translation.copyrightParagraph1[activeLanguage]}
            </p>
            <h2 className={classes.title2}>
              {translation.permissionSubtitle[activeLanguage]}
            </h2>
            <p className={classes.paragraph}>
              {translation.permissionParagraph1[activeLanguage]}
            </p>
            <ul className={classes.unorderedList}>
              <li className={classes.listItem}>
                {translation.permissionItem1[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                {translation.permissionItem2[activeLanguage]}
              </li>
            </ul>
            <h2 className={classes.title2}>
              {translation.prohibitedSubtitle[activeLanguage]}
            </h2>
            <p className={classes.paragraph}>
              {translation.prohibitedParagraph1[activeLanguage]}
            </p>
            <ul className={classes.unorderedList}>
              <li className={classes.listItem}>
                {translation.prohibitedItem1[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                {translation.prohibitedItem2[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                {translation.prohibitedItem3[activeLanguage]}
              </li>
              <li className={classes.listItem}>
                {translation.prohibitedItem4[activeLanguage]}
              </li>
            </ul>
            <h2 className={classes.title2}>
              {translation.enforcementSubtitle[activeLanguage]}
            </h2>
            <p className={classes.paragraph}>
              {translation.enforcementParagraph1[activeLanguage]}
            </p>
            <h2 className={classes.title2}>
              {translation.contactUsTitle[activeLanguage]}
            </h2>
            <p className={classes.paragraph}>
              {translation.contactUsParagraph1[activeLanguage]}
            </p>
            <p className={classes.paragraph}>
              {translation.contactUsEmail[activeLanguage]}
            </p>
            <p className={classes.paragraph}>
              {translation.contactForm[activeLanguage]}
              <a
                href={activeLanguage === "EN" ? `/#contact` : `/fr#contact`}
                rel="noreferrer"
                className={classes.link}
              >
                {translation.contactLink[activeLanguage]}
              </a>
            </p>
            <div className={classes.buttonContainer}>
              <button onClick={handleBackClick} className={classes.button}>
                {translation.button[activeLanguage]}
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <SpeedInsights />
    </>
  );
}

export const getStaGetStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
