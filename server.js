const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  });

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

