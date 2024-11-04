const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/common");
const AppError = require("../utils/common/appError");
const jwt = require("jsonwebtoken");
const { serverConfig } = require("../config");

function authorizeVolunteer(req, res, next) {
  if (!req.headers["x-access-token"]) {
    errorResponse.error = new AppError(
      ["session token missing"],
      StatusCodes.UNAUTHORIZED
    );
    return res.status(errorResponse.error.statusCode).json(errorResponse);
  }
  const token = req.headers["x-access-token"];
  try {
    const decode = jwt.verify(token, serverConfig.JwtSecret);
    req.body.gotFromToken = decode.userId;
    next();
  } catch (error) {
    errorResponse.error = new AppError(
      ["session ended!"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(errorResponse.error.statusCode).json(errorResponse);
  }
}

module.exports = {
  authorizeVolunteer,
};
