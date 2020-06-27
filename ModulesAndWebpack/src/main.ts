import {Ops} from "./Ops";

console.log("Welcome to the Calculator. Start entering calculations!");

while (true) {

    //input
    let userCommand: string|null = prompt("> ");

    if (userCommand == "exit") {
        break;
    }
    else {

        let left: number = 0;
        let right: number = 0;

        let opInx: number = 0;
        let opSymbol: string = "";

        if (userCommand != null) {

            if (userCommand.includes("+") || userCommand.includes("-") || userCommand.includes("/") || userCommand.includes("*") || userCommand.includes("^") || userCommand.includes("#")) {
                for (let i: number = 0; i < userCommand.length; i++) {
                    if (userCommand[i] == "+" || userCommand[i] == "-" || userCommand[i] == "/" || userCommand[i] == "*" || userCommand[i] == "^" || userCommand[i] == "#") {
                        opSymbol = userCommand[i];
                        opInx = i;
                        if (opInx < 0) {
                            console.log("No operator specified");
                        }
                        
                    }
                }
            }
        }
        
        let result: number = 0;

        switch (opSymbol) {
        case "+":
            result = Ops.Add(left, right);
            break;
        case "-":
            result = Ops.Sub(left, right);
            break;
        case "*":
            result = Ops.Mult(left, right);
            break;
        case "/":
            result = Ops.Div(left, right);
            break;
        case "^":
            result = Ops.Power(left, right);
            break;
        case "#":
            result = Ops.GreatestCommonDenominator(left, right);
            break;
        }
        console.log("Resultat: " + result);
    }


}