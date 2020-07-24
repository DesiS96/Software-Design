System.register([], function (exports_1, context_1) {
    "use strict";
    var Item;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Item = class Item {
                constructor(_name, _type) {
                    this.name = _name;
                    this.type = _type;
                }
            };
            exports_1("Item", Item);
        }
    };
});
//# sourceMappingURL=Item.js.map