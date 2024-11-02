const express = require("express");
const { sosMiddleware } = require("../../../middlewares");
const { sosController } = require("../../../controllers");
const router = express.Router();

router.post("/", sosMiddleware.registerSos, sosController.registerSos);

router.get(
  "/:id",
  sosMiddleware.getNewActiveSos,
  sosController.getNewActiveSos
);

module.exports = router;
