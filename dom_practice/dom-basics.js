// Create a paragraph element and store it in a variable.
const newParagraph = document.createElement("p");

// Add text to the paragraph.
newParagraph.innerText = "Added with JavaScript!";

// Put the paragraph at the end of the body tag in the HTML.
document.body.appendChild(newParagraph);




// Create an image element and store it in a variable.
const newImage = document.createElement("img");

// Give the image an src attribute, and give that src attribute a value.
newImage.setAttribute("src", "https://picsum.photos/200");

// Give the image an alt attribute, and give that alt attribute a value.
newImage.setAttribute("alt", "Random image from picsum.");

// Put the image at the end of the body tag in the HTML.
document.body.appendChild(newImage);




// Create a div element and store it in a variable.
const newDiv = document.createElement("div");

// Add HTML tags to the div.
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";

// Put the div at the end of the body tag in the HTML.
document.body.appendChild(newDiv);

// Create a section element and store it in a variable.
const newSection = document.createElement("section");

// Add tags and text to the section.

newSection.innerHTML = "<h2>DOM Basics</h2><p>This was added through JavaScript</p>"

// Put the section at the end of the body tag in the HTML.
document.body.appendChild(newSection);