namespace Abschlussaufgabe {

    export class PlayerCharacter extends Character {

        public inventory: Item[];
        public attack: number;
        public commands: string[];
        public position: Room;

        constructor(_name: string, _life: number, _inventory: Item[], _attack: number, _commands: string[], _position: Room) {

            super(_name, _life);
            this.inventory = _inventory;
            this.attack = _attack;
            this.commands = _commands;
            this.position = _position;
        }

        drop(_userInput: string): void {

            //let userprompt: string = window.prompt("Which item do you want to drop?:" ); soll später auf Konsole eingegeben werden können
            /*let inventoryContainsItem: boolean = true;

            for (let i: number; i < this.inventory.length; i++) {

                        if (i == this.inventory.length && this.inventory[i].name != _userInput) {
                            console.log("Sorry but there's no such item in your inventoy");
                            inventoryContainsItem = false;
                        }
            }*/
            let inventoryContainsItem: boolean = doesArrayContain(this.inventory, _userInput);

            if (inventoryContainsItem == true) {

                let fillerInventory: Item[] = [];

                for (let i: number; i < this.inventory.length; i++) {

                    if (this.inventory[i].name != _userInput) {
                        fillerInventory.push(this.inventory[i]);
                                
                    }
                }

                this.inventory = [];

                for (let j: number; j < fillerInventory.length; j++) {
                    this.inventory.push(fillerInventory[j]);
                }
            }
            else {

                console.log("There is no such item in your inventory.");
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

        take(_userInput: string): void {

            let roomContainsItem: boolean = doesArrayContain(this.position.items, _userInput);

            if (roomContainsItem == true) {

                for (let i: number; i < this.position.items.length; i++) {

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

}