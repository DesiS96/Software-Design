namespace Abschlussaufgabe {

    export class Passage {

        public leadsTo: Room;
        public direction: string;
        public isPassable: boolean;

        constructor(_leadsTo: Room, _direction: string, _isPassable: boolean) {

            this.leadsTo = _leadsTo;
            this.direction = _direction;
            this.isPassable = _isPassable;

        }
    }
}