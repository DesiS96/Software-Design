System.register([], function (exports_1, context_1) {
    "use strict";
    var Room;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Room = class Room {
                constructor(_items, _characters, _passages, _id, _description) {
                    this.items = _items;
                    this.characters = _characters;
                    this.passages = _passages;
                    this.id = _id;
                    this.description = _description;
                }
            };
            exports_1("Room", Room);
        }
    };
});
//# sourceMappingURL=Room.js.map