namespace GenerischerBaum {

    //let nodes: string[] = [];

    let tree: Tree<string> = new Tree([]);
    let root: Root<string> = tree.createNode("root");
    let child1: TreeNode<string> = tree.createNode("child1");
    console.log(child1);
    let child2: TreeNode<string> = tree.createNode("child2");

    //let node = new TreeNode<string>("node", []);
    root.appendChild(child1);
    root.appendChild(child2);

    let grand11: TreeNode<string> = tree.createNode("grand11");
    let grand12: TreeNode<string> = tree.createNode("grand12");
    let grand13: TreeNode<string> = tree.createNode("grand13");

    child1.appendChild(grand11);
    child1.appendChild(grand12);
    child1.appendChild(grand13);

    let grand21: TreeNode<string> = tree.createNode("grand21");

    child2.appendChild(grand21);
    console.log(child2.children);
    child1.removeChild(grand12);

    root.printTree();
}