const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");
const authController = require("../controllers/authController");
const { checkAuth } = require("../middlewares/auth");

router.get("/", checkAuth, controller.getAll);
router.post("/login", authController.login);
router.post("/newuser", controller.createUser);
//router.delete("id:/delete", controller.deleteUser);
router.patch("/updateUser", checkAuth, controller.updateUser);

module.exports = router;
