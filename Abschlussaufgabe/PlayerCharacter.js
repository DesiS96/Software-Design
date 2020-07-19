"use strict";
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class PlayerCharacter extends Abschlussaufgabe.Character {
        constructor(_name, _life, _position, _inventory, _attack, _commands) {
            super(_name, _life, _position);
            this.inventory = _inventory;
            this.attack = _attack;
            this.commands = _commands;
        }
        drop(_userInput) {
            let inventoryContainsItem = Abschlussaufgabe.doesArrayContain(this.inventory, _userInput);
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
            for (let i; i <= this.position.passages.length; i++) {
                if (this.position.passages[i].direction == _userInput) {
                    if (this.position.passages[i].isPassable == true) {
                        this.position = this.position.passages[i].leadsTo;
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
            let roomContainsItem = Abschlussaufgabe.doesArrayContain(this.position.items, _userInput);
            if (roomContainsItem == true) {
                for (let i; i < this.position.items.length; i++) {
                    if (this.position.items[i].name == _userInput) {
                        this.inventory.push(this.position.items[i]);
                    }
                }
            }
            else {
                console.log("There's no such item in this room");
            }
        }
    }
    Abschlussaufgabe.PlayerCharacter = PlayerCharacter;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=PlayerCharacter.js.map