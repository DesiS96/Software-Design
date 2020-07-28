"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class RegularNPC extends Abschlussarbeit.Character {
        constructor(_name, _life, _attack, _type, _positionID, _look) {
            super(_name, _life, _attack = 0, _type, _positionID);
            this.look = _look;
        }
    }
    Abschlussarbeit.RegularNPC = RegularNPC;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=RegularNPC.js.map