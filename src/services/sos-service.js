const { StatusCodes } = require("http-status-codes");
const SosRepository = require("../repositories/sos-repo");
const AppError = require("../utils/common/appError");
const UserRepository = require("../repositories/user-repo");
const SosRepo = new SosRepository();
const UserRepo = new UserRepository();

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
    let explains = [];
    if (error.name === "SequelizeConnectionError") {
      explains.push(error.message);
      throw new AppError(explains, StatusCodes.BAD_REQUEST);
    }
    throw error;
  }
}

async function getNewActiveSos(id) {
  try {
    const user = await UserRepo.getUserById(id);
    if (!user) throw new AppError(["no user found!"], StatusCodes.NOT_FOUND);

    const data = {
      id,
      latitude: user.location.coordinates[0],
      longitude: user.location.coordinates[1],
    };

    const response = await SosRepo.getNewActiveSos(data);
    if (response.length <= 0)
      throw new AppError(["no new Sos found!"], StatusCodes.NOT_FOUND);
    return response;
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
  registerSos,
  getNewActiveSos,
};
