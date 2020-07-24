System.register([], function (exports_1, context_1) {
    "use strict";
    var Passage;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Passage = class Passage {
                constructor(_leadsTo, _direction, _isPassable) {
                    this.leadsTo = _leadsTo;
                    this.direction = _direction;
                    this.isPassable = _isPassable;
                }
            };
            exports_1("Passage", Passage);
        }
    };
});
//# sourceMappingURL=Passage.js.map