namespace Abschlussaufgabe{

    export function removeCharacterFromRoom(_Array: Array<IntelligentNPC|RegularNPC>, _userInput: string): Array<IntelligentNPC|RegularNPC> {

        let fillerArray: Array<IntelligentNPC|RegularNPC> = [];

        for (let i: number; i < _Array.length; i++) {

            if (_Array[i].name != _userInput) {
                fillerArray.push(_Array[i]);
                                
                }
        }

        _Array = [];

        for (let j: number; j < fillerArray.length; j++) {
            _Array.push(fillerArray[j]);
        }

        return _Array;
    }
}