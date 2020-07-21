"use strict";
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class RegularNPC extends Abschlussaufgabe.Character {
        constructor(_name, _life, _position, _look, _type) {
            super(_name, _life, _position);
            this.type = "regular";
            this.look = _look;
            this.type = _type;
        }
    }
    Abschlussaufgabe.RegularNPC = RegularNPC;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=RegularNPC.js.map