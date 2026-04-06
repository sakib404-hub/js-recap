/**
 * ? Object.keys(objectName) ---> Returns the names of the enumerable string properties and methods of an object
 * ? Object.values(objectName) --> Returns an array of values of the enumerable own properties of an object
 */
const computer = {
  brand: "Lenovo",
  price: 20000,
  processor: "intel",
  ssd: "512GB",
};

const keys = Object.keys(computer);
const values = Object.values(computer);
console.log(keys);
console.log(values);
