const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const csrf = require("csurf");

const User = require("./models/user");

const MONGODB_URI =
  "mongodb+srv://Dauph:Dauphin42@cluster0.mholo.mongodb.net/pinkypimp";

const app = express();
const store = MongoDBStore({
  uri: MONGODB_URI,
  collection: "sessions",
});
const csrfProtection = csrf();
const expiration = 2 * 60 * 60 * 1000;

const acceuilRoutes = require("./routes/accueil");
const authRoutes = require("./routes/auth");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    expires: new Date(Date.now() + expiration),
    cookie: { secure: false, httpOnly: false, maxAge: expiration },
    store: store,
  })
);
app.use(csrfProtection);

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use((req, res, next) => {
  req.session.csrfToken = req.csrfToken();
  req.session.expiration = expiration;
  next();
});

app.use("/front", acceuilRoutes);
app.use("/front", authRoutes);

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
