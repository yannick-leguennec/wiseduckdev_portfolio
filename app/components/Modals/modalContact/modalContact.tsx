import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { TranslationsType } from "@/app/types/TranslationsType";
import classes from "./modalContact.module.scss";

interface ModalProps {
  message: string;
  onClose: () => void;
}

const ModalContact: React.FC<ModalProps> = ({ message, onClose }) => {
  const { activeLanguage } = useLanguage();
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
        <button className={classes.button} onClick={onClose}>
          {translations.close[activeLanguage]}
        </button>
      </div>
    </div>
  );
};

export default ModalContact;
