const express = require("express");

const authController = require("../controllers/auth");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.post("/newUser", isAuth, authController.postNewUser);

router.get("/login", authController.getLogin);

router.post("/login", authController.postLogin);

router.get("/logout", authController.getLogout);

router.post("/logout", authController.postLogout);

module.exports = router;
