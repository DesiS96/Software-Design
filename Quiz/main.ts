namespace Quiz {

    let quiz: Quiz = new Quiz([]);

    let q1: TrueFalseQuestion = new TrueFalseQuestion("Ist 1+1=2?", [new Answer("yes", true), new Answer("no", false)], true);
    let q2: MultipleChoiceQuestion = new MultipleChoiceQuestion("Welche dieser Farben gehören zu den Primärfarben?", [new Answer("blau", true), new Answer("lila", false), new Answer("gelb", true)]);
    let q3: GuessQuestion = new GuessQuestion("Wie hoch ist der Mount Everest?", [new Answer("8848", true)], "8848", 8000);
    let q4: TextQuestion = new TextQuestion("Wie heißt unsere Hochschule?", [new Answer("HFU", true), new Answer("HFH", false)], "HFU");

    //let answer: Answer = new Answer("blau", true);

    quiz.questions[0] = q1;
    quiz.questions[1] = q2;
    quiz.questions[2] = q3;
    quiz.questions[3] = q4;

    console.log("Beantwortete Fragen " + quiz.getAnswerCount() + " Richtig beantwortet: " + quiz.getCorrectCount());

    console.log("Bitte wähle: ");
    console.log("1 um eine Frage zum Quiz hinzu zu fügen");
    console.log("2 um eine Frage zu beantworten");
    console.log("3 um das Quiz zu beenden");

    //gibts einen Weg innerhalb eines Conole.logs einen Zeilenumbruch durchzuführen?

    let userInput: number =  Number(window.prompt("Gib eine Zahl ein", ""));

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
                    let question: TrueFalseQuestion = new TrueFalseQuestion(text, [new Answer("Warum existiert dieser Parameter?", true)], isTrue);

                    quiz.addQuestion(question);
    
                    break;
                }
    
                case "MultipleChoice-Frage": {
    
                    let answers: Answer[] = [];

                    let text: string = prompt("Gib eine Frage ein: ");

                    let answerText: string = prompt("Gib eine Antwort ein: ");

                    let isRight: boolean;

                    




                    




                    break;
                }
                case "Guess": {
    
                    //Guess
                    break;
    
                }
    
                case "Text": {
    
                    //Text
                    break;
    
                }
    
                default: {
    
                    console.log("Diese Frage kenne ich nicht");
                    break;
                }
    
            }
        }

        case 2 : {

            //answer
            break;
        }

        case 3 : {

            break;
        }
    }










}