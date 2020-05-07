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
            //public override string ToString() { /* TODO */ }
        }
    }
})(l03 || (l03 = {}));
//# sourceMappingURL=main.js.map