/**
 * ? In js strings are said to immutatble means they can not be changed after they are created
 * ? for this to work , we can work with slice means slice(1)--> take out the first character and after that takes eberything
 */

let fName = "Sakib";
console.log(fName[0]);
fName[0] = "A";
console.log(fName);
console.log("A" + fName.slice(2));

const address = "Andorkilla BandarBan";
const part = address.slice(2, 5);
console.log(part);
