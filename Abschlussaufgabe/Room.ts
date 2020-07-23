namespace Abschlussaufgabe {

    export class Room {

        public items: Item[];
        public characters: Character[];
        public passages: Passage[];

        constructor(_items: Item[], _characters: Character[], _passages: Passage[]) {

            this.items = _items;
            this.characters = _characters;
            this.passages = _passages;

        }
        
    }
}