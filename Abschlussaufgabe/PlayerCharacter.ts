/*import { Character} from "./Character";
import { Item } from "./Item";
import { Room } from "./Room";
import { roomArray } from "./main";
import { removeCharacterFromRoom } from "./removeCharacterFromRoom";
import { doesRoomContainCharacter } from "./doesRoomContainCharacter";
import { doesInventoryContainItem } from "./doesInventoryContainItem";*/

namespace Abschlussarbeit {


export class PlayerCharacter extends Character {

        public inventory: Item[];
        public commands: string;

        constructor(_name: string, _life: number, _attack: number, _type: string, _positionID: number, _inventory: Item[], _commands: string) {

            super(_name, _life, _attack, _type, _positionID);
            this.inventory = _inventory;
            this.commands = _commands;
        }

        attackNPC(_userInput: string): void {

            let currentRoom: Room = this.getCurrentRoom();

            let containsCharacter: boolean = doesRoomContainCharacter(currentRoom.characters, _userInput);

            if (containsCharacter == true) {

                for (let i: number = 0; i <= currentRoom.characters.length; i++) {
                    if (currentRoom.characters[i].name == _userInput) {

                        currentRoom.characters[i].life = currentRoom.characters[i].life - this.attack;

                        if (currentRoom.characters[i].life == 0) {
                        //extra condition für regs und intels, intels können sich heilen wenn sie eine potion haben

                            currentRoom.characters = removeCharacterFromRoom(currentRoom.characters, currentRoom.characters[i].name);
                            text.innerHTML = text.innerHTML + "<br>" + "died by your attack.";
                            console.log(_userInput + "died by your attack.");
                            break;
                        }
                        else {

                            if (currentRoom.characters[i].type == "regular") {
    
                            text.innerHTML = text.innerHTML + "<br>" + ": Ouch that hurts! Why are you doing this? I'm out of here!";
    
                            console.log(_userInput + ": Ouch that hurts! Why are you doing this? I'm out of here!");
                            currentRoom.characters[i].move();
    
                            }
                            else {                      
                                this.life = this.life - currentRoom.characters[i].attack;
    
                            }
                                
                        }
                    }
                    
                    
                }
                
            }
            else {
                text.innerHTML = text.innerHTML + "<br>" + "There is no one you could attack.";
                console.log("There is no one you could attack.");

            }
            
        }

        drop(_userInput: string): void {

            let inventoryContainsItem: boolean = doesInventoryContainItem(this.inventory, _userInput);

            if (inventoryContainsItem == true) {

                let fillerInventory: Item[] = [];

                for (let i: number = 0; i < this.inventory.length; i++) {

                    if (this.inventory[i].name != _userInput) {
                        fillerInventory.push(this.inventory[i]);
                                
                    }
                }

                this.inventory = [];

                for (let j: number = 0; j < fillerInventory.length; j++) {
                    this.inventory.push(fillerInventory[j]);
                }
            }
            else {
                text.innerHTML = text.innerHTML + "<br>" + "There is no such item in your inventory.";

                console.log("There is no such item in your inventory.");
            }
        }

        getCurrentRoom(): Room {

            let roomNumber: number;

            let characterPosition: number = this.positionID;

            for (let i: number = 0; i < roomArray.length; i++) {
                if (characterPosition == roomArray[i].id) {

                    roomNumber = i;
                }
            }

            return roomArray[roomNumber];
        }

