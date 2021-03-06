"use strict";
var GenerischerBaum;
(function (GenerischerBaum) {
    let tree = new GenerischerBaum.Tree([]);
    let root = tree.createNode("root");
    let child1 = tree.createNode("child1");
    console.log(child1);
    let child2 = tree.createNode("child2");
    root.appendChild(child1);
    root.appendChild(child2);
    let grand11 = tree.createNode("grand11");
    let grand12 = tree.createNode("grand12");
    let grand13 = tree.createNode("grand13");
    child1.appendChild(grand11);
    child1.appendChild(grand12);
    child1.appendChild(grand13);
    let grand21 = tree.createNode("grand21");
    child2.appendChild(grand21);
    console.log(child2.children);
    child1.removeChild(grand12);
    console.log(child1.children);
    console.log(root.children);
    console.log(tree);
    root.printTree();
    let list = tree.search("child");
    console.log(list);
    console.log(child1.appendObservers);
})(GenerischerBaum || (GenerischerBaum = {}));
//# sourceMappingURL=main.js.map