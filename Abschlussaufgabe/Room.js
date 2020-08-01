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
        removeItemFromRoom(_itemName) {
            if (this.items.length > 1) {
                let fillerArray = [];
                for (let i = 0; i <= this.items.length; i++) {
                    if (this.items[i].name != _itemName) {
                        fillerArray.push(this.items[i]);
                    }
                }
                this.items = [];
                for (let j = 0; j <= fillerArray.length; j++) {
                    this.items.push(fillerArray[j]);
                }
            }
            else {
                this.items = [];
            }
            return this.items;
        }
        removeCharacterFromThisRoom(_userInput) {
            let fillerArray = [];
            if (this.characters.length > 1) {
                for (let i = 0; i <= this.characters.length; i++) {
                    if (this.characters[i].name != _userInput) {
                        fillerArray.push(this.characters[i]);
                    }
                }
                this.characters = [];
                for (let j = 0; j <= fillerArray.length; j++) {
                    this.characters.push(fillerArray[j]);
                }
            }
            else {
                this.characters = [];
            }
            return this.characters;
        }
    }
    Abschlussarbeit.Room = Room;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Room.js.map