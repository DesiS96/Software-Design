 import { Character } from "./Character";

 export function doesRoomContainCharacter(_characterArray: Character[], _characterName: string): boolean {

        let containsItem: boolean = true;

        for (let i: number; i < _characterArray.length; i++) {

            if (i == _characterArray.length && _characterArray[i].name != _characterName) {
                containsItem = false;
            }
        }
        return containsItem;

}