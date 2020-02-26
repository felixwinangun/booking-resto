'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('UserRestaurants', ['RestaurantId'], {
      type: 'foreign key',
      name: 'custom_fkey_constraint_UserRestaurantsToRestaurants',
      references: {
        table: 'Restaurants',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('UserRestaurants', 'custom_fkey_constraint_UserRestaurantsToRestaurants');
  }
};
