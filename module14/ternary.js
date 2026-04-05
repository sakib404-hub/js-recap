/**
 * ? ternary means three parts
 * ? condition ? condition true hole : condition false hoile
 * ? condition ? do something when true : do something when false!
 */

//? normal if else
const age = 8;
if (age > 18) {
  console.log("You can vote");
} else {
  console.log("Tumi baccha manush, ghumai thako!");
}

//? simple ternary
age > 18
  ? console.log("You can vote")
  : console.log("Tumi baccha manush, ghumai thako!");

const price = 1000;
let discountedPrice;
let isLeader = false;

if (isLeader === true) {
  discountedPrice = 0;
} else {
  discountedPrice = price + 100;
}
console.log(discountedPrice);

let newPrice = isLeader === true ? 0 : price + 100;
console.log(newPrice);

isLeader = true;
if (isLeader === true) {
  if (price >= 1000) {
    newPrice = price / 2;
  } else {
    newPrice = 0;
  }
} else {
  newPrice = price;
}
console.log(newPrice);

newPrice = isLeader === true ? (price >= 1000 ? price / 2 : 0) : price + 100;
console.log(newPrice);
