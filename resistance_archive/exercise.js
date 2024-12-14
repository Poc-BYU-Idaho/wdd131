import exercises from "./exercises.mjs"





/** Gets the exercise ID from the URL and returns the corresponding exercise from the exercise list. */
function getExerciseFromURL() {

    // Get the exercise's ID from the URL.
    const exerciseId = parseInt(new URLSearchParams(window.location.search).get('id'))

    // Retrieve and return the corresponding exercise from the exercise list.
    return exercises.find(exercise => exercise.id == exerciseId)
}


/** Loads the exercise's information onto the page. */
function loadExerciseOntoPage(exercise) {
    document.querySelector("title").innerHTML = exercise.name
    document.getElementById("exerciseName").innerHTML = exercise.name
    document.querySelector("iframe").src = exercise.videoLink
    exercise.targetedMuscles.forEach(muscle => document.querySelector("ul").innerHTML += `<li>${muscle}</li>`)
    document.getElementById("videoSource").innerHTML += exercise.videoSource
}





// Get the exercise and load it onto the page.
const exercise = getExerciseFromURL()
loadExerciseOntoPage(exercise)