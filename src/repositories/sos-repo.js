const { SoS, sequelize } = require("../models");
const CrudResository = require("./crud-repo");
const { getNewActiveSos } = require("./query-helpers");
const { Enums } = require("../utils/common");

class SosRepository extends CrudResository {
  constructor() {
    super(SoS);
  }

  async registerSos(data) {
    try {
      const response = await SoS.create(data);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getNewActiveSos({ id, latitude, longitude }) {
    try {
      const [results, metadata] = await sequelize.query(getNewActiveSos, {
        replacements: { longitude, latitude, id },
      });
      return results;
    } catch (error) {
      throw error;
    }
  }

  async getActiveSosByPhone(phone) {
    try {
      const response = await SoS.findOne({
        where: {
          phone: phone,
          status: Enums.SoSStatus.ACTIVE,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async checkAvailablity(sosId, status, t) {
    try {
      const response = await SoS.findOne({
        where: {
          id: sosId,
          status: status,
        },
        transaction: t,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async updateSos(sosId, type, t) {
    try {
      const response = await SoS.update(
        { status: type },
        {
          where: {
            id: sosId,
          },
          transaction: t,
        }
      );
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = SosRepository;
