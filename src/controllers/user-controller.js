const { StatusCodes } = require("http-status-codes");
const { userService } = require("../services");
const { successResponse, errorResponse } = require("../utils/common");
const AppError = require("../utils/common/appError");

async function signUp(req, res) {
  const data = {
    userName: req.body.userName.trim(),
    password: req.body.password,
    phone: req.body.phone.trim(),
    bloodGroup: req.body.bloodGroup.trim(),
    location: {
      type: "Point",
      coordinates: [req.body.latitude, req.body.longitude],
    },
  };
  try {
    const response = await userService.signUp(data);
    successResponse.data = response;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    if (error instanceof Error) errorResponse.error = error;
    else
      errorResponse.error = new AppError(
        ["Service Unavailable"],
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    return res.status(errorResponse.error.statusCode).json(errorResponse);
  }
}

async function logIn(req, res) {
  const data = {
    phone: req.body.phone,
    password: req.body.password,
  };
  try {
    const response = await userService.logIn(data);
    successResponse.data = response;
    return res.status(StatusCodes.ACCEPTED).json(successResponse);
  } catch (error) {
    if (error instanceof Error) {
      errorResponse.error = error;
    } else
      errorResponse.error = new AppError(
        ["Service unavailable!"],
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    return res.status(errorResponse.error.statusCode).json(errorResponse);
  }
}

module.exports = {
  signUp,
  logIn,
};
