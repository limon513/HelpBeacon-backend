const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  SaltRounds: process.env.SaltRounds,
  JwtSecret: process.env.JwtSecret,
  JwtExpires: process.env.JwtExpires,
};
