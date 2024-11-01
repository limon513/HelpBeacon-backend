const { SoS, sequelize } = require("../models");
const CrudResository = require("./crud-repo");

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

  async updateSos(id) {
    try {
      const data = { status: "rescued" };
      const response = await SoS.update(data, {
        where: {
          phone: id,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = SosRepository;
