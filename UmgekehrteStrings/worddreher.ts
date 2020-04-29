namespace worddreher {

    let scentence: string = "this scentence is twisted"; //müsste eigentlich selber eigegeben werden
    console.log(scentence);


    function twistCharacters(scentence: string): string[] {

        let twistedString: string[] = scentence.split("");
        twistedString.reverse();

        let i: number;

        let twistedWords: string;

        for (i = 0; i <= twistedString.length; i++){
            
            twistedWords += twistedString[i];

        }

        let twistedStringArr: string[] = twistedWords.split(" ");

        twistedStringArr.reverse().join();
        
        return twistedStringArr;

    }

    function twistWords(scentence: string): string[] {

        let twistedString: string[] = scentence.split(" "); //String als einzelne Wörter
        
        twistedString.reverse().join();

        return twistedString; //detsiwt si ecnetnecs siht (unfertig)
    }

    function twistCharacterAndWords(scentence: string): string {

        let twistedString: string = scentence;

        twistCharacters(twistedString);
        twistWords(twistedString);

        return twistedString;
       
    }

    console.log(twistCharacters(scentence));
    console.log(twistWords(scentence));
    console.log(twistCharacterAndWords(scentence));
}
