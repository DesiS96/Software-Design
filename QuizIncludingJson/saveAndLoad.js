"use strict";
var QuizIncludingJson;
(function (QuizIncludingJson) {
    class Data {
    }
    QuizIncludingJson.Data = Data;
    test();
    async function test() {
        console.log("Start load");
        let content = await load("test.json");
        console.log("Done load");
        console.log(content);
        console.log("Start load");
        save(JSON.stringify(content), "test.json");
        console.log("Done load");
    }
    QuizIncludingJson.test = test;
    async function load(_filename) {
        console.log("Start fetch");
        let response = await fetch(_filename);
        let text = await response.text();
        let json = JSON.parse(text);
        // alternative: json = await response.json();
        console.log("Done fetch");
        return (json);
    }
    QuizIncludingJson.load = load;
    function save(_content, _filename) {
        let blob = new Blob([_content], { type: "text/plain" });
        let url = window.URL.createObjectURL(blob);
        //*/ using anchor element for download
        let downloader;
        downloader = document.createElement("a");
        downloader.setAttribute("href", url);
        downloader.setAttribute("download", _filename);
        document.body.appendChild(downloader);
        downloader.click();
        document.body.removeChild(downloader);
        window.URL.revokeObjectURL(url);
    }
    QuizIncludingJson.save = save;
})(QuizIncludingJson || (QuizIncludingJson = {}));
//# sourceMappingURL=saveAndLoad.js.map