"use strict";
var QuizV2;
(function (QuizV2) {
    class YesNoQustion extends QuizV2.Question {
        constructor(_question, _yesNo) {
            super(_question);
            this.yesNo = _yesNo;
        }
    }
    QuizV2.YesNoQustion = YesNoQustion;
})(QuizV2 || (QuizV2 = {}));
//# sourceMappingURL=YesNoQuestion.js.map