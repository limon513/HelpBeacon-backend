const { sequelize } = require("../models");
const RescueRepository = require("../repositories/rescue-repo");

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
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  addResponse,
  getAllResponded,
};
