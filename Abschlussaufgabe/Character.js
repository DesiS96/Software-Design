"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Character {
        constructor(_name, _life, _attack, _type, _positionID) {
            this.name = _name;
            this.life = _life;
            this.attack = _attack;
            this.type = _type;
            this.positionID = _positionID;
        }
        move(_direction) {
            for (let i; i < Abschlussarbeit.roomArray.length; i++) {
                if (this.positionID == Abschlussarbeit.roomArray[i].id) {
                    let newPosition = Math.floor(Math.random() * Abschlussarbeit.roomArray[i].passages.length);
                    Abschlussarbeit.removeCharacterFromRoom(Abschlussarbeit.roomArray[i].characters, this.name);
                    this.positionID = newPosition;
                }
            }
        }
    }
    Abschlussarbeit.Character = Character;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Character.js.map