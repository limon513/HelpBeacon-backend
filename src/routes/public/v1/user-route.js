const express = require("express");
const { userMiddleware } = require("../../../middlewares");
const { userController } = require("../../../controllers");
const router = express.Router();

router.post("/signup", userMiddleware.signUp, userController.signUp);
router.post("/login", userMiddleware.logIn, userController.logIn);

module.exports = router;
