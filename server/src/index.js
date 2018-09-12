const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const config = require("./config/config.js");

const port = process.env.PORT || 3100;

/* Setup DB */
mongoose
   .connect(
      config.db.url,
      {
         useNewUrlParser: true
         //  user: config.db.username,
         //  pass: config.db.password,
      }
   )
   .then(() => {
      console.log("Conntected successfully to mongodb!");
   });

const db = mongoose.connection;

db.on("error", err => {
   console.error("Error connecting to db", err);
});

/* Setup Middleware */

// enable CORS
// TODO: consider white-listing the client apps
app.use(cors());

// log every request
app.use(morgan("dev"));

// read cookies
app.use(cookieParser());

// read request body content
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Register Routes */
// app.options("*", cors());
app.use("/", require("./routes/main"));
app.use("/auth", require("./routes/auth"));
app.use("/api", require("./routes/api"));

/* Error Handlers */

// 404
app.use((req, res, next) => {
   let err = new Error("File not found");
   err.status = 404;
   next(err);
});

// handle errors
app.use((err, req, res, next) => {
   console.error(err);
   res.status(err.status || 500).json({
      message: err.message,
      error: err
   });
});

/* Start Server */

app.listen(port, () => {
   console.log(`App listening on port ${port}`);
});
