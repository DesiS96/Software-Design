let i: number = 42;
let pi: number = 3.1415;
let salute: string = "Hello,World";

var i2 = 42;
var pi2 = 3.1415;
var salute2 = "Hello,World";

console.log("Zahlen mit Typen");
console.log(i, pi, salute);

console.log("Zahlen ohne Typen");
console.log(i2, pi2, salute2);

let ia = new Array<number>(10);
//let ca = new Array<string>(30);

ia[0] = 1;
ia[1] = 0;
ia[2] = 2;
ia[3] = 9;
ia[4] = 3;
ia[5] = 8;
ia[6] = 4;
ia[7] = 7;
ia[8] = 5;
ia[9] = 6;

console.log(ia[2] * ia[8] * ia[4]);

let n: number[] = [3.14, 2.718, 2.97 * Math.pow(10, -19)];

console.log(n.length);

let a: string = "eins";
let b: string = "zwei";
let c: string = "eins";
let d: boolean = (a == b);
let e: boolean = (a == c);
let meinString: string = "Dies ist ein String";
let zeichen: string = meinString[5];

console.log(a, b, c, d, e, meinString, zeichen);

if (e == true) {

    console.log("a hat den gleichen Wert wie c");

}
else {

    console.log("a hat nicht den gleichen Wert wie c");

}

let x: number = 3;
let y: number = 3;
let z: number = 4;

if (x > 3 && y == 6) {

    console.log("Du hast gewonnen");

}
else {

    console.log("Leider verloren");

}

let g: number = 1;

while (g < 11) {

    console.log(g);
    g++;

}

let someStrings: string[] = ["Hier", "sehen", "wir", "einen", "Array", "von", "Strings"];
  
let t: number = 0;

while (true) {
    console.log(someStrings[t]);
    if (t >= someStrings.length)
      break;
    t++;
  }

/*do {
    console.log(someStrings[t]);
    t++;
  }
  while (t < someStrings.length);*/

/*while (t < someStrings.length) {

console.log(someStrings[t]);
t++;

}*/



let j: number = Number(window.prompt("Gib eine Zahl ein", ""));

if (j == 1) {
      console.log("Du hast EINS eingegeben");

    } else if (j == 2) {
        console.log("ZWEI war Deine Wahl");

    } else if (j == 3) {
      console.log("Du tipptest eine DREI");

    } else if (j == 4) {
      console.log("VIER gewinnt!");
     
    } else {
      console.log("Die Zahl " + j + " kenne ich nicht");

    }

/*switch (j) {
    case "Nord":
       console.log("Du hast NORD eingegeben");
       break;
    case "Ost":
       console.log("OST war Deine Wahl");
       break;
    case "Sued":
       console.log("Du tipptest SUED");
       break;
    case "West":
       console.log("WEST!");
       break;   
    default:
       console.log("Die Richtung " + j + " kenne ich nicht");
       break;
 }*/


