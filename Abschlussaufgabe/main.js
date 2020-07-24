System.register(["./rooms.json"], function (exports_1, context_1) {
    "use strict";
    var rooms_json_1, id, roomArray, text, userInput;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (rooms_json_1_1) {
                rooms_json_1 = rooms_json_1_1;
            }
        ],
        execute: function () {
            id = (rooms_json_1.default.rooms[1].id);
            console.log(id);
            /*declare module 'rooms.json' {
                import * as json from 'C:\Users\Desiree\Desktop\Softwaredesign\Software-Design\Abschlussaufgabe\rooms.json';
                export = json;
            }*/
            //const rooms = require("C:\Users\Desiree\Desktop\Softwaredesign\Software-Design\Abschlussaufgabe\rooms.json");
            exports_1("roomArray", roomArray = []);
            text = document.createElement("div");
            document.body.appendChild(text);
            //const inputfield = document.createElement("input");
            //document.body.appendChild(inputfield);
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