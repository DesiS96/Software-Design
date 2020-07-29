"use strict";
/*import { Character} from "./Character";
import { Item } from "./Item";
import { Room } from "./Room";
import { roomArray } from "./main";
import { removeCharacterFromRoom } from "./removeCharacterFromRoom";
import { doesRoomContainCharacter } from "./doesRoomContainCharacter";
import { doesInventoryContainItem } from "./doesInventoryContainItem";*/
var Abschlussarbeit;
/*import { Character} from "./Character";
import { Item } from "./Item";
import { Room } from "./Room";
import { roomArray } from "./main";
import { removeCharacterFromRoom } from "./removeCharacterFromRoom";
import { doesRoomContainCharacter } from "./doesRoomContainCharacter";
import { doesInventoryContainItem } from "./doesInventoryContainItem";*/
(function (Abschlussarbeit) {
    class PlayerCharacter extends Abschlussarbeit.Character {
        constructor(_name, _life, _attack, _type, _positionID, _inventory, _commands) {
            super(_name, _life, _attack, _type, _positionID);
            this.inventory = _inventory;
            this.commands = _commands;
        }
        attackNPC(_userInput) {
            for (let i; i < Abschlussarbeit.roomArray.length; i++) {
                if (this.positionID == Abschlussarbeit.roomArray[i].id) {
                    let characterPosition = Abschlussarbeit.roomArray[i];
                    let containsCharacter = Abschlussarbeit.doesRoomContainCharacter(characterPosition.characters, _userInput);
                    if (containsCharacter == true) {
                        for (let i = 0; i <= characterPosition.characters.length;) {
                            if (characterPosition.characters[i].name == _userInput) {
                                characterPosition.characters[i].life = characterPosition.characters[i].life - this.attack;
                                if (characterPosition.characters[i].life == 0) {
                                    //extra condition für regs und intels, intels können sich heilen wenn sie eine potion haben
                                    characterPosition.characters = Abschlussarbeit.removeCharacterFromRoom(characterPosition.characters, characterPosition.characters[i].name);
                                    Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "died by your attack.";
                                    console.log(_userInput + "died by your attack.");
                                }
                            }
                            else {
                                if (characterPosition.characters[i].type == "regular") {
                                    Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + ": Ouch that hurts! Why are you doing this? I'm out of here!";
                                    console.log(_userInput + ": Ouch that hurts! Why are you doing this? I'm out of here!");
                                    characterPosition.characters[i].move();
                                }
                                else {
                                    this.life = this.life - characterPosition.characters[i].attack;
                                }
                            }
                        }
                    }
                }
                else {
                    Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "There is no one you could attack.";
                    console.log("There is no one you could attack.");
                }
            }
        }
        drop(_userInput) {
            let inventoryContainsItem = Abschlussarbeit.doesInventoryContainItem(this.inventory, _userInput);
            if (inventoryContainsItem == true) {
                let fillerInventory = [];
                for (let i = 0; i < this.inventory.length; i++) {
                    if (this.inventory[i].name != _userInput) {
                        fillerInventory.push(this.inventory[i]);
                    }
                }
                this.inventory = [];
                for (let j = 0; j < fillerInventory.length; j++) {
                    this.inventory.push(fillerInventory[j]);
                }
            }
            else {
                Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "There is no such item in your inventory.";
                console.log("There is no such item in your inventory.");
            }
        }
        getCurrentRoom() {
            let roomNumber;
            let characterPosition = this.positionID;
            for (let i = 0; i < Abschlussarbeit.roomArray.length; i++) {
                if (characterPosition == Abschlussarbeit.roomArray[i].id) {
                    roomNumber = i;
                }
            }
            return Abschlussarbeit.roomArray[roomNumber];
        }
        move(_userInput) {
            super.move();
            let currentRoom = this.getCurrentRoom();
            console.log(currentRoom);
            for (let i = 0; i <= currentRoom.passages.length; i++) {
                if (currentRoom.passages[i].direction == _userInput) {
                    if (currentRoom.passages[i].isPassable == "yes") {
                        this.positionID = currentRoom.passages[i].leadsTo;
                        switch (_userInput) {
                            case "n":
                                Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "You go north.";
                                console.log("You go north.");
                                break;
                            case "w":
                                Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "You go west.";
                                console.log("You go west.");
                                break;
                            case "s":
                                Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "You go south.";
                                console.log("You go south.");
                                break;
                            case "e":
                                Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "You go east.";
                                console.log("You go east.");
                                break;
                        }
                    }
                    else {
                        Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "This passage isn't passable yet.";
                        console.log("This passage isn't passable yet.");
                    }
                }
                else {
                    if (i == currentRoom.passages.length && currentRoom.passages[i].direction == _userInput) {
                        Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "There is no door or path this way. Try another direction.";
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
        showInventory() {
            Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "Your inventory contains:";
            for (let i; i < this.inventory.length; i++) {
                console.log("a" + this.inventory[i]);
                Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "a" + this.inventory[i];
            }
        }
        showCommands() {
            //let commandsString: string = this.commands.toString();
            console.log(this.commands);
        }
        take(_userInput) {
            for (let i = 0; i < Abschlussarbeit.roomArray.length; i++) {
                if (this.positionID == Abschlussarbeit.roomArray[i].id) {
                    let characterPosition = Abschlussarbeit.roomArray[i];
                    //let containsCharacter: boolean = doesRoomContainCharacter(characterPosition.characters, _userInput);
                    let roomContainsItem = Abschlussarbeit.doesInventoryContainItem(characterPosition.items, _userInput);
                    if (roomContainsItem == true) {
                        for (let i; i < characterPosition.items.length; i++) {
                            if (characterPosition.items[i].name == _userInput) {
                                this.inventory.push(characterPosition.items[i]);
                            }
                        }
                    }
                    else {
                        Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "There's no such item in this room";
                        console.log("There's no such item in this room");
                    }
                }
            }
        }
    }
    Abschlussarbeit.PlayerCharacter = PlayerCharacter;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=PlayerCharacter.js.map