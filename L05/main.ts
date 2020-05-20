namespace L05 {

    let zelda: Person = new Person("Zelda", 17);

    zelda.age = 18;

    console.log(zelda.name + ", " + zelda.age);

    let people: Person[] = [];

    people[0] = zelda;
    people[1] = new Person("Link", 17);
    people[2] = new Person("Ganondorf", 40);
    people[3] = new Person("Midna", 25);
    people[4] = new Person("Ghirahim", 18);

    console.log(people);

    class Employee extends Person {

        public idNumber: number;

        constructor(_name: string, _age: number, _idNumber?: number) {

            super(_name, _age);
            this.idNumber = _idNumber;

        }

    }

    let john: Employee = new Employee("John", 20);

    john.getTitleAdress();

    people[1] = new Employee("Impa", 30, 1223);
    people[4] = new Employee("Ravio", 17, 3456);

    console.log(people);

    let morePeople: Person[] = [];

    morePeople[0] = new Female("Mipha", 16);
    morePeople[1] = new Male("Daruk", 30);
    morePeople[2] = new Person("Urbosa", 38);

    //console.log(morePeople[2].name);

    console.log(morePeople);


    for (let i: number = 0; i < morePeople.length; i++) {

        console.log(morePeople[i].getTitleAdress());

    }

    abstract class Enemy {

        name: string;

        constructor(name: string) {

            this.name = name;

        }

    }

    class Endboss extends Enemy {

        game: string;

        constructor(name: string, game: string) {

            super(name);
            this.game = game;

        }

        Evil_laugh(name: string): void {

            console.log(name + ": Hahaha");

        }

    }

    //let ghoma: Enemy = new Enemy("Ghoma"); Es lässt sich keine Instanz von Enemy erzeugen, da Enemy eine abstrakte Klasse ist

    let vaati: Endboss = new Endboss("Vaati", "The Minish-Cap, Four Swords, Four Swords adventures");

    console.log(vaati);
    vaati.Evil_laugh("Vaati");



    /*let revali: Person = new Person("Revali", 17);

    console.log(revali);
    console.log(zelda);*/

    /*    public class MyContainer {
    
            private _theObjects: object[] ;
            private n: number;
    
            MyContainer(): void {
    
                this._theObjects = new object[];
                this._theObjects.length = 2;
                this.n = 0;
    
            }
    
            public Add(o: object[]): void {
    
                // If necessary, grow the array
                if (this.n == this._theObjects.length) {
    
                    let oldArray: Object[]  = this._theObjects;
                    this._theObjects = new Object[ 2 * oldArray.length];
                    Array.Copy(oldArray, this._theObjects, this.n);
    
                }
    
                this._theObjects[this.n] = o;
                this.n++;
            }
    
                public GetAt(i: number): object {
                    return this._theObjects[i];
                }
    
                public Count(n: number): number {
                    return n;
                }
    
            
        }*/

}

