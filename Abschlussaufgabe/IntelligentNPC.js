"use strict";
//import { Item } from "./Item";
//import { Character } from "./Character";
var Abschlussarbeit;
//import { Item } from "./Item";
//import { Character } from "./Character";
(function (Abschlussarbeit) {
    class IntelligentNPC extends Abschlussarbeit.Character {
        constructor(_name, _life, _attack, _type, _positionID, _inventory, _look) {
            super(_name, _life, _attack, _type, _positionID);
            this.inventory = _inventory;
            this.look = _look;
        }
    }
    Abschlussarbeit.IntelligentNPC = IntelligentNPC;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=IntelligentNPC.js.map