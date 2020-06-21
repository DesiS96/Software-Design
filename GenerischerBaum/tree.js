"use strict";
var GenerischerBaum;
(function (GenerischerBaum) {
    class Tree {
        constructor(_nodes) {
            this.nodes = _nodes;
        }
        createNode(_input) {
            let node = new GenerischerBaum.TreeNode(_input, []);
            this.nodes.push(node);
            return node;
        }
    }
    GenerischerBaum.Tree = Tree;
})(GenerischerBaum || (GenerischerBaum = {}));
//# sourceMappingURL=tree.js.map