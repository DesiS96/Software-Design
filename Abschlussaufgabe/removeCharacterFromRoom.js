"use strict";
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
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
    Abschlussaufgabe.removeCharacterFromRoom = removeCharacterFromRoom;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=removeCharacterFromRoom.js.map