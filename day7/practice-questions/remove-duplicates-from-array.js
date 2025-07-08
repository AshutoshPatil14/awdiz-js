

let array = [1,2,2,3,4,1]

let noduplicates = []

for (let i = 0; i < array.length; i++) {
    if (!noduplicates.includes(array[i])) {
        noduplicates.push(array[i])
    }
}

console.log(noduplicates)


// Output: [ 1, 2, 3, 4 ]