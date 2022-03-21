/* DEBUG: CONTACT US PAGE */
import nodemailer from "nodemailer";

async function contactApi(req, res) {
  const { fullName, email, message } = req.body;

  // create configuration for the nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: "markmarkusviajero.contents@gmail.com",
      subject: `Mark Markus Viajero (Blog): Someone messaged you`,
      html: `<div style="text-align: center;">
      <h3>You have a contact form submission</h3> <br>
      <p> <strong>From: </strong> ${fullName} (${email}) </p> 
      <p> <strong>Message: </strong> ${message} </p>
      </div>`,
    });
    // console.log("Message sent", emailRes.messageId);
  } catch (error) {
    console.log(error);
  }

  res.status(200).json(req.body);
}

export default contactApi;
