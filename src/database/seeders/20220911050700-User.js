'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [{
    name: 'Joe Doe',
    email: 'joe@mail.com',
    password_hash: '$2b$10$KeTFtonv65U.jPJT1Q3ozO7e1LC8A8XqoTRDeDOU3gDURwvB2T5aW',
    cpf: '12345678900',
    phone: '66999999999',
    address: 'Rua das ruas, 15 - centro - Sinop - MT',
    id_company: 1,
    admin_user: true,
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
