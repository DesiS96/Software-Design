namespace Abschlussaufgabe {

    export abstract class Character {

        public name: string;
        public life: number;
        public position: Room;
        public attack: number;

        constructor(_name: string, _life: number, _position: Room, _attack: number) {

            this.name = _name;
            this.life = _life;
            this.position = _position;
            this.attack = _attack;
        }

        move(_direction?: string): void {

            this.position = this.position.passages[Math.floor(Math.random() * this.position.passages.length)].leadsTo;

        } 
    }
    
}