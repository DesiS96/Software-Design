"use strict";
var Tree;
(function (Tree) {
    class Root {
        constructor(_name, _children) {
            this.name = _name;
            this.children = _children;
        }
    }
    Tree.Root = Root;
})(Tree || (Tree = {}));
//# sourceMappingURL=root.js.map