

let array = ["Alice", "bob","Eve", "Uma", "Charlie"]

let newarray=array.filter(name=>{return ['A','E','I','O','U'].includes(name[0])})

console.log(newarray)