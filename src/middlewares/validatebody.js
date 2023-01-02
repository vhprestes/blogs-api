// const { loginSchema } = require('./schemas/loginSchema');

// const validatebody = (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     const { error } = loginSchema.validate({ email, password });
//     if (error) {
//       return res.status(400).json({ 
//         message: 'Some required fields are missing', type: 'Invalid Entity',
//       });
//     }
//     next();
//   } catch (err) {
//     next(err);
//   }
// };

// const isBodyValid = (email, password) => email && password;

// module.exports = validatebody;
// module.exports = isBodyValid;