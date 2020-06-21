"use strict";
var GenerischerBaum;
(function (GenerischerBaum) {
    class Root {
        constructor(_name, _children) {
            this.name = _name;
            this.children = _children;
        }
        printTree() {
            console.log(this.name);
            for (let i = 0; i < this.children.length; i++) {
                let child = this.children[i];
                console.log("*" + child.name);
                //console.log(this.children[i].children);
                /*for (let j: number = 0; j > child.children.length; j++ ) {
                console.log("**" + child.children[j].name);
                }*/
                let j = 0;
                while (j < child.children.length) {
                    console.log("**" + child.children[j].name);
                    j++;
                }
            }
        }
        appendChild(_input) {
            this.children.push(_input);
        }
        removeChild(_input) {
            for (let i = 0; i < this.children.length; i++) {
                if (_input.name === this.children[i].name) {
                    this.children.splice(i);
                }
            }
        }
    }
    GenerischerBaum.Root = Root;
})(GenerischerBaum || (GenerischerBaum = {}));
//# sourceMappingURL=root.js.map