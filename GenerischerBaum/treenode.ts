namespace GenerischerBaum {

    export class TreeNode<T> extends Root<T> {
      
        public parent: T;
       
        constructor(_name: T, _children: TreeNode<T>[], _appendObservers: AppendObserver<T>[], _parent?: T) {

            super(_name, _children, _appendObservers);
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
        addAppendObserver(_child: TreeNode<T>): void {

            super.addAppendObserver(_child);
            /*let observer: AppendObserver<T> = new AppendObserver<T>(this, _child);
            this.appendObservers.push(observer);*/

        }      
    }
}