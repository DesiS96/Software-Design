"use strict";
var l03;
(function (l03) {
    let test = [1, 2, 3, 4, 5];
    let teststr = ["eins", "zwei", "drei"];
    let Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    class Greeter {
        constructor(message) {
            this.greeting = message;
        }
        greet() {
            return "Hello, " + this.greeting;
        }
    }
    let greeter = new Greeter("world");
    console.log(greeter);
    test.toString();
    teststr.toString();
    Color.toString();
    greeter.toString();
    console.log(test);
    console.log(teststr);
    console.log(Color);
    console.log(greeter);
    class Person {
        constructor(firstname, lastname, age) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.age = age;
        }
        //public override string ToString() { /* TODO */ }
        toString() {
            return this.firstname + " " + this.lastname + " " + this.age;
        }
    }
    let alice = new Person("Alice", "Doe", 22);
    console.log(alice.toString());
    /*function getPerson(firstname: string, lastname: string, age: number): Person {

        let name: Person = new Person(firstname, lastname, age);

        return name;

    }

    let heather = getPerson("Heather", "Mason", 16);*/
    let piet = new Person("Piet", "Miller", 33);
    let rene = new Person("Rene", "Jackson", 24);
    let tom = new Person("Tom", "Schmitt", 18);
    let yuki = new Person("Yuki", "Miyazaki", 45);
    let caroline = new Person("Caroline", "Amber", 12);
    let arr = [piet, rene, tom, yuki, caroline];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age >= 20) {
            console.log(arr[i].toString());
        }
        else {
            console.log("Person ist unter 20");
        }
    }
})(l03 || (l03 = {}));
//# sourceMappingURL=main.js.map