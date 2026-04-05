const myMark = 77;
const friendMark = 67;

if (myMark > 80) {
  if (friendMark > 80) {
    console.log("We are going for lunch today!");
  } else if (friendMark >= 60 && friendMark < 80) {
    console.log("Good Luck Next time!");
  } else if (friendMark >= 40 && friendMark < 60) {
    console.log("Keeping my friend message unseen!");
  } else {
    console.log("Block My friend!");
  }
} else {
  console.log("Go to home and acting sad!");
}
