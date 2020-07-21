namespace Abschlussaufgabe {

    export class RegularNPC extends Character {

        public look: string;
        public type: string = "regular";

        constructor(_name: string, _life: number, _position: Room, _look: string, _type: string) {

            super(_name, _life, _position);

            this.look = _look;
            this.type = _type;
        }
    }
}