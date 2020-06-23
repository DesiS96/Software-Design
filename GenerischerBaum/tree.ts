namespace GenerischerBaum {

    //export type AppendObserver<T> = (_parent: TreeNode<T>, _child: TreeNode<T>) => void;
    export class Tree<T> {

        public nodes: T[];
        //public appendObservers: Array<AppendObserver<T>>;

        constructor(_nodes: T[]/*, _appendObservers: Array<AppendObserver<T>*/) {

            this.nodes = _nodes;
            //this.appendObservers = _appendObservers;

        }
        createNode(_input: T): TreeNode<T> { 

            let node: TreeNode<T> = new TreeNode(_input, []);
            this.nodes.push(_input);

            return node;
        }
        search(_input: T): T[] {

            let list: T[] = [];

            if (typeof(_input) === typeof(String())) {

                //if (_input.toString() == "child") {

                    for (let i: number = 0; i < this.nodes.length; i++) {

                        if (this.nodes[i].toString().includes(_input.toString())) {

                            list.push(this.nodes[i]);
                        }
                    }
                //}
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
    }
}