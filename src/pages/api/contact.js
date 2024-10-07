import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import Cors from "cors";

const cors = Cors({
  origin: "*",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "Content-Length", "X-Requested-With", "Accept"],
  methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
  optionsSuccessStatus: 200,
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const transporter = {
  host: process.env.NODEMAILER_HOST,
  port: process.env.NODEMAILER_PORT,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,

    // Update your SendGrid API key here
    api_key: process.env.NEXT_PUBLIC_NODEMAILER_API_KEY,
  },
};

const mailer = nodemailer.createTransport(transporter);

export default async function handle(req, res) {
  await runMiddleware(req, res, cors);

  // console.log(req.body);
  const { name, email, number, subject, text } = req.body;

  const data = {
    // Update your email here
    to: "tickets@kaaria-support.p.tawk.email",
    from: "noreply@kaaria.ai",
    subject: "KAARIA Website Support",
    html: `
            <b>Email:</b> ${email} <br /> 
            <b>Name:</b> ${name} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Message:</b> ${text} 
        `,
  };

  try {
    const response = await mailer.sendMail(data);
    // console.log(response);
    res.status(200).send("Email send successfully");
  } catch (error) {
    // console.log(error);
    res.status(500).send("Error proccessing charge");
  }
}
