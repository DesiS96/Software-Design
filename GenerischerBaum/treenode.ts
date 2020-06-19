namespace GenerischerBaum {

    export class TreeNode<T> extends Root<T> {
      
        protected parent: T;

        constructor(_name: T, _children: TreeNode<T>[], _parent?: T) {

            super(_name, _children);
            this.parent = _parent;
        }

        appendChild(_input: TreeNode<T>): void {

            this.children.push(_input);
            _input.parent = this.name;
        }

        removeChild(_input: TreeNode<T>): void {

            for (let i: number = 0; i < this.children.length; i++) {

                if (_input.name === this.children[i].name) {
                    this.children.splice(i);
                }
            }
        }      
    }
}