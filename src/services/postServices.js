const { PostCategory } = require('../models');
const { BlogPost, User, Category } = require('../models');

const createPostService = async (title, content, userId) => {
  const newPost = await BlogPost.create({
    title,
    content,
    userId,
    updated: new Date(),
    published: new Date(),
  });
  return newPost;
};

const createPostCategoryService = async (postId, categoryId) => {
  await PostCategory.create({
    postId,
    categoryId,
  });
};

const getPostService = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return posts;
};

module.exports = {
  createPostService,
  createPostCategoryService,
  getPostService,
};
