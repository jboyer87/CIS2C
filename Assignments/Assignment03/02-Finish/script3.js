// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

let patternOdd = "# # # # ";
let patternEven = " # # # #";

let rows = 8;

for (let i = 0; i < rows; i++) {
  if (i % 2 == 0) {
    console.log(patternEven);
  } else {
    console.log(patternOdd);
  }
}
