const buttonElement = document.getElementById("submitButton");

function copyInput() {
  // addEventListener will always pass an object containing information about the event that happened into your callback function
  // take a look at the event!
  console.log(event);
  console.log(event.target);
  console.log(event.type);
  const inputElement = document.getElementById("inputBox");
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = inputElement.value;
}
buttonElement.addEventListener("click", copyInput);






// Uncomment this code to make your keyboard inputs display in the console.

// document.addEventListener("keydown", logKey);

// function logKey(key) {
//   // how do we know which key was pressed?
//   console.log(key);
//   // checkout e.code, e.key, and e.keyCode
// }