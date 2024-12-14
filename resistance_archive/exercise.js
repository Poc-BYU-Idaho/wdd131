import exercises from "./exercises.mjs"





// Get the exercise's ID from the URL.
const exerciseId = parseInt(new URLSearchParams(window.location.search).get('id'))

// Retrieve the corresponding exercise from the exercise list.
const exercise = exercises.find(exercise => exercise.id == exerciseId)

/** Loads the exercise's information onto the page. */
function loadExerciseOntoPage() {
    document.querySelector("title").innerHTML = exercise.name
    document.getElementById("exerciseName").innerHTML = exercise.name
    document.querySelector("iframe").src = exercise.videoLink
    exercise.targetedMuscles.forEach(muscle => document.querySelector("ul").innerHTML += `<li>${muscle}</li>`)
    document.getElementById("videoSource").innerHTML += exercise.videoSource
}



loadExerciseOntoPage()