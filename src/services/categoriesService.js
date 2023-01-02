const { Category } = require('../models');

const createCategoryService = async (name) => {
  const category = await Category.create({ name });
  return category;
};

const getCategories = async () => {
  const categories = await Category.findAll({ order: [['id', 'ASC']] });
  return categories;
};

const getCategoryByIdService = async (categoryIds) => {
  const category = await Category.findAll({ where: { id: categoryIds } });
      return category;
};

module.exports = { 
  createCategoryService,
  getCategories,
  getCategoryByIdService,
};