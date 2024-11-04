const CrudRepository = require("./crud-repo");
const { Rescude } = require("../models");
const AppError = require("../utils/common/appError");
const { StatusCodes } = require("http-status-codes");

class RescueRepository extends CrudRepository {
  constructor() {
    super(Rescude);
  }

  async respondToSos(data, t) {
    try {
      const existingResponse = await Rescude.findOne({
        where: {
          userId: data.userId,
          sosId: data.sosId,
        },
        transaction: t,
      });
      if (existingResponse)
        throw new AppError(["You already responded!"], StatusCodes.BAD_REQUEST);
      const response = await Rescude.create(data, { transaction: t });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async countResponse(sosId, t) {
    try {
      const respose = await Rescude.findAll({
        where: {
          sosId: sosId,
        },
        transaction: t,
      });
      console.log(respose.length);
      return respose.length;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = RescueRepository;
