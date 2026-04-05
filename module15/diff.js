//? odd numbers
for (let i = 0; i < 20; i++) {
  if (i % 2 === 1) {
    // console.log("odd Number : ", i);
  }
}

for (let i = 1; i < 20; i += 2) {
  console.log(i);
}
console.log("==============devisable by 3=============");

let num = 1;
while (num < 46) {
  if (num % 3 === 0 || num % 5 === 0) {
    console.log("Number that are totally devisabel by 3 or 5 is : ", num);
  }
  num++;
}

num = 1;
while (num < 100) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("Number that are totally devisabel by 3 and 5 is : ", num);
  }
  num++;
}
