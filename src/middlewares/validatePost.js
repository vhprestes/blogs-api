// validations pro 12

const validateTitle = (req, res, next) => {
  const { title } = req.body;
  if (!title || title.length < 8) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const validateContent = (req, res, next) => {
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const validateCategoryIds = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  validateTitle,
  validateContent,
  validateCategoryIds,
};
