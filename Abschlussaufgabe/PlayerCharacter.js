"use strict";
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class PlayerCharacter extends Abschlussaufgabe.Character {
        constructor(_name, _life, _inventory, _attack) {
            super(_name, _life);
            this.inventory = _inventory;
            this.attack = _attack;
        }
    }
    Abschlussaufgabe.PlayerCharacter = PlayerCharacter;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=PlayerCharacter.js.map