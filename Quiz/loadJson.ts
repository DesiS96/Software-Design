namespace Quiz {

    /*console.log("Start load");
    load("test.json"); Json-file-name reinschreiben
    console.log("Done load");*/

    export async function load(_filename: string): Promise<void> {
        console.log("Start fetch");
        let response: Response = await fetch(_filename);
        let text: string = await response.text();
        //let json: Data = JSON.parse(text);
        console.log(text);
        console.log("Done fetch");
    }
}