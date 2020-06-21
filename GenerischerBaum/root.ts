namespace GenerischerBaum {

    export class Root<T> {

        public name: T;
        public children: TreeNode<T>[];

        constructor(_name: T, _children: TreeNode<T>[]) {

            this.name = _name;
            this.children = _children;

        }

        printTree(): void {

            console.log(this.name);

            for (let i: number = 0; i < this.children.length; i++) {

                let child: TreeNode<T> = this.children[i];
                console.log("*" + child.name);
                //console.log(this.children[i].children);

                /*for (let j: number = 0; j > child.children.length; j++ ) {
                console.log("**" + child.children[j].name);
                }*/
                let j: number = 0;
                while (j < child.children.length) {

                    console.log("**" + child.children[j].name);
                    j++;
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