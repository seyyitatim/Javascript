// Types
var a = 5;
var b = "abc";
var c = false;
var d;
var e = [1, 2, 3];
var f = ["a", "b", "c"];
var g = ["a", 1, true];
var h = ["a", 1, false]; //tuple
var krediPayment = 0;
var havalePayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["havale"] = 5] = "havale";
    Payment[Payment["eft"] = 2] = "eft";
    Payment[Payment["kapidaOdeme"] = 3] = "kapidaOdeme";
})(Payment || (Payment = {}));
var kredi = Payment.kredi;
