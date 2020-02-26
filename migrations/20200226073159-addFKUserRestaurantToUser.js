'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('UserRestaurants', ['UserId'], {
      type: 'foreign key',
      name: 'custom_fkey_constraint_UserRestaurantsToUsers',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('UserRestaurants', 'custom_fkey_constraint_UserRestaurantsToUsers');
  }
};
