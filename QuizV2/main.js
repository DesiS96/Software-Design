"use strict";
var QuizV2;
(function (QuizV2) {
    let q1 = new QuizV2.GuessQuestion("Wie alt bin ich?", 23, 20, 30);
    let q2 = new QuizV2.YesNoQustion("Ist der Himmel blau?", "ja"); //alles hier später als json auslagern
    let q3 = new QuizV2.MultipleChoiceQuestion("Welche der folgenden Farben gehören zu den Primärfarben?", ["gelb", "violett", "blau"], [1, 3]);
    let quiz = [q1, q2, q3];
    console.log(quiz);
    let points = 0;
    console.log(points);
    menu();
    function menu() {
        console.log("Willkommen beim Quiz! Ihre bisherige Punktzahl beträgt: " + points);
        console.log("Wählen Sie:");
        console.log("1 um eine bereits existierende Frage zu beantworten");
        console.log("2 um eine neue Quizfrage zu erstellen");
        console.log("3 um das Programm zu beenden");
        let userInput = Number(window.prompt("Gib entweder 1, 2 oder 3 ein: "));
        console.log(userInput);
    }
})(QuizV2 || (QuizV2 = {}));
//# sourceMappingURL=main.js.map