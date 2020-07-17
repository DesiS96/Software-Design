namespace Abschlussaufgabe {

    export function doesArrayContain(_itemArray: Item[], _itemName: string): boolean {

        let containsItem: boolean = true;

        for (let i: number; i < _itemArray.length; i++) {

            if (i == _itemArray.length && _itemArray[i].name != _itemName) {
                containsItem = false;
            }
        }
        return containsItem;

    }

}