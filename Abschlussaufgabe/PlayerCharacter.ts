namespace Abschlussaufgabe {

    export class PlayerCharacter extends Character {

        public inventory: Item[];
        public attack: number;
        public commands: string[];

        constructor(_name: string, _life: number, _inventory: Item[], _attack: number, _commands: string[]) {

            super(_name, _life);
            this.inventory = _inventory;
            this.attack = _attack;
            this.commands = _commands;
        }

        drop(): void {

            let userprompt: string = window.prompt("Which item do you want to drop?:" ); //soll später auf Konsole eingegeben werden können

            for (let i: number; i < this.inventory.length; i++) {

                /*if (this.inventory[i].name == userprompt) {
                    console.log("You decided to drop " + this.inventory[i].name);
                }else{*/

                    if (i == this.inventory.length && this.inventory[i].name != userprompt) {

                        console.log("Sorry but there'S no such item in your inventoy");
                    }
            }
        }

        showInventory(): void {

            console.log("Your inventory contains:");

            for (let i: number; i < this.inventory.length; i++) {
                console.log("a" + this.inventory[i]);

            }
        }

        showCommands(): void {

            let commandsString: string = this.commands.toString();

            console.log(commandsString);
        }

    }

}