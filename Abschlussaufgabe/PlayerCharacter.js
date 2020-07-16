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
        drop() {
            let userprompt = window.prompt("Which item do you want to drop?:"); //soll später auf Konsole eingegeben werden können
            for (let i; i < this.inventory.length; i++) {
                /*if (this.inventory[i].name == userprompt) {
                    console.log("You decided to drop " + this.inventory[i].name);
                }else{*/
                if (i == this.inventory.length && this.inventory[i].name != userprompt) {
                    console.log("Sorry but there'S no such item in your inventoy");
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