'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Assignments', [
      {
        title:'Teaching Textbooks',
        instructions:'Complete the next lesson.',
        userID:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title:'Teaching Textbooks',
        instructions:'Complete the next lesson.',
        link:'https://youtu.be/cVIEqR1t9bQ',
        video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/cVIEqR1t9bQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        userID:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Assignments', null, {});
  },
};
