namespace worddreher {

    let scentence: string = "this scentence is twisted"; //müsste eigentlich selber eigegeben werden
    console.log(scentence);

    there is an typo in the parameter(sentence), use for parameters "_" at the begining.
    function twistCharacters(scentence: string): string {
        you can conclude line 9 and line 10 so the naming makes more sense and is better readable.
        let twistedString: string[] = scentence.split("");
        twistedString.reverse();
         -> move initialization of the index to the loop
        let i: number;
        dont know if the line breaks are for the comments, if not they are overused.
        let twistedWords: string = "";
        
        for (i = 0; i <= twistedString.length; i++) {
            
            twistedWords += twistedString[i];

        }
        you can conclude line 22 and line 23 so the naming makes more sense (name says string but is initialized as array)
        and is better readable.
        let twistedStringArr: string[] = twistedWords.split(" ");

        twistedStringArr.reverse();
        directly return the value, also dont call the variable same name with numeration
        let twistedString2: string = twistedStringArr.join(" ");
        
        return twistedString2;

    }

    function twistWords(scentence: string): string {
        you can conclude line 22 and line 23 so the naming makes more sense (name says string but is initialized as array)
        and is better readable.
        let twistedArray: string[] = scentence.split(" "); //String als einzelne Wörter
        
        twistedArray.reverse();
        directly return the value
        let twistedString: string = twistedArray.join(" ");

        return twistedString; //detsiwt si ecnetnecs siht (unfertig)
    }

    function twistCharacterAndWords(scentence: string): string {
        you dont need to initialize the func calls into an variable
        you could just do something like --> return twistWords(twistCharacters(scentence))
        then line 49, 51 and 53 is obsolete
        let twistedString: string = twistCharacters(scentence);

        let twistedString2: string = twistWords(twistedString);

        return twistedString2;
       
    }

    console.log(twistCharacters(scentence));
    console.log(twistWords(scentence));
    console.log(twistCharacterAndWords(scentence));
}
