// Contact.tsx
import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { TranslationsType } from "@/app/types/TranslationsType";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import classes from "./Contact.module.scss";

// Composant Contact
function Contact() {
  interface formValues {
    name: string;
    subject: string;
    email: string;
    message: string;
  }

  const { activeLanguage } = useLanguage();

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
  };

  // Schéma de validation des champs du formulaire
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
      <h1 className={classes.title}>Contact</h1>

      <Formik
        initialValues={{
          name: "",
          subject: "",
          email: "",
          message: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // Préparer les données du formulaire pour l'envoi
          const emailData = {
            email: values.email,
            subject: `Message de ${values.name}`,
            text: `Nom: ${values.name}\nEmail: ${values.email}\nSujet: ${values.subject}\nMessage: ${values.message}`,
          };

          // Envoyer une requête POST à votre API route pour envoyer l'email
          fetch("/api/email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(emailData),
          })
            .then((response) => {
              if (response.ok) {
                return response.json();
              }
              throw new Error(
                "Quelque chose s'est mal passé lors de l'envoi de l'email."
              );
            })
            .then((data) => {
              console.log("Email envoyé avec succès:", data);
              // Ici, vous pouvez gérer la logique pour afficher la modale de confirmation
              alert("Email envoyé avec succès!"); // Remplacer par votre logique de modale
              resetForm();
            })
            .catch((error) => {
              console.error("Erreur lors de l'envoi de l'email:", error);
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form className={classes.formContainer}>
            <div className={classes.nameContainer}>
              <div className={classes.labelContainer}>
                <label className={classes.label} htmlFor="name">
                  {translations.name[activeLanguage]}{" "}
                  <span className={classes.requiredStar}>*</span>
                </label>
                <Field
                  type="text"
                  name="name"
                  placeholder={translations.placeholderName[activeLanguage]}
                  className={classes.input}
                />
                <ErrorMessage name="name" component="div" />

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

            <label className={classes.label} htmlFor="sujet">
              {translations.subject[activeLanguage]}{" "}
              <span className={classes.requiredStar}>*</span>
            </label>
            <Field
              type="text"
              name="subject"
              placeholder={translations.placeholderSubject[activeLanguage]}
              className={classes.input}
            />
            <ErrorMessage name="subject" component="div" />

            <label className={classes.label} htmlFor="message">
              {translations.message[activeLanguage]}{" "}
              <span className={classes.requiredStar}>*</span>
            </label>
            <Field
              as="textarea"
              name="message"
              rows="5"
              placeholder={translations.placeholderMessage[activeLanguage]}
              className={classes.input}
            />
            <ErrorMessage name="message" component="div" />

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
    </section>
  );
}

export default Contact;
