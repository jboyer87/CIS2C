// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #

let minSize = 1;
let maxSize = 4;

for (let i = minSize; i <= maxSize; i++) {
  let line = "";

  for (let j = minSize; j <= i; j++) {
    line += "#";
  }

  console.log(line);
}

for (let i = maxSize - 1; i > 0; i--) {
  let line = "";

  for (let j = minSize; j <= i; j++) {
    line += "#";
  }

  console.log(line);
}
