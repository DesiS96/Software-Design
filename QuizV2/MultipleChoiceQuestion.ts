namespace QuizV2 {

    export class MultipleChoiceQuestion extends Question {

        answers: string[];
        rightAnswers: number[];

        constructor(_question: string, _answers: string[], _rightAnswers: number[]) {

            super(_question);
            this.answers = _answers;
            this.rightAnswers = _rightAnswers;
        }
    }
}