namespace l03 {

    let test: number[] = [1, 2, 3, 4, 5];
    let teststr: string[] = ["eins", "zwei", "drei"];
    enum Color {Red, Green, Blue}

    class Greeter {
        greeting: string;
        constructor(message: string) {
            this.greeting = message;
        }
        greet(): string {
            return "Hello, " + this.greeting;
        }
    }
    
    let greeter: Greeter = new Greeter("world");

    console.log(greeter);

    test.toString();
    teststr.toString();
    Color.toString();
    greeter.toString();

    console.log(test);
    console.log(teststr);
    console.log(Color);
    console.log(greeter);

    class Person {

        public firstname: string;
        public lastname: string;
        public age: number;

        constructor(firstname: string, lastname: string, age: number){

            this.firstname = firstname;
            this.lastname = lastname;
            this.age = age;
        //public override string ToString() { /* TODO */ }

    }




}

}