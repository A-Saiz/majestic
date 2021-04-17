//import modules installed at the previous step. We need them to run Node.js server and send emails
const express = require("express");
const bodyParser = require("body-parser");
const smtpTransport = require("nodemailer-smtp-transport");
const request = require("request");

const app = express();
const http = require("http");
const cors = require("cors");
const router = express.Router();

//configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());

const nodemailer = require("nodemailer");
const details = require("./details.json");

// create a new Express application instance 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


//start application server on port 3000
app.listen(3000, () => {
  console.log("The server started on port 3000");
});

//get route to send email, from form
app.post("/sendmail", function (req, res) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: details.username,
      pass: details.password
    }
  });
  let user = req.body;

  //options
  const mailOptions = {
    from: user.email,
    to: `${details.username}`,
    inReplyTo: `${res.messageId}`,
    references: `${res.messageId}`,
    subject: user.subject,
    html: user.message
  };

  //User copy options
  const userMailOptions = {
    from: `Do Not Reply <${user.email}>`,
    to: `${user.email}`,
    subject: 'Do Not Reply',
    html: `<h1>Subject: ${user.subject}</h1><br><h3>Message: ${user.message}</h3>`
  };

  //delivery
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return error;
    } else {
      return res.json({ "success": true, 'message': "Email has been sent" });
    }
  });

  //User delivery
  transporter.sendMail(userMailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return error;
    } else {
      return res.json({ "success": true, 'message': "Email has been sent" });
    }
  });
});

//Recaptcha valid token
app.post("/validate", (req, res) => {
  let token = req.body.captcha;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${details.secretKey}&response=${token}&remoteip=${req.socket.remoteAddress}`;

  if (token === null || token === undefined) {
    return res.json({ "success": false, "message": "Token is empty or invalid" });
  }

  request(url, (err, response, body) => {
    body = JSON.parse(body);
    if (body.success !== undefined && !body.success) {
      return res.json({ "success": false, 'message': "recaptcha failed" });
    }
    res.header("Content-Type", "application/json").send(body);
    return res.json({ "success": true, 'message': "recaptcha passed" });
  })
});