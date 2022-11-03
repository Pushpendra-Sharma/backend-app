const express = require('express');
const { authVerify } = require('../middlewares/authMiddleware');
const router = express.Router();
const authRoutes = require('./authRoutes');
const quizRoutes = require('./quizRoutes');

router.use('/', authRoutes);
router.use(authVerify);
router.use('/quiz', quizRoutes);

module.exports = router;
