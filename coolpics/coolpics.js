// Add an event listener to the menu button, and then hide the navigation links when the menu button is clicked.
const menuButton = document.getElementById("menuButton")
menuButton.addEventListener("click", function toggleMenu() {
    const nav = document.getElementById("nav")
    nav.classList.toggle("hide");
    console.log("Menu click detected.")
})


// Add an event listener to the window that fires an event whenever the window is resized. It hides the navigation when the window becomes wider than 1000 pixels.
window.addEventListener("resize", function handleResize() {
    const nav = document.getElementById("nav")
    if (window.innerWidth >= 1000) {
        nav.classList.remove("hide")
        console.log("unhidden")
    }
    else {
        nav.classList.add("hide")
        console.log("hidden")
    }
})

function viewerTemplate(imagePath, altText) {
    return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${imagePath}" alt="${altText}">
    </div>`;
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const clickedImage = event.target

	// get the src attribute from that element and 'split' it on the "-"
    const srcAttribute = clickedImage.getAttribute("src").split("s-")

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const newImagePath = srcAttribute[0] + "s-full.jpeg"

	// insert the viewerTemplate into the top of the body element
    const htmlBody = document.querySelector("body")
	htmlBody.insertAdjacentHTML("afterbegin", viewerTemplate(newImagePath, clickedImage.alt))

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    const closeButton = document.querySelector(".close-viewer")
    closeButton.addEventListener("click", closeViewer)


    // A way to add the close button event listener on one line and without creating a variable.
    // document.querySelector(".close-viewer").addEventListener("click", closeViewer)
}

function closeViewer() {
    const viewer = document.querySelector(".viewer")
    viewer.remove()
}

const gallery = document.querySelector(".gallery")
gallery.addEventListener("click", viewHandler)



// AI helped me a ton with this assignment. I have a decent understanding of the code, but I don't think could've have written it myself.