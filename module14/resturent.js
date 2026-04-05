const age = 45;
let discountedPrice;
const price = 500;

if (age < 12) {
  console.log("You can eat for free");
} else if (age >= 60) {
  //? murubbi manush e jonno 50% discount pabe
  const discount = (price * 50) / 100;
  discountedPrice = price - discount;
  console.log(
    "You got the discount 50%, now you have to paay : ",
    discountedPrice,
  );
} else if (age >= 50) {
  //? we are offering 25% discount for them
  const discount = (price * 25) / 100;
  discountedPrice = price - discount;
  console.log(
    "You got the discount 25%, now you have to paay : ",
    discountedPrice,
  );
} else if (age >= 40) {
  const discount = (price * 10) / 100;
  discountedPrice = price - discount;
  console.log(
    "You got the discount 10%, now you have to paay : ",
    discountedPrice,
  );
} else {
  console.log("You haver to pay the full money!");
}
