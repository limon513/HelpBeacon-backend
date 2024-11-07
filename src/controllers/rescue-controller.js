const { StatusCodes } = require("http-status-codes");
const { rescueService } = require("../services");
const { successResponse, errorResponse } = require("../utils/common");
const AppError = require("../utils/common/appError");

async function getAllResponded(req, res) {
  const data = {
    id: req.body.gotFromToken,
    latitude: req.query.lat,
    longitude: req.query.lng,
  };
  try {
    const response = await rescueService.getAllResponded(data);
    successResponse.data = response;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      errorResponse.error = error;
    } else
      errorResponse.error = new AppError(
        ["Service Unavailable!"],
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    return res.status(errorResponse.error.statusCode).json(errorResponse);
  }
}

module.exports = {
  getAllResponded,
};
