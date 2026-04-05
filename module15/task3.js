let sumOfOddNumber = 0;
let sumOfEvenNumber = 0;

for (let num = 50; num < 130; num++) {
  if (num >= 91 && num <= 129 && num % 2 != 0) {
    sumOfOddNumber += num;
  }
  if (num >= 51 && num <= 85 && num % 2 == 0) {
    sumOfEvenNumber += num;
  }
}
console.log("Summiation of odd Numbers : ", sumOfOddNumber);
console.log("Summiation of even Number is : ", sumOfEvenNumber);

let sumOfEvenNumber2 = 0;
let sumOfOddNumber2 = 0;
let num = 50;
while (num <= 129) {
  if (num >= 91 && num <= 129 && num % 2 != 0) {
    sumOfOddNumber2 += num;
  }
  if (num >= 51 && num <= 85 && num % 2 == 0) {
    sumOfEvenNumber2 += num;
  }
  num++;
}
console.log("================= with the while loop ==============");
console.log(sumOfEvenNumber2);
console.log(sumOfOddNumber2);
