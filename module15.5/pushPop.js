let numbers = [10, 17, 71, 82, 90];
let ages = [];

/**
 * ? through push(value) operation we can inject a value in the array to the last or in the last
 * ? while through pop operation we take out the last value in the array that the array has
 * ? push() --> Appends new elements to the end of an array, and returns the new length of the array.
 * ? pop() --> Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified
 * ? unshift() ---> Inserts new elements at the start of an array, and returns the new length of the array.
 * ? shift() --> Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
 */
console.log(numbers);
numbers.push(100);
console.log(numbers);
numbers.push(121);
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.unshift(1);
console.log(numbers);

const friends = ["balam", "kalam", "salam", "gelam", "khailam"];
console.log(friends);
const lastElement = friends.pop();
console.log(lastElement);
console.log(friends);
friends.shift();
console.log(friends);
