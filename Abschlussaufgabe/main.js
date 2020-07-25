/*import { PlayerCharacter } from "./PlayerCharacter";
import { doesRoomContainCharacter } from "./doesRoomContainCharacter";
import { Character} from "./Character";
import { RegularNPC} from "./RegularNPC";
import { Item } from "./Item";
import { IntelligentNPC } from "./IntelligentNPC";
import { Room } from "./Room";*/
//import { Passage } from "./Passage";
System.register([], function (exports_1, context_1) {
    "use strict";
    var filename, roomArray, text, userInput;
    var __moduleName = context_1 && context_1.id;
    async function loadRoom(_filename) {
        console.log("Start fetch");
        let response = await fetch(_filename);
        let text = await response.text();
        let json = JSON.parse(text);
        // alternative: json = await response.json();
        console.log("Done fetch");
        return (json);
    }
    return {
        setters: [],
        execute: function () {
            filename = "./rooms.json";
            exports_1("roomArray", roomArray = []);
            for (let i; i < roomArray.length; i++) {
                roomArray.push(loadRoom(filename[i]));
                //let roomArray: Data = loadRoom(filename[1]);
            }
            console.log(roomArray);
            /*declare module 'rooms.json' {
                import * as json from 'C:\Users\Desiree\Desktop\Softwaredesign\Software-Design\Abschlussaufgabe\rooms.json';
                export = json;
            }*/
            //const rooms = require("C:\Users\Desiree\Desktop\Softwaredesign\Software-Design\Abschlussaufgabe\rooms.json");
            text = document.createElement("div");
            document.body.appendChild(text);
            //const inputfield = document.createElement("input");
            //document.body.appendChild(inputfield);
            //text.innerHTML = testname;
            text.innerHTML = "Welcome to the game. What do you want to do?<br>>start game (s)<br>>quit game (q)";
            //inputfield
            userInput = window.prompt("Select either s to start the game or q to quit it:");
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
    };
});
//# sourceMappingURL=main.js.map