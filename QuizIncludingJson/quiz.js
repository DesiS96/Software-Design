"use strict";
var QuizIncludingJson;
(function (QuizIncludingJson) {
    class Quiz {
        constructor(_questions) {
            this.questions = _questions;
        }
        addQuestion(_question) {
            this.questions.push(_question);
        }
        getCurrentQuestion() {
            this.currentQuestion = this.questions[this.answerCount];
            return this.currentQuestion;
        }
        changeCurrentQuestion() {
            this.currentQuestion = this.questions[Math.random() * this.questions.length];
            return this.currentQuestion;
        }
        getAnswerCount() {
            return this.answerCount;
        }
        getCorrectCount() {
            return this.correctCount;
        }
    }
    QuizIncludingJson.Quiz = Quiz;
})(QuizIncludingJson || (QuizIncludingJson = {}));
//# sourceMappingURL=quiz.js.map