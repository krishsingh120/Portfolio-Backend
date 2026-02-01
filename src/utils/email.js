const nodeMailer = require("nodemailer");

const { EMAIL_AUTH_USER, EMAIL_AUTH_PASS } = require("../config/serverConfig");

const transport = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: EMAIL_AUTH_USER,
    pass: EMAIL_AUTH_PASS,
  },
});


module.exports = transport;