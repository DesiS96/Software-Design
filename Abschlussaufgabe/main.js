"use strict";
/*import { PlayerCharacter } from "./PlayerCharacter";
import { doesRoomContainCharacter } from "./doesRoomContainCharacter";
import { Character} from "./Character";
import { RegularNPC} from "./RegularNPC";
import { Item } from "./Item";
import { IntelligentNPC } from "./IntelligentNPC";*/
//import { Room } from "./Room";
//import { Passage } from "./Passage";
var Abschlussarbeit;
/*import { PlayerCharacter } from "./PlayerCharacter";
import { doesRoomContainCharacter } from "./doesRoomContainCharacter";
import { Character} from "./Character";
import { RegularNPC} from "./RegularNPC";
import { Item } from "./Item";
import { IntelligentNPC } from "./IntelligentNPC";*/
//import { Room } from "./Room";
//import { Passage } from "./Passage";
(function (Abschlussarbeit) {
    async function loadRooms(_filename) {
        console.log("Start fetch");
        let response = await fetch(_filename);
        let text = await response.text();
        let json = JSON.parse(text);
        // alternative: json = await response.json();
        console.log("Done fetch");
        return (json);
    }
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
    Abschlussarbeit.roomArray = loadRooms("./rooms.json");
    Abschlussarbeit.playerJson = loadPlayer("./playercharacter_json.json");
    let roomArray2 = [];
    //let rooms: Room[] = Promise.resolve(roomArray);
    console.log(Abschlussarbeit.roomArray);
    const text = document.createElement("div");
    document.body.appendChild(text);
    //const inputfield = document.createElement("input");
    //document.body.appendChild(inputfield);
    //text.innerHTML = testname;
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