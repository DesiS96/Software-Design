"use strict";
var worddreher;
(function (worddreher) {
    let sentence = "this scentence is twisted"; //müsste eigentlich selber eigegeben werden
    console.log(sentence);
    //there is an typo in the parameter(sentence), use for parameters "_" at the begining.
    function twistCharacters(_sentence) {
        // you can conclude line 9 and line 10 so the naming makes more sense and is better readable.
        let twistedString = _sentence.split("");
        twistedString.reverse();
        //  -> move initialization of the index to the loop
        let i;
        // dont know if the line breaks are for the comments, if not they are overused.
        let twistedWords = "";
        for (i = 0; i <= twistedString.length; i++) {
            twistedWords += twistedString[i];
        }
        /* you can conclude line 22 and line 23 so the naming makes more sense (name says string but is initialized as array)
         and is better readable.*/
        let twistedStringArr = twistedWords.split(" ");
        twistedStringArr.reverse();
        // directly return the value, also dont call the variable same name with numeration
        let twistedString2 = twistedStringArr.join(" ");
        return twistedString2;
    }
    function twistWords(_sentence) {
        /* you can conclude line 22 and line 23 so the naming makes more sense (name says string but is initialized as array)
         and is better readable.*/
        let twistedArray = _sentence.split(" "); //String als einzelne Wörter
        twistedArray.reverse();
        // directly return the value*/
        let twistedString = twistedArray.join(" ");
        return twistedString; //detsiwt si ecnetnecs siht (unfertig)
    }
    function twistCharacterAndWords(_sentence) {
        /*you dont need to initialize the func calls into an variable
        you could just do something like --> return twistWords(twistCharacters(scentence))
        then line 49, 51 and 53 is obsolete*/
        //Doch ohne "Zwischenspeichern" funktionierts nicht...
        let twistedString = twistCharacters(_sentence);
        let twistedString2 = twistWords(twistedString);
        return twistedString2;
    }
    console.log(twistCharacters(sentence));
    console.log(twistWords(sentence));
    console.log(twistCharacterAndWords(sentence));
})(worddreher || (worddreher = {}));
//# sourceMappingURL=worddreher.js.map