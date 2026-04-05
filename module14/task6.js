const ticketPrice = 800;
const age = 17;
const isStudent = false;
let disCoutedrice;

if (age < 10) {
  //? umder age 10 is children therefore they will travel for free
  disCoutedrice = 0;
} else if (isStudent && age < 60) {
  //? student will gate 50% discount
  const discount = (ticketPrice * 50) / 100;
  disCoutedrice = ticketPrice - discount;
} else if (age >= 60) {
  //? senior citizen will get 15% discount
  const discount = (ticketPrice * 15) / 100;
  disCoutedrice = ticketPrice - disCoutedrice;
} else {
  //? otherwise there will be no discount
  disCoutedrice = ticketPrice;
}
console.log(disCoutedrice);
