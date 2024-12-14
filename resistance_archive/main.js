import exercises from "./exercises.mjs"





// Get the search results list so we can add to it.
const searchResultsList = document.getElementById("searchResultsList")

// Get the search results box so we can reference it without repeatedly having to grab it from the DOM.
const searchInputBox = document.getElementById("searchInputBox")

// Get the checkboxes so we can check which boxes are checked without having to retrieve them from the DOM every time.
const checkboxes = document.querySelectorAll('#muscleCheckboxes input[type="checkbox"]')

// Create a set of checked (in the checkboxes) muscles that we can reference against an exercise's targeted muscles in our search.
const checkedMuscles = new Set()





/** Creates a link for a certain exercise. */
function createExerciseLink(exercise) {
    return `<li><a href="exercise.html?id=${exercise.id}" target="_blank">${exercise.name}</a></li>`
}


/** Loads all the exercises into the search results. */
function initialPageLoad() {
    exercises.forEach(exercise => searchResultsList.innerHTML += createExerciseLink(exercise))
}


/** Updates the search results based off of the search query and selected muscles */
function updateSearchResults() {

    // Get the text in the search box.
    const searchQuery = searchInputBox.value.toLowerCase()

    // Erase the current exercises from the search box so the list doesn't grow every time the search query changes.
    searchResultsList.innerHTML = ""

    // Add every exercise whose name contains the search query and targets the checked muscles (if they're checked at all).
    exercises.forEach(exercise => {
        if (exercise.name.toLowerCase().includes(searchQuery) && (exercise.targetedMuscles.some(targetedMuscle => checkedMuscles.has(targetedMuscle.toLowerCase())) || checkedMuscles.size == 0)) {

            searchResultsList.innerHTML += createExerciseLink(exercise)
        }
    })
}


/** Updates the set of checked muscles so each exercise's targeted muscles can be referenced against it.  */
function updateCheckboxMuscles() {

    // Empty the set so previously checked muscles are removed.
    checkedMuscles.clear()

    // Add the checked muscles to the set.
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkedMuscles.add(checkbox.id)
        }
    })
}





// Load every exercise into the search results at the start.
initialPageLoad()




// Add an event listener to the search box that filters the exercsies as the user searches for them.
searchInputBox.addEventListener("input", () => {

    // Update the search results.
    updateSearchResults()
})




// Add an event listener to every checkbox that does the same thing as the event listener above, but also updates the checkedMuscles set.
checkboxes.forEach(checkbox => checkbox.addEventListener("change", () => {

    // Update the set of checked muscles so our search results can be correct.
    updateCheckboxMuscles()

    // Update the search results.
    updateSearchResults()
}))
