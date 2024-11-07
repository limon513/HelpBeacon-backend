const { StatusCodes } = require("http-status-codes");
const { sequelize } = require("../models");
const RescueRepository = require("../repositories/rescue-repo");
const AppError = require("../utils/common/appError");

const RescueRepo = new RescueRepository();

async function addResponse(data) {
  try {
    const response = await RescueRepo.addResponse(data);
    return response;
  } catch (error) {
    throw error;
  }
}

async function getAllResponded(data) {
  try {
    const response = await RescueRepo.getAllResponded(data);
    if (response.length <= 0)
      throw new AppError(["not found!"], StatusCodes.NOT_FOUND);
    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  addResponse,
  getAllResponded,
};
