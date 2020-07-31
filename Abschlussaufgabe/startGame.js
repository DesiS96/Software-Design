"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    function startGame() {
        Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "You decide to enter the forgotten Mines <br> All you have is a torch to lighten the way and your magic to attack foes.";
        console.log(Abschlussarbeit.zelda.positionID);
        let continueSlope = true;
        /*function timeout(): number {

            return 10;

        }*/
        while (continueSlope == true) {
            //setTimeout(timeout, 10);
            Abschlussarbeit.look();
            Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "What do you want to do?";
            let userInput = window.prompt("If you press c, the commands enabled to you will be shown. Select your choice:");
            Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + userInput;
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
                    console.log(Abschlussarbeit.zelda.positionID);
                    break;
                }
                case "t": {
                    Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "You decide to take an item from the room.";
                    let userInput = window.prompt("Which item do you want to take?:");
                    Abschlussarbeit.zelda.take(userInput);
                    console.log(Abschlussarbeit.zelda.inventory);
                    break;
                }
                case "q": {
                    let letUserSave = window.prompt("Do you want to save your game? Yes(y)/No(n): ");
                    switch (letUserSave) {
                        case "y": {
                            //save
                            break;
                        }
                        case "n": {
                            Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "You decided to end the game. Hope to see you again soon!";
                            continueSlope = false;
                            break;
                        }
                    }
                }
            }
        }
    }
    Abschlussarbeit.startGame = startGame;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=startGame.js.map