"use strict";

/** @type {import('sequelize-cli').Migration} */
const { Enums } = require("../utils/common");
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Sos", [
      {
        name: "John Doe",
        phone: "+1234567890",
        location: { type: "Point", coordinates: [37.7749, -122.4194] }, // San Francisco: [latitude, longitude]
        status: Enums.SoSStatus.ACTIVE,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jane Smith",
        phone: "+1098765432",
        location: { type: "Point", coordinates: [34.0522, -118.2437] }, // Los Angeles: [latitude, longitude]
        status: Enums.SoSStatus.RESPONDED,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Alex Johnson",
        phone: "+14151234567",
        location: { type: "Point", coordinates: [40.7128, -74.006] }, // New York: [latitude, longitude]
        status: Enums.SoSStatus.RESCUED,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Emily Brown",
        phone: "+19876543210",
        location: { type: "Point", coordinates: [49.2827, -123.1216] }, // Vancouver: [latitude, longitude]
        status: Enums.SoSStatus.ACTIVE,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Michael Green",
        phone: "+11234567890",
        location: { type: "Point", coordinates: [43.6532, -79.3832] }, // Toronto: [latitude, longitude]
        status: Enums.SoSStatus.RESPONDED,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Sos", null, {});
  },
};
