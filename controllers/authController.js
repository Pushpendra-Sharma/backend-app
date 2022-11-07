const User = require('../models/user');
const { createAuthToken } = require('../middlewares/authMiddleware');

const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    // const token = createAuthToken(user._id);
    // res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.set('Authorization', token).status(201).json({
      success: true,
      message: 'Signup successfull.',
      userId: user._id,
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('Enter valid email.');
    }
    const passwordIsCorrect = await user.comparePassword(password);

    if (!passwordIsCorrect) {
      throw new Error('Incorrect password.');
    }

    const token = 'Bearer ' + createAuthToken(user._doc);

    res.set('Authorization', token).status(200).json({
      success: true,
      message: 'User logged in successfully',
      userId: user._id,
      token,
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

const logout = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
};

module.exports = {
  signup,
  login,
  logout,
};
