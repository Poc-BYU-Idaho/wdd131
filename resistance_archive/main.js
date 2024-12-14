import exercises from "./exercises.mjs"





/** Loads all the exercises into the search results. */
function initialPageLoad() {
    exercises.forEach(exercise => searchResultsList.innerHTML += createExerciseLink(exercise))
}


/** Creates a link for a certain exercise. */
function createExerciseLink(exercise) {
    return `<li><a href="exercise.html?id=${exercise.id}" target="_blank">${exercise.name}</a></li>`
}





// Get the search results list so we can add to it.
const searchResultsList = document.getElementById("searchResultsList")

// Get the search results box so we can reference it without repeatedly having to grab it from the DOM.
const searchInputBox = document.getElementById("searchInputBox")

const checkboxes = document.querySelectorAll('#muscleCheckboxes input[type="checkbox"]')





// Load every exercise into the search results at the start.
initialPageLoad()






// Create a set of checked (in the checkboxes) muscles that we can reference against an exercise's targeted muscles in our search.
let checkedMuscles = new Set()




// Add an event listener to the search box that filters the exercsies as the user searches for them.
searchInputBox.addEventListener("input", () => {

    // Get the text in the search box.
    const searchQuery = searchInputBox.value.toLowerCase()

    // Erase the current exercises from the search box so the list doesn't grow every time the search query changes.
    searchResultsList.innerHTML = ""

    // Add every exercise whose name contains the search query and targets the checked muscles (if they're checked at all).
    exercises.forEach(exercise => {
        if (exercise.name.toLowerCase().includes(searchQuery) && (exercise.targetedMuscles.some(targetedMuscle => checkedMuscles.has(targetedMuscle)) || checkedMuscles.size == 0)) {

            searchResultsList.innerHTML += createExerciseLink(exercise)
        }
    })
})






// Add an event listener to every checkbox that does the same thing as the event listener above, but also updates the checkedMuscles set.
checkboxes.forEach(checkbox => checkbox.addEventListener("change", () => {

    // Empty the set so previously checked muscles are removed.
    checkedMuscles.clear()

    // Add the checked muscles to the set.
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkedMuscles.add(checkbox.id)
        }
    })

    // Get the text in the search box.
    const searchQuery = searchInputBox.value.toLowerCase()

    // Erase the current exercises from the search box so the list doesn't grow every time the search query changes.
    searchResultsList.innerHTML = ""

    // Add every exercise whose name contains the search query and targets the checked muscles (if they're checked at all).
    exercises.forEach(exercise => {
        if (exercise.name.toLowerCase().includes(searchQuery) && (exercise.targetedMuscles.some(targetedMuscle => checkedMuscles.has(targetedMuscle)) || checkedMuscles.size == 0)) {

            searchResultsList.innerHTML += createExerciseLink(exercise)
        }
    })
}))
