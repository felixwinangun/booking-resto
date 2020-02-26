'use strict';
module.exports = (sequelize, DataTypes) => {

  class Restaurant extends sequelize.Sequelize.Model {}

  Restaurant.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    open_hour: DataTypes.STRING
  }, {
    sequelize, 
    modelName: 'Restaurant' 
  });

  Restaurant.associate = function(models) {
    Restaurant.hasMany(models.RestaurantFacility);
    Restaurant.hasMany(models.UserRestaurant);
  };
  return Restaurant;
};