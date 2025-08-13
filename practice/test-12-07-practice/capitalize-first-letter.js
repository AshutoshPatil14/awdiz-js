

let array1 = ['hello', 'world']
let array2 = ['code', 'test']


let newArray = array1.map((ele) => ele[0].toUpperCase() + ele.slice(1))

console.log(newArray)