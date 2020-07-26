"use strict";
//import { Character} from "./Character";
var Abschlussarbeit;
//import { Character} from "./Character";
(function (Abschlussarbeit) {
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
    Abschlussarbeit.removeCharacterFromRoom = removeCharacterFromRoom;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=removeCharacterFromRoom.js.map