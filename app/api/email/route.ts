import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  // Get the email, name and text from the request body
  const { email, name, text } = await request.json();

  // Create a transport object using the nodemailer module
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Create the mail options / parameters
  const mailOptions: Mail.Options = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    text: text,
  };

  // Create a promise to send the email
  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    // Send the email
    await sendMailPromise();
    // Return a response
    return NextResponse.json({ message: "Email sent" });
    // Catch any errors and return a 500 status code
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
