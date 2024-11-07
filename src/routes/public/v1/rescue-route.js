const express = require("express");
const { rescueMiddleware, authMiddleware } = require("../../../middlewares");
const { rescueController } = require("../../../controllers");
const router = express.Router();

router.get(
  "/",
  authMiddleware.authorizeVolunteer,
  rescueMiddleware.getAllResponded,
  rescueController.getAllResponded
);

module.exports = router;
