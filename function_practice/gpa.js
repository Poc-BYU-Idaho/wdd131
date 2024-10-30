// Both of these lines of code do the same thing. The first uses a method that's specifically for geting elements by their ID, and the second one selects the element like you would with CSS.
// document.getElementById("submitButton").addEventListener("click", clickHandler)
document.querySelector("#submitButton").addEventListener("click", clickHandler);



function getGrades(inputSelector) {
    // get grades from the input box
    const grades = document.querySelector(inputSelector).value
    // split them into an array (String.split(','))
    const gradesArray = grades.split(",")
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase())
    console.log(cleanGrades)
    // return grades
    return cleanGrades
  }
  
  function lookupGrade(grade) {
    // converts the letter grade to its GPA point value and returns it
    // I'm using triple equal signs instead of double because they compare value and type instead of just value.
    // For example a string with a value of "5" would be considered equal to an integer with a value of 5 when using double equal signs, but not with triple.
    // I don't think it matters in this situation, but it seems like triple equals is safer.
    if (grade === "A") {
      return 4
    }
    else if (grade === "B") {
      return 3
    }
    else if (grade === "C") {
      return 2
    }
    else if (grade === "D") {
      return 1
    }
  }
  
  function calculateGpa(grades) {
    // gets a list of grades passed in
    // convert the letter grades to gpa points

    // My original solution
    // let gradePoints = 0
    // A more concise one
    const gradePoints = grades.map((grade) => lookupGrade(grade))
    // calculates the GPA
    const gpa = gradePoints.reduce((total, num) => total + num) / gradePoints.length
    // return the GPA
    return gpa.toFixed(2)
  }
  
  function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
    const outputElement = document.querySelector(selector)
    outputElement.innerText = gpa;
  }
  
  function clickHandler() {
    console.log("Click detected")
    // when the button in our html is clicked:
    // get the grades entered into the input
    const grades = getGrades("#grades")
    // calculate the gpa from the grades entered
    const gpa = calculateGpa(grades)
    // display the gpa
    outputGpa(gpa, "#output")
  }