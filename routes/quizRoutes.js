const express = require('express');
const quizRouter = express.Router();
const quizController = require('../controllers/quizController');

quizRouter.post('/create', quizController.createQuiz);
quizRouter.get('/:id', quizController.getQuiz);
quizRouter.post('/submit', quizController.submitQuiz);

module.exports = quizRouter;
