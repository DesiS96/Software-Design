namespace Abschlussaufgabe {

    export class Room {

        public items: Item[];
        public characters: Character[];
        //public passages: Passage[];

        constructor(_items: Item[], _characters: Character[]) {

            this.items = _items;
            this.characters = _characters;

        }
    }
}