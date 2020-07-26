"use strict";
/*import { Character} from "./Character";
import { Item } from "./Item";
import { Passage } from "./Passage";*/
var Abschlussarbeit;
/*import { Character} from "./Character";
import { Item } from "./Item";
import { Passage } from "./Passage";*/
(function (Abschlussarbeit) {
    class Room {
        constructor(_items, _characters, _passages, _id, _description) {
            this.items = _items;
            this.characters = _characters;
            this.passages = _passages;
            this.id = _id;
            this.description = _description;
        }
    }
    Abschlussarbeit.Room = Room;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Room.js.map