"use strict";
/** @type {import('sequelize-cli').Migration} */

const { Enums } = require("../utils/common");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Rescudes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sosId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Sos",
          key: "id",
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      status: {
        type: Sequelize.ENUM(Enums.VictimStatus.ALIVE, Enums.VictimStatus.DEAD),
        defaultValue: Enums.VictimStatus.ALIVE,
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
    await queryInterface.dropTable("Rescudes");
  },
};
