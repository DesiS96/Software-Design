namespace Abschlussaufgabe {

    export class RegularNPC extends Character {

        public look: string;

        constructor(_name: string, _life: number, _attack: number,  _type: string, _position: Room, _look: string) {

            super(_name, _life, _attack = 0, _type = "regular", _position);

            this.look = _look;
            this.type = _type;
        }
    }
}