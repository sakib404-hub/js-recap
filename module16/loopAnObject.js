const mobile = {
  brand: "Samsung",
  price: 25000,
  color: "black",
  camera: "12MP",
  isNew: true,
};

/**
 * ? we use for-of loop for looping an array
 * ? where as we use for-in loop for looping an object
 */

console.log(mobile.brand);

for (let prop in mobile) {
  //   console.log(prop);
  console.log(mobile[prop]);
}

const keys = Object.keys(mobile);
console.log(keys);

for (let key of keys) {
  console.log(key, " : ", mobile[key]);
}

const pen = { brand: "metador", color: "yellow", ink: "black", price: 5 };
console.log(pen);
const pencil = new Object();
console.log(pencil);
