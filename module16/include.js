/**
 * ? includes('')-->  Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
 * ? includes() --> Determines whether an array includes a certain element, returning true or false as appropriate.
 */
const study = "I am md. sakib hossen who is working";
console.log(study.includes("am"));
const names = ["salam", "kalam", "gelam", "khailam", "ghumailam"];
let result = names.includes("salam");
console.log(result);

const numbers = [10, 17, 278, 28, 13, 89, 299];
result = numbers.includes(278);
console.log(result);
