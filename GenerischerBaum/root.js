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