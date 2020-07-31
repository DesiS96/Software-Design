"use strict";
//import { Character } from "./Character";
var Abschlussarbeit;
//import { Character } from "./Character";
(function (Abschlussarbeit) {
    function doesRoomContainCharacter(_characterArray, _characterName) {
        let containsItem = true;
        for (let i = 0; i < _characterArray.length; i++) {
            if (i == _characterArray.length && _characterArray[i].name != _characterName) {
                containsItem = false;
            }
        }
        return containsItem;
    }
    Abschlussarbeit.doesRoomContainCharacter = doesRoomContainCharacter;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=doesRoomContainCharacter.js.map