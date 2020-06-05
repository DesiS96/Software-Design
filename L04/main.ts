namespace l04 {
    
    console.log("Dies ist eine Log-Ausgabe");
    console.error("Fehler!");
    console.info("Dies ist eine Info-Ausgabe");
    console.warn("Das ist eine Warnung!");

    window.alert("Hi");

    let x: number = 0;

    console.log(x);

    function add(): void {

        for (let i: number = 0; i < 5; i++) {

            x = x + 1;

        }

    }

    add();

    console.log(x);

}