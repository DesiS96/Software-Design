namespace Abschlussaufgabe {

    export abstract class Character {

        public name: string;
        public life: number;
        public attack: number;
        public type: string;
        public positionID: number;

        constructor(_name: string, _life: number, _attack: number, _type: string, _positionID: number) {

            this.name = _name;
            this.life = _life;
            this.attack = _attack;
            this.type = _type;
            this.positionID = _positionID;
        }

        move(_direction?: string): void {

           /* for (let i: number; i < roomArray.length; i++) {

                if (this.positionID == roomArray[i].id) {

                    let newPosition = Math.floor(Math.random() * roomArray[i].passages.length);

                    removeCharacterFromRoom(roomArray[i].characters, this.name);

                    this.

                    




                }


            }*/

        }
    }
    
}