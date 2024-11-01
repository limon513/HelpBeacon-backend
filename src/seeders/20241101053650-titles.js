"use strict";

/** @type {import('sequelize-cli').Migration} */
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

    await queryInterface.bulkInsert("Titles", [
      {
        title: "Soldier",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Lieutenant",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Major",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "General",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Hall Of Famer",
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
    await queryInterface.bulkDelete("Titles", null, {});
  },
};
