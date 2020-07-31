"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
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
    let itemArray = [];
    async function loadItems(_filename) {
        console.log("Start fetch");
        let response = await fetch(_filename);
        let text = await response.text();
        let json = JSON.parse(text);
        console.log(json);
        for (let i = 0; i <= json.length - 1; i++) {
            console.log(json);
            let itemName = JSON.stringify(json[i].name);
            console.log(itemName);
            let itemType = JSON.stringify(json[i].type);
            console.log(itemType);
            itemArray[i] = new Abschlussarbeit.Item(itemName, itemType);
            console.log(itemArray[i]);
        }
        console.log("Done fetch");
    }
    //LoadCharacters
    let characterArray = [];
    async function loadNPCs(_filename) {
        console.log("Start fetch");
        let response = await fetch(_filename);
        let text = await response.text();
        let json = JSON.parse(text);
        console.log(json);
        for (let i = 0; i <= json.length - 1; i++) {
            console.log(json);
            let characterName = JSON.stringify(json[i].name);
            console.log(characterName);
            let characterLife = JSON.stringify(json[i].life);
            let lifeToNumber = Number(characterLife);
            console.log(characterLife);
            let characterAttack = JSON.stringify(json[i].attack);
            let attackToNumber = Number(characterAttack);
            console.log(characterAttack);
            let characterType = JSON.stringify(json[i].type);
            console.log(characterAttack);
            let characterPositionID = JSON.stringify(json[i].position);
            let positionToNumber = Number(characterPositionID);
            console.log(characterAttack);
            let characterLook = JSON.stringify(json[i].look);
            console.log(characterAttack);
            if (characterType == "intelligent") {
                let npcPotion = new Abschlussarbeit.Item("potion", "potion");
                characterArray[i] = new Abschlussarbeit.IntelligentNPC(characterName, lifeToNumber, attackToNumber, characterType, positionToNumber, [npcPotion], characterLook);
            }
            else {
                characterArray[i] = new Abschlussarbeit.RegularNPC(characterName, lifeToNumber, attackToNumber, characterType, positionToNumber, characterLook);
            }
            console.log(characterArray[i]);
        }
        console.log("Done fetch");
    }
    //LoadPassages
    let passageArray = []; //alles in einer Methode in Raum laden?
    async function loadPassages(_filename) {
        console.log("Start fetch");
        let response = await fetch(_filename);
        let text = await response.text();
        let json = JSON.parse(text);
        console.log(json);
        for (let i = 0; i <= json.length - 1; i++) {
            console.log(json);
            let passageLeadsTo = JSON.stringify(json[i].leadsTo);
            let leadsToNumber = Number(passageLeadsTo);
            console.log(passageLeadsTo);
            let passageDirection = JSON.stringify(json[i].direction);
            console.log(passageDirection);
            let passageIsPassable = JSON.stringify(json[i].isPassable);
            console.log(passageDirection);
            passageArray[i] = new Abschlussarbeit.Passage(leadsToNumber, passageDirection, passageIsPassable);
            console.log(passageArray[i]);
        }
        console.log("Done fetch");
    }
    loadItems("./itemsJSON.json");
    console.log(itemArray);
    loadNPCs("./characters.json");
    console.log(characterArray);
    loadPassages("./passagesJSON.json");
    let numberOfRooms = 11; //userprompt -> How many rooms
    let roomArray2 = [];
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
        case "l": {
            //Inhalt
            Abschlussarbeit.text.innerHTML = Abschlussarbeit.text.innerHTML + "<br>" + "You decieded to load existing files.";
            let userInputItems = window.prompt("Select a file for items you want to load: ");
            let userInputCharacters = window.prompt("Select a file for characters you want to load: ");
            let userInputPassages = window.prompt("Select a file for passages to Rooms you want to load: ");
            loadItems(userInputItems);
            console.log(itemArray);
            loadNPCs(userInputCharacters);
            console.log(characterArray);
            loadPassages(userInputPassages);
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