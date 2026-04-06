const person = {
  name: "SadarUddin Badar Kha",
  age: 26,
  professon: "Web Developer",
  salary: 25000,
  isMarried: true,
  "fav places": ["Bandarban", "Saint Martin", "TekNaf"],
};

let bonous = 5000;
person.salary = person.salary + bonous;
console.log(person);

person["age"] = person["age"] + 1;
console.log(person);
