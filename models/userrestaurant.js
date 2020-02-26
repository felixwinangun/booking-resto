'use strict';
module.exports = (sequelize, DataTypes) => {

  class UserRestaurant extends sequelize.Sequelize.Model {}

  UserRestaurant.init({
    UserId: DataTypes.INTEGER,
    RestaurantId: DataTypes.INTEGER,
    reservation_date: DataTypes.DATE,
    table_no: DataTypes.INTEGER,
    is_used: DataTypes.BOOLEAN,
    rating: DataTypes.INTEGER
  }, {
    sequelize, 
    modelName: 'UserRestaurant' 
  });

  UserRestaurant.associate = function(models) {
    UserRestaurant.belongsTo(models.Restaurant);
    UserRestaurant.belongsTo(models.User);
  };
  return UserRestaurant;
};