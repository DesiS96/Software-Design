"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    async function loadItems(_filename) {
        console.log("Start fetch");
        let response = await fetch(_filename);
        let text = await response.text();
        let json = JSON.parse(text);
        // alternative: json = await response.json();
        let itemArray2;
        for (let i = 0; i <= json.length; i++) {
            itemArray2[i] = new Abschlussarbeit.Item(json[i].name, json[i].type);
        }
        console.log(itemArray2);
        console.log("Done fetch");
    }
    Abschlussarbeit.loadItems = loadItems;
    async function loadRooms(_filename) {
        console.log("Start fetch");
        let response = await fetch(_filename);
        let text = await response.text();
        let json = JSON.parse(text);
        // alternative: json = await response.json();
        console.log("Done fetch");
        return json;
    }
    Abschlussarbeit.loadRooms = loadRooms;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=loadFiles.js.map