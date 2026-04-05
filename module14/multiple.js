const salary = 25000;
const isBsc = true;
const height = 76;

if (salary > 20000 && height > 66) {
  console.log("We have got he su patro!");
  if (isBsc) {
    console.log("Eso Baba kobul bolo!");
  }
} else {
  console.log("Patro valo an onno patro dekhi!");
}

if (salary > 30000 || height > 72) {
  console.log("Eso Baba kobul");
} else {
  console.log("Bhag tui mokbul");
}

//? more and more condition
if (salary > 25000 && height > 72 && isBsc === true) {
  // must fullfill all these three condtion
  console.log("Eso Baba Kobul");
} else {
  console.log("Bhag beta Mokbul");
}

//complex condition
const hasCar = false;
if ((salary > 25000 && hasCar === true) || isBsc === true) {
  console.log("Sobai Raji, Eso Baba Kobul");
} else {
  console.log("Vhag tui mokbul");
}
