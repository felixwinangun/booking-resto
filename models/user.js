'use strict';
module.exports = (sequelize, DataTypes) => {

  class User extends sequelize.Sequelize.Model { }

  User.init({
    // first_name: DataTypes.STRING,
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please enter your first name'
        }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please enter your last name'
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please enter your username'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please enter your password'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please enter your email'
        },
        isEmail: {
          msg: 'Please enter your valid email'
        }
      }
    },
    phone_number: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: {
          msg: 'Phone number only allow numbers'
        },
        len: {
          args: [10, 15],
          msg: 'Phone number lenght must 10 - 15 digits'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (obj, options) => {
        if (!obj.role) {
          obj.role = "user"
        }
      }
    },
    sequelize,
    modelName: 'User'
  });

  User.associate = function (models) {
    User.hasMany(models.UserRestaurant);
  };
  return User;
};