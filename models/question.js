const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ['MSQ', 'MCQ', 'NAT'], default: 'MCQ' },
    description: { type: String, required: true },
    options: [
      {
        value: { type: String, required: true },
        isAnswer: { type: Boolean, required: true },
      },
    ],
    mark: { type: Number, default: 2 },
    difficulty: { type: Number, default: 1 },
  },
  {
    timestamps: true,
  }
);

const QuestionModel = mongoose.model('Question', questionSchema);

module.exports = QuestionModel;
