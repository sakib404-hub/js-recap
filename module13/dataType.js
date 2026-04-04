/**
 *! the 5 most basic types of data are strings, number, booleans, undefined and null
 */

//? Number or Numeric type variable
let number = 10;
console.log(number);
console.log(typeof number);

//? string type variable
var name12 = "sadaruddin";
var address = "Adar klilla Bandarban with some katabon";
var country = "Bangladeshs";
console.log(name12, address, country);
console.log(typeof name12);

//? Boolean type variable
var isRich = true;
var isPassed = false;
console.log(isRich);
console.log("You have passed the exam which is : ", isPassed);
console.log(typeof isRich);

//? undefined
var defined;
console.log(defined);
console.log(typeof defined);

//? null --> that represents the intentional abscence of any object value
var price = null;
console.log(price);
console.log(typeof price);

//? BigInt - that represents the maximum number available after the 15 digit in js
var number2 = 88888n;
var number3 = BigInt(7782326363);
console.log(number2, number3);
console.log(typeof number2);
console.log(typeof number3);
