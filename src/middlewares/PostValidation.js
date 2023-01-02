const categoriesService = require('../services/categoriesService');

const validatePost = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const validatePostCategories = async (req, res, next) => {
  const { categoryIds } = req.body;
  const categories = await categoriesService.getCategoryByIdService(categoryIds);
 if (categoryIds.length !== categories.length) {
  return res.status(400).json({ message: '"categoryIds" not found' });
 }
  next();
};

module.exports = {
  validatePost,
  validatePostCategories,
};