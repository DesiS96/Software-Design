"use strict";
var Quiz;
(function (Quiz) {
    //let quiz: Quiz = new Quiz([]);
    let q1 = new Quiz.TrueFalseQuestion("Ist 1+1=2?", true);
    let q2 = new Quiz.MultipleChoiceQuestion("Welche dieser Farben gehören zu den Primärfarben?", [new Quiz.Answer("blau", true), new Quiz.Answer("lila", false), new Quiz.Answer("gelb", true)]);
    let q3 = new Quiz.GuessQuestion("Wie hoch ist der Mount Everest?", "8848", 8000);
    let q4 = new Quiz.TextQuestion("Wie heißt unsere Hochschule?", "HFU");
    //let answer: Answer = new Answer("blau", true);
    let quiz = new Quiz.Quiz([q1, q2, q3, q4]);
    console.log(quiz.questions[1]);
    console.log("Beantwortete Fragen " + quiz.getAnswerCount() + " Richtig beantwortet: " + quiz.getCorrectCount());
    console.log("Bitte wähle: ");
    console.log("1 um eine Frage zum Quiz hinzu zu fügen");
    console.log("2 um eine Frage zu beantworten");
    console.log("3 um das Quiz zu beenden");
    //gibts einen Weg innerhalb eines Conole.logs einen Zeilenumbruch durchzuführen?
    let userInput = Number(window.prompt("Gib eine Zahl ein", ""));
    //Schleife fehlt
    for (let i; i < 6; i++) {
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
                        let question = new Quiz.TrueFalseQuestion(text, isTrue);
                        quiz.addQuestion(question);
                        break;
                    }
                    case "MultipleChoice-Frage": {
                        let answers = [];
                        let text = prompt("Gib eine Frage ein: ");
                        let answerText;
                        while (answers.length < 2 && (answerText === "") || answers.length < 6 && !(answerText === "")) {
                            answerText = prompt("Gib eine Antwort ein: ");
                            let isRight;
                            if (!(answerText === "")) { //Funktioniert nicht da vom Programm leerer String erwartet wird
                                console.log("Ist diese Antwort richtig? Wähle 1 für ja oder 2 für nein: ");
                                let inputOfUser = Number(window.prompt("Bitte 1 oder 2 eingeben ", ""));
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
                                let answer = new Quiz.Answer(answerText, isRight);
                                answers.push(answer);
                            }
                            else {
                                console.log("Antwort wurde nicht eingegeben");
                            }
                        }
                        let question = new Quiz.MultipleChoiceQuestion(text, answers);
                        quiz.addQuestion(question);
                        break;
                    }
                    case "Guess": {
                        let text = prompt("Gib eine Frage ein: ");
                        let answer;
                        while (!(answer === "")) {
                            answer = prompt("Gib eine Antwort ein: ");
                        }
                        while (Number.isNaN(Number.parseFloat(answer))) {
                            let tolerance = Number(window.prompt("Gib einen Toleranzbereich ein: "));
                            if (Number.isNaN(Number.parseFloat(answer))) {
                                let question = new Quiz.GuessQuestion(text, answer, tolerance);
                                quiz.addQuestion(question);
                                break;
                            }
                        }
                        break;
                    }
                    case "Text": {
                        let text = prompt("Gib eine Frage ein: ");
                        let answer = prompt("Gib eine Antwort ein: ");
                        let question = new Quiz.TextQuestion(text, answer);
                        quiz.addQuestion(question);
                        break;
                    }
                    default: {
                        console.log("Diese Frage kenne ich nicht");
                        break;
                    }
                }
            }
            case 2: {
                let isRight;
                let question = quiz.getCurrentQuestion();
                let text = question.toString();
                console.log(text);
                let answer = prompt("Gib eine Antwort ein: ");
                let gaveCorrectAnswer = question.check(answer, isRight);
                if (gaveCorrectAnswer == true) {
                    console.log("Yay! Du hast die Frage richtig beantwortet.");
                }
                else {
                    console.log("Deine Antwort war leider falsch.");
                }
                break;
            }
            case 3: {
                console.log("Sie haben das Programm beendet");
                break;
            }
        }
    }
})(Quiz || (Quiz = {}));
//# sourceMappingURL=main.js.map