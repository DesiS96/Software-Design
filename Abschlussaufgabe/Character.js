System.register([], function (exports_1, context_1) {
    "use strict";
    var Character;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Character = class Character {
                constructor(_name, _life, _attack, _type, _positionID) {
                    this.name = _name;
                    this.life = _life;
                    this.attack = _attack;
                    this.type = _type;
                    this.positionID = _positionID;
                }
                move(_direction) {
                    /* for (let i: number; i < roomArray.length; i++) {
         
                         if (this.positionID == roomArray[i].id) {
         
                             let newPosition = Math.floor(Math.random() * roomArray[i].passages.length);
         
                             removeCharacterFromRoom(roomArray[i].characters, this.name);
         
                             this.
         
                             
         
         
         
         
                         }
         
         
                     }*/
                }
            };
            exports_1("Character", Character);
        }
    };
});
//# sourceMappingURL=Character.js.map