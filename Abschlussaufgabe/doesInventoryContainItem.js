System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function doesInventoryContainItem(_itemArray, _itemName) {
        let containsItem = true;
        for (let i; i < _itemArray.length; i++) {
            if (i == _itemArray.length && _itemArray[i].name != _itemName) {
                containsItem = false;
            }
        }
        return containsItem;
    }
    exports_1("doesInventoryContainItem", doesInventoryContainItem);
    return {
        setters: [],
        execute: function () {
        }
    };
});
//# sourceMappingURL=doesInventoryContainItem.js.map