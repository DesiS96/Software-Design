namespace Quiz {

    export abstract class Question {

        public text: string;
        public answers: Answer[];

        constructor(_text: string, _answers: Answer[]) {

            this.text = _text;
            this.answers = _answers;
        }
        toString(): string {

            return "";
        }

        check(_input: string): boolean {
        
            if (_input == this.text) {   
                return true;
            }
            else {

                return false;
            }  
        }

        shuffleAnswers(): void {

            this.answers.sort(() => Math.random() - 0.5);
            //erste Idee Antworten randomizen         
        }
    }

    export class TrueFalseQuestion extends Question {

        public isTrue: boolean;

        constructor(_text: string, _answers: Answer[], _isTrue: boolean) {

            super(_text, _answers);
            this.isTrue = _isTrue;

            _answers.length = 2; //true und false
        }
        /*toString(): string {          
            super.toString();
            return "";
        }
        check()
        kann es das automatisch oder wie?*/
    }

    export class MultipleChoiceQuestion extends Question {


        constructor(_text: string, _answers: Answer[]) {      

            super(_text, _answers);
        }
        //toString und Check einbauen
    }

    export class GuessQuestion extends Question {

        public answer: string;
        public tolernace: number;

        constructor(_text: string, _answers: Answer[], _answer: string, _tolerance: number) {

            super(_text, _answers);
            this.answer = _answer;
            this.tolernace = _tolerance;
        }

        //toString, check

    }

    export class TextQuestion extends Question {

        public answer: string;

        constructor(_text: string, _answers: Answer[], _answer: string) {

            super(_text, _answers);
            this.answer = _answer;

        }

        //toString, check
    }

}
