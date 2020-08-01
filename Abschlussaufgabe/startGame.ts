namespace Abschlussarbeit {

    export function startGame(): void {

        text.innerHTML = text.innerHTML + "<br>" + "You decide to enter the forgotten Mines <br> All you have is a torch to lighten the way and your magic to attack foes.";
        console.log("You decide to enter the forgotten Mines <br> All you have is a torch to lighten the way and your magic to attack foes.")
        console.log(zelda.positionID);

        let continueSlope: boolean = true;

        //Einsatzpunkt für Bombflower einbauen

        while (continueSlope == true) {
                
            look();

            text.innerHTML = text.innerHTML + "<br>" + "What do you want to do?";
            console.log("What do you want to do?");

            let userInput: string = window.prompt("If you press c, the commands enabled to you will be shown. Select your choice:");

            /*let userInput: string;

            setTimeout(function(): string {
                userInput = window.prompt("If you press c, the commands enabled to you will be shown. Select your choice:"); 
                return userInput;
            }, 100);*/


            //setTimeout(userInput = window.prompt("If you press c, the commands enabled to you will be shown. Select your choice:"), 2000);
            //setTimeout(selfmadePrompt("If you press c, the commands enabled to you will be shown. Select your choice:", userInput), 1000);

            //let userInput: string = setTimeout(selfmadePrompt, 100);
            
            text.innerHTML = text.innerHTML + "<br>" + userInput;

            switch (userInput) {

                case "a": {

                    text.innerHTML = text.innerHTML + "<br>" + "You decided to attack a character.";
                    console.log("You decided to attack a character");

                    let userInput: string = window.prompt("Which character do you want to attack?:");

                    zelda.attackNPC(userInput);    
                    break;

                }
                case "c": {

                    text.innerHTML = text.innerHTML + "<br>" + zelda.commands;
                    break;

                }
                case "d": {

                    text.innerHTML = text.innerHTML + "<br>" + "You decided to drop an item.";
                    console.log("You decided to drop an item.");

                    let userInput: string = window.prompt("Which item do you want to drop?:");

                    zelda.drop(userInput);
                    break;
                }
                case "i": {

                    zelda.showInventory();
                    break;
                }
                case "l": {

                    look();
                    break;
                }
                case "m": {

                    text.innerHTML = text.innerHTML + "<br>" + "You go further into the mines.";
                    console.log("You go further into the mines.");
                    let userInput: string = window.prompt("In which direction do you want to go?:");
                    zelda.move(userInput);
                    console.log(zelda.positionID);
                    break;
                }
                case "t": {

                    text.innerHTML = text.innerHTML + "<br>" + "You decide to take an item from the room.";
                    console.log("You decide to take an item from the room.");

                    let userInput: string = window.prompt("Which item do you want to take?:");
                    zelda.take(userInput);
                    console.log(zelda.inventory);
                    break;     
                }
                case "q": {

                    let letUserSave: string = window.prompt("Do you want to save your game? Yes(y)/No(n): ");

                    switch (letUserSave) {

                        case "y": {

                            let passageArray: Passage[] = [];
                            let itemArray: Item[] = [];
                            let characterArray: Character[] = [];

                            let passageString: string = passageArray.toString();
                            let itemString: string = itemArray.toString();
                            let characterString: string = characterArray.toString();

                            for (let i: number = 0; i <= roomArray.length; i++) {

                                for (let j: number = 0; j <= roomArray[i].passages.length; j++) {

                                    passageArray.push(roomArray[i].passages[j]);
                                }
                                for (let k: number = 0; k <= roomArray[i].items.length; k++) {

                                    itemArray.push(roomArray[i].items[k]);
                                }
                                for (let l: number = 0; l <= roomArray[i].characters.length; l ++) {

                                    characterArray.push(roomArray[i].characters[l]);
                                }
                            }

                            //speichern von charcters, items und passages
     
                            save(passageString, "passages.json");
                            save(itemString, "items.json");
                            save(characterString, "characters.json");

                            text.innerHTML = text.innerHTML + "<br>" + "You saved your progress. Hope to see you soon.";
                            console.log("You saved your progress. Hope to see you soon.");

                            break;

                        }
                        case "n": {

                        text.innerHTML = text.innerHTML + "<br>" + "You decided to end the game. Hope to see you again soon!";
                        console.log("You decided to end the game. Hope to see you again soon!");
                        continueSlope = false;  
                        break;  
                         
                        }
                    }    
                }
            }
        }
    }
}