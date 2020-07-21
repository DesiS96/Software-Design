namespace Abschlussaufgabe {

    export class Room {

        public items: Item[];
        public characters: Array<IntelligentNPC|RegularNPC>;
        public passages: Passage[];

        constructor(_items: Item[], _characters: Array<IntelligentNPC|RegularNPC>, _passages: Passage[]) {

            this.items = _items;
            this.characters = _characters;
            this.passages = _passages;

        }
        
    }
}