"use strict";
//import { Character} from "./Character";
var Abschlussarbeit;
//import { Character} from "./Character";
(function (Abschlussarbeit) {
    class RegularNPC extends Abschlussarbeit.Character {
        constructor(_name, _life, _attack, _type, _positionID, _look) {
            super(_name, _life, _attack = 0, _type = "regular", _positionID);
            this.look = _look;
            this.type = _type;
        }
    }
    Abschlussarbeit.RegularNPC = RegularNPC;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=RegularNPC.js.map