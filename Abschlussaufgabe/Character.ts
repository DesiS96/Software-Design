namespace Abschlussaufgabe {

    export abstract class Character {

        public name: string;
        public life: number;
        public attack: number;
        public type: string;
        public position: Room;

        constructor(_name: string, _life: number, _attack: number, _type: string, _position: Room) {

            this.name = _name;
            this.life = _life;
            this.attack = _attack;
            this.type = _type;
            this.position = _position;
        }

        move(_direction?: string): void {

            this.position = this.position.passages[Math.floor(Math.random() * this.position.passages.length)].leadsTo;

        }
    }
    
}