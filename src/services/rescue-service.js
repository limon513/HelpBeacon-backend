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

module.exports = {
  addResponse,
};
