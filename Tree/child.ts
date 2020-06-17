namespace Tree {

    export class Child extends Root {

        type: string = "*";
        childOf: string;
        children: string[]; //T

        constructor(_name: string, _childOf: string, _children: string[]) {

            super(_name, _children);
        }
        makeChildOf(_branchName: string, _branchChildren: string[]): void {

            this.childOf = _branchName;
            _branchChildren.push(this.name);

        }
    }




}