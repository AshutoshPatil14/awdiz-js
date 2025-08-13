

let array1 = [10,5,20,8]
let array2 = [1,2,2,3]

let max1, max2 = 0
// console.log(array1.sort((a,b)=>a-b))
// console.log(array1.sort((a,b)=>b-a))

// function secondLargest(array){
//     for( let i=0; i<array.length; i++){
//         if(array[i]>max2){
//             max2 = array[i]
//             if(max2 > max1){
//                 max1 = max2
//             }
//         }
//     }
//     return max2
// }



function secLar(array){
    array.sort((a,b)=>b-a)
    return array[1]
}

console.log(secLar(array1))