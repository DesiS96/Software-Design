namespace Quiz {

    export class Quiz {

        public questions: Question[];
        public currentQuestion: Question;
        public answerCount: number;
        public correctCount: number;

        constructor(_questions: Question[]) {

            this.questions = _questions;

        }

        addQuestion(_question: Question): void {

            this.questions.push(_question);

        }

        getCurrentQuestion(): Question {

            this.currentQuestion = this.questions[this.answerCount];

            return this.currentQuestion;

        }

        changeCurrentQuestion(): Question {

            this.currentQuestion = this.questions[Math.random() * this.questions.length];

            return this.currentQuestion;

        }

        getAnswerCount(): number {

            return this.answerCount;

        }

        getCorrectCount(): number {

            return this.correctCount;

        }
    }
}