"use strict";
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class PlayerCharacter extends Abschlussaufgabe.Character {
        constructor(_name, _life, _inventory, _attack, _commands) {
            super(_name, _life);
            this.inventory = _inventory;
            this.attack = _attack;
            this.commands = _commands;
        }
        drop(_userInput) {
            //let userprompt: string = window.prompt("Which item do you want to drop?:" ); soll später auf Konsole eingegeben werden können
            let inventoryContainsItem = true;
            for (let i; i < this.inventory.length; i++) {
                if (i == this.inventory.length && this.inventory[i].name != _userInput) {
                    console.log("Sorry but there's no such item in your inventoy");
                    inventoryContainsItem = false;
                }
            }
            if (inventoryContainsItem == true) {
                let fillerInventory = [];
                for (let j; j < this.inventory.length; j++) {
                    if (this.inventory[j].name != _userInput) {
                        fillerInventory.push(this.inventory[j]);
                    }
                }
                this.inventory = [];
                for (let k; k < fillerInventory.length; k++) {
                    this.inventory.push(fillerInventory[k]);
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
    }
    Abschlussaufgabe.PlayerCharacter = PlayerCharacter;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=PlayerCharacter.js.map