namespace QuizV2 {

    export class TextQuestion extends Question {

    answers: string[];
    rightAnswer: string;

        constructor(_question: string, _answers: string[], _rightAnswer: string) {

            super(_question);
            this.answers = _answers;
            this.rightAnswer = _rightAnswer;
        }
    }
}