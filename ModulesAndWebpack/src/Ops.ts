export class Ops {
    public static Power(a: number, exp: number): number {
        let result: number = 1;

        for (let i: number = 0; i < exp; i++) {
            result *= a;
        }
        return result;
    }

    public static GreatestCommonDenominator(a: number, b: number): number {
        if (a < b) {
            let tmp: number = a; 
            a = b; 
            b = tmp;
        }
        while (b > 0) {
            let c: number = a % b; 
            a = b; 
            b = c;
        }
        return a;
    }
    public static Add(a: number, b: number): number {
        let result: number = a + b;
        return result;
    }
    public static Sub(a: number, b: number): number {
        let result: number = a - b;
        return result;
    }
    public static Mult(a: number, b: number): number {
        let result: number = a * b;
        return result;
    }
    public static Div(a: number, b: number): number {
        let result: number = a / b;
        return result;
    }
}