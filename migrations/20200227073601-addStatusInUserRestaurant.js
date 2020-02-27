'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('UserRestaurants', 'status', Sequelize.STRING, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('UserRestaurants', 'status')
  }
};
