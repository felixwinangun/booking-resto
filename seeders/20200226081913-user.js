'use strict';
const fs = require('fs');
const file = "./data/user.json";

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = JSON.parse(fs.readFileSync(file, "utf8"));
    data.forEach(el => {
      el.createdAt = new Date;
      el.updatedAt = new Date;
    });
    return queryInterface.bulkInsert('Users', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
