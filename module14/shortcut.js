const isLeader = true;

if (isLeader) {
  console.log("Leader assce re, chair chere de!");
} else {
  console.log("Manush tare chini na tai vitore dhukte dibi na!");
}

const isPassed = false;
//? if(isPassed === false)
//? if(!isPassed)
if (!isPassed) {
  console.log("Tui pass korte paros nai toke biye diye dibo!");
} else {
  console.log("Congratulations you have passed the examination!");
}

/**
 * ?logical not operator(!)
 * ? negation operator
 * ? logical complement
 * ? flips the value of a boolean
 * ? if the value is true then it will return false and vice-versa
 * ? also used for toggling
 * ? double negation (!!)
 */
console.log(!!true); //?truthy returns true
console.log(!!false); //? falsy return false
