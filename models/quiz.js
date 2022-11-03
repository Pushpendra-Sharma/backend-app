const mongoose = require('mongoose');
const { Schema } = mongoose;

const quizSchema = new mongoose.Schema(
  {
    title: { type: String },
    quiz_questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
  },
  {
    timestamps: true,
  }
);

const QuizModel = mongoose.model('Quiz', quizSchema);

module.exports = QuizModel;
