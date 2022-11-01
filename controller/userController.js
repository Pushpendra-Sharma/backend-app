const UsersModel = require('../models/usersSchema');

const registerUser = async (req, res, next) => {};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
};

module.exports = { registerUser, loginUser };
