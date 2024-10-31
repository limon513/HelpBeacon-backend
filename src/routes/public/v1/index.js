const express = require("express");
const { testController } = require("../../../controllers");
const router = express.Router();
const userRouter = require("./user-route");

router.get("/test", testController.test);

router.use("/user", userRouter);

module.exports = router;
