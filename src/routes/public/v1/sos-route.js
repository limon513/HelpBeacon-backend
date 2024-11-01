const express = require("express");
const { sosMiddleware } = require("../../../middlewares");
const { sosController } = require("../../../controllers");
const router = express.Router();

router.post("/", sosMiddleware.registerSos, sosController.registerSos);

module.exports = router;
