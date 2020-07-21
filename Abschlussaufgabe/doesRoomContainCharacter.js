"use strict";
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    function doesRoomContainCharacter(_characterArray, _characterName) {
        let containsItem = true;
        for (let i; i < _characterArray.length; i++) {
            if (i == _characterArray.length && _characterArray[i].name != _characterName) {
                containsItem = false;
            }
        }
        return containsItem;
    }
    Abschlussaufgabe.doesRoomContainCharacter = doesRoomContainCharacter;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=doesRoomContainCharacter.js.map