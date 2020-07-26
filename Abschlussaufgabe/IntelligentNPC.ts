//import { Item } from "./Item";
//import { Character } from "./Character";

namespace Abschlussarbeit {

    export class IntelligentNPC extends Character {

        public inventory: Item[];
        public attack: number;
        public look: string;
            

        constructor(_name: string, _life: number, _attack: number, _type: string, _positionID: number, _inventory: Item[], _look: string) {

            super(_name, _life, _attack, _type = "intelligent", _positionID);

            this.inventory = _inventory;
            this.look = _look;
            this.type = _type;
        }
    }
}
