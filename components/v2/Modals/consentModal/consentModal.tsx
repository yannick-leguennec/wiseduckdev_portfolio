// import { useState, useEffect } from "react";
// import { useConsent } from "../../../context/ConsentContext";
// import { useLanguage } from "../../../context/LanguageContext";
// import { TranslationsType } from "../../../types/TranslationsType";
// import logo from "../../../public/images/logos/wise-duck-dev-full-stack-js-logo.png";
// import classes from "./consentModal.module.scss";
// import Image from "next/image"; // Import the Image component from next/image

// // Modal props interface
// interface ModalProps {
//   updateConsent: (consent: boolean) => void;
//   setShowModal: (showModal: boolean) => void;
// }

// const ConsentModal = ({ updateConsent, setShowModal }: ModalProps) => {
//   // State hook managing the visibility of the modal
//   const [isVisible, setIsVisible] = useState(false);
//   // Use state hook from context managing the consent status
//   const { consent } = useConsent();
//   // Variable managing the active language
//   const { activeLanguage } = useLanguage();

//   const translations: TranslationsType = {
//     modalTitle: {
//       EN: "Your Privacy Matters to Us",
//       FR: "Votre vie privée est importante pour nous",
//     },
//     modalText: {
//       EN: "To enhance your experience and our site's performance, we gather useful data. May we have your permission to do so?",
//       FR: "Pour enrichir votre expérience et améliorer les performances de notre site, nous recueillons des données utiles. Pouvez-vous nous donner votre accord ?",
//     },
//     acceptButton: {
//       EN: "Accept",
//       FR: "Accepter",
//     },
//     rejectButton: {
//       EN: "Reject",
//       FR: "Rejeter",
//     },
//   };

//   // Effect to manage modal visibility based on consent status
//   useEffect(() => {
//     if (consent === null) {
//       const timeout = setTimeout(() => setIsVisible(true), 2000);
//       return () => clearTimeout(timeout);
//     }
//   }, [consent]);

//   if (!isVisible || consent !== null) {
//     return null;
//   }

//   return (
//     <div className={classes.modalBackdrop}>
//       <div className={classes.modalContent}>
//         <Image
//           src={logo}
//           alt="The Wise Duck Dev logo"
//           className={classes.logo}
//         />{" "}
//         <h2 className={classes.title}>
//           {translations.modalTitle[activeLanguage]}
//         </h2>
//         <p className={classes.message}>
//           {translations.modalText[activeLanguage]}
//         </p>
//         <div className={classes.buttonContainer}>
//           <button
//             className={classes.rejectButton}
//             onClick={() => {
//               updateConsent(false);
//               setShowModal(false);
//             }}
//           >
//             {translations.rejectButton[activeLanguage]}
//           </button>
//           <button
//             className={classes.acceptButton}
//             onClick={() => {
//               updateConsent(true);
//               setShowModal(false);
//             }}
//           >
//             {translations.acceptButton[activeLanguage]}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConsentModal;

import { useState, useEffect } from "react";
import { useConsent } from "../../../../context/ConsentContext";
import { useLanguage } from "../../../../context/LanguageContext";
import { TranslationsType } from "../../../../types/TranslationsType";
import logo from "../../../../public/images/logos/wise-duck-dev-full-stack-js-logo.png";
import classes from "./consentModal.module.scss";
import Image from "next/image";

const ConsentModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { consent, updateConsent } = useConsent(); // Using context directly for updates
  const { activeLanguage } = useLanguage();

  const translations: TranslationsType = {
    modalTitle: {
      EN: "Your Privacy Matters to Us",
      FR: "Votre vie privée est importante pour nous",
    },
    modalText: {
      EN: "To enhance your experience and our site's performance, we gather useful data. May we have your permission to do so?",
      FR: "Pour enrichir votre expérience et améliorer les performances de notre site, nous recueillons des données utiles. Pouvez-vous nous donner votre accord ?",
    },
    acceptButton: {
      EN: "Accept",
      FR: "Accepter",
    },
    rejectButton: {
      EN: "Reject",
      FR: "Rejeter",
    },
  };

  useEffect(() => {
    if (consent === null) {
      const timeout = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timeout);
    }
  }, [consent]);

  if (!isVisible || consent !== null) {
    return null;
  }

  return (
    <div className={classes.modalBackdrop}>
      <div className={classes.modalContent}>
        <Image
          src={logo}
          alt="The Wise Duck Dev logo"
          className={classes.logo}
        />
        <h2 className={classes.title}>
          {translations.modalTitle[activeLanguage]}
        </h2>
        <p className={classes.message}>
          {translations.modalText[activeLanguage]}
        </p>
        <div className={classes.buttonContainer}>
          <button
            className={classes.rejectButton}
            onClick={() => updateConsent(false)}
          >
            {translations.rejectButton[activeLanguage]}
          </button>
          <button
            className={classes.acceptButton}
            onClick={() => updateConsent(true)}
          >
            {translations.acceptButton[activeLanguage]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentModal;
