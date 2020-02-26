'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('RestaurantFacilities', ['FacilityId'], {
      type: 'foreign key',
      name: 'custom_fkey_constraint_RestaurantFacilitiesToFacilities',
      references: {
        table: 'Facilities',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('RestaurantFacilities', 'custom_fkey_constraint_RestaurantFacilitiesToFacilities');
  }
};
