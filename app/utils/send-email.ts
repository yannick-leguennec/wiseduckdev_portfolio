// pages/api/send-email.js
import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    // Vos configurations SMTP ici
    service: "gmail",
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM, // Utilisez votre adresse email authentifiée ici
      to: process.env.EMAIL_DESTINATION, // Destinataire (votre propre adresse pour recevoir les messages du formulaire)
      subject: subject, // Sujet de l'email
      text: text, // Corps de l'email
      replyTo: email, // Permet les réponses directes à l'email de l'utilisateur
    });

    res.status(200).send("Email envoyé avec succès !");
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    res.status(500).send("Erreur lors de l'envoi de l'email");
  }
};

export default sendEmail;
