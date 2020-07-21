"use strict";
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class IntelligentNPC extends Abschlussaufgabe.Character {
        constructor(_name, _life, _position, _inventory, _attack, _look, _type) {
            super(_name, _life, _position);
            this.type = "intelligent";
            this.inventory = _inventory;
            this.attack = _attack;
            this.look = _look;
            this.type = _type;
        }
    }
    Abschlussaufgabe.IntelligentNPC = IntelligentNPC;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=IntelligentNPC.js.map