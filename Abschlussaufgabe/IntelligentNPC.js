System.register(["./Character"], function (exports_1, context_1) {
    "use strict";
    var Character_1, IntelligentNPC;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Character_1_1) {
                Character_1 = Character_1_1;
            }
        ],
        execute: function () {
            IntelligentNPC = class IntelligentNPC extends Character_1.Character {
                constructor(_name, _life, _attack, _type, _positionID, _inventory, _look) {
                    super(_name, _life, _attack, _type = "intelligent", _positionID);
                    this.inventory = _inventory;
                    this.look = _look;
                    this.type = _type;
                }
            };
            exports_1("IntelligentNPC", IntelligentNPC);
        }
    };
});
//# sourceMappingURL=IntelligentNPC.js.map