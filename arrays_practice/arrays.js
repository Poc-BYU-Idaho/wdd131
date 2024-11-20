const array = [
    {
        id: 1
    },
    {
        id: 3
    },
    {
        id: 2
    }
]


// Sort the array in ascending order by the id values.
// It is sorted depending on if a negative number, a positive number, or 0 is returned.
// I don't need to reassign my array because the sort method sorts an array in place, meaning that it changes the original array.
array.sort((a, b) => {
    if (a.id == b.id) {
        return 0
    }

    if (a.id < b.id) {
        return -1
    }

    if (a.id > b.id) {
        return 1
    }
})

// Condensed version
// array.sort((a, b) => {
//     return a.id - b.id
// })





// Only keep evenly indexed items.
// I created a new variable because filter doesn't change the original array. It just returns filtered values from an existing one.
filteredArray = array.filter((item, index) => {
    return index % 2 === 0
})

console.log(array)
console.log(filteredArray)