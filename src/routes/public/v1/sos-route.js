const express = require("express");
const { sosMiddleware, authMiddleware } = require("../../../middlewares");
const { sosController } = require("../../../controllers");
const { sosService } = require("../../../services");
const router = express.Router();

router.post("/", sosMiddleware.registerSos, sosController.registerSos);

router.get(
  "/:id",
  authMiddleware.authorizeVolunteer,
  sosMiddleware.getNewActiveSos,
  sosController.getNewActiveSos
);

router.post(
  "/:sosId",
  authMiddleware.authorizeVolunteer,
  sosController.respondToSos
);

module.exports = router;
