"use strict";
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class IntelligentNPC extends Abschlussaufgabe.Character {
        constructor(_name, _life, _position, _attack, _inventory, _look, _type) {
            super(_name, _life, _position, _attack);
            this.type = "intelligent";
            this.inventory = _inventory;
            this.look = _look;
            this.type = _type;
        }
    }
    Abschlussaufgabe.IntelligentNPC = IntelligentNPC;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=IntelligentNPC.js.map