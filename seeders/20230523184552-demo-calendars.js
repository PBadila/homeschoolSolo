'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Calendars', [
      {
        date:'2023-05-23',
        event:'MoMoCon',
        time:'9:00',
        userID:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
   
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Calendars', null, {});
  },
};