// req 4
const jwt = require('jsonwebtoken');
// const { User } = require('../models');

const TOKEN_SECRET_KEY = process.env.JWT_SECRET || 'suaSenhaSecreta';

// const getByUserIdService = (id) => User.findOne({
//   where: { id },
//   attributes: { exclude: ['password'] },
// });

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  } try { 
    const decoded = jwt.verify(token, TOKEN_SECRET_KEY);
    // const user = await getByUserIdService(decoded.id);
    req.user = decoded.user;
    next();
  } catch (err) {
  return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
