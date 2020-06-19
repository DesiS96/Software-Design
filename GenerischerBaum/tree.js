"use strict";
var GenerischerBaum;
(function (GenerischerBaum) {
    class Tree {
        constructor(_nodes) {
            this.nodes = _nodes;
        }
        createNode(_input) {
            let node = new GenerischerBaum.TreeNode(_input, []);
            return node;
        }
    }
    GenerischerBaum.Tree = Tree;
})(GenerischerBaum || (GenerischerBaum = {}));
//# sourceMappingURL=tree.js.map