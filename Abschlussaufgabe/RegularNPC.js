System.register(["./Character"], function (exports_1, context_1) {
    "use strict";
    var Character_1, RegularNPC;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Character_1_1) {
                Character_1 = Character_1_1;
            }
        ],
        execute: function () {
            RegularNPC = class RegularNPC extends Character_1.Character {
                constructor(_name, _life, _attack, _type, _positionID, _look) {
                    super(_name, _life, _attack = 0, _type = "regular", _positionID);
                    this.look = _look;
                    this.type = _type;
                }
            };
            exports_1("RegularNPC", RegularNPC);
        }
    };
});
//# sourceMappingURL=RegularNPC.js.map