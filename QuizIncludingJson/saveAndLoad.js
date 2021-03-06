"use strict";
var QuizIncludingJson;
(function (QuizIncludingJson) {
    class Data {
    }
    QuizIncludingJson.Data = Data;
    /*test();
  
    export async function test(): Promise<void> {
      console.log("Start load");
      let content: Data = await load("test.json");
      console.log("Done load");
  
      console.log(content);
  
      console.log("Start load");
      save(JSON.stringify(content), "test.json");
      console.log("Done load");
    }*/
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
    /*export async function load(_filename: string): Promise<Data> { //warum Promise und async? Das stört total
      console.log("Start fetch");
  
      let response: Response = await fetch(_filename);
  
      let text: string = await response.text();
      let json: Data = JSON.parse(text);
      // alternative: json = await response.json();
  
      console.log("Done fetch");
      return (json);
    }*/
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