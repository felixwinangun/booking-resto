'use strict';
module.exports = (sequelize, DataTypes) => {

  class UserRestaurant extends sequelize.Sequelize.Model {}

  UserRestaurant.init({
    UserId: DataTypes.INTEGER,
    RestaurantId: DataTypes.INTEGER,
    reservation_date: DataTypes.DATE,
    table_no: DataTypes.INTEGER,
    is_used: DataTypes.BOOLEAN,
    rating: DataTypes.INTEGER,
    status: DataTypes.STRING,
    cancelledAt: DataTypes.DATE,
    person: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (data, options) => {
        if(!data.person || data.person <= 0){
          data.person = 1;
        }
        data.status = 0;
      },
      afterFind: (data, options) => {
        data.forEach(el => {
          if(el.dataValues.status == 0){
            el.dataValues.status = "Waiting for confirmation"
          } else if(el.dataValues.status == 1){
            el.dataValues.status = "Approved"
          } else if(el.dataValues.status == 2){
            el.dataValues.status = "Rejected"
          } else if(el.dataValues.status == 3){
            el.dataValues.status = "Expired"
          } else if(el.dataValues.status == 4){
            el.dataValues.status = "Cancelled"
          }
        })
      }
    },
    sequelize, 
    modelName: 'UserRestaurant' 
  });

  UserRestaurant.associate = function(models) {
    UserRestaurant.belongsTo(models.Restaurant);
    UserRestaurant.belongsTo(models.User);
  };
  return UserRestaurant;
};