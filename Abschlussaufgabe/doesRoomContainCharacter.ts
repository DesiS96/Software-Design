 //import { Character } from "./Character";

 namespace Abschlussarbeit {

    export function doesRoomContainCharacter(_characterArray: Character[], _characterName: string): boolean {

        let containsItem: boolean = true;

        for (let i: number = 0; i < _characterArray.length; i++) {

            if (i == _characterArray.length && _characterArray[i].name != _characterName) {
                containsItem = false;
            }
        }
        return containsItem;

    }
}