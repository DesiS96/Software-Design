"use strict";
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class RegularNPC extends Abschlussaufgabe.Character {
        constructor(_name, _life, _attack, _type, _position, _look) {
            super(_name, _life, _attack = 0, _type = "regular", _position);
            this.look = _look;
            this.type = _type;
        }
    }
    Abschlussaufgabe.RegularNPC = RegularNPC;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=RegularNPC.js.map