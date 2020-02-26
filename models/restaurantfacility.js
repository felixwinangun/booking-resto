'use strict';
module.exports = (sequelize, DataTypes) => {

  class RestaurantFacility extends sequelize.Sequelize.Model {}

  RestaurantFacility.init({
    FacilityId: DataTypes.INTEGER,
    RestaurantId: DataTypes.INTEGER
  }, {
    sequelize, 
    modelName: 'RestaurantFacility' 
  });
  RestaurantFacility.associate = function(models) {
    RestaurantFacility.belongsTo(models.Restaurant);
    RestaurantFacility.belongsTo(models.Facility);
  };
  return RestaurantFacility;
};