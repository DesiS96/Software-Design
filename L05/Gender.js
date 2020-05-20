"use strict";
var L05;
(function (L05) {
    class Male extends L05.Person {
        constructor(name, age) {
            super(name, age);
        }
        getTitleAdress() {
            super.getTitleAdress();
            return "Sehr geehrter Herr " + name;
        }
    }
    L05.Male = Male;
    class Female extends L05.Person {
        constructor(_name, _age) {
            super(_name, _age);
        }
        getTitleAdress() {
            super.getTitleAdress();
            return "Sehr geehrte Frau " + name;
        }
    }
    L05.Female = Female;
})(L05 || (L05 = {}));
//# sourceMappingURL=Gender.js.map