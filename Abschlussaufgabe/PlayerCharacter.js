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
            console.log(currentRoom);
            let containsCharacter = Abschlussarbeit.doesRoomContainCharacter(currentRoom.characters, _userInput);
            if (containsCharacter == true) {
                for (let i = 0; i <= currentRoom.characters.length; i++) {
                    if (currentRoom.characters[i].name == _userInput) {
                        console.log(currentRoom.characters[i].life);
                        currentRoom.characters[i].life = currentRoom.characters[i].life - this.attack;
                        console.log(currentRoom.characters[i].life);
                        if (currentRoom.characters[i].life == 0) {
                            //extra condition für regs und intels, intels können sich heilen wenn sie eine potion haben
                            //geht nicht da Character-Array nicht intelligentNPC-Array
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
                                break;
                            }
                            else {
                                console.log(this.life);
                                this.life = this.life - currentRoom.characters[i].attack;
                                console.log(this.life);
                                break;
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
                if (this.inventory.length > 1) {
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
                    console.log(this.inventory);
                }
                else {
                    this.inventory = [];
                    console.log(this.inventory);
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
        /*look(): void {

            let currentRoom: Room = this.getCurrentRoom();
    
            text.innerHTML = text.innerHTML + "<br>" + currentRoom.description + "<br>" + "You see:";
            if (currentRoom.items.length != 0) {
    
                for (let i: number = 0; i <= currentRoom.items.length; i++) {
                    
                    text.innerHTML = text.innerHTML + "<br>" + currentRoom.items[i].name;
                    console.log(currentRoom.items[i].name);
                }
            }
            if (currentRoom.characters.length != 0) {
                for (let j: number = 0; j <= currentRoom.characters.length; j++) {
                    
                    let characterAtJ: string = currentRoom.characters[j].name;
                    console.log(characterAtJ);
                    
                    text.innerHTML = text.innerHTML + "<br>" + characterAtJ;
                }
            }
        }*/
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
                        console.log(currentRoom.items);
                        let itemToRemove = currentRoom.items[i].name;
                        currentRoom.removeItemFromRoom(itemToRemove);
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