"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    //let roomA: Promise<Data> = loadRooms("./rooms.json");
    Abschlussarbeit.roomArray = [];
    async function loadRooms(_filename) {
        console.log("Start fetch");
        let response = await fetch(_filename);
        let text = await response.text();
        let json = JSON.parse(text);
        // alternative: json = await response.json();
        console.log("Done fetch");
        return json;
    }
    async function getRooms() {
        let rooms = await loadRooms("./rooms.json");
        console.log(rooms.length);
        console.log(rooms);
        console.log(rooms[2].characters);
    }
    getRooms();
    let characters = [];
    let items = [];
    let passages;
    async function loadPlayer(_filename) {
        console.log("Start fetch");
        let response = await fetch(_filename);
        let text = await response.text();
        let json = JSON.parse(text);
        // alternative: json = await response.json();
        console.log("Done fetch");
        return json;
    }
    let filename = "./rooms.json";
    let filenameCharacters = "./playercharacter_json.json";
    Abschlussarbeit.playerJson = loadPlayer("./playercharacter_json.json");
    console.log(Abschlussarbeit.roomArray);
    const text = document.createElement("div");
    document.body.appendChild(text);
    text.innerHTML = "Welcome to the game. What do you want to do?<br>>start game (s)<br>>quit game (q)";
    //inputfield
    let userInput = window.prompt("Select either s to start the game or q to quit it:");
    text.innerHTML = text.innerHTML + "<br>" + userInput;
    switch (userInput) {
        case "s": {
            text.innerHTML = text.innerHTML + "<br>" + "You decide to enter the forgotten Mines <br> All you have is a torch to lighten the way and your magic to attack foes. <br> You see ";
            break;
        }
        case "q": {
            text.innerHTML = text.innerHTML + "<br>" + "You've ended the game. <br> Hope to see you again soon!";
            break;
        }
        default: {
            text.innerHTML = text.innerHTML + "<br>" + "Please restart Page and enter s or q.";
        }
    }
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=main.js.map