const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");
const authController = require("../controllers/authController");

router.get("/all", controller.getAll);
router.post("/login", authController.login);
router.post("/newuser", controller.createUser);

module.exports = router;
