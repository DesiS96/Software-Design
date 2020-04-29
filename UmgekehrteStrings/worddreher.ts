namespace worddreher {

    let scentence: string = "this scentence is twisted"; //müsste eigentlich selber eigegeben werden
    console.log(scentence);

    function twistCharacters(scentence: string): string[] {

        let twistedString: string[] = scentence.split(" "); //String als einzelne Wörter
        let i: number;

        for (i = 0; i <= twistedString.length; i++) {

            let twistedStringWords: string;
            twistedStringWords += twistedString[i].split; //String als einzelne Buchstaben

        }

        return twistedString; //detsiwt si ecnetnecs siht (unfertig)
    }

    function twistWords(scentence: string): string[] {

        let twistedString: string[] = scentence.split(" ");
        twistedString.reverse; //twisted is scentence this

        return twistedString;

    }

    function twistCharacterAndWords(scentence: string): string {

        let irgendwas: string[] = undefined;

        irgendwas = twistWords(scentence);
        twistCharacters(scentence);

        return scentence;

    }

    console.log(twistCharacters(scentence));
    console.log(twistWords(scentence));
    console.log(twistCharacterAndWords(scentence));
}
