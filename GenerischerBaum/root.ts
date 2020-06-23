namespace GenerischerBaum {

    export class AppendObserver<T> { 

        public parent: Root<T>;
        public child: TreeNode<T>;

        constructor(_parent: Root<T>, _child: TreeNode<T>) {

            this.parent = _parent;
            this.child = _child;

        }
    }

    export class Root<T> {

        public name: T;
        public children: TreeNode<T>[];
        public appendObservers: AppendObserver<T>[];

        constructor(_name: T, _children: TreeNode<T>[], _appendObservers: AppendObserver<T>[]) {

            this.name = _name;
            this.children = _children;
            this.appendObservers = _appendObservers;

        }

        printTree(): void {

            console.log(this.name);

            for (let i: number = 0; i < this.children.length; i++) {

                let child: TreeNode<T> = this.children[i];
                console.log("*" + child.name);
                //console.log(this.children[i].children);

                for (let j: number = 0; j < child.children.length; j++ ) {
                console.log("**" + child.children[j].name);
                }
            }
        }
        appendChild(_input: TreeNode<T>): void {

            this.children.push(_input);
            this.addAppendObserver(_input);
        }
        removeChild(_input: TreeNode<T>): void {

            let fillerArray: TreeNode<T>[] = [];

            for (let i: number = 0; i < this.children.length; i++) {

                if (_input.name != this.children[i].name) {
                    //this.children.splice(i);
                    //this.children = this.children.splice(i);
                    //fillerArray.push(this.children[i]);
                    fillerArray.push(this.children[i]);
                }
            }
            console.log(fillerArray);

            this.children = [];

            for (let j: number = 0; j < fillerArray.length; j++) {

                this.children.push(fillerArray[j]);
            }
            console.log(fillerArray);
            console.log(this.children);
        }
        addAppendObserver(_child: TreeNode<T>): void {

            let observer: AppendObserver<T> = new AppendObserver<T>(this, _child);
            this.appendObservers.push(observer);

        }
    }
}