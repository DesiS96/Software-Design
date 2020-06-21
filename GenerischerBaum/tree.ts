namespace GenerischerBaum {

    export class Tree<T> {

        public nodes: TreeNode<T>[];

        constructor(_nodes: TreeNode<T>[]) {

            this.nodes = _nodes;

        }
        createNode(_input: T): TreeNode<T> { 

            let node: TreeNode<T> = new TreeNode(_input, []);
            this.nodes.push(node);

            return node;
        }
        /*search(_input: T): T[] {

            //Inhalt
            let list: T[] = [];
            let subtringOne: string = "child";
            let substringTwo: string = "grand";

            if(_input == )


        }*/    
    }
}