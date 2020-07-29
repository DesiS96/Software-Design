"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    function startGame() {
        Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "You decide to enter the forgotten Mines <br> All you have is a torch to lighten the way and your magic to attack foes.";
        console.log(Abschlussarbeit.zelda.positionID);
        let continueSlope = true;
        while (continueSlope == true) {
            Abschlussarbeit.look();
            Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "What do you want to do?";
            let userInput = window.prompt("If you press c, the commands enabled to you will be shown. Select your choice:");
            switch (userInput) {
                case "a": {
                    Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "You decided to attack a character.";
                    let userInput = window.prompt("Which character do you want to attack?:");
                    Abschlussarbeit.zelda.attackNPC(userInput);
                    break;
                }
                case "c": {
                    Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + Abschlussarbeit.zelda.commands;
                    break;
                }
                case "d": {
                    Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "You decided to drop an item.";
                    let userInput = window.prompt("Which item do you want to drop?:");
                    Abschlussarbeit.zelda.drop(userInput);
                    break;
                }
                case "i": {
                    Abschlussarbeit.zelda.showInventory();
                    break;
                }
                case "l": {
                    Abschlussarbeit.look();
                    break;
                }
                case "m": {
                    Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "You go further into the mines.";
                    let userInput = window.prompt("In which direction do you want to go?:");
                    Abschlussarbeit.zelda.move(userInput);
                    break;
                }
                case "t": {
                    Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "You decide to take an item from the room.";
                    let userInput = window.prompt("Which item do you want to take?:");
                    Abschlussarbeit.zelda.take(userInput);
                    break;
                }
                case "q": {
                    Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "You decided to end the game. Hope to see you again soon!";
                    continueSlope = false;
                }
            }
        }
    }
    Abschlussarbeit.startGame = startGame;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=startGame.js.map