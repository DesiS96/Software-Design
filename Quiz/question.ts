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
        check(_input: string, _isTrue: boolean): boolean {

            return true;

        }

    }

    export class TrueFalseQuestion extends Question {

        public isTrue: boolean;

        constructor(_text: string, _isTrue: boolean) {

            super(_text);
            this.isTrue = _isTrue;

        }
        check(_input: string, _isTrue: boolean): boolean {

            super.check(_input, _isTrue);
            let answer: string;

            if (this.isTrue == true) {

                answer = "ja";

            }
            else {

                answer = "nein";
            }
            if (_input == answer) {

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

        public answers: Answer[];

        constructor(_text: string, _answers: Answer[]) {      

            super(_text);
            this.answers = _answers;
        }

        check(_input: string, _isTrue: boolean): boolean {

            super.check(_input, _isTrue);
            let i: number = 0;
            //let input: number = parseInt(_input);

            while (i < this.answers.length) {

                if (this.answers[i].text == _input) {

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

        //toString und Check einbauen
    }

    export class GuessQuestion extends Question {

        public answer: string;
        public tolerance: number;

        constructor(_text: string, _answer: string, _tolerance: number) {

            super(_text);
            this.answer = _answer;
            this.tolerance = _tolerance;
        }

        check(_input: string, _isTrue: boolean): boolean {

            super.check(_input, _isTrue);

            let input: number = parseInt(_input);
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

        check(_input: string, _isTrue: boolean): boolean {

            super.check(_input, _isTrue);

            if (_input == this.answer) {

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
