"use strict";
var L05;
(function (L05) {
    //import { Person } from "./person";
    //abstact
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        GetTitleAdress(name) {
            if (this.age < 18) {
                return "Hi " + name;
            }
            else {
                return "Sehr geehrte(r) " + name;
            }
        }
    }
    let zelda = new Person("Zelda", 17);
    zelda.age = 18;
    console.log(zelda.name + ", " + zelda.age);
    let people = [];
    people[0] = zelda;
    people[1] = new Person("Link", 17);
    people[2] = new Person("Ganondorf", 40);
    people[3] = new Person("Midna", 25);
    people[4] = new Person("Ghirahim", 18);
    console.log(people);
    class Employee extends Person {
        constructor(name, age, idNumber) {
            super(name, age);
            this.idNumber = idNumber;
        }
    }
    people[1] = new Employee("Impa", 30, 1223);
    people[4] = new Employee("Ravio", 17, 3456);
    console.log(people);
    class Female extends Person {
        constructor(name, age) {
            super(name, age);
        }
        GetTitleAdress(name) {
            super.GetTitleAdress(name);
            return "Sehr geehrte Frau " + name;
        }
    }
    class Male extends Person {
        constructor(name, age) {
            super(name, age);
        }
        GetTitleAdress(name) {
            super.GetTitleAdress(name);
            return "Sehr geehrter Herr " + name;
        }
    }
    let morePeople = [];
    morePeople[0] = new Female("Mipha", 16);
    morePeople[1] = new Male("Daruk", 30);
    morePeople[2] = new Person("Urbosa", 38);
    //console.log(morePeople[2].name);
    console.log(morePeople);
    for (let i = 0; i < morePeople.length; i++) {
        console.log(morePeople[i].GetTitleAdress(morePeople[i].name));
    }
    /*let revali: Person = new Person("Revali", 17);

    console.log(revali);
    console.log(zelda);*/
    /*    public class MyContainer {
    
            private _theObjects: Object[] ;
            private n: number;
    
            MyContainer(): void {
    
                this._theObjects = new Object[];
                this._theObjects.length = 2;
                this.n = 0;
    
            }
    
            public Add(o: object[]): void {
    
                // If necessary, grow the array
                if (this.n == this._theObjects.length) {
    
                    let oldArray: Object[]  = this._theObjects;
                    this._theObjects = new Object < 2 * oldArray.length > ;
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
//# sourceMappingURL=main.js.map