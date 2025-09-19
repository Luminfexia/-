const transporter = require("../config/mailer");

exports.sendMail = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      replyTo: email,
      text: `
    You have a new contact form submission:

    Name: ${name}
    Email: ${email}
    Message: ${message}
  `,
    });

    res.json({ success: true, message: "Email send successfully." });
  } catch (error) {
    console.log("Error sending mail", error);
    res.status(500).json({ success: false, message: "Error sending mail" });
  }
};
