const { response } = require("express");
const { SoS, sequelize } = require("../models");
const CrudResository = require("./crud-repo");
const { getNewActiveSos } = require("./query-helpers");

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
          status: "active",
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = SosRepository;
