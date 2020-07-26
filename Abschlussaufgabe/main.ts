namespace Abschlussarbeit {

    interface RoomData {

        items: string[];
        characters: Character[];
        passages: Passage[];
        id: number;
        description: string;

    }

    //let roomA: Promise<Data> = loadRooms("./rooms.json");

    export let roomArray: Room[] = [];

    async function loadRooms(_filename: string): Promise<RoomData[]> {
        console.log("Start fetch");

        let response: Response = await fetch(_filename);

        let text: string = await response.text();
        let json: RoomData[] = JSON.parse(text);
        // alternative: json = await response.json();

        console.log("Done fetch");
        return json;
    }

    async function getRooms(): Promise<void> {

        let rooms: RoomData[] = await loadRooms("./rooms.json");

        console.log(rooms.length);

        console.log(rooms);

        console.log(rooms[2].characters);

    }

    

    getRooms();

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


    console.log(roomArray);

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