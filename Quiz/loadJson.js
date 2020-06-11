"use strict";
var Quiz;
(function (Quiz) {
    /*console.log("Start load");
    load("test.json"); Json-file-name reinschreiben
    console.log("Done load");*/
    async function load(_filename) {
        console.log("Start fetch");
        let response = await fetch(_filename);
        let text = await response.text();
        console.log(text);
        console.log("Done fetch");
    }
    Quiz.load = load;
})(Quiz || (Quiz = {}));
//# sourceMappingURL=loadJson.js.map