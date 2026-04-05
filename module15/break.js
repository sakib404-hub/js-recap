for (let i = 0; i < 15; i++) {
  console.log(i);
  if (i >= 10) {
    break;
  }
}
console.log("life after break-up!");

let number = 54;
while (number > 25) {
  if (number < 49) {
    break;
  }
  console.log(number);
  number--;
}
