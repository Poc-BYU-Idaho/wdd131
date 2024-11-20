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

console.log(array)