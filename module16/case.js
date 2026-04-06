/**
 * ? toLowerCase() --> this method is used for converting Upper to lower Case  every charcter
 * ? toUpperCase() --> this method is used for converting lowrer to UpperCase every character
 */

const subject = "chemistry";
const book = "Chemistry";

let str =
  subject.toLocaleLowerCase() === book.toLocaleLowerCase()
    ? "I am reading book ebar poira fathai dimu"
    : "hudain hudain prista ultai r var khawar jonno chaillai";
console.log(str);

const school = "raj uk uttara model school and collage";
console.log(school);
console.log(school.toUpperCase());
console.log(school.toLowerCase());
console.log(school.length);
