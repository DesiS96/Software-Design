namespace GenerischerBaum {

    export class TreeNode<T> extends Root<T> {
      
        //private appendObserver: Tree<T>;
        public parent: T;
       

        constructor(_name: T, _children: TreeNode<T>[], _parent?: T/*, _appendObserver: Tree<T>*/) {

            super(_name, _children);
            this.parent = _parent;
        }

        appendChild(_input: TreeNode<T>): void {

            super.appendChild(_input);
            _input.parent = this.name;
        }

        removeChild(_input: TreeNode<T>): void {

            super.removeChild(_input);
            /*for (let i: number = 0; i < this.children.length; i++) {

                if (_input.name === this.children[i].name) {
                    this.children.splice(i);
                }
            }*/
        }      
    }
}