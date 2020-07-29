namespace Abschlussarbeit {

    export function look(): void {

        let currentRoom: Room = zelda.getCurrentRoom();

        text.innerHTML = text.innerHTML + "<br>" + currentRoom.description + "<br>" + "You see:";
        if (currentRoom.items.length != 0) {

            for (let i: number = 0; i < currentRoom.items.length; i++) {
                
                text.innerHTML = text.innerHTML + "<br>" + currentRoom.items[i].name;
            }
        }
        if (currentRoom.characters.length != 0) {
            for (let j: number = 0; j < currentRoom.characters.length; j++) {
                
                let characterAtJ: string = currentRoom.characters[j].name;
                console.log(characterAtJ);
                
                text.innerHTML = text.innerHTML + "<br>" + characterAtJ;
            }
        }
    }
}