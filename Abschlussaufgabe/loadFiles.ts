namespace Abschlussarbeit {

    export interface RoomData {

        items: string[];
        characters: CharacterData[];
        passages: Passage[];
        id: number;
        description: string;

    }

    export interface ItemData {

        name: string;
        type: string;

    }

    export interface CharacterData {

        name: string;
        life: number;
        attack: number;
        type: string;
        position: number;
        inventory: ItemData[];
        commands: string;

    }

    export async function loadItems(_filename: string): Promise<void> {
        console.log("Start fetch");

        let response: Response = await fetch(_filename);

        let text: string = await response.text();
        let json: ItemData[] = JSON.parse(text);
        // alternative: json = await response.json();

        let itemArray2: Item[];

        for (let i: number = 0; i <= json.length; i++) {

        itemArray2[i] = new Item(json[i].name, json[i].type);

        }

        console.log(itemArray2);

        console.log("Done fetch");
    }

    export async function loadRooms(_filename: string): Promise<RoomData[]> {
        console.log("Start fetch");

        let response: Response = await fetch(_filename);

        let text: string = await response.text();
        let json: RoomData[] = JSON.parse(text);
        // alternative: json = await response.json();

        console.log("Done fetch");
        return json;
    }
}