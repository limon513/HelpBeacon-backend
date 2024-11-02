const { StatusCodes } = require("http-status-codes");
const { CrudRepository } = require(".");
const { User } = require("../models");
const AppError = require("../utils/common/appError");

class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }

  async signUp(data) {
    try {
      const response = await User.create(data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getUserById(id) {
    try {
      const response = await User.findOne({
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async logIn(data) {
    try {
      const response = await User.findOne({
        where: {
          phone: data.phone,
        },
      });
      console.log(response.location.coordinates[0]);
      if (!response)
        throw new AppError(["Invalid account number"], StatusCodes.NOT_FOUND);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserRepository;
