System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function doesRoomContainCharacter(_characterArray, _characterName) {
        let containsItem = true;
        for (let i; i < _characterArray.length; i++) {
            if (i == _characterArray.length && _characterArray[i].name != _characterName) {
                containsItem = false;
            }
        }
        return containsItem;
    }
    exports_1("doesRoomContainCharacter", doesRoomContainCharacter);
    return {
        setters: [],
        execute: function () {
        }
    };
});
//# sourceMappingURL=doesRoomContainCharacter.js.map