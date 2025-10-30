import React from "react";
import { useLanguage } from "../../../../context/LanguageContext";
import { TranslationsType } from "../../../../types/TranslationsType";
import classes from "./modalContact.module.scss";

// Modal props
interface ModalProps {
  message: string;
  onClose: () => void;
}

const ModalContact: React.FC<ModalProps> = ({ message, onClose }) => {
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();
  // Object to store the translations
  const translations: TranslationsType = {
    close: {
      EN: "Close",
      FR: "Fermer",
    },
  };
  return (
    <div className={classes.modalBackdrop}>
      <div className={classes.modalContent}>
        <p className={classes.message}>{message}</p>
        <button
          className={classes.button}
          onClick={onClose}
          aria-label={
            activeLanguage === "EN" ? "Close modal" : "Fermer la fenêtre modale"
          }
        >
          {translations.close[activeLanguage]}
        </button>
      </div>
    </div>
  );
};

export default ModalContact;
