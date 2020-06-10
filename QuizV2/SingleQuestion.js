"use strict";
var QuizV2;
(function (QuizV2) {
    class SingleQuestion extends QuizV2.Question {
        constructor(_question, _answers, _rightAnswer) {
            super(_question);
            this.answers = _answers;
            this.rightAnswer = _rightAnswer;
        }
    }
    QuizV2.SingleQuestion = SingleQuestion;
})(QuizV2 || (QuizV2 = {}));
//# sourceMappingURL=SingleQuestion.js.map