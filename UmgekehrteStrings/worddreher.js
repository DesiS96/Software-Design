"use strict";
var worddreher;
(function (worddreher) {
    let scentence = "this scentence is twisted"; //müsste eigentlich selber eigegeben werden
    console.log(scentence);
    function twistCharacters(scentence) {
        let twistedString = scentence.split("");
        twistedString.reverse();
        let i;
        let twistedWords;
        for (i = 0; i <= twistedString.length; i++) {
            twistedWords += twistedString[i];
        }
        let twistedStringArr = twistedWords.split(" ");
        twistedStringArr.reverse().join();
        return twistedStringArr;
    }
    function twistWords(scentence) {
        let twistedString = scentence.split(" "); //String als einzelne Wörter
        twistedString.reverse().join();
        return twistedString; //detsiwt si ecnetnecs siht (unfertig)
    }
    function twistCharacterAndWords(scentence) {
        let twistedString = scentence;
        twistCharacters(twistedString);
        twistWords(twistedString);
        return twistedString;
    }
    console.log(twistCharacters(scentence));
    console.log(twistWords(scentence));
    console.log(twistCharacterAndWords(scentence));
})(worddreher || (worddreher = {}));
//# sourceMappingURL=worddreher.js.map