import { Character} from "./Character";
import { Item } from "./Item";
import { Passage } from "./Passage";

export class Room {

        public items: Item[];
        public characters: Character[];
        public passages: Passage[];
        public id: number;

        constructor(_items: Item[], _characters: Character[], _passages: Passage[], _id: number) {

            this.items = _items;
            this.characters = _characters;
            this.passages = _passages;
            this.id = _id;

        }
        
}