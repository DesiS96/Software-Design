namespace L07 {

    console.log("Start load");
    load("test.json"); //Json-file-name reinschreiben
    console.log("Done load");

    async function load(_filename: string): Promise<void> {
        console.log("Start fetch");
        let response: Response = await fetch(_filename);
        let text: string = await response.text();
        console.log(text);
        console.log("Done fetch");
    }
}