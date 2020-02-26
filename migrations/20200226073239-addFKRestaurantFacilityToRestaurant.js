'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('RestaurantFacilities', ['RestaurantId'], {
      type: 'foreign key',
      name: 'custom_fkey_constraint_RestaurantFacilitiesToRestaurants',
      references: {
        table: 'Restaurants',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('RestaurantFacilities', 'custom_fkey_constraint_RestaurantFacilitiesToRestaurants');
  }
};
