"use strict";
var GenerischerBaum;
(function (GenerischerBaum) {
    class Tree {
        constructor(_nodes) {
            this.nodes = _nodes;
        }
        createNode(_input) {
            let node = new GenerischerBaum.TreeNode(_input, []);
            this.nodes.push(_input);
            return node;
        }
        search(_input) {
            let list = [];
            if (typeof (_input) === typeof (String())) {
                //if (_input.toString() == "child") {
                for (let i = 0; i < this.nodes.length; i++) {
                    if (this.nodes[i].toString().includes(_input.toString())) {
                        list.push(this.nodes[i]);
                    }
                }
                //}
            }
            else {
                for (let i; i < this.nodes.length; i++) {
                    if (_input == this.nodes[i]) {
                        list.push(this.nodes[i]);
                    }
                }
            }
            return list;
        }
    }
    GenerischerBaum.Tree = Tree;
})(GenerischerBaum || (GenerischerBaum = {}));
//# sourceMappingURL=tree.js.map