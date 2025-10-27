import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, name, text } = req.body;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Message from ${name} (${email})`,
    text,
  };

  try {
    await new Promise<void>((resolve, reject) => {
      transport.sendMail(mailOptions, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });

    return res.status(200).json({ message: "Email sent" });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
