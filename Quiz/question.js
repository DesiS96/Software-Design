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
        check(_isTrue) {
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
        check(_isTrue) {
            super.check(_isTrue);
            let answer;
            let input = prompt("Gib eine Antwort ein: ");
            if (this.isTrue == true) {
                answer = "ja";
            }
            else {
                answer = "nein";
            }
            if (input == answer) {
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
        constructor(_text, _answers, _rightAnswers) {
            super(_text);
            this.answers = _answers;
            this.rightAnswers = _rightAnswers;
        }
        toString() {
            super.toString();
            console.log("Frage: " + this.text);
            let s = this.answers.join();
            return s;
        }
        check(_isTrue) {
            let inputArray = [];
            super.check(_isTrue);
            let i = 0;
            while (i < this.answers.length) {
                let input = Number(window.prompt("Gib die Nummer der Antwort ein, von welcher du denkst sie sei richtig", ""));
                inputArray.push(input);
                let moreNumbers = prompt("Willst du eine weitere Nummber eingeben? Antworte mit ja oder nein: ");
                if (moreNumbers == "ja") {
                    i++;
                }
                else {
                    if (moreNumbers == "nein")
                        break;
                }
            }
            if (inputArray.length == this.rightAnswers.length) {
                for (let i = 0; i < this.rightAnswers.length; i++) {
                    if (inputArray[i] == this.rightAnswers[i]) {
                        _isTrue = true;
                        return _isTrue;
                    }
                    else {
                        _isTrue = false;
                        return _isTrue;
                    }
                }
            }
            else {
                _isTrue = false;
                return _isTrue;
            }
            return _isTrue;
            //Antworten-Array mit dem Nutzereingegebenen-Array vergleichen
            /*if (inputArray == this.rightAnswers) {

                _isTrue = true;
                return _isTrue;

            }
            else {
            _isTrue = false;
            return _isTrue;
            }*/
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
        check(_isTrue) {
            super.check(_isTrue);
            let userInput = prompt("Gib eine Antwort ein: ");
            let input = parseInt(userInput);
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
        check(_isTrue) {
            super.check(_isTrue);
            let input = prompt("Gib eine Antwort ein: ");
            if (input == this.answer) {
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