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

        constructor(firstname: string, lastname: string, age: number) {
            
            this.firstname = firstname;
            this.lastname = lastname;
            this.age = age;

        }

        //public override string ToString() { /* TODO */ }

        toString(): string {

            return this.firstname + " " + this.lastname + " " + this.age;

        }
    }

    let alice: Person = new Person("Alice", "Doe", 22);

    console.log(alice.toString());

    

    /*function getPerson(firstname: string, lastname: string, age: number): Person {

        let name: Person = new Person(firstname, lastname, age);

        return name;

    }

    let heather = getPerson("Heather", "Mason", 16);*/
    
    let piet: Person = new Person("Piet", "Miller", 33);
    let rene: Person = new Person("Rene", "Jackson", 24);
    let tom: Person = new Person("Tom", "Schmitt", 18);
    let yuki: Person = new Person("Yuki", "Miyazaki", 45);
    let caroline: Person = new Person("Caroline", "Amber", 12);

    let arr: Person[] = [piet, rene, tom, yuki, caroline];
   
    for (let i: number = 0; i < arr.length; i++) {

        if (arr[i].age >= 20) {

            console.log(arr[i].toString());
        }
        else {

            console.log("Person ist unter 20");
        }


    }

    function getAgeGap(i: Person, j: Person): number {

        if (i.age < j.age) {

            let gap: number = j.age - i.age;

            return gap;

        }
        else {

            let gap: number = i.age - j.age;
            return gap;
        }
    }

    function compareAge(i: Person, j: Person): string {

        if (i.age == j.age) {

            return i.firstname + " ist genauso alt wie " + j.firstname + ".";
        }
        else {

            let gap: number = getAgeGap(i, j);
            return i.firstname + " und " + j.firstname + " haben einen Altersunterschied von " + gap + " Jahren."; 
        }
    }

    console.log(compareAge(piet, caroline));





}

