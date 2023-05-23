'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'kim lee',
        password: 'Sophie5',
        firstName: 'Sophie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Preppy',
        password:'Gouda',
        firstName: 'Lexi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
