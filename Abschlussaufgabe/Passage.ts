namespace Abschlussaufgabe {

    export class Passage {

        public position: Room;
        public leadsTo: Room;
        public direction: string;

        constructor(_position: Room, _leadsTo: Room, _direction: string) {

            this.position = _position;
            this.leadsTo = _leadsTo;
            this.direction = _direction;

        }
    }
}