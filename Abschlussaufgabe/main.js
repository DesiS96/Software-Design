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
    Abschlussarbeit.commands = "commands: attack(a), showCommands(c), drop(d), move(m), showInventory(i), take(t)";
    //PlayerCharacter
    Abschlussarbeit.zelda = new Abschlussarbeit.PlayerCharacter("Zelda", 20, 10, "player", 1, [], Abschlussarbeit.commands);
    //Enemies
    Abschlussarbeit.stalfols = new Abschlussarbeit.IntelligentNPC("Stalfols", 20, 5, "intelligent", 9, [], "A Stalfols. I guess it wants a fight!");
    Abschlussarbeit.skultulla = new Abschlussarbeit.IntelligentNPC("a skultulla", 20, 5, "intelligent", 7, [], "Eww it's a skultulla! I hate those spiders!");
    Abschlussarbeit.bokoblin = new Abschlussarbeit.IntelligentNPC("A bokoblin", 20, 5, "intelligent", 5, [], "An aggressive bokoblin. Has it something to do with the accident?");
    //Items
    Abschlussarbeit.potion1 = new Abschlussarbeit.Item("potion1", "potion");
    Abschlussarbeit.potion2 = new Abschlussarbeit.Item("potion2", "potion");
    Abschlussarbeit.bombFlower = new Abschlussarbeit.Item("bombflower1", "bombflower");
    //Characters
    Abschlussarbeit.mineWorker = new Abschlussarbeit.RegularNPC("Mine-Worker", 10, 0, "regular", 1, "A scared looking worker of the mine");
    Abschlussarbeit.adventurer = new Abschlussarbeit.RegularNPC("fellow adventurer", 10, 0, "regular", 3, "Another adventurer, she seems lost.");
    Abschlussarbeit.worker = new Abschlussarbeit.RegularNPC("Another worker", 10, 0, "regular", 5, "Another worker of the mines, he seems tired.");
    Abschlussarbeit.link = new Abschlussarbeit.RegularNPC("Link", 10, 0, "regular", 8, "Link! I finally found him!");
    Abschlussarbeit.skilledWorker = new Abschlussarbeit.RegularNPC("Skilled worker", 10, 0, "regular", 10, "He says that he searches for a hammer. He offers to build a bridge to the other side if I find it for him.");
    //Passage
    Abschlussarbeit.passageE1 = new Abschlussarbeit.Passage(2, "e", "yes");
    Abschlussarbeit.passageE2 = new Abschlussarbeit.Passage(4, "n", "yes");
    Abschlussarbeit.passageR21 = new Abschlussarbeit.Passage(3, "e", "yes");
    Abschlussarbeit.passageR22 = new Abschlussarbeit.Passage(1, "w", "yes");
    Abschlussarbeit.passageR31 = new Abschlussarbeit.Passage(2, "w", "yes");
    Abschlussarbeit.passageR41 = new Abschlussarbeit.Passage(5, "e", "yes");
    Abschlussarbeit.passageR42 = new Abschlussarbeit.Passage(9, "n", "yes");
    Abschlussarbeit.passageR51 = new Abschlussarbeit.Passage(6, "e", "yes");
    Abschlussarbeit.passageR52 = new Abschlussarbeit.Passage(4, "w", "yes");
    Abschlussarbeit.passageR61 = new Abschlussarbeit.Passage(7, "n", "yes");
    Abschlussarbeit.passageR62 = new Abschlussarbeit.Passage(5, "w", "yes");
    Abschlussarbeit.passageR71 = new Abschlussarbeit.Passage(8, "n", "no");
    Abschlussarbeit.passageR72 = new Abschlussarbeit.Passage(6, "s", "yes");
    Abschlussarbeit.passageR81 = new Abschlussarbeit.Passage(7, "s", "yes");
    Abschlussarbeit.passageR91 = new Abschlussarbeit.Passage(10, "w", "yes");
    Abschlussarbeit.passageR92 = new Abschlussarbeit.Passage(6, "s", "yes");
    Abschlussarbeit.passageR101 = new Abschlussarbeit.Passage(11, "w", "no");
    Abschlussarbeit.passageR102 = new Abschlussarbeit.Passage(9, "e", "yes");
    Abschlussarbeit.passageR111 = new Abschlussarbeit.Passage(10, "e", "yes");
    //Rooms
    Abschlussarbeit.roomArray = [];
    Abschlussarbeit.roomArray[0] = new Abschlussarbeit.Room([], [Abschlussarbeit.mineWorker], [Abschlussarbeit.passageE1, Abschlussarbeit.passageE2], 1, "You are at the entrance of the mine.");
    Abschlussarbeit.roomArray[1] = new Abschlussarbeit.Room([Abschlussarbeit.potion1], [], [Abschlussarbeit.passageR21, Abschlussarbeit.passageR22], 2, "Another dark Room. Aside from the one through which I entered i only see one other.");
    Abschlussarbeit.roomArray[2] = new Abschlussarbeit.Room([], [Abschlussarbeit.adventurer], [Abschlussarbeit.passageR31], 3, "This seems like a dead-end.");
    Abschlussarbeit.roomArray[3] = new Abschlussarbeit.Room([], [], [Abschlussarbeit.passageR41, Abschlussarbeit.passageR42], 4, "Nothing of interest here.");
    Abschlussarbeit.roomArray[4] = new Abschlussarbeit.Room([], [Abschlussarbeit.worker, Abschlussarbeit.bokoblin], [Abschlussarbeit.passageR51, Abschlussarbeit.passageR52], 5, "");
    Abschlussarbeit.roomArray[5] = new Abschlussarbeit.Room([Abschlussarbeit.potion2], [], [Abschlussarbeit.passageR61, Abschlussarbeit.passageR62], 6, "");
    Abschlussarbeit.roomArray[6] = new Abschlussarbeit.Room([], [Abschlussarbeit.skultulla], [Abschlussarbeit.passageR71, Abschlussarbeit.passageR72], 7, "");
    Abschlussarbeit.roomArray[7] = new Abschlussarbeit.Room([], [Abschlussarbeit.link], [Abschlussarbeit.passageR81], 8, "");
    Abschlussarbeit.roomArray[8] = new Abschlussarbeit.Room([], [Abschlussarbeit.stalfols], [Abschlussarbeit.passageR91, Abschlussarbeit.passageR92], 9, "");
    Abschlussarbeit.roomArray[9] = new Abschlussarbeit.Room([Abschlussarbeit.bombFlower], [Abschlussarbeit.skilledWorker], [Abschlussarbeit.passageR101, Abschlussarbeit.passageR102], 10, "There is a small river that seperates the room into two parts. On the other side i see a bombflower. It could be useful if i could reach it.");
    Abschlussarbeit.roomArray[10] = new Abschlussarbeit.Room([], [], [Abschlussarbeit.passageR111], 7, "");
    console.log(Abschlussarbeit.roomArray);
    Abschlussarbeit.text = document.createElement("div");
    document.body.appendChild(Abschlussarbeit.text);
    Abschlussarbeit.text.innerHTML = "Welcome to the game. What do you want to do?<br>>start game (s)<br>>quit game (q)";
    //inputfield
    let userInput = window.prompt("Select either s to start the game or q to quit it:");
    Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + userInput;
    switch (userInput) {
        case "s": {
            Abschlussarbeit.startGame();
            break;
        }
        case "q": {
            Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "You've ended the game. <br> Hope to see you again soon!";
            break;
        }
        default: {
            Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "Please restart Page and enter s or q.";
        }
    }
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=main.js.map