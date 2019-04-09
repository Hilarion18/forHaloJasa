'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      full_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      mobile_phone: {
        type: Sequelize.STRING
      },
      is_actived: {
        type: Sequelize.BOOLEAN
      },
      is_email_verified: {
        type: Sequelize.BOOLEAN
      },
      temp_pin_verify: {
        type: Sequelize.BOOLEAN
      },
      reward_point: {
        type: Sequelize.INTEGER
      },
      device_signup: {
        type: Sequelize.BOOLEAN
      },
      device_last_signin: {
        type: Sequelize.DATE
      },
      social_media_provider: {
        type: Sequelize.STRING
      },
      ovo_saldo: {
        type: Sequelize.INTEGER
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};