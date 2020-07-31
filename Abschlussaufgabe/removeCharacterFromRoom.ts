//import { Character} from "./Character";

namespace Abschlussarbeit {

    export function removeCharacterFromRoom(_Array: Character[], _userInput: string): Character[] {

        let fillerArray: Character[] = [];

        for (let i: number = 0; i < _Array.length; i++) {

            if (_Array[i].name != _userInput) {
                fillerArray.push(_Array[i]);
                                
                }
        }

        _Array = [];

        for (let j: number = 0; j < fillerArray.length; j++) {
            _Array.push(fillerArray[j]);
        }

        return _Array;
    }
}