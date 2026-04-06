const myObj = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

const keys = Object.keys(myObj);

for (let key of keys) {
  console.log(key, ": ", myObj[key], " | type: ", typeof myObj[key]);
}
