"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("todoLists", [
      {
        name: "Atieh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hamid",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("todoLists", null, {});
  },
};
