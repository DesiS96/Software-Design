"use strict";
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Character {
        constructor(_name, _life, _position, _attack) {
            this.name = _name;
            this.life = _life;
            this.position = _position;
            this.attack = _attack;
        }
        move(_direction) {
            this.position = this.position.passages[Math.floor(Math.random() * this.position.passages.length)].leadsTo;
        }
    }
    Abschlussaufgabe.Character = Character;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Character.js.map