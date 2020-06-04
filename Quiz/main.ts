namespace Quiz {

    //let quiz: Quiz = new Quiz([]);

    let q1: TrueFalseQuestion = new TrueFalseQuestion("Ist 1+1=2?", true);
    let q2: MultipleChoiceQuestion = new MultipleChoiceQuestion("Welche dieser Farben gehören zu den Primärfarben?", [new Answer("blau", true), new Answer("lila", false), new Answer("gelb", true)]);
    let q3: GuessQuestion = new GuessQuestion("Wie hoch ist der Mount Everest?", "8848", 8000);
    let q4: TextQuestion = new TextQuestion("Wie heißt unsere Hochschule?", "HFU");

    //let answer: Answer = new Answer("blau", true);

    let quiz: Quiz = new Quiz([]);

    quiz.questions.push(q1);
    quiz.questions.push(q2);
    quiz.questions.push(q3);
    quiz.questions.push(q4);

    console.log(quiz.questions[1]);

    quiz.answerCount = 0;
    quiz.correctCount = 0;

    let goOn: boolean = true;

    while (goOn == true) {

    console.log("Beantwortete Fragen " + quiz.getAnswerCount() + " Richtig beantwortet: " + quiz.getCorrectCount());

    console.log("Bitte wähle: ");
    console.log("1 um eine Frage zum Quiz hinzu zu fügen");
    console.log("2 um eine Frage zu beantworten");
    console.log("3 um das Quiz zu beenden");

    //gibts einen Weg innerhalb eines Conole.logs einen Zeilenumbruch durchzuführen?

    let userInput: number =  Number(window.prompt("Gib eine Zahl ein", ""));

    //Schleife fehlt

    switch (userInput) {

        case 1: { 
            
            console.log("Willst du eine TrueFalse-Frage, eine MultipleChoice-Frage, eine Guess- oder eine Text-Frage hinzufügen?");

            let userInput: string =  prompt("Bitte gib den Namen der Frage ein: ");
    
            switch (userInput) {
    
                case "TrueFalse-Frage": {
    
                    let text: string = prompt("Gib eine Behauptung ein: ");
    
                    let isTrue: boolean;
                
                    let input: string = prompt("Stimmt diese Behauptung? Schreibe etweder ja oder nein: ");
    
                    if (input == "ja") {
    
                        isTrue = true;
                    }
                    else {
    
                        if (input == "nein") {
    
                            isTrue = false;
                        }
                        else {
                            console.log("Bitte ja oder nein eingeben");
                        }
                    }
                    let question: TrueFalseQuestion = new TrueFalseQuestion(text, isTrue);

                    quiz.addQuestion(question);
    
                    break;
                }
    
                case "MultipleChoice-Frage": {
    
                    let answers: Answer[] = [];
                    let text: string = prompt("Gib eine Frage ein: ");
                    let answerText: string;

                    while (answers.length < 2 && (answerText === "") || answers.length < 6 && !(answerText === "")) {
                    answerText = prompt("Gib eine Antwort ein: ");
                    let isRight: boolean;

                    if (!(answerText === "")) {

                        console.log("Ist diese Antwort richtig? Wähle 1 für ja oder 2 für nein: ");

                        let inputOfUser: number = Number(window.prompt("Bitte 1 oder 2 eingeben ", ""));
                        
                        if (inputOfUser == 1) {
                            isRight = true;

                        }
                        else {

                            if (inputOfUser == 2) {
                                isRight = false;
                            }
                            else {
                                console.log("Diese Zahl kenne ich nicht");
                            }
                        }

                        let answer: Answer = new Answer(answerText, isRight);

                        answers.push(answer);
                    }
                    else {

                        console.log("Antwort wurde nicht eingegeben");
                    }
                }
                    let question: MultipleChoiceQuestion = new MultipleChoiceQuestion(text, answers);
                    quiz.addQuestion(question);
                    break;
                }

                case "Guess": {
    
                    let text: string = prompt("Gib eine Frage ein: ");

                    let answer: string;

                    while (!(answer === "")) {

                        answer = prompt("Gib eine Antwort ein: ");
                    }

                    while (Number.isNaN(Number.parseFloat(answer))) {

                        let tolerance: number = Number(window.prompt("Gib einen Toleranzbereich ein: "));
                        
                        if (Number.isNaN(Number.parseFloat(answer))) {
                            let question: GuessQuestion = new GuessQuestion(text, answer, tolerance);
                            quiz.addQuestion(question);
                            break;
                        }
                    }      
                    break;
                }
    
                case "Text": {
    
                    let text: string = prompt("Gib eine Frage ein: ");
                    let answer: string = prompt("Gib eine Antwort ein: ");
                    let question: TextQuestion = new TextQuestion(text, answer);

                    quiz.addQuestion(question);

                    break;
                }

                default: {
    
                    console.log("Diese Frage kenne ich nicht");
                    break;
                }
            }
        }

        case 2 : {

            let isRight: boolean;
            let question: Question = quiz.getCurrentQuestion(); //bekommt die currentQuestion nicht warum auch immer

            //let question: Question = quiz.questions[Math.random() * quiz.questions.length];

            let text: string = question.toString();

            //console.log(question.text);

            console.log(text);

            let answer: string = prompt("Gib eine Antwort ein: ");
            let gaveCorrectAnswer: boolean = question.check(answer, isRight);

            if (gaveCorrectAnswer == true) {

                console.log("Yay! Du hast die Frage richtig beantwortet.");
                quiz.answerCount++;
                quiz.correctCount++;
            }
            else {

                console.log("Deine Antwort war leider falsch.");
                quiz.answerCount++;
            }
            break;
        }

        case 3 : {

            console.log("Sie haben das Programm beendet");
            goOn = false;
            break;
        }
    }
}
}