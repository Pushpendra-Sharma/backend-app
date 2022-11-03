const QuestionModel = require('../models/question');
const QuizModel = require('../models/quiz');
const { calculateQuizScore } = require('../utils/quiz');

const createQuiz = async (req, res) => {
  try {
    const { title, questions } = req.body;

    const insertedQs = await QuestionModel.insertMany(questions);

    const insertedQIds = insertedQs.map(insurance => insurance._id);

    const insertedQuiz = await QuizModel.create({
      title,
      quiz_questions: insertedQIds,
    });

    res.status(200).json({ ID: insertedQuiz._id });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};

const getQuiz = async (req, res) => {
  try {
    const { id } = req.params;

    const popluatedQuiz = await QuizModel.findById(id).populate({
      path: 'quiz_questions',
    });

    res.status(200).json(popluatedQuiz);
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};

const submitQuiz = async (req, res) => {
  try {
    const score = calculateQuizScore(req.body);

    res.status(200).json(`You scored: ${score}`);
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};

module.exports = {
  createQuiz,
  getQuiz,
  submitQuiz,
};
