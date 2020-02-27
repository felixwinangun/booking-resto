'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('UserRestaurants', 'cancelledAt', Sequelize.DATE, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('UserRestaurants', 'cancelledAt')
  }
};
