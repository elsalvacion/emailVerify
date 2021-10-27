const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const fileupload = require("express-fileupload");
const path = require("path");

require("dotenv").config({ path: "./.env" });

// import routes
const email = require("./routes/email");

const app = express();

// external middlewares
app.use(helmet());
app.use(xss());
app.use(hpp());
app.use(cors());
app.use(fileupload());

// express body parser
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.send(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.use("/email", email);

const PORT = process.env.PORT || 5000;
// listen to a port
app.listen(PORT, () => console.log(`server up and running on ${PORT}`));
