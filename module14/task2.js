const weight = 78;
const height = 1.7;
const BMI = weight / (height * height);
console.log(BMI);

if (BMI < 18.5) {
  console.log("You are under weight!");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("You are Normal");
} else if (BMI >= 25 && 29.9) {
  console.log("You are over weight!");
} else {
  console.log("You are obese");
}

const asPerBmi =
  BMI < 18.5
    ? "You are underweight"
    : BMI >= 18.5 && BMI <= 24.9
      ? "You are Normal"
      : BMI >= 25 && BMI <= 29.9
        ? "You are overweight"
        : "You are obese";
console.log(asPerBmi);
