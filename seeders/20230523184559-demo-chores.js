'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Chores', [
      {
        chore:'Feed the dogs',
        timeOfDay:'morning',
        day: 'weekdays',
        userID:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        chore:'Dishes',
        timeOfDay:'afternoon',
        day: 'weekdays',
        userID:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Chores', null, {});
  },
};