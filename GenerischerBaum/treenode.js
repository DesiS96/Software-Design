"use strict";
var GenerischerBaum;
(function (GenerischerBaum) {
    class TreeNode extends GenerischerBaum.Root {
        constructor(_name, _children, _appendObservers, _parent) {
            super(_name, _children, _appendObservers);
            this.parent = _parent;
        }
        appendChild(_input) {
            super.appendChild(_input);
            _input.parent = this.name;
        }
        removeChild(_input) {
            super.removeChild(_input);
            /*for (let i: number = 0; i < this.children.length; i++) {

                if (_input.name === this.children[i].name) {
                    this.children.splice(i);
                }
            }*/
        }
        addAppendObserver(_child) {
            super.addAppendObserver(_child);
            /*let observer: AppendObserver<T> = new AppendObserver<T>(this, _child);
            this.appendObservers.push(observer);*/
        }
    }
    GenerischerBaum.TreeNode = TreeNode;
})(GenerischerBaum || (GenerischerBaum = {}));
//# sourceMappingURL=treenode.js.map