namespace Abschlussarbeit {

    export function startGame(): void {

        text.innerHTML = text.innerHTML + "<br>" + "You decide to enter the forgotten Mines <br> All you have is a torch to lighten the way and your magic to attack foes.";
        console.log(zelda.positionID);

        let continueSlope: boolean = true;

        while (continueSlope == true) {
                
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

                    let letUserSave: string = window.prompt("Do you want to save your game? Yes(y)/No(n): ");

                    switch (letUserSave) {

                        case "y": {

                            let roomString: string = roomArray.toString();


                            function save(_content: string, _filename: string): void {
                                let blob: Blob = new Blob([_content], { type: "text/plain" });
                                let url: string = window.URL.createObjectURL(blob);
                                //*/ using anchor element for download
                                let downloader: HTMLAnchorElement;
                                downloader = document.createElement("a");
                                downloader.setAttribute("href", url);
                                downloader.setAttribute("download", _filename);
                                document.body.appendChild(downloader);
                                downloader.click();
                                document.body.removeChild(downloader);
                                window.URL.revokeObjectURL(url);
                            } 
                            
                            save(roomString, "rooms.json"); //characters, items und passages

                            text.innerHTML = text.innerHTML + "<br>" + "You saved your progress. Hope to see you soon.";

                            break;

                        }
                        case "n": {

                        text.innerHTML = text.innerHTML + "<br>" + "You decided to end the game. Hope to see you again soon!";
                        continueSlope = false;  
                        break;  
                         
                        }
                    }    
                }
            }
        }
    }
}