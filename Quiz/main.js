"use strict";
var Quiz;
(function (Quiz) {
    let quiz = new Quiz.Quiz([]);
    let q1 = new Quiz.TrueFalseQuestion("Ist 1+1=2?", [new Quiz.Answer("yes", true), new Quiz.Answer("no", false)], true);
    let q2 = new Quiz.MultipleChoiceQuestion("Welche dieser Farben gehören zu den Primärfarben?", [new Quiz.Answer("blau", true), new Quiz.Answer("lila", false), new Quiz.Answer("gelb", true)]);
    let q3 = new Quiz.GuessQuestion("Wie hoch ist der Mount Everest?", [new Quiz.Answer("8848", true)], "8848", 8000);
    let q4 = new Quiz.TextQuestion("Wie heißt unsere Hochschule?", [new Quiz.Answer("HFU", true), new Quiz.Answer("HFH", false)], "HFU");
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
    let userInput = Number(window.prompt("Gib eine Zahl ein", ""));
    switch (userInput) {
        case 1: {
            console.log("Willst du eine TrueFalse-Frage, eine MultipleChoice-Frage, eine Guess- oder eine Text-Frage hinzufügen?");
            let userInput = prompt("Bitte gib den Namen der Frage ein: ");
            switch (userInput) {
                case "TrueFalse-Frage": {
                    let text = prompt("Gib eine Behauptung ein: ");
                    let isTrue;
                    let input = prompt("Stimmt diese Behauptung? Schreibe etweder ja oder nein: ");
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
                    let question = new Quiz.TrueFalseQuestion(text, [new Quiz.Answer("Warum existiert dieser Parameter?", true)], isTrue);
                    quiz.addQuestion(question);
                    break;
                }
                case "MultipleChoice-Frage": {
                    let answers = [];
                    let text = prompt("Gib eine Frage ein: ");
                    let answerText = prompt("Gib eine Antwort ein: ");
                    let isRight;
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
        case 2: {
            //answer
            break;
        }
        case 3: {
            break;
        }
    }
})(Quiz || (Quiz = {}));
//# sourceMappingURL=main.js.map