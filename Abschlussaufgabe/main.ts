/*import { PlayerCharacter } from "./PlayerCharacter";
import { doesRoomContainCharacter } from "./doesRoomContainCharacter";
import { Character} from "./Character";
import { RegularNPC} from "./RegularNPC";
import { Item } from "./Item";
import { IntelligentNPC } from "./IntelligentNPC";*/
//import { Room } from "./Room";
//import { Passage } from "./Passage";

namespace Abschlussarbeit {

interface Data {

    testData: string|number[];


}

async function load(_filename: string): Promise<Data> {
    console.log("Start fetch");

    let response: Response = await fetch(_filename);

    let text: string = await response.text();
    let json: Data = JSON.parse(text);
    // alternative: json = await response.json();

    console.log("Done fetch");
    return (json);
}


let filename: string = "./rooms.json";
let filenameCharacters: string = "./playercharacter_json.json";

let rooms: Promise<Data> = load(filename);
let playerCharacter: Promise<Data> = load(filenameCharacters);




export let roomArray: Room[] = [];



console.log(test);
console.log(testC);






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

let userInput: string = window.prompt("Select either s to start the game or q to quit it:");

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
}