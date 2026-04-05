const mark = 87;
if (mark >= 90) {
  console.log("Grade A");
} else if (mark >= 80 && mark <= 89) {
  console.log("Grade B");
} else if (mark >= 70 && mark <= 79) {
  console.log("Grade C");
} else if (mark >= 60 && mark <= 69) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}

const grade =
  mark >= 90
    ? "Grade A"
    : mark >= 80 && mark <= 89
      ? "Grade B"
      : mark >= 70 && mark <= 79
        ? "Grade C"
        : mark >= 60 && mark <= 69
          ? "Grade D"
          : "Grade F";
console.log(grade);
