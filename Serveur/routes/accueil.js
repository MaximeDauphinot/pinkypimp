const express = require("express");

const acceuilController = require("../controllers/accueil");

const router = express.Router();

router.get("/accueil", acceuilController.getText);

router.post("/accueil/editText", acceuilController.postEditText);

module.exports = router;
