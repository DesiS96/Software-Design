namespace Abschlussaufgabe {

    export class IntelligentNPC extends Character {

        public inventory: Item[];
        public attack: number;
        public look: string;
        public type: string = "intelligent";

        constructor(_name: string, _life: number, _position: Room, _inventory: Item[], _attack: number, _look: string, _type: string) {

            super(_name, _life, _position);

            this.inventory = _inventory;
            this.attack = _attack;
            this.look = _look;
            this.type = _type;
        }
    }
}