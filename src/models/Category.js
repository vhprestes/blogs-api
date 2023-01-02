'use strict';

const CategoriesModel = (sequelize, DataTypes) => {
const Category = sequelize.define('Category', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  name: DataTypes.STRING,
},
{
  timestamps: false,
  tableName: 'categories',
  underscored: true,
});

return Category;
};

module.exports = CategoriesModel;
