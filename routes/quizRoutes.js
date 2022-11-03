const express = require('express');
const quizRouter = express.Router();
const quizController = require('../controller/quizController');

quizRouter.post('/create', quizController.createQuiz);
quizRouter.get('/:id', quizController.getQuiz);
quizRouter.post('/submit/:id', quizController.submitQuiz);

module.exports = quizRouter;
