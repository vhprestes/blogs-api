const jwt = require('jsonwebtoken');
const { User } = require('../models');
const userValidation = require('../middlewares/userValidation');
// const { validateToken } = require('../middlewares/validateToken');

const passw = process.env.JWT_SECRET || 'suaSenhaSecreta';
const jwtConfig = {
  expiresIn: '15min',
  algorithm: 'HS256',
};

const createUser = async (displayName, email, password, image) => {
  const validatePassName = userValidation.validateLength(displayName, password);
  const validateMail = await userValidation.validateEmail(email);
  if (validatePassName) return validatePassName;
  if (validateMail) return validateMail;
    await User.create({ displayName, email, password, image });
const user = await User.findOne({ where: { email } });
const token = jwt.sign({ user }, passw, jwtConfig);
return { token };
};

const getAllUsers = async () => {
  const users = await User.findAll(({ attributes: { exclude: ['password'] } }));
  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, ({ attributes: { exclude: ['password'] } }));
  return user;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};
