namespace Quiz {

    export abstract class Question {

        public text: string;
        

        constructor(_text: string) {

            this.text = _text;
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
    }

    export class TrueFalseQuestion extends Question {

        public isTrue: boolean;

        constructor(_text: string, _isTrue: boolean) {

            super(_text);
            this.isTrue = _isTrue;

        }
        /*toString(): string {          
            super.toString();
            return "";
        }
        check()
        kann es das automatisch oder wie?*/
    }

    export class MultipleChoiceQuestion extends Question {

        public answers: Answer[];


        constructor(_text: string, _answers: Answer[]) {      

            super(_text);
            this.answers = _answers;
        }
        //toString und Check einbauen
    }

    export class GuessQuestion extends Question {

        public answer: string;
        public tolernace: number;

        constructor(_text: string, _answer: string, _tolerance: number) {

            super(_text);
            this.answer = _answer;
            this.tolernace = _tolerance;
        }

        //toString, check

    }

    export class TextQuestion extends Question {

        public answer: string;

        constructor(_text: string, _answer: string) {

            super(_text);
            this.answer = _answer;

        }

        //toString, check
    }

}
