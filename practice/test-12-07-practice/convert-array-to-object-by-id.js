

let array1 = [{id:1, name:'A'}, {id:2, name:'B'}]
let array2 = [{id:3, name:'X'}, {id:4, name:'Y'}]

let obj = {}

function convert(array){ 

    for(let i=0; i<array.length; i++){
        obj[array[i].id] = array[i].name
    }
    return obj
}

let output = convert(array1)

console.log(output)