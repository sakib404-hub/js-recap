/**
 * ? trim() --> Removes the leading and trailing white space and line terminator characters from a string.
 * ? trimEnd() ---> Removes the trailing white space and line terminator characters from a string.
 * ? trimStart() --> Removes the leading white space and line terminator characters from a string.
 */

const drik = "  water  ";
const liquid = "water";

const result =
  drik.trim() === liquid
    ? "Pani er opor nam life"
    : "somudre pani ache khaite pari na";
console.log(result);

console.log(drik);
console.log(drik.trim());
console.log(drik.trimEnd());
console.log(drik.trimStart());
