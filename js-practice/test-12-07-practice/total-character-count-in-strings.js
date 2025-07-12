

let array1 = ['hi', 'world']
let array2 = ['a', 'ab', 'abc']
let count = 0


count = array1.reduce((acc, current) => acc= acc+ current.length, 0)

console.log(count)