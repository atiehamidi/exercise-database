"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        name: "Atieh",
        email: "fgb@gmail.com",
        phone: 123456,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hamid",
        email: "hamid@gmail.com",
        phone: 127465,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
