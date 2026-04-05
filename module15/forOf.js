const numbers = [12, 98, 45, 63, 21, 72, 78, 36, 763];
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
console.log("===========Using for-of loop ========================");
for (let num of numbers) {
  console.log(num);
}

const fruits = [
  "apple",
  "mango",
  "banana",
  "guava",
  "cherry",
  "lemon",
  "litche",
];
console.log(fruits);
for (let fruit of fruits) {
  console.log(fruit);
}
