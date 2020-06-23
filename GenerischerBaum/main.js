var GenerischerBaum;
(function (GenerischerBaum) {
<<<<<<< HEAD
    //let nodes: string[] = [];
    var tree = new Tree([]);
    var root = tree.createNode("root");
    var child1 = tree.createNode("child1");
    console.log(child1);
    var child2 = tree.createNode("child2");
    //let node = new TreeNode<string>("node", []);
=======
    let tree = new GenerischerBaum.Tree([]);
    let root = tree.createNode("root");
    let child1 = tree.createNode("child1");
    console.log(child1);
    let child2 = tree.createNode("child2");
>>>>>>> 66b703c1635574bb9c2e38b8f1785acae236ae28
    root.appendChild(child1);
    root.appendChild(child2);
    var grand11 = tree.createNode("grand11");
    var grand12 = tree.createNode("grand12");
    var grand13 = tree.createNode("grand13");
    child1.appendChild(grand11);
    child1.appendChild(grand12);
    child1.appendChild(grand13);
    var grand21 = tree.createNode("grand21");
    child2.appendChild(grand21);
    console.log(child2.children);
    child1.removeChild(grand12);
    console.log(child1.children);
    console.log(root.children);
    console.log(tree);
    root.printTree();
    let list = tree.search("child");
    console.log(list);
})(GenerischerBaum || (GenerischerBaum = {}));
