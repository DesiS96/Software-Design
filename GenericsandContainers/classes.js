"use strict";
var GenericsandContainers;
(function (GenericsandContainers) {
    class Feltpen {
        constructor(_color) {
            this.color = _color;
        }
    }
    GenericsandContainers.Feltpen = Feltpen;
    class Paper {
        constructor(_length, _wideness, _color) {
            this.length = _length;
            this.wideness = _wideness;
            this.color = _color;
        }
    }
    GenericsandContainers.Paper = Paper;
    class MyContainer {
        constructor(_objects, _size) {
            this.objects = _objects;
            this.size = _size;
        }
        Add(_o) {
            if (this.size == this.objects.length) {
                let oldArray = this.objects;
                this.objects = new Array(this.size * 2);
                for (let i = 0; i < this.size; i++) {
                    this.objects[i] = oldArray[i];
                }
            }
            this.objects[this.size] = _o;
            this.size++;
        }
        getAt(i) {
            return this.objects[i];
        }
        count() {
            return this.size;
        }
    }
    GenericsandContainers.MyContainer = MyContainer;
    class MyGeneric {
        constructor(_objects, _size) {
            this.objects = _objects;
            this.size = _size;
        }
        Add(_o) {
            if (this.size == this.objects.length) {
                let oldArray = this.objects;
                this.objects = new Array(this.size * 2);
                for (let i = 0; i < this.size; i++) {
                    this.objects[i] = oldArray[i];
                }
            }
            this.objects[this.size] = _o;
            this.size++;
        }
        getAt(i) {
            return this.objects[i];
        }
        count() {
            return this.size;
        }
    }
    GenericsandContainers.MyGeneric = MyGeneric;
})(GenericsandContainers || (GenericsandContainers = {}));
//# sourceMappingURL=classes.js.map