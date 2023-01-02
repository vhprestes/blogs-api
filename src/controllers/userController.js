// req 4 user controller -> displayName, email, password, image
const usersService = require('../services/usersService');

 const newUserController = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await usersService.createUser(displayName, email, password, image);
  const { code, token, message } = user;
  if (code) return res.status(code).json({ message });
  return res.status(201).json({ token });
};

const getUsers = async (_req, res) => {
  const users = await usersService.getAllUsers();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getUserById(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user);
};

module.exports = {
  newUserController,
  getUsers,
  getUserById,
};