"use strict";
var Quiz;
(function (Quiz_1) {
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
    Quiz_1.Quiz = Quiz;
})(Quiz || (Quiz = {}));
//# sourceMappingURL=quiz.js.map