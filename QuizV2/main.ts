namespace QuizV2 {

    let q1: GuessQuestion = new GuessQuestion("Wie alt bin ich?", 23, 20, 30);
    let q2: YesNoQustion = new YesNoQustion("Ist der Himmel blau?", "ja"); //alles hier später als json auslagern
    let q3: MultipleChoiceQuestion = new MultipleChoiceQuestion("Welche der folgenden Farben gehören zu den Primärfarben?", ["gelb", "violett", "blau"], [1, 3]);

    let quiz: Question[] = [q1, q2, q3];
    console.log(quiz);

    let points: number = 0;
    console.log(points);

    menu();

    function menu(): void {

        console.log("Willkommen beim Quiz! Ihre bisherige Punktzahl beträgt: " + points);
        console.log("Wählen Sie:");
        console.log("1 um eine bereits existierende Frage zu beantworten");
        console.log("2 um eine neue Quizfrage zu erstellen");
        console.log("3 um das Programm zu beenden");

        let userInput: number = Number(window.prompt("Gib entweder 1, 2 oder 3 ein: "));
        console.log(userInput);



    }


}