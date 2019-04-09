'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    full_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: `email must be in correct format`
        },
        isUnique: function(value, cb) {
          const Op = require('sequelize').Op
          User.findOne({where: {id: {[Op.ne]: this.id}, email: value}})
          .then(user => {
            if(user) {
              cb(`email already taken`)
            }
            else {
              cb()
            }
          })
          .catch((err) => {err})
        }
      }
    },
    mobile_phone: DataTypes.STRING,
    is_actived: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    is_email_verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    temp_pin_verify: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    reward_point: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    device_signup: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    device_last_signin: {
      type: DataTypes.DATE,
      defaultValue: new Date,
    },
    social_media_provider: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    ovo_saldo: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (instance, options) => {
        const { generatePassword } = require('../helpers/password')
        generatePassword(instance.email, instance.password)
        .then(function(newPassword){
          User.update(
            {
              password: newPassword,
            },
            {where : { id : instance.id }}
            )
            .then( user => {})
            .catch( err => {})
        })
      },
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};