System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function removeCharacterFromRoom(_Array, _userInput) {
        let fillerArray = [];
        for (let i; i < _Array.length; i++) {
            if (_Array[i].name != _userInput) {
                fillerArray.push(_Array[i]);
            }
        }
        _Array = [];
        for (let j; j < fillerArray.length; j++) {
            _Array.push(fillerArray[j]);
        }
        return _Array;
    }
    exports_1("removeCharacterFromRoom", removeCharacterFromRoom);
    return {
        setters: [],
        execute: function () {
        }
    };
});
//# sourceMappingURL=removeCharacterFromRoom.js.map