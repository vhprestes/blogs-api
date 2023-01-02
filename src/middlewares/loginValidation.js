// const { User } = require('../models');
// const isBodyValid = require('./validatebody');

// const loginValidation = async (email, password) => {
//   const user = User.findOne({ where: email, password });
//     if (!user || user.password !== password) {
//       return ({ status: 400, message: 'Invalid fields' });
//     }
// };

// const loginVal = async ({ req, _res, next }) => {
//   const { email, password } = req.body;
//   await loginValidation(email, password);
//   await isBodyValid(email, password);
//   next();
// };

// module.exports = loginVal;