"use strict";
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    function doesInventoryContainItem(_itemArray, _itemName) {
        let containsItem = true;
        for (let i; i < _itemArray.length; i++) {
            if (i == _itemArray.length && _itemArray[i].name != _itemName) {
                containsItem = false;
            }
        }
        return containsItem;
    }
    Abschlussaufgabe.doesInventoryContainItem = doesInventoryContainItem;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=doesInventoryContainItem.js.map