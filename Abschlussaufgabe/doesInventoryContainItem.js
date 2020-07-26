"use strict";
//import { Item } from "./Item";
var Abschlussarbeit;
//import { Item } from "./Item";
(function (Abschlussarbeit) {
    function doesInventoryContainItem(_itemArray, _itemName) {
        let containsItem = true;
        for (let i; i < _itemArray.length; i++) {
            if (i == _itemArray.length && _itemArray[i].name != _itemName) {
                containsItem = false;
            }
        }
        return containsItem;
    }
    Abschlussarbeit.doesInventoryContainItem = doesInventoryContainItem;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=doesInventoryContainItem.js.map