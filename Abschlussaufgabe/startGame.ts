namespace Abschlussarbeit {

    export function startGame(): void {

        text.innerHTML = text.innerHTML + "<br>" + "You decide to enter the forgotten Mines <br> All you have is a torch to lighten the way and your magic to attack foes.";
        console.log(zelda.positionID);

        let continueSlope: boolean = true;

        /*function timeout(): number {

            return 10;

        }*/

        while (continueSlope == true) {

            //setTimeout(timeout, 10);
                
            look();

            text.innerHTML = text.innerHTML + "<br>" + "What do you want to do?";

            let userInput: string = window.prompt("If you press c, the commands enabled to you will be shown. Select your choice:");
            
            text.innerHTML = text.innerHTML + "<br>" + userInput;

            switch (userInput) {

                case "a": {

                    text.innerHTML = text.innerHTML + "<br>" + "You decided to attack a character.";

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
                    let userInput: string = window.prompt("In which direction do you want to go?:");
                    zelda.move(userInput);
                    console.log(zelda.positionID);
                    break;
                }
                case "t": {

                    text.innerHTML = text.innerHTML + "<br>" + "You decide to take an item from the room.";

                    let userInput: string = window.prompt("Which item do you want to take?:");
                    zelda.take(userInput);
                    console.log(zelda.inventory);
                    break;     
                }
                case "q": {

                    text.innerHTML = text.innerHTML + "<br>" + "You decided to end the game. Hope to see you again soon!";
                    continueSlope = false;  
                    break;       
                }
            }
        }
    }
}