const jwt = require('jsonwebtoken');

const { User } = require('../models');

const passw = process.env.JWT_SECRET || 'suaSenhaSecreta';

const getUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (!user || !user.dataValues) {
    return null;
  }
  return user;
};

const generateToken = (user) => {
  const jwtSettings = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ user }, passw, jwtSettings);
  return { token };
};

module.exports = {
  getUser,
  generateToken,
};