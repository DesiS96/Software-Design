namespace GenerischerBaum {

    export class Root<T> {

        public name: T;
        public children: TreeNode<T>[];

        constructor(_name: T, _children: TreeNode<T>[]) {

            this.name = _name;
            this.children = _children;

        }

        printTree(): void {

            for (let i: number; i < this.children.length; i++) {

                console.log(this.name);
                console.log("*" + this.children[i].name);

                for (let j: number; j > this.children[i].children.length; j++ ) {
                console.log("**" + this.children[i].children[j].name);

                }
            }
        }
        appendChild(_input: TreeNode<T>): void {

            this.children.push(_input);
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