        move(_userInput: string): void {

            super.move();

            let currentRoom: Room = this.getCurrentRoom();
            console.log(currentRoom);
            console.log(currentRoom.passages[1].direction);

            for (let i: number = 0; i <= currentRoom.passages.length; i++) {

                if (currentRoom.passages[i].direction == _userInput) {

                    //let passage: string = currentRoom.passages[i].direction;

                    if (currentRoom.passages[i].isPassable == "yes") {
                        this.positionID = currentRoom.passages[i].leadsTo;
                        console.log(zelda.positionID);
                        
                        switch (_userInput) {

                            case "n":
                                text.innerHTML = text.innerHTML + "<br>" + "You go north.";
                                console.log("You go north.");
                                break;
                            case "w":
                                text.innerHTML = text.innerHTML + "<br>" + "You go west.";
                                console.log("You go west.");
                                break;
                            case "s":
                                text.innerHTML = text.innerHTML + "<br>" + "You go south.";
                                console.log("You go south.");
                                break;
                            case "e":
                                text.innerHTML = text.innerHTML + "<br>" + "You go east.";
                                console.log("You go east.");
                                break;
                        }
                        break;
                    }
                    else {
                        text.innerHTML = text.innerHTML + "<br>" + "This passage isn't passable yet.";
                        console.log("This passage isn't passable yet.");

                    }
                }
                else {

                    if (i == currentRoom.passages.length && currentRoom.passages[i].direction == _userInput) {
                        text.innerHTML = text.innerHTML + "<br>" + "There is no door or path this way. Try another direction.";
                        console.log("There is no door or path this way. Try another direction.");
                    }

                }
            }
            /*for (let i: number = 0; i <= roomArray.length; i++) {

                if (this.positionID == roomArray[i].id) {

                    let characterPosition: Room = roomArray[i];

                    //let containsCharacter: boolean = doesRoomContainCharacter(characterPosition.characters, _userInput);

                    for (let i: number = 0; i <= characterPosition.passages.length; i++) {

                        if (characterPosition.passages[i].direction == _userInput) {

                            if (characterPosition.passages[i].isPassable == "yes") {
                                this.positionID = characterPosition.passages[i].leadsTo;
                                switch (_userInput) {

                                    case "n":
                                        text.innerHTML = text.innerHTML + "<br>" + "You go north.";
                                        console.log("You go north.");
                                        break;
                                    case "w":
                                        text.innerHTML = text.innerHTML + "<br>" + "You go west.";
                                        console.log("You go west.");
                                        break;
                                    case "s":
                                        text.innerHTML = text.innerHTML + "<br>" + "You go south.";
                                        console.log("You go south.");
                                        break;
                                    case "e":
                                        text.innerHTML = text.innerHTML + "<br>" + "You go east.";
                                        console.log("You go east.");
                                        break;
                                }
                            }
                            else {
                                text.innerHTML = text.innerHTML + "<br>" + "This passage isn't passable yet.";
                                console.log("This passage isn't passable yet.");

                            }
                        }
                        else {
                            text.innerHTML = text.innerHTML + "<br>" + "There is no door or path this way. Try another direction.";
                            console.log("There is no door or path this way. Try another direction.");

                        }
                    }        
                }

            }*/
        }

        showInventory(): void {

            text.innerHTML = text.innerHTML + "<br>" + "Your inventory contains:";

            for (let i: number; i < this.inventory.length; i++) {
                console.log("a" + this.inventory[i]);
                text.innerHTML = text.innerHTML + "<br>" + "a" + this.inventory[i];

            }
        }

        showCommands(): void {

            //let commandsString: string = this.commands.toString();

            console.log(this.commands);
        }

        take(_userInput: string): void {

            for (let i: number = 0; i < roomArray.length; i++) {

                if (this.positionID == roomArray[i].id) {

                        let characterPosition: Room = roomArray[i];

                        //let containsCharacter: boolean = doesRoomContainCharacter(characterPosition.characters, _userInput);

                        let roomContainsItem: boolean = doesInventoryContainItem(characterPosition.items, _userInput);

                        if (roomContainsItem == true) {

                            for (let i: number; i < characterPosition.items.length; i++) {

                                if (characterPosition.items[i].name == _userInput) {

                                    this.inventory.push(characterPosition.items[i]);
                                }
                            }
                        }
                        else {
                            text.innerHTML = text.innerHTML + "<br>" + "There's no such item in this room";
                            console.log("There's no such item in this room");

                        }
                }
            }   
        }

    }

}