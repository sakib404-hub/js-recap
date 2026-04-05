/**
 * ? arrayName.includes() --. Determines whether an array includes a certain element, returning true or false as appropriate.
 * ? it is case sensative
 * ? arrayName.indexOf() --> eturns the index of the first occurrence of a value in an array, or -1 if it is not present.
 * ? Array.isArray() --> it is used to check if an array is actually an array or not
 * ?
 */
const friends = ["balam", "kalam", "salam", "gelam", "khailam"];
const food = "roso go ll a";
const age = 89;

console.log(friends.includes("balam"));
console.log(friends.includes("sakib"));

friends.includes("balam")
  ? console.log("We are Doing party today")
  : console.log("No party");

console.log(friends.indexOf("gelam"));
console.log(friends.indexOf("tomato"));

console.log(Array.isArray(friends));
console.log(Array.isArray(food));
console.log(Array.isArray(age));
