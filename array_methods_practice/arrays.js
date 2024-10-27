const steps = ["one", "two", "three"]

function listTemplate(step) {
  return `<li>${step}</li>`
}

const stepsHtml = steps.map(listTemplate) // use map to convert the list from strings to HTML

document.querySelector("#myList").innerHTML = stepsHtml.join("") // set the innerHTML










const letterGrades =  ["A", "B", "A"]

function gradeToGpa(letterGrade) {
    if (letterGrade == "A") {
        return 4
    }
    else if (letterGrade == "B") {
        return 3
    }
}

const gpaGrades = letterGrades.map(gradeToGpa)

// All 3 of these examples do the same thing with different syntax.

// Example 1
// const pointsTotal = gpaGrades.reduce(function (total, item) {
//     return total + item;
//   });
//   const gpa = pointsTotal / gpaGrades.length;
  


// Example 2
// this is the same thing as above, but with an arrow function
//   const pointsTotal = gpaGrades.reduce((total, item) => total + item);
//   const gpa = pointsTotal / gpaGrades.length;
  

// Example 3
// this could be further simplified as
  const gpa = gpaGrades.reduce((total, item) => total + item) / gpaGrades.length;

console.log(gpaGrades)







// The commented out code does the same thing as the code below it
const fruit = ["Watermelon", "Peach", "Apple", "Tomato", "Grape"]

// const filteredFruit = fruit.filter(function (word) {
//     return word.length < 6
// })

const filteredFruit = fruit.filter((word) => word.length < 6)


console.log(filteredFruit)










const numbers = [12, 34, 21, 54]
const luckyNumber = 21
const luckyIndex = numbers.indexOf(luckyNumber)

console.log(luckyIndex)