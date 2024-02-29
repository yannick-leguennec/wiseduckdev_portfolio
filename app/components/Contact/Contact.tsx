import React, { useState } from "react";
import ModalContact from "../Modals/modalContact/modalContact";
import { useLanguage } from "@/app/context/LanguageContext";
import { TranslationsType } from "@/app/types/TranslationsType";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import classes from "./Contact.module.scss";

function Contact() {
  // State to manage the modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();

  // Object to store the translations
  const translations: TranslationsType = {
    name: {
      EN: "Name",
      FR: "Nom",
    },
    subject: {
      EN: "Subject",
      FR: "Sujet",
    },
    message: {
      EN: "Your message",
      FR: "Votre message",
    },
    send: {
      EN: "Send",
      FR: "Envoyer",
    },
    placeholderName: {
      EN: "   Enter your name",
      FR: "   Entrez votre nom",
    },
    placeholderSubject: {
      EN: "   What's this about?",
      FR: "   De quoi s'agit-il ?",
    },
    placeholderEmail: {
      EN: "   Your email address",
      FR: "   Votre adresse email",
    },
    placeholderMessage: {
      EN: "   Type your message here",
      FR: "   Tapez votre message ici",
    },
    errorName: {
      EN: "Name is required",
      FR: "Le nom est requis",
    },
    errorSubject: {
      EN: "Subject is required",
      FR: "Le sujet est requis",
    },
    errorEmail: {
      EN: "Email is required",
      FR: "L'email est requis",
    },
    errorMessage: {
      EN: "Message is required",
      FR: "Le message est requis",
    },
    errorLimitMessage: {
      EN: "Message cannot exceed 1000 characters",
      FR: "Le message ne peut pas dépasser 1000 caractères",
    },
    emailSent: {
      EN: "Your email has been sent successfully.\n We will respond to it shortly.",
      FR: "Votre email a été envoyé avec succès.\n Nous y répondrons dans les plus brefs délais.",
    },
    emailError: {
      EN: "An error occurred while sending the email.\n Please try again.",
      FR: "Une erreur est survenue lors de l'envoi de l'email.\n Veuillez réessayer.",
    },
  };

  // Schema for the form validation
  const ContactSchema = Yup.object().shape({
    name: Yup.string().required(translations.errorName[activeLanguage]),
    subject: Yup.string().required(translations.errorSubject[activeLanguage]),
    email: Yup.string().required(translations.errorEmail[activeLanguage]),
    message: Yup.string()
      .required(translations.errorMessage[activeLanguage])
      .max(1000, translations.errorLimitMessage[activeLanguage]),
  });

  return (
    <section id="contact" className={classes.contactSection}>
      <div className={classes.containerTitle}>
        <h1 className={classes.title}>Contact</h1>
      </div>
      {/* Form initial values */}
      <Formik
        initialValues={{
          name: "",
          subject: "",
          email: "",
          message: "",
        }}
        // Form validation
        validationSchema={ContactSchema}
        // Form submission
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // Prepare the email data
          const emailData = {
            name: values.name,
            email: values.email,
            text: `Name: ${values.name}\nEmail: ${values.email}\nSubject: ${values.subject}\nMessage: ${values.message}`,
          };

          // Send the email
          fetch("/api/email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(emailData),
          })
            // Handle the response
            .then((response) => {
              if (response.ok) {
                return response.json();
              }
              throw new Error(
                "Something went wrong while sending the email. Please try again."
              );
            })
            // Handle the data from the response, open the modal and reset the form
            .then((data) => {
              console.log("Email sent succesfully: ", data);
              setModalMessage(translations.emailSent[activeLanguage]);
              setModalIsOpen(true);
              resetForm();
            })
            // Handle the error
            .catch((error) => {
              console.error(
                "An error occured while sending the email: ",
                error
              );
              // Open the modal
              setModalMessage(translations.emailError[activeLanguage]);
              setModalIsOpen(true);
            })
            // Finally, set the submitting state to false
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting }) => (
          // FORM
          <Form className={classes.formContainer}>
            <div className={classes.upFormContainer}>
              <div className={classes.labelContainer}>
                <label className={classes.label} htmlFor="name">
                  {translations.name[activeLanguage]}
                  <span className={classes.requiredStar}>*</span>
                </label>
                <Field
                  type="text"
                  name="name"
                  placeholder={translations.placeholderName[activeLanguage]}
                  className={classes.input}
                />
                <ErrorMessage name="name" component="div" />
              </div>

              <div className={classes.labelContainer}>
                <label className={classes.label} htmlFor="email">
                  Email <span className={classes.requiredStar}>*</span>
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder={translations.placeholderEmail[activeLanguage]}
                  className={classes.input}
                />
                <ErrorMessage name="email" component="div" />
              </div>
            </div>
            <div className={classes.downFormContainer}>
              <div className={classes.containerSubtitle}>
                <label className={classes.label} htmlFor="sujet">
                  {translations.subject[activeLanguage]}{" "}
                  <span className={classes.requiredStar}>*</span>
                </label>
              </div>
              <Field
                type="text"
                name="subject"
                placeholder={translations.placeholderSubject[activeLanguage]}
                className={classes.input}
              />
              <ErrorMessage name="subject" component="div" />

              <div className={classes.containerSubtitle}>
                <label className={classes.label} htmlFor="message">
                  {translations.message[activeLanguage]}{" "}
                  <span className={classes.requiredStar}>*</span>
                </label>
              </div>
              <Field
                as="textarea"
                name="message"
                rows="5"
                placeholder={translations.placeholderMessage[activeLanguage]}
                className={classes.textarea}
              />
              <ErrorMessage name="message" component="div" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={classes.button}
            >
              {translations.send[activeLanguage]}
            </button>
          </Form>
        )}
      </Formik>
      {/* MODAL */}
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
