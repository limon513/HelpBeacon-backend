const { StatusCodes } = require("http-status-codes");
const UserRepository = require("../repositories/user-repo");
const AppError = require("../utils/common/appError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const serverConfig = require("../config/server-config");

const UserRepo = new UserRepository();

async function signUp(data) {
  try {
    const response = await UserRepo.signUp(data);
    return response;
  } catch (error) {
    console.log("error is:", error);
    let explains = [];
    if (
      error.name === "SequelizeUniqueConstraintError" ||
      error.name === "SequelizeConnectionError"
    ) {
      explains.push(error.errors[0].message);
      throw new AppError(explains, StatusCodes.BAD_REQUEST);
    }
    throw error;
  }
}

async function logIn(data) {
  try {
    const response = await UserRepo.logIn(data);
    const passwordMatched = await bcrypt.compare(
      data.password,
      response.password
    );
    if (!passwordMatched)
      throw new AppError(["wrong password!"], StatusCodes.BAD_REQUEST);
    const payload = {
      userId: response.id,
      userName: response.userName,
      phone: response.phone,
      bloodGroup: response.bloodGroup,
      location: response.location,
      role: response.role,
    };
    const token = jwt.sign(payload, serverConfig.JwtSecret, {
      expiresIn: serverConfig.JwtExpires,
    });
    return token;
  } catch (error) {
    let explains = [];
    if (error.name === "SequelizeConnectionError") {
      explains.push(error.message);
      throw new AppError(explains, StatusCodes.BAD_REQUEST);
    }
    throw error;
  }
}

module.exports = {
  signUp,
  logIn,
};
