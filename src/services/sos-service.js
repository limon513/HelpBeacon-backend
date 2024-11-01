const { StatusCodes } = require("http-status-codes");
const SosRepository = require("../repositories/sos-repo");
const AppError = require("../utils/common/appError");
const SosRepo = new SosRepository();

async function registerSos(data) {
  try {
    const exists = await SosRepo.getActiveSosByPhone(data.phone);
    if (exists)
      throw new AppError(
        ["Sos is already active, Please be patient!"],
        StatusCodes.BAD_REQUEST
      );
    const response = await SosRepo.registerSos(data);
    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  registerSos,
};
