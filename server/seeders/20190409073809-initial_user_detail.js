'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Users', 
   [
     {
       username: 'tukang',
       full_name: 'tukang baju',
       email: 'tukangbaju@mail.com',
       mobile_phone: '081123456789',
       is_actived: false,
       is_email_verified: true,
       temp_pin_verify: true,
       reward_point: 100,
       device_signup: true,
       device_last_signin: new Date,
       social_media_provider: 'facebook',
       ovo_saldo: 50000,
       password: '12345678',
       createdAt: new Date,
       updatedAt: new Date,
     },
   ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Users', null, {})
  }
};
