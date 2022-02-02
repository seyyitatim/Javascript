// Types

let a: number = 5;
let b: string = "abc";
let c: boolean = false;
let d: any;
let e: number[] = [1, 2, 3];
let f: Array<string> = ["a", "b", "c"];
let g: any[] = ["a", 1, true];
let h: [string, number, boolean] = ["a", 1, false]; //tuple

const krediPayment = 0;
const havalePayment = 1;
const eftPayment = 2;

enum Payment {
    kredi = 0,
    havale = 5,
    eft=2,
    kapidaOdeme
}

let kredi = Payment.kredi;