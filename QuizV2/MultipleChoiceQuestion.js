"use strict";
var QuizV2;
(function (QuizV2) {
    class MultipleChoiceQuestion extends QuizV2.Question {
        constructor(_question, _answers, _rightAnswers) {
            super(_question);
            this.answers = _answers;
            this.rightAnswers = _rightAnswers;
        }
    }
    QuizV2.MultipleChoiceQuestion = MultipleChoiceQuestion;
})(QuizV2 || (QuizV2 = {}));
//# sourceMappingURL=MultipleChoiceQuestion.js.map