"use strict";
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class IntelligentNPC extends Abschlussaufgabe.Character {
        constructor(_name, _life, _attack, _type, _position, _inventory, _look) {
            super(_name, _life, _attack, _type = "intelligent", _position);
            this.inventory = _inventory;
            this.look = _look;
            this.type = _type;
        }
    }
    Abschlussaufgabe.IntelligentNPC = IntelligentNPC;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=IntelligentNPC.js.map