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
            let currentRoom = this.getCurrentRoom();
            let containsCharacter = Abschlussarbeit.doesRoomContainCharacter(currentRoom.characters, _userInput);
            if (containsCharacter == true) {
                for (let i = 0; i <= currentRoom.characters.length; i++) {
                    if (currentRoom.characters[i].name == _userInput) {
                        currentRoom.characters[i].life = currentRoom.characters[i].life - this.attack;
                        if (currentRoom.characters[i].life == 0) {
                            //extra condition für regs und intels, intels können sich heilen wenn sie eine potion haben
                            currentRoom.characters = currentRoom.removeCharacterFromThisRoom(currentRoom.characters[i].name);
                            Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "died by your attack.";
                            console.log(_userInput + "died by your attack.");
                            break;
                        }
                        else {
                            if (currentRoom.characters[i].type == "regular") {
                                Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + ": Ouch that hurts! Why are you doing this? I'm out of here!";
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
                Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "There is no one you could attack.";
                console.log("There is no one you could attack.");
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
            for (let i = 0; i <= Abschlussarbeit.roomArray.length; i++) {
                if (characterPosition == Abschlussarbeit.roomArray[i].id) {
                    roomNumber = i;
                    break;
                }
            }
            return Abschlussarbeit.roomArray[roomNumber];
        }
        move(_userInput) {
            super.move();
            let currentRoom = this.getCurrentRoom();
            console.log(currentRoom);
            console.log(currentRoom.passages[1].direction);
            for (let i = 0; i <= currentRoom.passages.length; i++) {
                if (currentRoom.passages[i].direction == _userInput) {
                    if (currentRoom.passages[i].isPassable == "yes") {
                        this.positionID = currentRoom.passages[i].leadsTo;
                        console.log(Abschlussarbeit.zelda.positionID);
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
                        break;
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
        }
        showInventory() {
            Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "Your inventory contains:";
            console.log("Your inventory contains:");
            for (let i; i < this.inventory.length; i++) {
                console.log("a" + this.inventory[i]);
                Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "a" + this.inventory[i];
            }
        }
        showCommands() {
            console.log(this.commands);
        }
        take(_userInput) {
            let currentRoom = this.getCurrentRoom();
            console.log(currentRoom);
            console.log(currentRoom.items);
            let roomContainsItem = Abschlussarbeit.doesInventoryContainItem(currentRoom.items, _userInput);
            if (roomContainsItem == true) {
                for (let i = 0; i <= currentRoom.items.length; i++) {
                    console.log(currentRoom.items[i].name);
                    console.log(_userInput);
                    if (currentRoom.items[i].name == _userInput) {
                        this.inventory.push(currentRoom.items[i]);
                        console.log(this.inventory);
                        currentRoom.removeItemFromRoom(currentRoom.items[i].name);
                    }
                    else {
                        console.log("Name of item was spelled wrong.");
                    }
                }
            }
            else {
                Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "There's no such item in this room";
                console.log("There's no such item in this room");
            }
        }
    }
    Abschlussarbeit.PlayerCharacter = PlayerCharacter;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=PlayerCharacter.js.map