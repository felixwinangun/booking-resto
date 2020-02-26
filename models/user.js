'use strict';
module.exports = (sequelize, DataTypes) => {

  class User extends sequelize.Sequelize.Model {}

  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize, 
    modelName: 'User' 
  });

  User.associate = function(models) {
    User.hasMany(models.UserRestaurant);
  };
  return User;
};