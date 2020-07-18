namespace Abschlussaufgabe {


    export abstract class Character {

        public name: string;
        public life: number;
        public position: Room;

        constructor(_name: string, _life: number, _position: Room) {

            this.name = _name;
            this.life = _life;
            this.position = _position;

        }

    }

}