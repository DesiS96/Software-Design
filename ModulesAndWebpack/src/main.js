System.register(["./Ops"], function (exports_1, context_1) {
    "use strict";
    var Ops_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Ops_1_1) {
                Ops_1 = Ops_1_1;
            }
        ],
        execute: function () {
            console.log("Welcome to the Calculator. Start entering calculations!");
            while (true) {
                //input
                let userCommand = prompt("> ");
                if (userCommand == "exit") {
                    break;
                }
                else {
                    let left = 0;
                    let right = 0;
                    let opInx = 0;
                    let opSymbol = "";
                    if (userCommand != null) {
                        if (userCommand.includes("+") || userCommand.includes("-") || userCommand.includes("/") || userCommand.includes("*") || userCommand.includes("^") || userCommand.includes("#")) {
                            for (let i = 0; i < userCommand.length; i++) {
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
                    let result = 0;
                    switch (opSymbol) {
                        case "+":
                            result = Ops_1.Ops.Add(left, right);
                            break;
                        case "-":
                            result = Ops_1.Ops.Sub(left, right);
                            break;
                        case "*":
                            result = Ops_1.Ops.Mult(left, right);
                            break;
                        case "/":
                            result = Ops_1.Ops.Div(left, right);
                            break;
                        case "^":
                            result = Ops_1.Ops.Power(left, right);
                            break;
                        case "#":
                            result = Ops_1.Ops.GreatestCommonDenominator(left, right);
                            break;
                    }
                    console.log("Resultat: " + result);
                }
            }
        }
    };
});
//# sourceMappingURL=main.js.map