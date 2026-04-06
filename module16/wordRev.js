const str = "Hellow I am currenty Recaping my web dev";
const splited = str.split(" ");
console.log(splited);

/**
 * ? for this to doing we will be doing with a newer and advanced method that is using map()
 */
const reversedWord = str
  .split(" ")
  .map((word) => {
    return word.split("").reverse().join("");
  })
  .join(" ");
console.log(reversedWord);
