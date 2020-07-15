namespace Abschlussaufgabe {


    export abstract class Character {

        public name: string;
        public life: number;

        constructor(_name: string, _life: number) {

            this.name = _name;
            this.life = _life;

        }

    }

}