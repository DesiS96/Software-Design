namespace Abschlussaufgabe {

    export class PlayerCharacter extends Character {

        public inventory: Item[];
        public attack: number;
        public commands: string[];

        constructor(_name: string, _life: number, _position: Room, _inventory: Item[], _attack: number, _commands: string[]) {

            super(_name, _life, _position);
            this.inventory = _inventory;
            this.attack = _attack;
            this.commands = _commands;
        }

        drop(_userInput: string): void {

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

        move(_userInput: string): void {

            for (let i: number; i <= this.position.passages.length; i++) {

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