namespace GenerischerBaum {

    export class Tree<T> {

        public nodes: T[];

        constructor(_nodes: T[]) {

            this.nodes = _nodes;

        }
        createNode(_input: T): TreeNode<T> { 

            let node: TreeNode<T> = new TreeNode(_input, []);

            return node;
        }     
    }
}