"use strict";
/** @type {import('sequelize-cli').Migration} */

const { Enums } = require("../utils/common");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      bloodGroup: {
        type: Sequelize.ENUM(
          Enums.BloodGroup.A_pos,
          Enums.BloodGroup.A_neg,
          Enums.BloodGroup.B_pos,
          Enums.BloodGroup.B_neg,
          Enums.BloodGroup.AB_pos,
          Enums.BloodGroup.AB_neg
        ),
        allowNull: false,
      },
      location: {
        type: Sequelize.GEOMETRY("POINT"),
        allowNull: false,
      },
      role: {
        type: Sequelize.ENUM(Enums.Roles.ADMIN, Enums.Roles.VOLUNTER),
        defaultValue: Enums.Roles.VOLUNTER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
