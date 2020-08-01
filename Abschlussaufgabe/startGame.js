"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    function startGame() {
        Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "You decide to enter the forgotten Mines <br> All you have is a torch to lighten the way and your magic to attack foes.";
        console.log("You decide to enter the forgotten Mines <br> All you have is a torch to lighten the way and your magic to attack foes.");
        console.log(Abschlussarbeit.zelda.positionID);
        let continueSlope = true;
        //Einsatzpunkt für Bombflower einbauen
        while (continueSlope == true) {
            Abschlussarbeit.look();
            Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "What do you want to do?";
            console.log("What do you want to do?");
            let userInput = window.prompt("If you press c, the commands enabled to you will be shown. Select your choice:");
            /*let userInput: string;

            setTimeout(function(): string {
                userInput = window.prompt("If you press c, the commands enabled to you will be shown. Select your choice:");
                return userInput;
            }, 100);*/
            //setTimeout(userInput = window.prompt("If you press c, the commands enabled to you will be shown. Select your choice:"), 2000);
            //setTimeout(selfmadePrompt("If you press c, the commands enabled to you will be shown. Select your choice:", userInput), 1000);
            //let userInput: string = setTimeout(selfmadePrompt, 100);
            Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + userInput;
            switch (userInput) {
                case "a": {
                    Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "You decided to attack a character.";
                    console.log("You decided to attack a character");
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
                    console.log("You decided to drop an item.");
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
                    console.log("You go further into the mines.");
                    let userInput = window.prompt("In which direction do you want to go?:");
                    Abschlussarbeit.zelda.move(userInput);
                    console.log(Abschlussarbeit.zelda.positionID);
                    break;
                }
                case "t": {
                    Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "You decide to take an item from the room.";
                    console.log("You decide to take an item from the room.");
                    let userInput = window.prompt("Which item do you want to take?:");
                    Abschlussarbeit.zelda.take(userInput);
                    console.log(Abschlussarbeit.zelda.inventory);
                    break;
                }
                case "q": {
                    let letUserSave = window.prompt("Do you want to save your game? Yes(y)/No(n): ");
                    switch (letUserSave) {
                        case "y": {
                            let passageArray = [];
                            let itemArray = [];
                            let characterArray = [];
                            let passageString = passageArray.toString();
                            let itemString = itemArray.toString();
                            let characterString = characterArray.toString();
                            for (let i = 0; i <= Abschlussarbeit.roomArray.length; i++) {
                                for (let j = 0; j <= Abschlussarbeit.roomArray[i].passages.length; j++) {
                                    passageArray.push(Abschlussarbeit.roomArray[i].passages[j]);
                                }
                                for (let k = 0; k <= Abschlussarbeit.roomArray[i].items.length; k++) {
                                    itemArray.push(Abschlussarbeit.roomArray[i].items[k]);
                                }
                                for (let l = 0; l <= Abschlussarbeit.roomArray[i].characters.length; l++) {
                                    characterArray.push(Abschlussarbeit.roomArray[i].characters[l]);
                                }
                            }
                            //speichern von charcters, items und passages
                            Abschlussarbeit.save(passageString, "passages.json");
                            Abschlussarbeit.save(itemString, "items.json");
                            Abschlussarbeit.save(characterString, "characters.json");
                            Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "You saved your progress. Hope to see you soon.";
                            console.log("You saved your progress. Hope to see you soon.");
                            break;
                        }
                        case "n": {
                            Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "You decided to end the game. Hope to see you again soon!";
                            console.log("You decided to end the game. Hope to see you again soon!");
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