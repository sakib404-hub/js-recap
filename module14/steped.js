const price = 5670;
let discountedPrice;

if (price >= 5000) {
  //?then we are offering 10% discount
  const discount = (price * 10) / 100;
  discountedPrice = price - discount;
  console.log("Paying amount after  the discount : ", discountedPrice);
} else if (price >= 3000) {
  //? therefore we will be offering 5% discount
  const discount = (price * 5) / 100;
  discountedPrice = price - discount;
  console.log("Paying amount after  the discount : ", discountedPrice);
} else {
  console.log("You have got no discount , your paying amount is : ", price);
}
