namespace GenerischerBaum {

    export class Root<T> {

        protected name: T;
        protected children: TreeNode<T>[];

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
    }
}