"use strict";
var worddreher;
(function (worddreher) {
    let scentence = "this scentence is twisted"; //müsste eigentlich selber eigegeben werden
    console.log(scentence);
    function twistCharacters(scentence) {
        let twistedString = scentence.split(" "); //String als einzelne Wörter
        let i;
        for (i = 0; i <= twistedString.length; i++) {
            let twistedStringWords;
            twistedStringWords += twistedString[i].split; //String als einzelne Buchstaben
        }
        return twistedString; //detsiwt si ecnetnecs siht (unfertig)
    }
    function twistWords(scentence) {
        let twistedString = scentence.split(" ");
        twistedString.reverse; //twisted is scentence this
        return twistedString;
    }
    function twistCharacterAndWords(scentence) {
        let irgendwas = undefined;
        irgendwas = twistWords(scentence);
        twistCharacters(scentence);
        return scentence;
    }
    console.log(twistCharacters(scentence));
    console.log(twistWords(scentence));
    console.log(twistCharacterAndWords(scentence));
})(worddreher || (worddreher = {}));
//# sourceMappingURL=worddreher.js.map