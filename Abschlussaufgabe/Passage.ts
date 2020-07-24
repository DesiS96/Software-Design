export class Passage {

        public leadsTo: number;
        public direction: string;
        public isPassable: string;

        constructor(_leadsTo: number, _direction: string, _isPassable: string) {

            this.leadsTo = _leadsTo;
            this.direction = _direction;
            this.isPassable = _isPassable;

        }
}
