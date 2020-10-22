const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.status(200).json({ test: "Hello world" });
});

app.listen(5000);
