"use strict";
var Quiz;
(function (Quiz) {
    class Question {
        constructor(_text) {
            this.text = _text;
        }
        toString() {
            let s = "Frage: " + this.text;
            return s;
        }
        check(_input, _isTrue) {
            return true;
        }
    }
    Quiz.Question = Question;
    class TrueFalseQuestion extends Question {
        constructor(_text, _isTrue) {
            super(_text);
            this.isTrue = _isTrue;
        }
        toString() {
            super.toString();
            let s = "Frage: " + this.text + ". Antworte mit ja oder nein";
            return s;
        }
        check(_input, _isTrue) {
            super.check(_input, _isTrue);
            let answer;
            if (this.isTrue == true) {
                answer = "ja";
            }
            else {
                answer = "nein";
            }
            if (_input == answer) {
                _isTrue = true;
                return _isTrue;
            }
            else {
                _isTrue = false;
                return _isTrue;
            }
        }
    }
    Quiz.TrueFalseQuestion = TrueFalseQuestion;
    class MultipleChoiceQuestion extends Question {
        constructor(_text, _answers) {
            super(_text);
            this.answers = _answers;
        }
        toString() {
            super.toString();
            console.log("Frage: " + this.text);
            let s = this.answers.join();
            return s;
        }
        check(_input, _isTrue) {
            super.check(_input, _isTrue);
            let i = 0;
            while (i < this.answers.length) {
                if (this.answers[i].text == _input) {
                    _isTrue = true;
                    return _isTrue;
                }
                else {
                    _isTrue = false;
                    return _isTrue;
                }
            }
            _isTrue = false;
            return _isTrue;
        }
    }
    Quiz.MultipleChoiceQuestion = MultipleChoiceQuestion;
    class GuessQuestion extends Question {
        constructor(_text, _answer, _tolerance) {
            super(_text);
            this.answer = _answer;
            this.tolerance = _tolerance;
        }
        toString() {
            super.toString();
            let s = "Frage: " + this.text;
            console.log("Gib als Antwort eine Zahl ein");
            return s;
        }
        check(_input, _isTrue) {
            super.check(_input, _isTrue);
            let input = parseInt(_input);
            let newAnswer = parseFloat(this.answer);
            if (input == newAnswer) {
                _isTrue = true;
                return _isTrue;
            }
            else {
                if (this.tolerance < newAnswer) {
                    if (input > this.tolerance && input < newAnswer) {
                        _isTrue = true;
                        return _isTrue;
                    }
                    else {
                        _isTrue = false;
                        return _isTrue;
                    }
                }
                else {
                    if (this.tolerance > newAnswer) {
                        if (input < this.tolerance && input > newAnswer) {
                            _isTrue = true;
                            return _isTrue;
                        }
                        else {
                            _isTrue = false;
                            return _isTrue;
                        }
                    }
                    _isTrue = false;
                    return _isTrue;
                }
            }
        }
    }
    Quiz.GuessQuestion = GuessQuestion;
    class TextQuestion extends Question {
        constructor(_text, _answer) {
            super(_text);
            this.answer = _answer;
        }
        toString() {
            super.toString();
            let s = "Frage: " + this.text;
            console.log("Gib deine Antwort als Satz ein");
            return s;
        }
        check(_input, _isTrue) {
            super.check(_input, _isTrue);
            if (_input == this.answer) {
                _isTrue = true;
                return _isTrue;
            }
            else {
                _isTrue = false;
                return _isTrue;
            }
        }
    }
    Quiz.TextQuestion = TextQuestion;
})(Quiz || (Quiz = {}));
//# sourceMappingURL=question.js.map