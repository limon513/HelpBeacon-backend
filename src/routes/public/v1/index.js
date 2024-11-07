const express = require("express");
const { testController } = require("../../../controllers");
const router = express.Router();
const userRouter = require("./user-route");
const sosRouter = require("./sos-route");
const rescueRouter = require("./rescue-route");

router.get("/test", testController.test);

router.use("/user", userRouter);

router.use("/sos", sosRouter);

router.use("/rescue", rescueRouter);

module.exports = router;
