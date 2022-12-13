// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const nodemailer = require("nodemailer");
export default async function handler(req, res) {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_GOOGLE_EMAIL,
      pass: process.env.NEXT_PUBLIC_GOGGLE_PASSWORD,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_GOOGLE_EMAIL,
      to: process.env.NEXT_PUBLIC_GOOGLE_EMAIL,
      subject: `Email from ${name}`,
      html: `
      <style>
      body {
        margin:0;
        padding:0;
      }
      p {
        margin:0;
        padding:0;
      }
      .title{
        font:25px;
      }
      }
      </style>
      <body>
      <br>
      <p><strong class='title'> &#10026; THERE HAS BEEN A NEW CONTACT MADE.  &#10026; </strong></p><br>
      <p><strong>Name: </strong> ${name} </p>
      <p><strong>Subject: </strong> ${subject} </p>
      <p><strong>Email: </strong> ${email} </p>
      <p><strong>Message: </strong> ${message} </p>
      </body>
      `,
    });

    console.log("Message Sent", emailRes.messageId);
  } catch (err) {
    console.log(err);
  }
  res.status(200).json(req.body);
}
