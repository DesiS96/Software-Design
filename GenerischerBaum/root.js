"use strict";
var GenerischerBaum;
(function (GenerischerBaum) {
    class AppendObserver {
        constructor(_parent, _child) {
            this.parent = _parent;
            this.child = _child;
        }
    }
    GenerischerBaum.AppendObserver = AppendObserver;
    class Root {
        constructor(_name, _children, _appendObservers) {
            this.name = _name;
            this.children = _children;
            this.appendObservers = _appendObservers;
        }
        printTree() {
            console.log(this.name);
            for (let i = 0; i < this.children.length; i++) {
                let child = this.children[i];
                console.log("*" + child.name);
                //console.log(this.children[i].children);
                for (let j = 0; j < child.children.length; j++) {
                    console.log("**" + child.children[j].name);
                }
            }
        }
        appendChild(_input) {
            this.children.push(_input);
            this.addAppendObserver(_input);
        }
        removeChild(_input) {
            let fillerArray = [];
            for (let i = 0; i < this.children.length; i++) {
                if (_input.name != this.children[i].name) {
                    //this.children.splice(i);
                    //this.children = this.children.splice(i);
                    //fillerArray.push(this.children[i]);
                    fillerArray.push(this.children[i]);
                }
            }
            console.log(fillerArray);
            this.children = [];
            for (let j = 0; j < fillerArray.length; j++) {
                this.children.push(fillerArray[j]);
            }
            console.log(fillerArray);
            console.log(this.children);
        }
        addAppendObserver(_child) {
            let observer = new AppendObserver(this, _child);
            this.appendObservers.push(observer);
        }
    }
    GenerischerBaum.Root = Root;
})(GenerischerBaum || (GenerischerBaum = {}));
//# sourceMappingURL=root.js.map