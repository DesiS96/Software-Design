namespace Abschlussarbeit {

export class RegularNPC extends Character {

        public look: string;

        constructor(_name: string, _life: number, _attack: number,  _type: string, _positionID: number, _look: string) {

            super(_name, _life, _attack = 0, _type, _positionID);

            this.look = _look;
        }
    }
}