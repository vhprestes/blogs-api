require('dotenv/config');
const { createPostService } = require('../services/postServices');
const { getCategoryByIdService } = require('../services/categoriesService');
const { createPostCategoryService } = require('../services/postServices');
const { getPostService } = require('../services/postServices');

const createPostAndCategory = async (categoryIds, createdPost) => {
  await Promise.all(
    categoryIds.map(async (categoryId) => {
      await createPostCategoryService(createdPost.id, categoryId);
    }),
  );
};

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user.dataValues;
    const category = await getCategoryByIdService(categoryIds);
    if (category.some((Category) => Category === null)) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }
    const createdPost = await createPostService(title, content, id);
    if (!createdPost) {
      return res.status(409).json({ message: 'error ao cadastrar usuário' });
    }
    await createPostAndCategory(categoryIds, createdPost);
    return res.status(201).json(createdPost);
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Erro interno', error: err.message });
  }
};

const getAllPosts = async (_req, res) => {
  const posts = await getPostService();
  return res.status(200).json(posts);
};

module.exports = {
  createPost,
  getAllPosts,
};
