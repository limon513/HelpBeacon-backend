const { StatusCodes } = require("http-status-codes");
const { sosService } = require("../services");
const { successResponse, errorResponse } = require("../utils/common");
const AppError = require("../utils/common/appError");

async function registerSos(req, res) {
  const data = {
    ...(req.body?.name && { name: req.body.name }),
    phone: req.body.phone,
    location: {
      type: "Point",
      coordinates: [req.body.latitude, req.body.longitude],
    },
  };
  try {
    const response = await sosService.registerSos(data);
    successResponse.data = response;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) errorResponse.error = error;
    else
      errorResponse.error = new AppError(
        ["service unavailable!"],
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    return res.status(errorResponse.error.statusCode).json(errorResponse);
  }
}

async function getNewActiveSos(req, res) {
  try {
    const response = await sosService.getNewActiveSos(req.params.id);
    successResponse.data = response;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    if (error instanceof Error) errorResponse.error = error;
    else
      errorResponse.error = new AppError(
        ["service unavaliable!"],
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    return res.status(errorResponse.error.statusCode).json(errorResponse);
  }
}

async function respondToSos(req, res) {
  const data = {
    userId: req.body.gotFromToken,
    sosId: req.params.sosId,
  };
  try {
    const response = await sosService.respondToSos(data);
    successResponse.data = response;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    if (error instanceof Error) errorResponse.error = error;
    else
      errorResponse.error = new AppError(
        ["service unavailable!"],
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    return res.status(errorResponse.error.statusCode).json(errorResponse);
  }
}

module.exports = {
  registerSos,
  getNewActiveSos,
  respondToSos,
};
