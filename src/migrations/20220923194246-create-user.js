'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'users',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        display_name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: true,
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        image: {
          allowNull: false,
          type: Sequelize.STRING,
        },
      },
      // talvez? carece 
      // {
      //   uniqueKeys: {
      //     users_email: {
      //       fields: ['email'],
      //     },
      //   },
      // }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Users');
  },
};

// https://stackoverflow.com/questions/34664853/sequelize-composite-unique-constraint
