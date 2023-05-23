'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Affirmations', [
      {
        statement:'My challenges help me grow.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        statement:'I can control my own happiness.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Affirmations', null, {});
  },
};