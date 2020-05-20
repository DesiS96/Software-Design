"use strict";
var L05;
(function (L05) {
    let zelda = new L05.Person("Zelda", 17);
    zelda.age = 18;
    console.log(zelda.name + ", " + zelda.age);
    let people = [];
    people[0] = zelda;
    people[1] = new L05.Person("Link", 17);
    people[2] = new L05.Person("Ganondorf", 40);
    people[3] = new L05.Person("Midna", 25);
    people[4] = new L05.Person("Ghirahim", 18);
    console.log(people);
    class Employee extends L05.Person {
        constructor(_name, _age, _idNumber) {
            super(_name, _age);
            this.idNumber = _idNumber;
        }
    }
    let john = new Employee("John", 20);
    john.getTitleAdress();
    people[1] = new Employee("Impa", 30, 1223);
    people[4] = new Employee("Ravio", 17, 3456);
    console.log(people);
    let morePeople = [];
    morePeople[0] = new L05.Female("Mipha", 16);
    morePeople[1] = new L05.Male("Daruk", 30);
    morePeople[2] = new L05.Person("Urbosa", 38);
    //console.log(morePeople[2].name);
    console.log(morePeople);
    for (let i = 0; i < morePeople.length; i++) {
        console.log(morePeople[i].getTitleAdress());
    }
    class Enemy {
        constructor(name) {
            this.name = name;
        }
    }
    class Endboss extends Enemy {
        constructor(name, game) {
            super(name);
            this.game = game;
        }
        Evil_laugh(name) {
            console.log(name + ": Hahaha");
        }
    }
    //let ghoma: Enemy = new Enemy("Ghoma"); Es lässt sich keine Instanz von Enemy erzeugen, da Enemy eine abstrakte Klasse ist
    let vaati = new Endboss("Vaati", "The Minish-Cap, Four Swords, Four Swords adventures");
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
})(L05 || (L05 = {}));
//# sourceMappingURL=Main.js.map