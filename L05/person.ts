namespace L05 {
    export class Person {

        public name: string;
        public age: number;
    
        constructor(_name: string, _age: number) {
    
            this.name = _name;
            this.age = _age;
    
        }
    
        public getTitleAdress(): string {
    
            if (this.age < 18)
                return "Hi " + this.name;
            
            else 
                return "Sehr geehrte(r) " + this.name;
    
        }
    
    }
}


