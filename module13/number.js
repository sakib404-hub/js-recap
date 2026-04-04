var orengePrice = 20;
var chocolatePrice = 0.5;
var applePrice = "26";
applePrice = Number(applePrice); //? converting string number to Number number

//? converting into number using parseInt and parseFloat

var applePrice2 = parseInt(applePrice);
applePrice = 89.4;
var applePrice3 = parseFloat(applePrice);
console.log(applePrice2);
console.log(applePrice3);

console.log(typeof chocolatePrice, typeof applePrice);
console.log(orengePrice + chocolatePrice + applePrice);
console.log(20 + Number("20"));
console.log(20 + 10 + Number("30"));

var first = 0.1;
var second = 0.2;
var total = first + second;
console.log(
  "Summiation of first and the second Number : ",
  parseFloat(total.toFixed(2)),
); //? this is one of the special case

var number = 50 / 0;
console.log(number);
number = -1 / 0;
console.log(number);
