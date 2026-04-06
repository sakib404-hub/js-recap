const person = {
  name: "SadarUddin Badar Kha",
  age: 26,
  professon: "Web Developer",
  salary: 25000,
  isMarried: true,
  "fav places": ["Bandarban", "Saint Martin", "TekNaf"],
};
/**
 * ? dot notation ---> objectName.propertyName
 * ? bracket notation ---> objectName['propertyName'];
 * ? bracket notation is used in the special cases where direct access through dot notation is not available
 */
console.log(person);
console.log(person.name);
console.log(person["salary"]);
const income = person.salary;
console.log(income);
console.log(person.professon);
person.gender = "Male";
console.log(person);
console.log(person.gender);

// console.log(person.fav places)
console.log(person["fav places"]);
