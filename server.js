require("dotenv").config();
const app = require("./config/express-config");
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

