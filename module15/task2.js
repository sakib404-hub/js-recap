const evenArr = [];
const oddArr = [];

for (let i = 0; i <= 100; i++) {
  if (i > 60 && i <= 100 && i % 2 != 0) {
    oddArr.push(i);
  }
  if (i >= 78 && i <= 98 && i % 2 == 0) {
    evenArr.push(i);
  }
}
console.log(evenArr);
console.log(oddArr);

let i = 0;
let evenArr2 = [];
let oddArr2 = [];
while (i <= 100) {
  if (i > 60 && i <= 100 && i % 2 != 0) {
    oddArr2.push(i);
  }
  if (i >= 78 && i <= 98 && i % 2 == 0) {
    evenArr2.push(i);
  }
  i++;
}
console.log("========================= with the while loop================");
console.log(evenArr2);
console.log(oddArr2);
