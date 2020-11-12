const express = require("express");

const accueilController = require("../controllers/accueil");

const router = express.Router();

router.get("/accueil", accueilController.getText);

router.post("/accueil", accueilController.postEditText);

module.exports = router;
