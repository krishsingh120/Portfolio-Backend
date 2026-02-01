const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3000,
  EMAIL_AUTH_USER: process.env.EMAIL_AUTH_USER,
  EMAIL_AUTH_PASS: process.env.EMAIL_AUTH_PASS,
};
