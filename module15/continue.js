/**
 *
 * ? continue ---> skiping the current iteration
 * ? break --> the loop is done with the iteration
 */

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

let number = 0;
while (number < 50) {
  if (number % 5 !== 0) {
    number++;
    continue;
  }
  console.log(number);
  number++;
}
