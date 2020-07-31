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
        look: string;

    }

    interface PassageData {

        leadsTo: number;
        direction: string;
        isPassable: string;

    }

    interface RoomData {



    }

    /*async function loadRooms(_filename: string): Promise<RoomData[]> {
        console.log("Start fetch");

        let response: Response = await fetch(_filename);

        let text: string = await response.text();
        let json: RoomData[] = JSON.parse(text);
        // alternative: json = await response.json();

        console.log("Done fetch");
        return json;
    }*/

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

    //LoadItems

    let itemArray: Item[] = [];

    async function loadItems(_filename: string): Promise<void> {
        console.log("Start fetch");

        let response: Response = await fetch(_filename);

        let text: string = await response.text();
        let json: ItemData[] = JSON.parse(text);

        console.log(json);

        for (let i: number = 0; i <= json.length - 1; i++) {

            console.log(json);

            let itemName: string = JSON.stringify(json[i].name);
            console.log(itemName);
            let itemType: string = JSON.stringify(json[i].type);
            console.log(itemType);

            itemArray[i] = new Item(itemName, itemType);

            console.log(itemArray[i]);

        }

        console.log("Done fetch");
    }

    //LoadCharacters

    let characterArray: Character[] = [];

    async function loadNPCs(_filename: string): Promise<void> {
        console.log("Start fetch");

        let response: Response = await fetch(_filename);

        let text: string = await response.text();
        let json: CharacterData[] = JSON.parse(text);

        console.log(json);

        for (let i: number = 0; i <= json.length - 1; i++) {

            console.log(json);

            let characterName: string = JSON.stringify(json[i].name);
            console.log(characterName);
            let characterLife: string = JSON.stringify(json[i].life);
            let lifeToNumber: number = Number(characterLife);
            console.log(characterLife);
            let characterAttack: string = JSON.stringify(json[i].attack);
            let attackToNumber: number = Number(characterAttack);
            console.log(characterAttack);
            let characterType: string = JSON.stringify(json[i].type); 
            console.log(characterAttack);
            let characterPositionID: string = JSON.stringify(json[i].position);
            let positionToNumber: number = Number(characterPositionID);
            console.log(characterAttack);
            let characterLook: string = JSON.stringify(json[i].look);
            console.log(characterAttack);

            if (characterType == "intelligent") {

                let npcPotion: Item = new Item("potion", "potion");

                characterArray[i] = new IntelligentNPC(characterName, lifeToNumber, attackToNumber, characterType, positionToNumber, [npcPotion], characterLook);
            }
            else {

            characterArray[i] = new RegularNPC(characterName, lifeToNumber, attackToNumber, characterType, positionToNumber, characterLook);

            
            }
            console.log(characterArray[i]);

        }

        console.log("Done fetch");
    }

    //LoadPassages

    let passageArray: Passage[] = []; //alles in einer Methode in Raum laden?

    async function loadPassages(_filename: string): Promise<void> {
        console.log("Start fetch");

        let response: Response = await fetch(_filename);

        let text: string = await response.text();
        let json: PassageData[] = JSON.parse(text);

        console.log(json);

        for (let i: number = 0; i <= json.length - 1; i++) {

            console.log(json);

            let passageLeadsTo: string = JSON.stringify(json[i].leadsTo);
            let leadsToNumber: number = Number(passageLeadsTo);
            console.log(passageLeadsTo);
            let passageDirection: string = JSON.stringify(json[i].direction);
            console.log(passageDirection);
            let passageIsPassable: string = JSON.stringify(json[i].isPassable);
            console.log(passageDirection);

            passageArray[i] = new Passage(leadsToNumber, passageDirection, passageIsPassable);

            console.log(passageArray[i]);
        }

        console.log("Done fetch");
    }

    loadItems("./itemsJSON.json");
    console.log(itemArray);

    loadNPCs("./characters.json");
    console.log(characterArray);

    loadPassages("./passagesJSON.json");

    let numberOfRooms: number = 11; //userprompt -> How many rooms
    let roomArray2: Room[] = [];

    /*for (let i: number = 0; i < numberOfRooms; i++) {

        let charactersForRoom: Character[] = [];
        let passagesForRoom: Passage[] = [];

        for (let j: number = 0; j < characterArray.length; j++) {

            if (characterArray[i].positionID == i + 1) {

                charactersForRoom.push(characterArray[i]);
                passagesForRoom.push(passageArray[i]);
            }
        }

        let add: number = i + 1;

        let userInput: string = window.prompt("Write a description for room " + add + " :");

        roomArray2[i] = new Room([], charactersForRoom, passagesForRoom, i + 1, userInput);
    }*/

    console.log(roomArray2);

    //Game

    export let commands: string = "commands: attack(a), showCommands(c), drop(d), move(m), showInventory(i), take(t)";

    //PlayerCharacter
    export let zelda: PlayerCharacter = new PlayerCharacter("Zelda", 20, 10, "player", 1, [], commands);
        
    //Enemies
    export let stalfols: IntelligentNPC = new IntelligentNPC("Stalfols", 20, 5, "intelligent", 9, [], "A Stalfols. I guess it wants a fight!");
    export let skultulla: IntelligentNPC = new IntelligentNPC("a skultulla", 20, 5, "intelligent", 7, [], "Eww it's a skultulla! I hate those spiders!");
    export let bokoblin: IntelligentNPC = new IntelligentNPC("A bokoblin", 20, 5, "intelligent", 5, [], "An aggressive bokoblin. Has it something to do with the accident?");
            
    //Items
    export let potion1: Item = new Item("potion1", "potion");
    export let potion2: Item = new Item("potion2", "potion");
    export let bombFlower: Item = new Item("bombflower1", "bombflower");
        
    //Characters
        
    export let mineWorker: RegularNPC = new RegularNPC("Mine-Worker", 10, 0, "regular", 1, "A scared looking worker of the mine");
    export let adventurer: RegularNPC = new RegularNPC("fellow adventurer", 10, 0, "regular", 3, "Another adventurer, she seems lost.");
    export let worker: RegularNPC = new RegularNPC("Another worker", 10, 0, "regular", 5, "Another worker of the mines, he seems tired.");
    export let link: RegularNPC = new RegularNPC("Link", 10, 0, "regular", 8, "Link! I finally found him!");
    export let skilledWorker: RegularNPC = new RegularNPC("Skilled worker", 10, 0, "regular", 10, "He says that he searches for a hammer. He offers to build a bridge to the other side if I find it for him.");
        
    //Passage
        
    export let passageE1: Passage = new Passage(2, "e", "yes");
    export let passageE2: Passage = new Passage(4, "n", "yes");
    export let passageR21: Passage = new Passage(3, "e", "yes");
    export let passageR22: Passage = new Passage(1, "w", "yes");
    export let passageR31: Passage = new Passage(2, "w", "yes");
    export let passageR41: Passage = new Passage(5, "e", "yes");
    export let passageR42: Passage = new Passage(9, "n", "yes");
    export let passageR51: Passage = new Passage(6, "e", "yes");
    export let passageR52: Passage = new Passage(4, "w", "yes");
    export let passageR61: Passage = new Passage(7, "n", "yes");
    export let passageR62: Passage = new Passage(5, "w", "yes");
    export let passageR71: Passage = new Passage(8, "n", "no");
    export let passageR72: Passage = new Passage(6, "s", "yes");
    export let passageR81: Passage = new Passage(7, "s", "yes");
    export let passageR91: Passage = new Passage(10, "w", "yes");
    export let passageR92: Passage = new Passage(6, "s", "yes");
    export let passageR101: Passage = new Passage(11, "w", "no");
    export let passageR102: Passage = new Passage(9, "e", "yes");
    export let passageR111: Passage = new Passage(10, "e", "yes");
        
    //Rooms
    export let roomArray: Room[] = [];
    roomArray[0] = new Room([], [mineWorker], [passageE1, passageE2], 1, "You are at the entrance of the mine.");
    roomArray[1] = new Room([potion1], [], [passageR21, passageR22], 2, "Another dark Room. Aside from the one through which I entered i only see one other.");
    roomArray[2] = new Room([], [adventurer], [passageR31], 3, "This seems like a dead-end.");
    roomArray[3] = new Room([], [], [passageR41, passageR42], 4, "Nothing of interest here.");
    roomArray[4] = new Room([], [worker, bokoblin], [passageR51, passageR52], 5, "");
    roomArray[5] = new Room([potion2], [], [passageR61, passageR62], 6, "");
    roomArray[6] = new Room([], [skultulla], [passageR71, passageR72], 7, "");
    roomArray[7] = new Room([], [link], [passageR81], 8, "");
    roomArray[8] = new Room([], [stalfols], [passageR91, passageR92], 9, "");
    roomArray[9] = new Room([bombFlower], [skilledWorker], [passageR101, passageR102], 10, "There is a small river that seperates the room into two parts. On the other side i see a bombflower. It could be useful if i could reach it." );
    roomArray[10] = new Room([], [], [passageR111], 7, "");
        
    console.log(roomArray);

    export const text = document.createElement("div");
    document.body.appendChild(text);

    text.innerHTML = "Welcome to the game. What do you want to do?<br>>start game (s)<br>>quit game (q)";
    //inputfield

    let userInput: string = window.prompt("Select either s to start the game or q to quit it:");

    text.innerHTML = text.innerHTML + "<br>" + userInput;

    switch (userInput) {

        case "s": {

            startGame();
            break;

        }
        case "l": {

            //Inhalt
            text.innerHTML = text.innerHTML + "<br>" + "You decieded to load existing files.";

            let userInputItems: string = window.prompt("Select a file for items you want to load: ");

            let userInputCharacters: string = window.prompt("Select a file for characters you want to load: ");

            let userInputPassages: string = window.prompt("Select a file for passages to Rooms you want to load: ");

            loadItems(userInputItems);
            console.log(itemArray);
        
            loadNPCs(userInputCharacters);
            console.log(characterArray);
        
            loadPassages(userInputPassages);


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