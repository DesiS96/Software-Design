"use strict";
var QuizIncludingJson;
(function (QuizIncludingJson) {
    /*console.log("Start load");
    load("test.json"); Json-file-name reinschreiben
    console.log("Done load");*/
    async function load(_filename) {
        console.log("Start fetch");
        let response = await fetch(_filename);
        let text = await response.text();
        //let json: Data = JSON.parse(text);
        console.log(text);
        console.log("Done fetch");
    }
    QuizIncludingJson.load = load;
})(QuizIncludingJson || (QuizIncludingJson = {}));
//# sourceMappingURL=loadJson.js.map