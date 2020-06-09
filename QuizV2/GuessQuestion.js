"use strict";
var QuizV2;
(function (QuizV2) {
    class GuessQuestion extends QuizV2.Question {
        constructor(_question, _rightAnswer, _toleranceMin, _toleranceMax) {
            super(_question);
            this.rightAnswer = _rightAnswer;
            this.toleranceMin = _toleranceMin;
            this.toleranceMax = _toleranceMax;
        }
    }
    QuizV2.GuessQuestion = GuessQuestion;
})(QuizV2 || (QuizV2 = {}));
//# sourceMappingURL=GuessQuestion.js.map