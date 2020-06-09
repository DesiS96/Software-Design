namespace QuizV2 {

    export class YesNoQustion extends Question {

        yesNo: string;

        constructor(_question: string, _yesNo: string) {

            super(_question);
            this.yesNo = _yesNo;

        }
    }
}