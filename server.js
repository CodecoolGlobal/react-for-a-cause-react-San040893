const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const { Phone } = require("react-bootstrap-icons");
const port = 5000;

//Server used to send Emails
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("./public"));
app.listen(port, () => console.log(`http://127.0.0.1:${port}`));

app.get("/", (req, res) => {
  res.sendFile(path.join(`${__dirname}/public/index.html`));
});
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    //For google you have to go to Gmail and set a application Password!
    user: "xxx@gmail.com",
    pass: "xxx",
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
    subject: "Contact Form SeaShepheard",
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
