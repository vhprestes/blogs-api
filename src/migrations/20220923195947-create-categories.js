'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'categories',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: true,
        },
      },
      // {
      //   uniqueKeys: {
      //     category_name: {
      //       fields: ['name'],
      //     },
      //   },
      // }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Categories');
  },
};
