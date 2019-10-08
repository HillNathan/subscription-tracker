const winston = require("winston");
const expressWinston = require("express-winston");

module.exports = expressWinston.logger({
  level: "info",
  transports: [new winston.transports.File({ filename: "server.log" })],

  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  )
});