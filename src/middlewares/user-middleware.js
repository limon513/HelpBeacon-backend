const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/common");
const AppError = require("../utils/common/appError");
const {
  isValidBloodGroup,
  isValidPhone,
  isValidPassword,
} = require("../utils/common/utilities");

function signUp(req, res, next) {
  if (!req.body.userName) {
    errorResponse.error = new AppError(
      ["userName required!"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(errorResponse.error.statusCode).json(errorResponse);
  }
  if (!req.body.password || !isValidPassword(req.body.password)) {
    errorResponse.error = new AppError(
      ["invalid password!"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(errorResponse.error.statusCode).json(errorResponse);
  }
  if (!req.body.phone || !isValidPhone(req.body.phone)) {
    errorResponse.error = new AppError(
      ["phone number required!"],
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
  if (!req.body.bloodGroup || !isValidBloodGroup(req.body.bloodGroup)) {
    errorResponse.error = new AppError(
      ["valid blood Group required!"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(errorResponse.error.statusCode).json(errorResponse);
  }

  next();
}

function logIn(req, res, next) {
  if (!req.body.password || !isValidPassword(req.body.password)) {
    errorResponse.error = new AppError(
      ["Invalid password!"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(errorResponse.error.statusCode).json(errorResponse);
  }
  if (!req.body.phone || !isValidPhone(req.body.phone)) {
    errorResponse.error = new AppError(
      ["Invalid phone number!"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(errorResponse.error.statusCode).json(errorResponse);
  }

  next();
}

module.exports = {
  signUp,
  logIn,
};
