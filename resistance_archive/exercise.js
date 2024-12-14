import exercises from "./exercises.mjs"





// Get the exercise's ID from the URL.
const exerciseId = parseInt(new URLSearchParams(window.location.search).get('id'))

// Retrieve the corresponding exercise from the exercise list.
const exercise = exercises.find(exercise => exercise.id == exerciseId)

