


let obj1 = {a:1}
let obj2 = {b:2}
let obj3 = {x:10}
let obj4 = {x:20, y:30}

function combineObjects(obj1, obj2) {
    let combined ={...obj1, ...obj2}
    return combined
}

console.log(combineObjects(obj1,obj2))
console.log(combineObjects(obj3,obj4))