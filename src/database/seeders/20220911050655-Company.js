'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [{
      corporate_name: 'Company',
      commercial_name: 'Important Company',
      email: 'company@mail.com',
      cnpj: '1234567891234',
      phone: '6633333333',
      address: 'Rua no centro, 42 - centro - Sinop - MT',
      }], {});
    },
  
    async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Users', null, {});
    }
};
