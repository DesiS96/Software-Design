"use strict";
/*import { PlayerCharacter } from "./PlayerCharacter";
import { doesRoomContainCharacter } from "./doesRoomContainCharacter";
import { Character} from "./Character";
import { RegularNPC} from "./RegularNPC";
import { Item } from "./Item";
import { IntelligentNPC } from "./IntelligentNPC";*/
//import { Room } from "./Room";
//import { Passage } from "./Passage";
/*interface RoomData {

    items: ItemData[];
    characters: CharaData[];
    passages: PassageData[];
    id: number;
    description: string;

}
interface PassageData {

    leadsTo: number;
    direction: string;
    isPassable: string;

}

interface ItemData {

    name: string;

}

interface CharaData {

    name: string;
    life: number;
    attack: number;
    type: string;
    positionID: number;

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
let filename = "./test.json";
let test = load(filename);
//export let roomArray: Room[] = [];
console.log(test);
/*declare module 'rooms.json' {
    import * as json from 'C:\Users\Desiree\Desktop\Softwaredesign\Software-Design\Abschlussaufgabe\rooms.json';
    export = json;
}*/
//const rooms = require("C:\Users\Desiree\Desktop\Softwaredesign\Software-Design\Abschlussaufgabe\rooms.json");
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
//# sourceMappingURL=main.js.map