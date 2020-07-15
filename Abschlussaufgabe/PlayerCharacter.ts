namespace Abschlussaufgabe {

    export class PlayerCharacter extends Character {

        public inventory: Item[];
        public attack: number;

        constructor(_name: string, _life: number, _inventory: Item[], _attack: number) {

            super(_name, _life);
            this.inventory = _inventory;
            this.attack = _attack;
        }

    }

}