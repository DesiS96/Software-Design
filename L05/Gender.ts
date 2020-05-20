namespace L05 {
    export class Male extends Person {

        constructor(name: string, age: number) {

            super(name, age);

        }

        getTitleAdress(): string {

            super.getTitleAdress();
            return "Sehr geehrter Herr " + name;

        }

    }

    export class Female extends Person {

        constructor(_name: string, _age: number) {

            super(_name, _age);

        }

        getTitleAdress(): string {

            super.getTitleAdress();
            return "Sehr geehrte Frau " + name;

        }

    }
}