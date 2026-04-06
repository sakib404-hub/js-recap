function hello() {
  console.log("I am a function!");
}
hello(); //? calling the function with function name and a parenthesis [functionName()]

function moneyBag() {
  console.log("I have no money right now!");
}

moneyBag();

function jogKorarMachine(a, b) {
  const sum = a + b;
  console.log("Summiation of the two number is : ", sum);
}
jogKorarMachine(9, 8);
jogKorarMachine(67, 5);

function addSum(x, y) {
  return x + y;
}
const result = addSum(76, 5);
console.log("Addition of the two number is L: ", result);
