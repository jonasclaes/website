import DOMPurify from "isomorphic-dompurify";
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  let { fullName, email, subject, message } = req.body;

  dotenv.config();

  const errorArray = [];

  // Validation
  if (validator.isEmpty(fullName)) errorArray.push("Full name missing.");
  if (validator.isEmpty(email)) errorArray.push("E-mail missing.");
  if (!validator.isEmail(email)) errorArray.push("Invalid e-mail.");
  if (validator.isEmpty(subject)) errorArray.push("Subject missing.");
  if (validator.isEmpty(message)) errorArray.push("Message missing.");

  if (errorArray.length > 0) {
    return res.status(400).json({ error: errorArray });
  }

  fullName = DOMPurify.sanitize(fullName);
  subject = DOMPurify.sanitize(subject);
  message = DOMPurify.sanitize(message);

  const transport = nodemailer.createTransport({
    host: process.env.MAILER_HOST || "",
    port: parseInt(process.env.MAILER_PORT || "587"),
    auth: {
      user: process.env.MAILER_USER || "",
      pass: process.env.MAILER_PASS || "",
    },
    secure: false,
  });

  const bodyText = `A new contact form submission has arrived!\r\nFull name: ${fullName}\r\nE-mail: ${email}\r\nSubject: ${subject}\r\nMessage: ${message}`;
  const bodyHtml = `A new contact form submission has arrived!<br />Full name: ${fullName}<br />E-mail: ${email}<br />Subject: ${subject}<br />Message: ${message}`;

  const mailData: nodemailer.SendMailOptions = {
    from: "no-reply@jonasclaes.be",
    to: "jonas@jonasclaes.be",
    subject,
    text: bodyText,
    html: bodyHtml,
  };

  try {
    const messageInfo = await transport.sendMail(mailData);
  } catch (e) {
    return res.status(500).json({ error: e });
  }

  return res.status(200).json({ error: "" });
};

export default sendEmail;
