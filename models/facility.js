'use strict';
module.exports = (sequelize, DataTypes) => {

  class Facility extends sequelize.Sequelize.Model { }

  Facility.init({
    name: DataTypes.STRING
  }, {
    sequelize, 
    modelName: 'Facility' 
  });
  Facility.associate = function (models) {
    Facility.hasMany(models.RestaurantFacility);
  };
  return Facility;
};