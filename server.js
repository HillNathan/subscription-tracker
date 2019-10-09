require("dotenv").config();
const app = require("./config/express-config");
const PORT = process.env.PORT

// console.log that your server is up and running
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
