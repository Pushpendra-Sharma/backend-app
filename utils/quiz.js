const checkAnswer = ques => {
  const { options, mark, difficulty } = ques;
  for (let i = 0; i < options.length; i++) {
    const { value, isAnswer, isSelected } = options[i];

    if (isAnswer !== isSelected) {
      return 0;
    }
  }

  return mark;
};

const calculateQuizScore = quiz => {
  let score = 0;

  const { quiz_questions } = quiz;

  for (const ques of quiz_questions) {
    score += checkAnswer(ques);
  }
  return score;
};

module.exports = {
  checkAnswer,
  calculateQuizScore,
};
