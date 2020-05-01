namespace worddreher {

    let scentence: string = "this scentence is twisted"; //müsste eigentlich selber eigegeben werden
    console.log(scentence);


    function twistCharacters(scentence: string): string {

        let twistedString: string[] = scentence.split("");
        twistedString.reverse();

        let i: number;

        let twistedWords: string = "";

        for (i = 0; i <= twistedString.length; i++) {
            
            twistedWords += twistedString[i];

        }

        let twistedStringArr: string[] = twistedWords.split(" ");

        twistedStringArr.reverse();
        
        let twistedString2: string = twistedStringArr.join(" ");

        return twistedString2;

    }

    function twistWords(scentence: string): string {

        let twistedArray: string[] = scentence.split(" "); //String als einzelne Wörter
        
        twistedArray.reverse();

        let twistedString: string = twistedArray.join(" ");

        return twistedString; //detsiwt si ecnetnecs siht (unfertig)
    }

    function twistCharacterAndWords(scentence: string): string {

        let twistedString: string = twistCharacters(scentence);

        let twistedString2: string = twistWords(twistedString);

        return twistedString2;
       
    }

    console.log(twistCharacters(scentence));
    console.log(twistWords(scentence));
    console.log(twistCharacterAndWords(scentence));
}
