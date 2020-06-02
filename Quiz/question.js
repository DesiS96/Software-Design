"use strict";
var Quiz;
(function (Quiz) {
    class Question {
        constructor(_text, _answers) {
            this.text = _text;
            this.answers = _answers;
        }
        toString() {
            return "";
        }
        check(_input) {
            if (_input == this.text) {
                return true;
            }
            else {
                return false;
            }
        }
        shuffleAnswers() {
            this.answers.sort(() => Math.random() - 0.5);
            //erste Idee Antworten randomizen         
        }
    }
    Quiz.Question = Question;
    class TrueFalseQuestion extends Question {
        constructor(_text, _answers, _isTrue) {
            super(_text, _answers);
            this.isTrue = _isTrue;
            _answers.length = 2; //true und false
        }
    }
    Quiz.TrueFalseQuestion = TrueFalseQuestion;
    class MultipleChoiceQuestion extends Question {
        constructor(_text, _answers) {
            super(_text, _answers);
        }
    }
    Quiz.MultipleChoiceQuestion = MultipleChoiceQuestion;
    class GuessQuestion extends Question {
        constructor(_text, _answers, _answer, _tolerance) {
            super(_text, _answers);
            this.answer = _answer;
            this.tolernace = _tolerance;
        }
    }
    Quiz.GuessQuestion = GuessQuestion;
    class TextQuestion extends Question {
        constructor(_text, _answers, _answer) {
            super(_text, _answers);
            this.answer = _answer;
        }
    }
    Quiz.TextQuestion = TextQuestion;
})(Quiz || (Quiz = {}));
//# sourceMappingURL=question.js.map