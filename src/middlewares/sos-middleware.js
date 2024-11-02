const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/common");
const AppError = require("../utils/common/appError");
const { isValidLocation, isValidPhone } = require("../utils/common/utilities");

function registerSos(req, res, next) {
  if (!req.body.name) {
    errorResponse.error = new AppError(
      ["name required!"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(errorResponse.error.statusCode).json(errorResponse);
  }
  if (!req.body.phone || !isValidPhone(req.body.phone)) {
    errorResponse.error = new AppError(
      ["phone not valid!"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(errorResponse.error.statusCode).json(errorResponse);
  }
  if (!req.body.latitude || !req.body.longitude) {
    errorResponse.error = new AppError(
      ["location data required!"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(errorResponse.error.statusCode).json(errorResponse);
  }

  if (
    !isValidLocation({
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    })
  ) {
    errorResponse.error = new AppError(
      ["location data not valid!"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(errorResponse.error.statusCode).json(errorResponse);
  }

  next();
}

function getNewActiveSos(req, res, next) {
  if (!req.params.id) {
    errorResponse.error = new AppError(
      ["no user found!"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(errorResponse.error.statusCode).json(errorResponse);
  }
  next();
}

module.exports = {
  registerSos,
  getNewActiveSos,
};
