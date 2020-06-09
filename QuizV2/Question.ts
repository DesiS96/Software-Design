namespace QuizV2 {

    export abstract class Question {

        question: string;
        
        constructor(_question: string) {

            this.question = _question;

        }
    }
}