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
            super(_name, _life, _attack, _type = "player", _positionID);
            this.inventory = _inventory;
            this.commands = _commands;
        }
        attackNPC(_userInput) {
            for (let i; i < Abschlussarbeit.roomArray.length; i++) {
                if (this.positionID == Abschlussarbeit.roomArray[i].id) {
                    let characterPosition = Abschlussarbeit.roomArray[i];
                    let containsCharacter = Abschlussarbeit.doesRoomContainCharacter(characterPosition.characters, _userInput);
                    if (containsCharacter == true) {
                        for (let i; i <= characterPosition.characters.length;) {
                            if (characterPosition.characters[i].name == _userInput) {
                                characterPosition.characters[i].life = characterPosition.characters[i].life - this.attack;
                                if (characterPosition.characters[i].life == 0) {
                                    //extra condition für regs und intels, intels können sich heilen wenn sie eine potion haben
                                    characterPosition.characters = Abschlussarbeit.removeCharacterFromRoom(characterPosition.characters, characterPosition.characters[i].name);
                                    console.log(_userInput + "died by your attack.");
                                }
                            }
                            else {
                                if (characterPosition.characters[i].type == "regular") {
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
                    console.log("There is no one you could attack.");
                }
            }
        }
        drop(_userInput) {
            let inventoryContainsItem = Abschlussarbeit.doesInventoryContainItem(this.inventory, _userInput);
            if (inventoryContainsItem == true) {
                let fillerInventory = [];
                for (let i; i < this.inventory.length; i++) {
                    if (this.inventory[i].name != _userInput) {
                        fillerInventory.push(this.inventory[i]);
                    }
                }
                this.inventory = [];
                for (let j; j < fillerInventory.length; j++) {
                    this.inventory.push(fillerInventory[j]);
                }
            }
            else {
                console.log("There is no such item in your inventory.");
            }
        }
        move(_userInput) {
            super.move();
            for (let i; i < Abschlussarbeit.roomArray.length; i++) {
                if (this.positionID == Abschlussarbeit.roomArray[i].id) {
                    let characterPosition = Abschlussarbeit.roomArray[i];
                    //let containsCharacter: boolean = doesRoomContainCharacter(characterPosition.characters, _userInput);
                    for (let i; i <= characterPosition.passages.length; i++) {
                        if (characterPosition.passages[i].direction == _userInput) {
                            if (characterPosition.passages[i].isPassable == "yes") {
                                this.positionID = characterPosition.passages[i].leadsTo;
                                switch (_userInput) {
                                    case "n":
                                        console.log("You go north.");
                                    case "w":
                                        console.log("You go west.");
                                    case "s":
                                        console.log("You go south.");
                                    case "e":
                                        console.log("You go east.");
                                }
                            }
                            else {
                                console.log("This passage isn't passable yet.");
                            }
                        }
                        else {
                            console.log("There is no door or path this way. Try another direction.");
                        }
                    }
                }
            }
        }
        showInventory() {
            console.log("Your inventory contains:");
            for (let i; i < this.inventory.length; i++) {
                console.log("a" + this.inventory[i]);
            }
        }
        showCommands() {
            let commandsString = this.commands.toString();
            console.log(commandsString);
        }
        take(_userInput) {
            for (let i; i < Abschlussarbeit.roomArray.length; i++) {
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
                        console.log("There's no such item in this room");
                    }
                }
            }
        }
    }
    Abschlussarbeit.PlayerCharacter = PlayerCharacter;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=PlayerCharacter.js.map