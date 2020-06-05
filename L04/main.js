"use strict";
var l04;
(function (l04) {
    console.log("Dies ist eine Log-Ausgabe");
    console.error("Fehler!");
    console.info("Dies ist eine Info-Ausgabe");
    console.warn("Das ist eine Warnung!");
    window.alert("Hi");
    let x = 0;
    console.log(x);
    function add() {
        for (let i = 0; i < 5; i++) {
            x = x + 1;
        }
    }
    add();
    console.log(x);
})(l04 || (l04 = {}));
//# sourceMappingURL=main.js.map