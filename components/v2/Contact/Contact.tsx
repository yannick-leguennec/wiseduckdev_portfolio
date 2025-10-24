/**
 * Contact.tsx
 *
 * This component displays the contact section of the website.
 * It includes:
 *  - A contact introduction (title, subtitle, and social links)
 *  - A contact form built with Formik and validated using Yup
 *  - A success/error modal shown after email submission
 *
 * Features:
 *  - Fully bilingual (EN/FR) via LanguageContext
 *  - Accessible (ARIA-compliant) structure
 *  - SEO-optimized semantic markup
 *  - Google Analytics tracking for link interactions
 */

"use client";

import React, { useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import ModalContact from "../Modals/modalContact/modalContact";
import { useLanguage } from "../../../context/LanguageContext";
import { TranslationsType } from "../../../types/TranslationsType";

import { FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import classes from "./Contact.module.scss";

/** Props expected by the Contact component */
interface ContactProps {
  /** Section ID (used for in-page navigation) */
  id: string;
  /** Callback to notify the parent when the section is loaded */
  onLoaded: (loaded: boolean) => void;
}

function Contact({ id, onLoaded }: ContactProps) {
  /** ----------------------------
   *  STATE MANAGEMENT
   *  ---------------------------- */
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  /** ----------------------------
   *  LANGUAGE CONTEXT
   *  ---------------------------- */
  const { activeLanguage } = useLanguage();

  /** ----------------------------
   *  SECTION REF + LOAD DETECTION
   *  ---------------------------- */
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      // Notify parent that the section is ready
      onLoaded(true);
    }
  }, [onLoaded]);

  /** ----------------------------
   *  TRANSLATIONS (EN / FR)
   *  ---------------------------- */
  const translations: TranslationsType = {
    title: { EN: "Let's connect", FR: "Connectons" },
    subtitle: { EN: "The Wise Duck Dev", FR: "The Wise Duck Dev" },
    text1: {
      EN: "Looking for a cutting-edge web developer?",
      FR: "À la recherche d'un développeur web à la pointe de la technologie?",
    },
    text2: {
      EN: "Let's get to know each other and pave the way for success in the vast digital landscape.",
      FR: "Faisons connaissance et traçons ensemble la voie du succès dans l'immensité du paysage numérique.",
    },
    name: { EN: "Name", FR: "Nom" },
    subject: { EN: "Subject", FR: "Sujet" },
    message: { EN: "Your message", FR: "Votre message" },
    send: { EN: "Send", FR: "Envoyer" },
    placeholderName: { EN: "Enter your name", FR: "Entrez votre nom" },
    placeholderSubject: {
      EN: "What's this about?",
      FR: "De quoi s'agit-il ?",
    },
    placeholderEmail: {
      EN: "Your email address",
      FR: "Votre adresse email",
    },
    placeholderMessage: {
      EN: "Type your message here",
      FR: "Tapez votre message ici",
    },
    errorName: { EN: "Name is required", FR: "Le nom est requis" },
    errorSubject: { EN: "Subject is required", FR: "Le sujet est requis" },
    errorEmail: { EN: "Email is required", FR: "L'email est requis" },
    errorMessage: { EN: "Message is required", FR: "Le message est requis" },
    errorLimitMessage: {
      EN: "Message cannot exceed 1000 characters",
      FR: "Le message ne peut pas dépasser 1000 caractères",
    },
    emailSent: {
      EN: "Your email has been sent successfully.\nWe will respond to it shortly.",
      FR: "Votre email a été envoyé avec succès.\nNous y répondrons dans les plus brefs délais.",
    },
    emailError: {
      EN: "An error occurred while sending the email.\nPlease try again.",
      FR: "Une erreur est survenue lors de l'envoi de l'email.\nVeuillez réessayer.",
    },
  };

  /** ----------------------------
   *  FORM VALIDATION SCHEMA (Yup)
   *  ---------------------------- */
  const ContactSchema = Yup.object().shape({
    name: Yup.string().required(translations.errorName[activeLanguage]),
    subject: Yup.string().required(translations.errorSubject[activeLanguage]),
    email: Yup.string()
      .email("Invalid email address")
      .required(translations.errorEmail[activeLanguage]),
    message: Yup.string()
      .required(translations.errorMessage[activeLanguage])
      .max(1000, translations.errorLimitMessage[activeLanguage]),
  });

  /** ----------------------------
   *  RENDER
   *  ---------------------------- */
  return (
    <section
      ref={ref}
      id={id}
      className={classes.contactSection}
      aria-labelledby={`${id}-title`}
    >
      {/* ---------- TITLE & INTRO TEXT ---------- */}
      <header className={classes.containerTitle}>
        <h2 id={`${id}-title`} className={classes.title}>
          {translations.title[activeLanguage]}
        </h2>
        <h3 className={classes.subtitle}>
          {translations.subtitle[activeLanguage]}
        </h3>
        <p className={classes.text}>{translations.text1[activeLanguage]}</p>
        <p className={classes.text}>{translations.text2[activeLanguage]}</p>

        {/* ---------- SOCIAL MEDIA LINKS ---------- */}
        <nav
          className={classes.socialContainer}
          aria-label={
            activeLanguage === "FR"
              ? "Réseaux sociaux et contact"
              : "Social and contact links"
          }
        >
          {/* Email */}
          <a
            href="mailto:wiseduckdev@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            aria-label={
              activeLanguage === "FR"
                ? "Envoyer un e-mail à Wise Duck Dev"
                : "Send an email to Wise Duck Dev"
            }
            onClick={() =>
              window.gtag?.("event", "navigation_click", {
                event_category: "Navigation",
                event_navigation: "Email Icon Clicked",
              })
            }
          >
            <MdOutlineAlternateEmail className={classes.logo} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yannick-leguennec"
            rel="noopener noreferrer"
            target="_blank"
            aria-label={
              activeLanguage === "FR"
                ? "Accéder au profil GitHub de Wise Duck Dev"
                : "Visit Wise Duck Dev's GitHub profile"
            }
            onClick={() =>
              window.gtag?.("event", "navigation_click", {
                event_category: "Navigation",
                event_navigation: "GitHub Icon Clicked",
              })
            }
          >
            <FaGithub className={classes.logo} />
          </a>

          {/* Twitter (X) */}
          <a
            href="https://twitter.com/wiseduckdev"
            rel="noopener noreferrer"
            target="_blank"
            aria-label={
              activeLanguage === "FR"
                ? "Accéder au profil Twitter de Wise Duck Dev"
                : "Visit Wise Duck Dev's Twitter profile"
            }
            onClick={() =>
              window.gtag?.("event", "navigation_click", {
                event_category: "Navigation",
                event_navigation: "X Icon Clicked",
              })
            }
          >
            <FaXTwitter className={classes.logo} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/wise-duck-dev/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label={
              activeLanguage === "FR"
                ? "Accéder au profil LinkedIn de Wise Duck Dev"
                : "Visit Wise Duck Dev's LinkedIn profile"
            }
            onClick={() =>
              window.gtag?.("event", "navigation_click", {
                event_category: "Navigation",
                event_navigation: "LinkedIn Icon Clicked",
              })
            }
          >
            <FaLinkedinIn className={classes.logo} />
          </a>
        </nav>
      </header>

      {/* ---------- CONTACT FORM ---------- */}
      <Formik
        initialValues={{
          name: "",
          subject: "",
          email: "",
          message: "",
          hiddenField: "", // Honeypot field
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // 1️⃣ Anti-spam check: Honeypot logic
          if (values.hiddenField) {
            console.warn("Spam detected — honeypot triggered.");
            setSubmitting(false);
            return; // Stop processing entirely
          }

          // 2️⃣ Proceed with your actual email sending logic
          const emailData = {
            name: values.name,
            email: values.email,
            text: `Name: ${values.name}\nEmail: ${values.email}\nSubject: ${values.subject}\nMessage: ${values.message}`,
          };

          fetch("/api/email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(emailData),
          })
            .then((response) => {
              if (!response.ok) throw new Error("Failed to send email");
              return response.json();
            })
            .then((data) => {
              console.log("Email sent successfully:", data);
              setModalMessage(translations.emailSent[activeLanguage]);
              setModalIsOpen(true);
              resetForm();
            })
            .catch((error) => {
              console.error("Error sending email:", error);
              setModalMessage(translations.emailError[activeLanguage]);
              setModalIsOpen(true);
            })
            .finally(() => setSubmitting(false));
        }}
      >
        {({ isSubmitting }) => (
          <Form
            className={classes.formContainer}
            aria-label={
              activeLanguage === "FR" ? "Formulaire de contact" : "Contact form"
            }
          >
            {/* Name Field */}
            <label htmlFor="name" className="sr-only">
              {translations.name[activeLanguage]}
            </label>
            <Field
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder={translations.placeholderName[activeLanguage]}
              className={classes.input}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={classes.errorMessage}
            />

            {/* Email Field */}
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={translations.placeholderEmail[activeLanguage]}
              className={classes.input}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={classes.errorMessage}
            />

            {/* Subject Field */}
            <label htmlFor="subject" className="sr-only">
              {translations.subject[activeLanguage]}
            </label>
            <Field
              id="subject"
              name="subject"
              type="text"
              placeholder={translations.placeholderSubject[activeLanguage]}
              className={classes.input}
            />
            <ErrorMessage
              name="subject"
              component="div"
              className={classes.errorMessage}
            />

            {/* Message Field */}
            <label htmlFor="message" className="sr-only">
              {translations.message[activeLanguage]}
            </label>
            <Field
              id="message"
              name="message"
              as="textarea"
              rows="5"
              placeholder={translations.placeholderMessage[activeLanguage]}
              className={classes.textarea}
            />
            <ErrorMessage
              name="message"
              component="div"
              className={classes.errorMessage}
            />

            <Field
              type="text"
              name="hiddenField"
              autoComplete="off"
              className={classes.hiddenField}
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={classes.button}
              aria-disabled={isSubmitting}
            >
              {translations.send[activeLanguage]}
            </button>
          </Form>
        )}
      </Formik>

      {/* ---------- MODAL (AFTER SUBMISSION) ---------- */}
      {modalIsOpen && (
        <ModalContact
          message={modalMessage}
          onClose={() => setModalIsOpen(false)}
        />
      )}
    </section>
  );
}

export default Contact;
