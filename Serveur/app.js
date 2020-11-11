const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const mongoConnect = require("./util/database").mongoConnect;

const app = express();

app.use(cors());

const acceuilRoutes = require("./routes/accueil");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/front", acceuilRoutes);

mongoConnect(() => {
  app.listen(5000);
});
