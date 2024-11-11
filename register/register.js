import { participantTemplate, successTemplate } from "./Templates.js"

let participantCount = 1

document.getElementById("add").addEventListener("click", () => {
    participantCount ++
    document.getElementById("add").insertAdjacentHTML("beforebegin", participantTemplate(participantCount))
})



document.querySelector("form").addEventListener("submit", (event) => submitForm(event))

function submitForm(event) {
    event.preventDefault()
    // do the rest of the stuff
    document.querySelector("form").style.display = "none"
    document.getElementById("summary").innerText = successTemplate({name: document.getElementById("adult_name").value, participantCount: participantCount, feeTotal: totalFees()})
}


function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    // Remember that the text that was entered into the input element will be found in the .value of the element.
    const feeTotal = feeElements.reduce((accumulator, currentValue) => {return accumulator + Number(currentValue.value)}, 0)
    // once you have your total make sure to return it!
    return feeTotal
}