// Conditional Code

let myGrade = 55;

// IF Statement
if (myGrade >= 90) {
  console.log("You got an A!");
} else if (myGrade < 90 && myGrade >= 80) {
  console.log("You got a B.");
} else if (myGrade < 80 && myGrade >= 70) {
  console.log("You got a C.");
} else if (myGrade < 70 && myGrade >= 60) {
  console.log("You got a D.");
} else if (myGrade < 60) {
  console.log("You got an F.");
} else {
  console.log("An error occurred please try again.");
}

if (myGrade >= 90) {
  console.log("You made the Dean's List!");
}

// SWITCH Statement
switch (true) {
  case myGrade >= 90:
    console.log("You got an A!");
    break;
  case myGrade < 90 && myGrade >= 80:
    console.log("You got a B");
    break;
  case myGrade < 80 && myGrade >= 70:
    console.log("You got a C");
    break;
  case myGrade < 70 && myGrade >= 60:
    console.log("You got a D");
    break;
  case myGrade < 60:
    console.log("You got an F");
    break;
  default:
    console.log("Error! Try again!");
    break;
}

// LOOPS

// FOR Loop
// for([counter]; [condition]; [between each loop])
for (let i = 1; i <= 10; i++) {
  console.log(i); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

// WHILE Loop
let i = 1;
// while([condition])
while (i <= 10) {
  console.log(i); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  i++;
}

// DO WHILE Loop
let j = 1;
do {
  console.log(j); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  j++;
} while (j <= 10);
