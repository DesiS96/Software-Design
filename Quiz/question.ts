namespace Quiz {

    export abstract class Question {

        public text: string;

        constructor(_text: string) {

            this.text = _text;
        }
        toString(): string {

            let s: string = "Frage: " + this.text;
            return s;
        }
        check(_isTrue: boolean): boolean {

            return true;

        }

    }

    export class TrueFalseQuestion extends Question {

        public isTrue: boolean;

        constructor(_text: string, _isTrue: boolean) {

            super(_text);
            this.isTrue = _isTrue;

        }

        toString(): string {

            super.toString();
            let s: string = "Frage: " + this.text + ". Antworte mit ja oder nein";
            return s;
        }

        check(_isTrue: boolean): boolean {

            super.check(_isTrue);
            let answer: string;

            let input: string = prompt("Gib eine Antwort ein: ");

            if (this.isTrue == true) {

                answer = "ja";

            }
            else {

                answer = "nein";
            }
            if (input == answer) {

                _isTrue = true;
                return _isTrue;
            }
            else {

                _isTrue = false;
                return _isTrue;
            }
        }  
    }

    export class MultipleChoiceQuestion extends Question {

        public answers: string[];
        public rightAnswers: number[];

        constructor(_text: string, _answers: string[], _rightAnswers: number[]) {      

            super(_text);
            this.answers = _answers;
            this.rightAnswers = _rightAnswers;

        }
        toString(): string {

            super.toString();
            console.log("Frage: " + this.text);
            let s: string = this.answers.join( );

            return s;
        }

        //Frage darin beantworten
        check(_isTrue: boolean): boolean {

            let input: string = prompt("Gib eine Antwort ein: ");

            super.check(_isTrue);
            let i: number = 0;

            while (i < this.answers.length) {

                if (this.answers[i] == input) {

                    _isTrue = true;
                    return _isTrue;
                }
                else {

                    _isTrue = false;
                    return _isTrue;
                }
            }
            _isTrue = false;
            return _isTrue;
        }
    }

    export class GuessQuestion extends Question {

        public answer: string;
        public tolerance: number;

        constructor(_text: string, _answer: string, _tolerance: number) {

            super(_text);
            this.answer = _answer;
            this.tolerance = _tolerance;
        }
        toString(): string {

            super.toString();
            let s: string = "Frage: " + this.text;
            console.log("Gib als Antwort eine Zahl ein");

            return s;
        }

        check(_isTrue: boolean): boolean {

            super.check(_isTrue);

            let userInput: string = prompt("Gib eine Antwort ein: ");

            let input: number = parseInt(userInput);
            let newAnswer: number = parseFloat(this.answer);

            if (input == newAnswer) {

                _isTrue = true;
                return _isTrue;
            }
            else {
                if (this.tolerance < newAnswer) {
                    if (input > this.tolerance && input < newAnswer) {

                        _isTrue = true;
                        return _isTrue;
                    }
                    else {
                        _isTrue = false;
                        return _isTrue;
                    }
                }
                else {
                    if (this.tolerance > newAnswer) {
                        if (input < this.tolerance && input > newAnswer) {
                            _isTrue = true;
                            return _isTrue;
                        }
                        else {
                            _isTrue = false;
                            return _isTrue;
                        }
                    }
                    _isTrue = false;
                    return _isTrue;
                }
            }
        }
    }

    export class TextQuestion extends Question {

        public answer: string;

        constructor(_text: string, _answer: string) {

            super(_text);
            this.answer = _answer;

        }
        toString(): string {

            super.toString();
            let s: string = "Frage: " + this.text;
            console.log("Gib deine Antwort als Satz ein");

            return s;
        }

        check(_isTrue: boolean): boolean {

            super.check(_isTrue);
            let input: string = prompt("Gib eine Antwort ein: ");

            if (input == this.answer) {

                _isTrue = true;
                return _isTrue;
            }
            else {

                _isTrue = false;
                return _isTrue;

            }
        }
    }

}
