const express = require("express");

const accueilController = require("../controllers/accueil");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/accueil", isAuth, accueilController.getText);

router.post("/accueil", isAuth, accueilController.postEditText);

module.exports = router;
