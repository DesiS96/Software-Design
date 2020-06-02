"use strict";
var Quiz;
(function (Quiz) {
    class Answer {
        constructor(_text, _isRight) {
            this.text = _text;
            this.isRight = _isRight;
        }
    }
    Quiz.Answer = Answer;
})(Quiz || (Quiz = {}));
//# sourceMappingURL=answer.js.map