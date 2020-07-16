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

        drop(_userInput: string): void {

            //let userprompt: string = window.prompt("Which item do you want to drop?:" ); soll später auf Konsole eingegeben werden können

            let inventoryContainsItem: boolean = true;

            for (let i: number; i < this.inventory.length; i++) {

                        if (i == this.inventory.length && this.inventory[i].name != _userInput) {
                            console.log("Sorry but there's no such item in your inventoy");
                            inventoryContainsItem = false;
                        }
            }

            if (inventoryContainsItem == true) {

                let fillerInventory: Item[] = [];

                for (let j: number; j < this.inventory.length; j++) {

                    if (this.inventory[j].name != _userInput) {
                        fillerInventory.push(this.inventory[j]);
                                
                    }
                }

                this.inventory = [];

                for (let k: number; k < fillerInventory.length; k++) {
                    this.inventory.push(fillerInventory[k]);
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