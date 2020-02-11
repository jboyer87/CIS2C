let myFriends = ["Carl", "Tuan", "Brad"];

const outputFriends = arrayOfFriends => {
  let prefix = "My friend's names are: ";

  let middle = "";

  let suffix = ".";

  for (let i = 0; i <= arrayOfFriends.length - 1; i++) {
    middle += arrayOfFriends[i] + " ";
  }

  let wholeSentence = prefix + middle + suffix;

  console.log(wholeSentence);
};

console.log(outputFriends(myFriends));

myFriends.push("Brandon");

console.log(outputFriends(myFriends));

myFriends.pop(); // RETURN "Brandon"

console.log(outputFriends(myFriends));
