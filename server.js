const express = require("express");

const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const fileupload = require("express-fileupload");
// require and use config files
require("dotenv").config({ path: "./config/.env" });

// import routes
const email = require("./routes/email");

const app = express();

// external middlewares
app.use(helmet());
app.use(xss());
app.use(hpp());
app.use(fileupload());
// express body parser

app.use(express.json());

app.use("/email", email);

const PORT = process.env.PORT || 5000;
// listen to a port
app.listen(PORT, () =>
  console.log(
    `server up and running on ${process.env.NODE_ENV} MODE at ${PORT}`
  )
);
