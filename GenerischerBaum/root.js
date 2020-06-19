"use strict";
var GenerischerBaum;
(function (GenerischerBaum) {
    class Root {
        constructor(_name, _children) {
            this.name = _name;
            this.children = _children;
        }
        printTree() {
            for (let i; i < this.children.length; i++) {
                console.log(this.name);
                console.log("*" + this.children[i].name);
                for (let j; j > this.children[i].children.length; j++) {
                    console.log("**" + this.children[i].children[j].name);
                }
            }
        }
    }
    GenerischerBaum.Root = Root;
})(GenerischerBaum || (GenerischerBaum = {}));
//# sourceMappingURL=root.js.map