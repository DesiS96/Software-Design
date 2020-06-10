namespace QuizV2 {

export class SingleQuestion extends Question {

    answers: string[];
    rightAnswer: number;

        constructor(_question: string, _answers: string[], _rightAnswer: number) {

            super(_question);
            this.answers = _answers;
            this.rightAnswer = _rightAnswer;

        }
    }
}