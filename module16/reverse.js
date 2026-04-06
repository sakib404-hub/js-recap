/**
 * ? reverse --> concating string latter before reverse for revering the string
 * ? reverse ---> through for loop with array index method
 * ? reverse() --> Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
 */

const sentense = "I am currently recaping js";
console.log(sentense);

let reverse = "";
for (let letter of sentense) {
  reverse = letter + reverse;
}
console.log(reverse);

reverse = "";
for (let i = 0; i < sentense.length; i++) {
  reverse = sentense[i] + reverse;
}

const splited = sentense.split("");
console.log(splited);
const splitedReversed = splited.reverse();
console.log(splitedReversed);
const splitedReverseString = splitedReversed.join("");
console.log(splitedReverseString);
