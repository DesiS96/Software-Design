namespace GenericsandContainers {

    export class Feltpen {

        public color: string;

        constructor(_color: string) {
            this.color = _color;

        }    
    }
    export class Paper {

        public length: number;
        public wideness: number;
        public color: string;

        constructor(_length: number, _wideness: number, _color: string) {
            this.length = _length;
            this.wideness = _wideness;
            this.color = _color;
        }
    }
    export class MyContainer {

        protected objects: Object[];
        protected size: number;

        constructor(_objects: Object[], _size: number) {

            this.objects = _objects;
            this.size = _size;
        }

        public Add(_o: Object): void {

            if (this.size == this.objects.length) {

                let oldArray: Object[] = this.objects;
                this.objects = new Array(this.size * 2);

                for (let i: number = 0; i < this.size; i++) {
                    this.objects[i] = oldArray[i];
                }
            }
            this.objects[this.size] = _o;
            this.size++;
        }
        public getAt(i: number): Object {
            return this.objects[i];
        }
        public count(): number {
            return this.size;
        } 
    }

    export class MyGeneric<T> {

        protected objects: T[];
        protected size: number;

        constructor(_objects: T[], _size: number) {

            this.objects = _objects;
            this.size = _size;
        }

        public Add(_o: T): void {

            if (this.size == this.objects.length) {

                let oldArray: T[] = this.objects;
                this.objects = new Array(this.size * 2);

                for (let i: number = 0; i < this.size; i++) {
                    this.objects[i] = oldArray[i];
                }
            }
            this.objects[this.size] = _o;
            this.size++;
        }
        public getAt(i: number): T {
            return this.objects[i];
        }
        public count(): number {
            return this.size;
        } 
    }
}