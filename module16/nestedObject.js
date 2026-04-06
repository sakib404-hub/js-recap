const course = {
  name: "Operating System",
  teacherName: "Rabeya Khatun",
  quizDone: 1,
  midTermMark: 23.5,
  quizLeft: {
    quiz2: "quiz-2 will be held tomorrow",
    quiz3: "quiz-3 will be held soon enough",
  },
};
console.log(course);
console.log(course.teacherName);
console.log(course.midTermMark);
console.log(course.quizLeft);
console.log(course.quizLeft.quiz2);
console.log(course.quizLeft.quiz3);

const collage = {
  name: "Major General Mahmudul Hasan Adarsha Collage, Tangail",
  class: ["11", "12"],
  events: ["science Fare", "Annual Sports Day"],
  unique: {
    color: "blue",
    result: {
      gpa: 5.0,
      merit: "top",
    },
  },
};

console.log(collage.name);
console.log(collage["events"]);
console.log(collage.unique.color);
console.log(collage.unique.result.gpa);
console.log(collage.unique.result.merit);
console.log(collage.events[1]);
