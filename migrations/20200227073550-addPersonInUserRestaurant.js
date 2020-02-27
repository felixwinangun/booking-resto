'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('UserRestaurants', 'person', Sequelize.STRING, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('UserRestaurants', 'person')
  }
};
