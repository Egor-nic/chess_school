'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Lessons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mentor_id: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: "Mentors",
        //   key: "id"
        // },
      },
      student_id: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: "Students",
        //   key: "id"
        // },
      },
      lesson_date: {
        type: Sequelize.DATE
      },
      lesson_finished: {
        type: Sequelize.BOOLEAN
      },
      student_score: {
        type: Sequelize.INTEGER
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Lessons');
  }
};
