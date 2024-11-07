const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/common");
const AppError = require("../utils/common/appError");
const { isValidLocation } = require("../utils/common/utilities");

function getAllResponded(req, res, next) {
  if (
    !req.query.lat ||
    !req.query.lng ||
    !isValidLocation({ latitude: req.query.lat, longitude: req.query.lng })
  ) {
    errorResponse.error = new AppError(
      ["valid location data required!"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(errorResponse.error.statusCode).json(errorResponse);
  }

  next();
}

module.exports = {
  getAllResponded,
};
