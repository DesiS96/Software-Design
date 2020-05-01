"use strict";
var worddreher;
(function (worddreher) {
    let scentence = "this scentence is twisted"; //müsste eigentlich selber eigegeben werden
    console.log(scentence);
    function twistCharacters(scentence) {
        let twistedString = scentence.split("");
        twistedString.reverse();
        let i;
        let twistedWords = "";
        for (i = 0; i <= twistedString.length; i++) {
            twistedWords += twistedString[i];
        }
        let twistedStringArr = twistedWords.split(" ");
        twistedStringArr.reverse();
        let twistedString2 = twistedStringArr.join(" ");
        return twistedString2;
    }
    function twistWords(scentence) {
        let twistedArray = scentence.split(" "); //String als einzelne Wörter
        twistedArray.reverse();
        let twistedString = twistedArray.join(" ");
        return twistedString; //detsiwt si ecnetnecs siht (unfertig)
    }
    function twistCharacterAndWords(scentence) {
        let twistedString = twistCharacters(scentence);
        let twistedString2 = twistWords(twistedString);
        return twistedString2;
    }
    console.log(twistCharacters(scentence));
    console.log(twistWords(scentence));
    console.log(twistCharacterAndWords(scentence));
})(worddreher || (worddreher = {}));
//# sourceMappingURL=worddreher.js.map