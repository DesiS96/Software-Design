"use strict";
var QuizIncludingJson;
(function (QuizIncludingJson) {
    let myJson = QuizIncludingJson.load("defaultQuestions.json");
    console.log(myJson);
    let q1 = new QuizIncludingJson.TrueFalseQuestion("Ist 1+1=2?", true);
    let q2 = new QuizIncludingJson.MultipleChoiceQuestion("Welche dieser Farben gehören zu den Primärfarben?", ["blau", "lila", "gelb"], [1, 3]);
    let q3 = new QuizIncludingJson.GuessQuestion("Wie hoch ist der Mount Everest?", "8848", 8000);
    let q4 = new QuizIncludingJson.TextQuestion("Wie heißt unsere Hochschule?", "HFU");
    let quiz = new QuizIncludingJson.Quiz([]);
    quiz.questions.push(q1);
    quiz.questions.push(q2);
    quiz.questions.push(q3);
    quiz.questions.push(q4);
    console.log(quiz.questions[1]);
    quiz.answerCount = 0;
    quiz.correctCount = 0;
    let goOn = true;
    window.alert("Bitte gib die Zahl 3 ein, öffne die Entwicklerkonsole und lade die Seite neu. Sonst kannst du Konsole leider nicht lesen.");
    while (goOn == true) {
        console.log("Beantwortete Fragen " + quiz.getAnswerCount() + " Richtig beantwortet: " + quiz.getCorrectCount());
        console.log("Bitte wähle: ");
        console.log("1 um eine Frage zum Quiz hinzu zu fügen");
        console.log("2 um eine Frage zu beantworten");
        console.log("3 um das Quiz zu beenden");
        //gibts einen Weg innerhalb eines Conole.logs einen Zeilenumbruch durchzuführen?
        let userInput = Number(window.prompt("Gib, je nach dem was du tun willst, die entsprechende Zahl ein", ""));
        switch (userInput) {
            case 1: {
                console.log("Willst du eine TrueFalse-Frage, eine MultipleChoice-Frage, eine Guess- oder eine Text-Frage hinzufügen?");
                let userInput = prompt("Bitte gib entweder TrueFalse, Multiple-Choice, Guess oder Text ein: ");
                switch (userInput) {
                    case "TrueFalse": {
                        let text = prompt("Gib eine Behauptung ein: ");
                        let isTrue;
                        let input = prompt("Stimmt diese Behauptung? Schreibe etweder ja oder nein: ");
                        if (input == "ja") {
                            isTrue = true;
                            let question = new QuizIncludingJson.TrueFalseQuestion(text, isTrue);
                            quiz.addQuestion(question);
                            break;
                        }
                        else {
                            if (input == "nein") {
                                isTrue = false;
                                let question = new QuizIncludingJson.TrueFalseQuestion(text, isTrue);
                                quiz.addQuestion(question);
                                break;
                            }
                            else {
                                console.log("Bitte ja oder nein eingeben");
                                break;
                            }
                        }
                    }
                    case "Multiple-Choice": {
                        let answers = [];
                        let text = prompt("Gib eine Fragestellung ein: ");
                        let rightAnswers = [];
                        let answerText;
                        //while (answers.length < 2 && (answerText === "") || answers.length < 6 && !(answerText === "")) {
                        for (let i = 0; answers.length < 6 && !(answerText === ""); i++) {
                            answerText = prompt("Gib eine Antwort ein: ");
                            if (!(answerText === "")) {
                                console.log("Ist diese Antwort richtig? Wähle 1 für ja oder 2 für nein: ");
                                let inputOfUser = Number(window.prompt("Bitte 1 für ja oder 2 für nein eingeben ", ""));
                                if (inputOfUser == 1) {
                                    rightAnswers.push(i);
                                    //i++;
                                }
                                else {
                                    if (inputOfUser == 2) {
                                        //i++;
                                    }
                                    else {
                                        console.log("Diese Zahl kenne ich nicht");
                                    }
                                }
                                //let answer: Answer = new Answer(answerText, isRight);
                                answers.push(answerText);
                            }
                            else {
                                console.log("Antwort wurde nicht eingegeben");
                                break;
                            }
                        }
                        let question = new QuizIncludingJson.MultipleChoiceQuestion(text, answers, rightAnswers);
                        quiz.addQuestion(question);
                        break;
                    }
                    case "Guess": {
                        let text = prompt("Gib eine Fragestellung ein: ");
                        let answer;
                        //while ((answer === "")) { Programm kam komischerweise nicht in die Schleife, deshalb habe ich sie entfernt
                        answer = prompt("Gib eine Antwort ein: ");
                        //}
                        //while (Number.isNaN(Number.parseFloat(answer))) {
                        let tolerance = Number(window.prompt("Gib einen Toleranzbereich ein: "));
                        let question = new QuizIncludingJson.GuessQuestion(text, answer, tolerance);
                        quiz.addQuestion(question);
                        break;
                        /*if (Number.isNaN(Number.parseFloat(answer))) {
                            
                            break;
                        }
                    }*/
                        //break;
                    }
                    case "Text": {
                        let text = prompt("Gib eine Fragestellung ein: ");
                        let answer = prompt("Gib eine Antwort ein: ");
                        let question = new QuizIncludingJson.TextQuestion(text, answer);
                        quiz.addQuestion(question);
                        break;
                    }
                    default: {
                        console.log("Diese Frage kenne ich nicht");
                        break;
                    }
                }
                break;
            }
            case 2: {
                let isRight;
                let question = quiz.getCurrentQuestion();
                let text = question.toString();
                console.log(text);
                let gaveCorrectAnswer = question.check(isRight);
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
            case 3: {
                console.log("Sie haben das Programm beendet");
                goOn = false;
                break;
            }
            default: {
                console.log("Diese Nummer kenne ich nicht");
                break;
            }
        }
    }
})(QuizIncludingJson || (QuizIncludingJson = {}));
//# sourceMappingURL=main.js.map