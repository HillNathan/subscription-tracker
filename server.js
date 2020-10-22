require("dotenv").config();
const app = require("./config/express-config");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

const MONGODB_URI = process.env.MONGODB_URI;

// use below for local database testing...
// const MONGODB_URI = "mongodb://localhost/submarine";

// former mlab database
// || "mongodb://submarine:submar1ne@ds139768.mlab.com:39768/heroku_rx8cqg30";

// connect to MongoDB
mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  (err) => {
    if (err) {
      console.log("There is a problem with the connection" + err);
    } else {
      console.log("Mongoose connection is good.");
    }
  }
);

//server is up and running
app.listen(PORT);
