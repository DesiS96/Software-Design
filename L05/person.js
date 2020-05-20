"use strict";
var L05;
(function (L05) {
    class Person {
        constructor(_name, _age) {
            this.name = _name;
            this.age = _age;
        }
        getTitleAdress() {
            if (this.age < 18)
                return "Hi " + this.name;
            else
                return "Sehr geehrte(r) " + this.name;
        }
    }
    L05.Person = Person;
})(L05 || (L05 = {}));
//# sourceMappingURL=person.js.map