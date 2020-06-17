"use strict";
var Tree;
(function (Tree) {
    class Child extends Tree.Root {
        constructor(_name, _childOf, _children) {
            super(_name, _children);
            this.type = "*";
        }
        makeChildOf(_branchName, _branchChildren) {
            this.childOf = _branchName;
            _branchChildren.push(this.name);
        }
    }
    Tree.Child = Child;
})(Tree || (Tree = {}));
//# sourceMappingURL=child.js.map