'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Blogs', [
      {
        date:'2023-05-23',
        entry:'This is a sample blog entry for Sophie',
        userID:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date:'2023-05-23',
        entry:'This is a sample blog entry for Lexi',
        userID:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Blogs', null, {});
  },
};


