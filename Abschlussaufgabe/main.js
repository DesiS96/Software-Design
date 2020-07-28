"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    /*interface PassageData {

        leadsTo: number;
        direction: string;
        isPassable: string;

    }*/
    //let roomA: Promise<Data> = loadRooms("./rooms.json");
    //export let roomArray: Room[] = [];
    async function loadRooms(_filename) {
        console.log("Start fetch");
        let response = await fetch(_filename);
        let text = await response.text();
        let json = JSON.parse(text);
        // alternative: json = await response.json();
        console.log("Done fetch");
        return json;
    }
    /*    async function getRoomArray(): Promise<RoomData[]> {
    
            let rooms: RoomData[] = await loadRooms("./rooms.json");
    
            console.log(rooms.length);
            console.log(rooms);
            console.log(rooms[2].characters);
    
            
    
            for (let i: number; i < rooms.length; i++) {
    
                let characters: Character[];
                let items: Item[];
    
                for (let j: number; j < rooms[i].items.length; j++) {
    
                    let itemName: string = rooms[i].items[j].name;
    
                    let item: Item = new Item(rooms[i].items[j].name, rooms[i].items[j].type)
    
                }
    
                for (let j: number; j < rooms[i].characters.length; j++) {
    
                    let character: Character = new Character(rooms[i].character.name, rooms[i].)
    
    
                }
    
    
            }
    
            return rooms;
    
        }*/
    /*async function loadPlayer(_filename: string): Promise<PlayerCharacter> {
        console.log("Start fetch");

        let response: Response = await fetch(_filename);

        let text: string = await response.text();
        let json: PlayerCharacter = JSON.parse(text);
        // alternative: json = await response.json();

        console.log("Done fetch");

        return json;

    }*/
    //let filename: string = "./rooms.json";
    //let filenameCharacters: string = "./playercharacter_json.json";
    //export let playerJson: Promise<PlayerCharacter> = loadPlayer("./playercharacter_json.json");
    //console.log(roomArray);
    //Game
    let commands = "commands: attack(a), showCommands(c), drop(d), move(m), showInventory(i), take(t)";
    //PlayerCharacter
    let zelda = new Abschlussarbeit.PlayerCharacter("Zelda", 20, 10, "player", 1, [], commands);
    //Enemies
    let stalfols = new Abschlussarbeit.IntelligentNPC("Stalfols", 20, 5, "intelligent", 9, [], "A Stalfols. I guess it wants a fight!");
    let skultulla = new Abschlussarbeit.IntelligentNPC("a skultulla", 20, 5, "intelligent", 7, [], "Eww it's a skultulla! I hate those spiders!");
    let bokoblin = new Abschlussarbeit.IntelligentNPC("A bokoblin", 20, 5, "intelligent", 5, [], "An aggressive bokoblin. Has it something to do with the accident?");
    //Items
    let potion1 = new Abschlussarbeit.Item("potion1", "potion");
    let potion2 = new Abschlussarbeit.Item("potion2", "potion");
    let bombFlower = new Abschlussarbeit.Item("bombflower1", "bombflower");
    //Characters
    let mineWorker = new Abschlussarbeit.RegularNPC("Mine-Worker", 10, 0, "regular", 1, "A scared looking worker of the mine");
    let adventurer = new Abschlussarbeit.RegularNPC("fellow adventurer", 10, 0, "regular", 3, "Another adventurer, she seems lost.");
    let worker = new Abschlussarbeit.RegularNPC("Another worker", 10, 0, "regular", 5, "Another worker of the mines, he seems tired.");
    let link = new Abschlussarbeit.RegularNPC("Link", 10, 0, "regular", 8, "Link! I finally found him!");
    let skilledWorker = new Abschlussarbeit.RegularNPC("Skilled worker", 10, 0, "regular", 10, "He says that he searches for a hammer. He offers to build a bridge to the other side if I find it for him.");
    //Passage
    let passageE1 = new Abschlussarbeit.Passage(2, "e", "yes");
    let passageE2 = new Abschlussarbeit.Passage(4, "n", "yes");
    let passageR21 = new Abschlussarbeit.Passage(3, "e", "yes");
    let passageR22 = new Abschlussarbeit.Passage(1, "w", "yes");
    let passageR31 = new Abschlussarbeit.Passage(2, "w", "yes");
    let passageR41 = new Abschlussarbeit.Passage(5, "e", "yes");
    let passageR42 = new Abschlussarbeit.Passage(9, "n", "yes");
    let passageR51 = new Abschlussarbeit.Passage(6, "e", "yes");
    let passageR52 = new Abschlussarbeit.Passage(4, "w", "yes");
    let passageR61 = new Abschlussarbeit.Passage(7, "n", "yes");
    let passageR62 = new Abschlussarbeit.Passage(5, "w", "yes");
    let passageR71 = new Abschlussarbeit.Passage(8, "n", "no");
    let passageR72 = new Abschlussarbeit.Passage(6, "s", "yes");
    let passageR81 = new Abschlussarbeit.Passage(7, "s", "yes");
    let passageR91 = new Abschlussarbeit.Passage(10, "w", "yes");
    let passageR92 = new Abschlussarbeit.Passage(6, "s", "yes");
    let passageR101 = new Abschlussarbeit.Passage(11, "w", "no");
    let passageR102 = new Abschlussarbeit.Passage(9, "e", "yes");
    let passageR111 = new Abschlussarbeit.Passage(10, "e", "yes");
    //Rooms
    Abschlussarbeit.roomArray = [];
    Abschlussarbeit.roomArray[0] = new Abschlussarbeit.Room([], [mineWorker], [passageE1, passageE2], 1, "You are at the entrance of the mine.");
    Abschlussarbeit.roomArray[1] = new Abschlussarbeit.Room([potion1], [], [passageR21, passageR22], 2, "Another dark Room. Aside from the one through which I entered i only see one other.");
    Abschlussarbeit.roomArray[2] = new Abschlussarbeit.Room([], [adventurer], [passageR31], 3, "This seems like a dead-end.");
    Abschlussarbeit.roomArray[3] = new Abschlussarbeit.Room([], [], [passageR41, passageR42], 4, "Nothing of interest here.");
    Abschlussarbeit.roomArray[4] = new Abschlussarbeit.Room([], [worker, bokoblin], [passageR51, passageR52], 5, "");
    Abschlussarbeit.roomArray[5] = new Abschlussarbeit.Room([potion2], [], [passageR61, passageR62], 6, "");
    Abschlussarbeit.roomArray[6] = new Abschlussarbeit.Room([], [skultulla], [passageR71, passageR72], 7, "");
    Abschlussarbeit.roomArray[7] = new Abschlussarbeit.Room([], [link], [passageR81], 8, "");
    Abschlussarbeit.roomArray[8] = new Abschlussarbeit.Room([], [stalfols], [passageR91, passageR92], 9, "");
    Abschlussarbeit.roomArray[9] = new Abschlussarbeit.Room([bombFlower], [skilledWorker], [passageR101, passageR102], 10, "There is a small river that seperates the room into two parts. On the other side i see a bombflower. It could be useful if i could reach it.");
    Abschlussarbeit.roomArray[10] = new Abschlussarbeit.Room([], [], [passageR111], 7, "");
    console.log(Abschlussarbeit.roomArray);
    const text = document.createElement("div");
    document.body.appendChild(text);
    text.innerHTML = "Welcome to the game. What do you want to do?<br>>start game (s)<br>>quit game (q)";
    //inputfield
    let userInput = window.prompt("Select either s to start the game or q to quit it:");
    text.innerHTML = text.innerHTML + "<br>" + userInput;
    switch (userInput) {
        case "s": {
            text.innerHTML = text.innerHTML + "<br>" + "You decide to enter the forgotten Mines <br> All you have is a torch to lighten the way and your magic to attack foes.";
            let currentRoom = new Abschlussarbeit.Room([], [], [], undefined, undefined);
            zelda.getCurrentRoom();
            console.log(zelda.positionID);
            console.log(currentRoom);
            text.innerHTML = text.innerHTML + "<br>" + currentRoom.description + "<br>" + "You see:";
            //print out items and characters of room
            console.log(currentRoom.characters.length);
            for (let i; i <= currentRoom.items.length; i++) {
                text.innerHTML = text.innerHTML + "<br>" + currentRoom.items[i].name;
            }
            for (let j; j <= currentRoom.characters.length; j++) {
                let characterAtJ = currentRoom.characters[j].name;
                console.log(characterAtJ);
                text.innerHTML = text.innerHTML + "<br>" + characterAtJ;
            }
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