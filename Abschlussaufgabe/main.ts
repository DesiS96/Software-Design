namespace Abschlussarbeit {

    export type JSONObject = { [key: string]: JSON };
    export interface JSONArray extends Array<JSON> {}
    export type JSON = null | string | number | boolean | JSONArray | JSONObject;

    interface RoomData {

        items: string[];
        characters: CharacterData[];
        passages: Passage[];
        id: number;
        description: string;

    }

    interface ItemData {

        name: string;
        type: string;

    }

    interface CharacterData {

        name: string;
        life: number;
        attack: number;
        type: string;
        position: number;
        inventory: ItemData[];
        commands: string;

    }

    interface PassageData {

        leadsTo: number;
        direction: string;
        isPassable: string;

    }

    //let roomA: Promise<Data> = loadRooms("./rooms.json");

    //export let roomArray: Room[] = [];

    async function loadRooms(_filename: string): Promise<RoomData[]> {
        console.log("Start fetch");

        let response: Response = await fetch(_filename);

        let text: string = await response.text();
        let json: RoomData[] = JSON.parse(text);
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

    let characters: Character[] = [];
    let items: Item[] = [];
    let passages: Passage[];



    async function loadPlayer(_filename: string): Promise<PlayerCharacter> {
        console.log("Start fetch");

        let response: Response = await fetch(_filename);

        let text: string = await response.text();
        let json: PlayerCharacter = JSON.parse(text);
        // alternative: json = await response.json();

        console.log("Done fetch");

        return json;

    }

    let filename: string = "./rooms.json";
    let filenameCharacters: string = "./playercharacter_json.json";

    export let playerJson: Promise<PlayerCharacter> = loadPlayer("./playercharacter_json.json");


    //console.log(roomArray);

    //Game

    let commands: string = "commands: attack(a), showCommands(c), drop(d), move(m), showInventory(i), take(t)";

    //PlayerCharacter
    let zelda: PlayerCharacter = new PlayerCharacter("Zelda", 20, 10, "player", 1, [], commands);

    //Enemies
    let stalfols: IntelligentNPC = new IntelligentNPC("Stalfols", 20, 5, "intelligent", 9, [], "A Stalfols. I guess it wants a fight!");
    let skultulla: IntelligentNPC = new IntelligentNPC("a skultulla", 20, 5, "intelligent", 7, [], "Eww it's a skultulla! I hate those spiders!");
    let bokoblin: IntelligentNPC = new IntelligentNPC("A bokoblin", 20, 5, "intelligent", 5, [], "An aggressive bokoblin. Has it something to do with the accident?");
    
    //Items
    let potion1: Item = new Item("potion1", "potion");
    let potion2: Item = new Item("potion2", "potion");
    let bombFlower: Item = new Item("bombflower1", "bombflower");

    //Characters

    let mineWorker: RegularNPC = new RegularNPC("Mine-Worker", 10, 0, "regular", 1, "A scared looking worker of the mine");
    let adventurer: RegularNPC = new RegularNPC("fellow adventurer", 10, 0, "regular", 3, "Another adventurer, she seems lost.");
    let worker: RegularNPC = new RegularNPC("Another worker", 10, 0, "regular", 5, "Another worker of the mines, he seems tired.");
    let link: RegularNPC = new RegularNPC("Link", 10, 0, "regular", 8, "Link! I finally found him!");
    let skilledWorker: RegularNPC = new RegularNPC("Skilled worker", 10, 0, "regular", 10, "He says that he searches for a hammer. He offers to build a bridge to the other side if I find it for him.");

    //Passage

    let passageE1: Passage = new Passage(2, "e", "yes");
    let passageE2: Passage = new Passage(4, "n", "yes");
    let passageR21: Passage = new Passage(3, "e", "yes");
    let passageR22: Passage = new Passage(1, "w", "yes");
    let passageR31: Passage = new Passage(2, "w", "yes");
    let passageR41: Passage = new Passage(5, "e", "yes");
    let passageR42: Passage = new Passage(9, "n", "yes");
    let passageR51: Passage = new Passage(6, "e", "yes");
    let passageR52: Passage = new Passage(4, "w", "yes");
    let passageR61: Passage = new Passage(7, "n", "yes");
    let passageR62: Passage = new Passage(5, "w", "yes");
    let passageR71: Passage = new Passage(8, "n", "no");
    let passageR72: Passage = new Passage(6, "s", "yes");
    let passageR81: Passage = new Passage(7, "s", "yes");
    let passageR91: Passage = new Passage(10, "w", "yes");
    let passageR92: Passage = new Passage(6, "s", "yes");
    let passageR101: Passage = new Passage(11, "w", "no");
    let passageR102: Passage = new Passage(9, "e", "yes");
    let passageR111: Passage = new Passage(10, "e", "yes");

    //Rooms
    export let roomArray: Room[] = [];
    roomArray[1] = new Room([], [mineWorker], [passageE1, passageE2], 1, "The entrance of the mine.");
    roomArray[2] = new Room([potion1], [], [passageR21, passageR22], 2, "Another dark Room. Aside from the one through which I entered i only see one other.");
    roomArray[3] = new Room([], [adventurer], [passageR31], 3, "This seems like a dead-end.");
    roomArray[4] = new Room([], [], [passageR41, passageR42], 4, "Nothing of interest here.");
    roomArray[5] = new Room([], [worker], [passageR51, passageR52], 5, "");
    roomArray[6] = new Room([potion2], [], [passageR61, passageR62], 6, "");
    roomArray[7] = new Room([], [], [passageR71, passageR72], 7, "");
    roomArray[8] = new Room([], [link], [passageR81], 8, "");
    roomArray[9] = new Room([], [], [passageR91, passageR92], 9, "");
    roomArray[10] = new Room([bombFlower], [skilledWorker], [passageR101, passageR102], 10, "There is a small river that seperates the room into two parts. On the other side i see a bombflower. It could be useful if i could reach it." );
    roomArray[11] = new Room([], [], [passageR111], 7, "");

    const text = document.createElement("div");
    document.body.appendChild(text);

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