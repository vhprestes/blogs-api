// validando user pro req 4, talvez 5
const { User } = require('../models');

const invalidNameLength = {
  code: 400,
  message: '"displayName" length must be at least 8 characters long',
};

const invalidePassLength = {
  code: 400,
  message: '"password" length must be at least 6 characters long',
};

const resMailRegex = {
  code: 400,
  message: '"email" must be a valid email',
};

const resMailTaken = {
  code: 409,
  message: 'User already registered',
};

const validateEmail = async (email) => {
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  if (!regex.test(email)) return resMailRegex;

  const existsEmail = await User.findOne({
    where: { email },
  });
  if (existsEmail) return resMailTaken;
};

  const validateLength = (displayName, password) => {
    if (password.length < 6) return invalidePassLength;
    if (displayName.length < 8) return invalidNameLength;
  };
  
  module.exports = {
    validateLength,
    validateEmail,
  };
