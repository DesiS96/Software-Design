namespace QuizV2 {

    export class GuessQuestion extends Question {

        rightAnswer: number;
        toleranceMin: number;
        toleranceMax: number;

        constructor(_question: string, _rightAnswer: number, _toleranceMin: number, _toleranceMax: number){

            super(_question);
            this.rightAnswer = _rightAnswer;
            this.toleranceMin = _toleranceMin;
            this.toleranceMax = _toleranceMax;
            
        }
    }
}