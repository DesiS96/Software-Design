"use strict";
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Character {
        constructor(_name, _life, _attack, _type, _position) {
            this.name = _name;
            this.life = _life;
            this.attack = _attack;
            this.type = _type;
            this.position = _position;
        }
        move(_direction) {
            this.position = this.position.passages[Math.floor(Math.random() * this.position.passages.length)].leadsTo;
        }
    }
    Abschlussaufgabe.Character = Character;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Character.js.map