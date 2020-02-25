// Adding Event Handlers

function buttonClickHandler() {
  alert("BOOM! IT EXPLODED! I TOLD YOU NOT TO CLICK IT!");
  console.log("BOOM!");
  button.removeEventListener("click", buttonClickHandler);
}

function reenableButtonClick() {
  button.addEventListener("click", buttonClickHandler);
}

function disableLink(event) {
  event.preventDefault();
  alert("You're not going anywhere!");
}

let button = document.querySelector("button");
let h1 = document.querySelector("h1");
const navlink1 = document.getElementById("nav-link-1");
const genericNavLinks = document.getElementsByClassName("nav-link-generic");

// CANNOT remove event listeners that were added this way with an anonymous
// arrow function
// button.addEventListener("click", () => {
//   alert("BOOM! IT EXPLODED! I TOLD YOU NOT TO CLICK IT!");
//   console.log("BOOM!");
// });

button.addEventListener("click", buttonClickHandler);
h1.addEventListener("click", reenableButtonClick);

navlink1.addEventListener("click", event => disableLink(event));

for (let i = 0; i < genericNavLinks.length; i++) {
  genericNavLinks[i].addEventListener("click", event => disableLink(event));
}

// HANDLING USER INPUT

window.addEventListener("mousedown", event => mouseDownListener(event));

function mouseDownListener(event) {
  if (event.button == "0") {
    console.log("You left-clicked!");
  } else if (event.button == "1") {
    console.log("You middle-clicked!");
  } else if (event.button == "2") {
    console.log("You right-clicked!");
  }
}

window.addEventListener("keydown", event => keyDownListener(event));

function keyDownListener(event) {
  if (event.key == "a" || event.key == "A") {
    console.log("You pressed the 'a' or 'A' key!");
  } else if (event.key == "b") {
    console.log("You pressed the 'b' key!");
  } else {
    console.log("You pressed some other key!");
  }
}
