// tirando daqui e jogando no service o jwt
// require('dotenv/config');
// const jwt = require('jsonwebtoken');
// // const loginValidation = require('../middlewares/loginValidation'); /* puxa o loginval */
// const { User } = require('../models');

// const passw = process.env.JWT_SECRET;

// const jwtSettings = {
//   expiresIn: '1d',
//   algorithm: 'HS256',
// };

// const isBodyValid = (email, password) => {
// // console.log('VALIDOU AEEEEEEEEEEEE');
//   if ((email.length === 0) || (password.length === 0)) return false;
//   return true;
// };

// const login = async (req, res) => {
//     try {
//     const { email, password } = req.body;
//     if (!isBodyValid) {
//       return res.status(400).json({ message: 'Some required fields are missing' });
//     }
//     const user = await User.findOne({ where: { email } });
//     if (!user || user.password !== password) res.status(400).json({ message: 'Invalid fields' });
//     const payload = {
//       id: user.id,
//       name: user.display_name,
//       email,
//     };
//     const token = jwt.sign(payload, passw, jwtSettings);
//     return res.status(200).json({ token });
//   } catch (err) {
//     return res.status(400).json({ message: err.message });
// } 
// };
const loginService = require('../services/loginService');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const user = await loginService.getUser(email, password);

    if (!user) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const token = loginService.generateToken(user);

    return res.status(200).json(token);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  login,
};