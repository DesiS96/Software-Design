System.register([], function (exports_1, context_1) {
    "use strict";
    var Ops;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Ops = class Ops {
                static Power(a, exp) {
                    let result = 1;
                    for (let i = 0; i < exp; i++) {
                        result *= a;
                    }
                    return result;
                }
                static GreatestCommonDenominator(a, b) {
                    if (a < b) {
                        let tmp = a;
                        a = b;
                        b = tmp;
                    }
                    while (b > 0) {
                        let c = a % b;
                        a = b;
                        b = c;
                    }
                    return a;
                }
                static Add(a, b) {
                    let result = a + b;
                    return result;
                }
                static Sub(a, b) {
                    let result = a - b;
                    return result;
                }
                static Mult(a, b) {
                    let result = a * b;
                    return result;
                }
                static Div(a, b) {
                    let result = a / b;
                    return result;
                }
            };
            exports_1("Ops", Ops);
        }
    };
});
//# sourceMappingURL=Ops.js.map