namespace Quiz {
    
    export class Answer {

    public text: string;    
    public isRight: boolean;

    constructor(_text: string, _isRight: boolean) {

        this.text = _text;
        this.isRight = _isRight;

    }

}

}