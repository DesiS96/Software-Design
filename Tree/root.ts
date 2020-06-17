namespace Tree {

    export class Root {

        name: string;
        children: string[];

        constructor(_name: string, _children: string[]) {

            this.name = _name;
            this.children = _children;
        }
    }

}