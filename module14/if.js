/**
 * if you buy food for me then i will come
 * if biriyaniPrice is less then 300taka then i will buy
 *? if(condition){
 *? statement }
 *? else{
 *?   statement
 *?}
 */

if (3 < 10) {
  console.log("I have a smaller value");
} else {
  console.log("I have a larger value");
}

var biriyaniPrice = 500;
if (biriyaniPrice <= 300) {
  console.log("I will buy biriyani");
} else {
  console.log("I will not buy biriyani");
}

var weight = 20;
if (weight <= 20) {
  console.log("I will carry it by myself");
} else {
  console.log("I will take riskshaw!");
}

var money = 107;
if (money > 300) {
  console.log("I will go to cineplex!");
} else {
  console.log("I have shortage of money therefore i will do nothing!");
}
