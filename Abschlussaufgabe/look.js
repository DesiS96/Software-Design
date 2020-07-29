"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    function look() {
        let currentRoom = Abschlussarbeit.zelda.getCurrentRoom();
        Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + currentRoom.description + "<br>" + "You see:";
        if (currentRoom.items.length != 0) {
            for (let i = 0; i < currentRoom.items.length; i++) {
                Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + currentRoom.items[i].name;
            }
        }
        if (currentRoom.characters.length != 0) {
            for (let j = 0; j < currentRoom.characters.length; j++) {
                let characterAtJ = currentRoom.characters[j].name;
                console.log(characterAtJ);
                Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + characterAtJ;
            }
        }
    }
    Abschlussarbeit.look = look;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=look.js.map