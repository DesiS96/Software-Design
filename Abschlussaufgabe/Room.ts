/*import { Character} from "./Character";
import { Item } from "./Item";
import { Passage } from "./Passage";*/

namespace Abschlussarbeit {

export class Room {

        public items: Item[];
        public characters: Character[];
        public passages: Passage[];
        public id: number;
        public description: string;

        constructor(_items: Item[], _characters: Character[], _passages: Passage[], _id: number, _description: string) {

            this.items = _items;
            this.characters = _characters;
            this.passages = _passages;
            this.id = _id;
            this.description = _description;

        }
        removeItemFromRoom(_itemName: string): Item[] {

            if (this.items.length > 1) {

                let fillerArray: Item[] = [];

                for (let i: number = 0; i <= this.items.length; i++) {

                    if (this.items[i].name != _itemName) {
                    fillerArray.push(this.items[i]);
                                    
                        }
                    }

                this.items = [];

                for (let j: number = 0; j <= fillerArray.length; j++) {
                    this.items.push(fillerArray[j]);
                }
            }
            else {

                this.items = [];

            }

            return this.items;
        }
        removeCharacterFromThisRoom(_userInput: string): Character[] {

            let fillerArray: Character[] = [];

            if (this.characters.length > 1) {
    
                for (let i: number = 0; i <= this.characters.length; i++) {
    
                    if (this.characters[i].name != _userInput) {
                    fillerArray.push(this.characters[i]);
                                    
                        }
                }
    
                this.characters = [];
    
                for (let j: number = 0; j <= fillerArray.length; j++) {
                this.characters.push(fillerArray[j]);
                }
            }  
            else {

                this.characters = [];

            } 
    
            return this.characters;
        }
        
    }
}