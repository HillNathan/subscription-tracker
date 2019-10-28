require("dotenv").config();

// SET EXPRESS ENVIRONMENT
const express = require("express");
const app = express();
// const path = require("path")

// imports session, logger, passport, and path
const middleware = require("../middleware");
// 
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ADD WINSTON LOGGER MIDDLEWARE TO SERVER
app.use(middleware.logger);

// We need to use sessions to keep track of our user's login status
app.use(
    middleware.session({ secret: "sandwich", resave: true, saveUninitialized: true })
);

app.use(middleware.passport.initialize());
app.use(middleware.passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

require("../routes/apiroutes")(app);

module.exports = app;