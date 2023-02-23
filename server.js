const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const { Phone } = require("react-bootstrap-icons");

//Server used to send Emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    //For google you have to go to Gmail and set a application Password!
    user: "xxx@gmail.com",
    pass: "",
  },
});

//Running verification
contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    //Our Email Adress
    to: "xxx@gmail.com",
    subject: "Contact Form Submission -Portfolio",
    html: ` <p> Name: ${name}</p>
        <p> E-Mail: ${email}</p>
        <p> Phone: ${phone}</p>
        <p> Message: ${message}</p>
        `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
