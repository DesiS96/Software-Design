namespace GenerischerBaum {

    export class Tree<T> {

        public nodes: T[];

        constructor(_nodes: T[]) {

            this.nodes = _nodes;

        }
        createNode(_input: T): TreeNode<T> { 

            let node: TreeNode<T> = new TreeNode(_input, [], []);
            this.nodes.push(_input);

            return node;
        }
        search(_input: T): T[] {

            let list: T[] = [];

            if (typeof(_input) === typeof(String())) {

                    for (let i: number = 0; i < this.nodes.length; i++) {

                        if (this.nodes[i].toString().includes(_input.toString())) {

                            list.push(this.nodes[i]);
                        }
                    }
            }
            else {

                for (let i: number; i < this.nodes.length; i++) {

                    if (_input == this.nodes[i]) {

                        list.push(this.nodes[i]);
                    }
                }
            }
            return list;
        }

        /**aGenerator(_treeNode: T): T {


            for (_treeNode of this.nodes) {

                return _treeNode;

            }
            //

        }*/

    }
}