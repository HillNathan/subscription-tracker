require("dotenv").config();
const app = require("./config/express-config");
const mongoose = require("mongoose")
const PORT = process.env.PORT

// connect to MongoDB
mongoose.connect("mongodb://localhost/submarine", { useNewUrlParser: true });

// console.log that your server is up and running
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
