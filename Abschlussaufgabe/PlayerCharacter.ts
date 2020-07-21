namespace Abschlussaufgabe {

    export class PlayerCharacter extends Character {

        public inventory: Item[];
        public commands: string[];

        constructor(_name: string, _life: number, _position: Room, _attack: number, _inventory: Item[], _commands: string[]) {

            super(_name, _life, _position, _attack);
            this.inventory = _inventory;
            this.attack = _attack;
            this.commands = _commands;
        }

        attackNPC(_userInput: string): void {

            let containsCharacter: boolean = doesRoomContainCharacter(this.position.characters, _userInput);

            if (containsCharacter == true) {

                for (let i: number; i <= this.position.characters.length;) {
                    if (this.position.characters[i].name == _userInput) {

                        this.position.characters[i].life = this.position.characters[i].life - this.attack;

                        if (this.position.characters[i].life == 0) {
                            //extra condition für regs und intels, intels können sich heilen wenn sie eine potion haben

                            this.position.characters = removeCharacterFromRoom(this.position.characters, this.position.characters[i].name);
                            console.log(_userInput + "died by your attack.");
                        }
                        else {

                            if (this.position.characters[i].type == "regular") {

                            console.log(_userInput + ": Ouch that hurts! Why are you doing this? I'm out of here!");
                            this.position.characters[i].move();
                            }
                            else {                      
                                this.life = this.life - this.position.characters[i].attack;

                            }
                        }
                    }
                }
            }
            else {
                console.log("There is no one you could attack.");

            }
        }

        drop(_userInput: string): void {

            let inventoryContainsItem: boolean = doesInventoryContainItem(this.inventory, _userInput);

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

            super.move();

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

            let roomContainsItem: boolean = doesInventoryContainItem(this.position.items, _userInput);

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